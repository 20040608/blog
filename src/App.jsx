import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layuot from './layout/layuot';
import Home from './page/Home/home';
import About from './page/About/about';
import Blog from './page/Blog/blog';
import Projects from './page/Projects/projects';
import Service from './page/Service/service';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layuot/>}>
                  <Route index path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/blog' element={<Blog/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/service' element={<Service/>}/>
                  
               </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
