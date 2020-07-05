import useSWR from 'swr';
import fetch from 'unfetch';
import qs from 'querystring';

const UNIVERSITIES_URL = 'http://universities.hipolabs.com';

export default ({ name, country }) => {
  const url = `${UNIVERSITIES_URL}/search?${qs.stringify({
    ...(name ? { name } : {}),
    ...(country ? { country } : {})
  })}`;
  const shouldFetch = name || country;
  
  const { data, error } = useSWR(
    shouldFetch ? url : null, 
    () => fetch(url).then(res => res.json())
  );

  return {
    universities: data,
    isError: error
  }
}