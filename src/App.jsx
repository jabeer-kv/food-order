import Home from "./components/Home"
import About from "./components/About"
import {createBrowserRouter,RouterProvider} from "react-router-dom"

function App() {
  
 

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/about",
    element:<About/>,
  }
 ])
 return (
    
  <>
 
  <RouterProvider appRouter={appRouter}/>
  </>
)
}

export default App
