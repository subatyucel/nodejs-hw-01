import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readFileSync } from 'node:fs';

let contacts = JSON.parse(readFileSync(PATH_DB, 'utf-8'));

export const addOneContact = async () => {
  const data = createFakeContact();
  contacts.push(data);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');

    console.log('Adding one contact is sucsessfull');
  } catch (err) {
    console.log(err);
  }
};

addOneContact();
