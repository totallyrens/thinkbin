import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx'
import NotFound from './pages/NotFound.jsx'
//define all the routes in the app and how they connect to components
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  //inside the array, adding objects
  {
    //define a keynamed path
    path:"/", // <- this keyvalue will have value of / meaning index/homepage
    element: <App /> // <- the component it will render is the element "<App />"
    //this setup will help create SPA with multiple views/pages without reloading
    //by matching the URL in the browser to specific component in our app
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path: "*", // <- means any URL that is not explicitly defined in our createBrowserRouter config
    element: <NotFound />
  },
]); // <- browsers history API, navugations...etc

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <- this is the component that makes the routing setup work, 
          by connecting to the createBrowserRouter config 
          to the app so it knows how to handle */}
    <RouterProvider router={router} /> 
  </StrictMode>,
);
