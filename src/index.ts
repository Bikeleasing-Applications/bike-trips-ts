import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

interface Trip {
  // We'll define the exact structure once we see the CSV data
  [key: string]: string;
}

async function main() {
  try {
    const csvFilePath = path.join(__dirname, '../data/trips.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
    
    const records: Trip[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    console.log('Successfully parsed CSV file');
    console.log(`Total trips: ${records.length}`);
    
    // Basic analysis
    if (records.length > 0) {
      console.log('First trip:', records[0]);
    }
  } catch (error) {
    console.error('Error processing CSV file:', error);
  }
}

main(); 