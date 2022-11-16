
import queryString from 'query-string';


const SendFilter = (key, value) => {

  let parsedQuery = queryString.parse(window.location.search);
  if(!value == ''&&!parsedQuery[key]){
    parsedQuery[key] = value;
  }else if (value == '' && parsedQuery[key]){
    delete parsedQuery[key];
  }

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
