import React /*{ useContext }*/ from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {App1, App2, App3 } from './App';


import Root from './Pages/Root';
import HelpDesk from './Pages/HelpDesk';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import ProjectContext from './Contexts/ProjectTypeContext';
const router = createBrowserRouter([
  {
    element: <Root />,
   /* errorElement: <ErrorPage />,*/
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/helpdesk",
        element: <HelpDesk />,
        /* add children nodes here */
      
      },
      {
        path: "/option1",
        element: <App1 />
      },
      {
        path: "/option2",
        element: <App2 />
      },
      {
        path: "/option3",
        element: <App3 />
      }
      
    ],
  },
]);




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

