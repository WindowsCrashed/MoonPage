import React from 'react'
import Header from './components/template/header'
import Footer from './components/template/footer'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main className='content'>
        <h1>Hello World</h1>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default App
