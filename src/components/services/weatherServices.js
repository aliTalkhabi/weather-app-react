const API_KEYS = "14e0037430938008e479e5b55ae65344";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const getWeaherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEYS });
  return fetch(url)
    .then((res) => res.json)
    .then((data) => data);
};
export default getWeaherData;
