import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Liste from './Liste'


/** Importation du article */
import Editarticle from './components/articles/Editarticle';
import Insertarticle from './components/articles/Insertarticle';
import Listarticles from './components/articles/Listarticles';
import Viewarticle from './components/articles/Viewarticle';

import Editcategorie from './components/categories/Editcategorie';
import Insertcategorie from './components/categories/Insertcategorie';
import Listcategories from './components/categories/Listcategories';
import Viewcategorie from './components/categories/Viewcategorie';

import Editscategorie from './components/scategories/Editscategorie';
import Insertscategorie from './components/scategories/Insertscategorie';
import Listscategories from './components/scategories/Listscategories';
import Viewscategorie from './components/scategories/Viewscategorie';

import Menu from './components/Menu';


const App = () => {


  return (
   
      <div>
       <Router>
        <Menu/>
        <Routes>
          <Route path='/articles' element={<Listarticles/>}/>
          <Route path="/articles/add" element={<Insertarticle/>}/>
          <Route path="/article/edit/:id" element={<Editarticle/>}/>  
          <Route path="/article/view/:id" element={<Viewarticle/>}/>

          <Route path="/categories" element={<Listcategories/>}/>
          <Route path="/categories/add" element={<Insertcategorie/>}/>
          <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
          <Route path="/categories/view/:id" element={<Viewcategorie/>}/>

          <Route path="/scategories" element={<Listscategories/>}/>
          <Route path="/scategories/add" element={<Insertscategorie/>}/>
          <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
          <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
        </Routes>
       </Router>
      </div>
    
   
  );
}

export default App
