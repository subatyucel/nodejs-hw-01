import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const data = JSON.parse(await getAllContacts());
  return data.length;
};

console.log(await countContacts());
