import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import Body from "./components/Body";
import Contact from "./components/Contact";
// import Header from "./components/Header";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
function App() {
  return(
    <div>
      
      <Outlet/>
      <RouterProvider router={appRouter}/>
    </div>
      
  )
 

}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        
      },
      {
      
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }

    ],
    errorElement: <Error/>,
  },
  
]);


export default App;
