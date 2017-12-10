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
const stringifyKeys = (keys) => keys.join(',')
export default async function findUpcomingEvents(options) {
  // const ENDPOINT = 'find/events';
  const ENDPOINT = 'find/upcoming_events';
  const fields = [
    "short_link",
    "why",
    "group.category.id",
  ]
  const only = [
    "name",
    "created",
    "group.name",
    "link",
    "why",
    "short_link",
    "simple_html_description",
    "yes_rsvp_count",
    "group.category.id",
    "group.category.name",
  ]
  const params = {
    radius: 1,
    order: 'time',
    key: API_KEY,
    fields: stringifyKeys(fields),
    // only: stringifyKeys(only),
    lon: -118.49,
    lat: 34.02,
    radius: 5,
    page: 100,
  };
  const url = `${API_DOMAIN}/${ENDPOINT}/?${qs.stringify(params)}`;
  const res = await fetchJsonp(url)
  console.log('res', res)
  const json = await res.json();
  console.log('json', json)
  return json.data.events
}
