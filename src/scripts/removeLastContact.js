import { readFileSync } from 'node:fs';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

let data = JSON.parse(readFileSync(PATH_DB, 'utf-8'));

export const removeLastContact = async () => {
  try {
    if (data.length >= 1) {
      data.pop();
      fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
    } else {
      throw new Error('DB is already empty');
    }
  } catch (err) {
    console.log(err);
  }
};

removeLastContact();
