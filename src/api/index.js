import qs from 'query-string'
import fetchJsonp from 'fetch-jsonp'

const API_DOMAIN = 'https://api.meetup.com';
const API_KEY = process.env.API_KEY;

const getCategoriesFromQuery = (queryResult) => {
  let pages;
  try {
    pages = queryResult.query.pages;
  } catch (e) {
    return undefined;
  }
  // return Object.keys(pages).reduce((acc, pageid) => {
  //   acc[pageid] = { ...pages[pageid], title: trimTitle(pages[pageid].title) };
  //   return acc;
  // }, {});
};
export default async function getEvents(options) {
  const ENDPOINT = 'find/events';
  const params = {
    radius: 1,
    order: 'members',
    key: API_KEY,
    fields: 'short_link,why,group.category.id',
    only: 'name,created,group.name,link,why,short_link,simple_html_description,yes_rsvp_count,group.category.id,group.category.name',
    lon: -118.49,
    lat: 34.02,
  };
  const url = `${API_DOMAIN}/${ENDPOINT}/?${qs.stringify(params)}`;
  const jsoncallback = (res) => {console.log('cb', res)}
  const res = await fetchJsonp(url)
  const json = await res.json();
  console.log('json', json)
  return json.data
  // return getCategoriesFromQuery(json);
}
