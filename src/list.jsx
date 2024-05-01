
const Fruits = ["orange","apple","banana","grape"]
 
function List (){
    const Data = Fruits.map((fruit=><li>{fruit}</li>))
    return(
        <ul>
            {Data}
        </ul>
    )
}
export default List 