import { useContext, useRef } from "react";
import {AppContext} from "../components/App"


function Search() {
const{pizzas,setPizzas,setSearch}=useContext(AppContext)
const inputRef=useRef(null)
const serchHandler=()=>{
 const value=inputRef.current.value;
setSearch(value);
// inputRef.current.value="";если надо очистить инпут после поиска
}

  return (
    <>
    <div className="wrraper">
 <div className="InputContainer">

  <input  ref={inputRef} placeholder="Search.." id="input" className="input" name="text" type="text" onKeyDown={(e)=>
   {
    e.keyCode==13&&serchHandler();
    
   }
  }></input>
</div>
<button onClick={serchHandler}  className="beautiful-button">
  Search!
</button>
</div>
</>
  )
}

export default Search

// const[value,setValue]=useState("")
  {/* <input onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Search.." id="input" className="input" name="text" type="text"></input> */}
  // !== -1 — это проверка, что индекс найденного элемента не равен -1, то есть элемент существует