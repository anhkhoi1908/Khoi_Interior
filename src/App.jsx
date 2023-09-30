import './index.css'
import React, { Fragment } from 'react'
import { Route, Routes} from 'react-router-dom'  
import publicRoutes from './routes'

function App() {

  return (
    <Fragment>
      <Routes>
        {publicRoutes.map((el, index) => 
          <Route 
            key={index} 
            path={`${el.path}`} 
            element={el.element}
          />)}
      </Routes>
    </Fragment>
  );
};

export default App;
