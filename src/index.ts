import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';


async function main() {
  try {
    const csvFilePath = path.join(__dirname, '../data/trips.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');


    const lines = fileContent.split('\n');
    for (let i = 0; i < 10; i++) {
      console.log(lines[i]);
    }

  } catch (error) {
    console.error('Error processing CSV file:', error);
  }
}

main(); 