
import './App.css'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import MainNavigationBar from './components/MainNavigationBar'

function App() {

  return (
    <>
      <MainNavigationBar menuItems={[{
        key: 1,
        name: "Home",
        path: "/"
      }, {
        key: 2,
        name: "About",
        path: "/add-expense"
      }]} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
