import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  let router = createBrowserRouter([
    {
      path: "/",
      Component() {
        return (
          <>
            <Header />
            <Home />
            <Footer />
          </>
        )
      },
    },
  ]);

  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  )
}

export default App
