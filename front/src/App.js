import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { auth } from './Actions/login';
import storage, { setStorage } from './packages/storage';
import Routes from './Routes/Routes';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    setStorage(localStorage);
    if (storage.token.getToken()) {
      dispatch(auth());
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
