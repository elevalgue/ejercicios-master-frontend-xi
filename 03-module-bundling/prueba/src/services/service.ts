const baseURL = process.env.API_BASE_URL;

const getDataFromApi = () => {
  return fetch(`${baseURL}/whatever`)
};