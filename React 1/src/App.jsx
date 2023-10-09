
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';
import Layout from './Layout/Layout';
import { Children } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
const routing = createHashRouter([
  {path: "",element:<Layout/>, children: [
    {index: true,element:<Home></Home>},
    {path: 'home',element:<Home></Home>},
    {path: 'react-app',element:<Home></Home>},
    {path: 'portfolio',element:<Portfolio/>},
    {path: 'about',element:<About/>},
    {path: 'contact',element:<Contact/>},
  ]},
])
export default function App() {
  return <RouterProvider router={routing} />
}