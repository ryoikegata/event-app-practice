import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className='w-screen h-screen bg-gray-200 overflow-hidden'>
    <Header/>
    <Main></Main>
    <Footer/>
    </div>
  )
}

export default App;
