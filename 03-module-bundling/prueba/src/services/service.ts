const baseURL = process.env.API_BASE_URL;

const getDataFromApi = () => {
  // return fetch("http://www.myapp.com/api")
  return fetch(`${baseURL}/whatever`)
    // .then((response) => response.json())
    // .then((data) => {
    //   return data.results;
    // });
};