import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import { readFileSync } from 'node:fs';

let contacts = JSON.parse(readFileSync(PATH_DB, 'utf-8'));

export const generateContacts = async (number) => {
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
    console.log('writing is successfull');
  } catch (err) {
    console.log(err);
  }
};

generateContacts(5);
