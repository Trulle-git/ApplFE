import './App.css';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Navweb from './components/navweb';
import NavMob from './components/navMob';
import Footer from './components/footer';
import Home from './pages/home';
import Estimator from './pages/estimator';
import Offer from './pages/offer';
import Solar from './pages/solar';
import Story from './pages/story';
import Products from './pages/products';
import PackagePage from './pages/packagePage';
import ProductPage from './pages/productPage';
import StoryPage from './pages/storyPage';
import About from './pages/about';
import NotF from './pages/notF';

import Dashboard from './cms/dashboard';
import ProductForm from './cms/productForm';
import StoryForm from './cms/story';
import TestForm from './cms/test';
import ProductListing from './cms/productListing';
import StoryListing from './cms/storyList';
import TestListing from './cms/testListing';
import { useEffect, useState } from 'react';

function App() {
  const [navbar, setNavbar] = useState(<Navweb/>)
  const navSelect = () =>{
      if(window.innerWidth<768){
          setNavbar(<NavMob/>)
      }else{
          setNavbar(<Navweb/>)
      }
  }
  useEffect(() => {
    if (window.innerWidth<768){
      setNavbar(<NavMob/>)
    }else{
      setNavbar(<Navweb/>)
    }
    window.addEventListener('resize', navSelect);
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener('resize', navSelect);
    };
  }, []);
  

  return (
    <>
      {navbar}
      <Routes>
        {/* <Switch></Switch> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/estimator' element={<Estimator/>}/>
        {/* <Route path='/offer' element={<Offer/>}/> */}
        <Route path='/solarkits' element={<Solar/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/packagedetails' element={<PackagePage/>}/>
        <Route path='/productdetails' element={<ProductPage/>}/>
        <Route path='/storydetails' element={<StoryPage/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/productForm' element={<ProductForm/>}/>
        <Route path='/storyForm' element={<StoryForm/>}/>
        <Route path='/testForm' element={<TestForm/>}/>
        <Route path='/productListing' element={<ProductListing/>}/>
        <Route path='/storyListing' element={<StoryListing/>}/>
        <Route path='/testListing' element={<TestListing/>}/>

        <Route path='*' element={<NotF/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
