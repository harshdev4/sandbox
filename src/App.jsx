import './App.css'
import Home from './components/Home';
import { useContext } from 'react';
import { AppContext } from './AppContext/AppContext';
import AddDoc from './components/AddDoc';
import { Outlet } from 'react-router-dom';

function App() {
  const context = useContext(AppContext);
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
