#!/usr/bin/env node

const fs = require('fs');
const moment = require('moment');
const path = require('path');
const parse = require('csv-parse/lib/sync');

const dailyReportsDirPath = path.join(__dirname, '..', '..', 'csse_covid_19_data', 'csse_covid_19_daily_reports');
const tableDataOutFilePath = path.join(__dirname, '..', 'data', 'tableData.json');
const sortedCountryRegionsToProvinceStatesOutFilePath = path.join(__dirname, '..', 'data', 'sortedCountryRegionsToProvinceStates.json');


/**
 * Parses CSV data and returns a 2D array
 * @param {string} data - CSV data in string form.
 * @returns {string[][]} A 2D array version of the input CSV data.
 */
const parseCsvData = (data) => {
  // Note{ bom: true } removes the byte order marker from beginning of UTF-8 files
  return parse(data, { columns: true, skip_empty_lines: true, trim: true, bom: true });
};

/**
 * Takes csvData and converts it into an array of db-table-compatible rows of the format:
 * { date, countryRegion, provinceState, confirmed, deaths, recovered }
 *
 * @param {*} csvData A string[][] of csvData.
 * @return {object[]} A row of alasql-compatible table data.
 */
const csvToTableRows = (date, csvData) => {
  const tableRows = [];

  csvData.forEach((row) => {
    const tableRow = {
      date: moment(new Date(date).toISOString()).format('YYYY-MM-DD'),
      countryRegion: row['Country_Region'] || row['Country/Region'],
      provinceState: row['Province_State'] || row['Province/State'],
      confirmed: parseInt(row['Confirmed'] || 0),
      deaths: parseInt(row['Deaths'] || 0),
      recovered: parseInt(row['Recovered'] || 0)
    };
    if(tableRow.countryRegion) { tableRow.countryRegion = tableRow.countryRegion.trim(); }
    if(tableRow.provinceState) { tableRow.provinceState = tableRow.provinceState.trim(); }

    tableRows.push(tableRow);
  });

  return tableRows;
};

let tableRows = [];
const files = fs.readdirSync(dailyReportsDirPath);
files.filter((fileName) => fileName.endsWith('.csv')).forEach((fileName, index) => {
  const dateForFileName = new Date(fileName.substring(0, fileName.length - 4));
  const filePath = path.join(dailyReportsDirPath, fileName);
  tableRows = tableRows.concat(
    csvToTableRows(dateForFileName, parseCsvData(fs.readFileSync(filePath, 'utf8')))
  );
});

// Write out table data
fs.writeFileSync(tableDataOutFilePath, JSON.stringify(tableRows), 'utf8');

// Create countryRegions to provinceStates map
const countryRegionsToProvinceStates = {};
tableRows.forEach((row) => {
  const provinceStatesForCountryRegion = countryRegionsToProvinceStates[row.countryRegion]
    || (countryRegionsToProvinceStates[row.countryRegion] = new Set());

  if(row.provinceState) {
    provinceStatesForCountryRegion.add(row.provinceState);
  }
});
// Create SORTED countryRegions to provinceStates map
const sortedCountryRegionsToProvinceStates = {};
Object.keys(countryRegionsToProvinceStates).sort().forEach((countryRegion) => {
  sortedCountryRegionsToProvinceStates[countryRegion] = Array.from(countryRegionsToProvinceStates[countryRegion]).sort();
});
fs.writeFileSync(sortedCountryRegionsToProvinceStatesOutFilePath, JSON.stringify(sortedCountryRegionsToProvinceStates), 'utf8');

console.log(`Done! Wrote ${tableRows.length} rows of data.`);

