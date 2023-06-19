const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
import { createClient } from 'contentful';

const client = createClient({
  space: space! || 'vknh5ar9fh8p',
  accessToken: accessToken! || 'DJJn6sjUPbVpX8q80aWyiKdoasuA6rsFqFzaBvOXry8',
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
}

export default { fetchEntries };
