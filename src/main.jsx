import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layot from './Layot.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'

import Home from './components/Home/Home.jsx'

//   {
//     path:"/",
//     element:<Layot />,
//     Children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"Contact",
//         element:<Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path ='/' element={<Layot/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route 
      // loader={()=>{}}
      path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
