import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]', 'utf-8');
    console.log('All contacts deleted successfully');
  } catch (err) {
    console.log(err);
  }
};

removeAllContacts();
