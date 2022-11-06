
import queryString from 'query-string';


const SendFilter = (key, value) => {

  let parsedQuery = queryString.parse(window.location.search);
  //console.log(window.location.search)
  parsedQuery[key] = value;

  const stringified = queryString.stringify(parsedQuery);

  if (window.history.pushState) {
    let newurl = '?' + stringified;
    window.history.pushState('', '', newurl);
    window.location.search = stringified;
  }


}

const setQueryValue = (key)=>{
  let parsedQuery = queryString.parse(window.location.search);
  return parsedQuery[key];
};


export default {
  SendFilter,
  setQueryValue
}
