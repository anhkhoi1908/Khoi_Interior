import './index.css'
import React, { Fragment } from 'react'
import { Route, Routes} from 'react-router-dom'  
import publicRoutes from './routes'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import BackToTop from './components/BackToTop'
// import ErrorPage from './pages/Error'

function App() {

  return (
    <Fragment>
      <Header/>
      <BackToTop/>  
      <Routes>
        {publicRoutes.map((el, index) => 
          <Route 
            key={index} 
            path={`${el.path}`} 
            element={el.element}
          />
        )}
      </Routes>
      <Footer/>
    </Fragment>
  );
};

export default App;
