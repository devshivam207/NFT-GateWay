import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Wallet from "./pages/wallet";
import Home from "./pages/home";
import Member from "./pages/member";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {path:'/',element: <Wallet/>},
    {path:'/home',element: <Home/>},
    {path:'/members',element: <Member/>}
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
