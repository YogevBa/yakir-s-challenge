export const getData = async (query) => {
  const apiCall = `http://api.datamuse.com/words?ml=${query}`;
  const results = await fetch(apiCall).then((res) => res.json());
  return results;
};
