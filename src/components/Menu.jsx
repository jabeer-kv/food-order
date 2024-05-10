import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
const Menu = () => {
    const [menu,setmenu]=useState([null])

 useEffect(()=>{fetchmenu()},[])

const fetchmenu= async ()=>{
 const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.8744775&lng=75.37036619999999&restaurantId=234")
 
 const json=await data.json()
 console.log(json);
}

 if(menu===null){
    return <Shimmer/>

 }

  return (
    <div>Menu</div>
  )
}
export default Menu
