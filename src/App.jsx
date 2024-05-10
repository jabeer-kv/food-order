import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Routes,Route,BrowserRouter } from "react-router-dom";
function App() {
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Body/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/body" element={<Body/>} />
        <Route exact path="/menu/:resId" element={<Menu/>} />
        {/* <Route exact path="/error" element={<Error/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
)
}


export default App;
