import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Portoflio from './Components/Portoflio/portoflio'




let  routers = createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portoflio/>},
    {path:'contact',element:<Contacts/>}

  ]}
])

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

