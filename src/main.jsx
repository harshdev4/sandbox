import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import AppContextProvider from './AppContext/AppContext.jsx'
import AddDoc from './components/AddDoc.jsx';
import Home from './components/Home.jsx';
import EditDoc from './components/EditDoc.jsx';


const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      { path: "/add-doc", 
        element: <AddDoc /> 
      },
      { path: "/edit-doc/:productId",
        element: <EditDoc /> 
      },
    ],
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
    <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
