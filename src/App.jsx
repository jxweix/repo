import { useState } from 'react'
import { BrowserRouter , NavLink , Route , Routes} from 'react-router-dom';
import './App.css'

import Home from './pages/Home'
import Pagegoogle  from './pages/Pagegoogle'
import ViteRe from './pages/ViteRe'
import Error from './pages/error'
import Responsive from './pages/Responsive';

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped&family=IBM+Plex+Sans+Thai:wght@300&display=swap');
</style>

function App() {
  const [count, setCount] = useState(0)
  let activeClassName = "nav-active"
  

  return (
    <>
    <BrowserRouter>
    <header>
      {/* <h1>Hello Navbar</h1> */}
        <nav>
         <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
         <NavLink to="/Pagegoogle" className={({ isActive }) => isActive ? activeClassName : undefined}>google</NavLink>
         <NavLink to="/ViteRe" className={({ isActive }) => isActive ? activeClassName : undefined}>Vite</NavLink>
         <NavLink to="/Responsive" className={({ isActive }) => isActive ? activeClassName : undefined}>Responsive</NavLink>
        </nav>
    </header>
  
     <Routes>
       <Route path='/' element={<Home/>} /> 
      <Route path='/Pagegoogle' element={<Pagegoogle/>} />
      <Route path='/ViteRe' element={<ViteRe/>} />
      <Route path='/Responsive' element={<Responsive/>} />
      <Route path='*' element={<Error/>} />
       </Routes>  

    </BrowserRouter> 

    </>
  )
}

export default App



















// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// import { BrowserRouter , NavLink , Route , Routes} from 'react-router-dom';
// import './App.css'

// import Home from './pages/Home'
// import Pagegoogle  from './pages/Pagegoogle'
// import ViteRe from './pages/ViteRe'
// import Error from './pages/error'

// function App() {
//   const [count, setCount] = useState(0)

//   let activeClassName = "nav-active"

// return (
//   <div className='App'>

//     <h1>Gol</h1>

//     {/* <BrowserRouter>
//     <header>
//       <h1>Hello Navbar</h1>
//     </header>

//     <nav>
//       <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
//       <NavLink to="/pagegoogle" className={({ isActive }) => isActive ? activeClassName : undefined}>google</NavLink>
//       <NavLink to="/viteRe" className={({ isActive }) => isActive ? activeClassName : undefined}>Vite</NavLink>
//     </nav>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/pagegoogle' element={<Pagegoogle/>} />
//       <Route path='/ViteRe' element={<ViteRe/>} />
//       <Route path='*' element={<Error/>} />
//     </Routes>
//     </BrowserRouter> */}

//   </div>
//   );
// }

// export default App