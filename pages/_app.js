import 'bootswatch/dist/flatly/bootstrap.min.css';  
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;


/* 
import 'bootswatch/dist/flatly/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>
  
}

export default MyApp
 
 */