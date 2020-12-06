// import and config contentful client
const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
});

const fetchEntries = async (contentType) => {
  const entries = await client.getEntries({ content_type: contentType });
  if (entries.items) return entries.items;
  console.error("error fetching entries from contentful");
  return [];
};

const fetchEntryById = async (id) => {
  const entry = await client.getEntry(id);
  if (entry.fields) return entry.fields;
  console.error("error fetching the ase study for given id");
  return {};
};

export { fetchEntries, fetchEntryById };
