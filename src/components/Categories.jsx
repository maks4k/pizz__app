import { useState } from "react";

function Categories() {
  const categories=["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];
  const [active,setActive]=useState(0);

  return (
    <div className="categories">
    <ul>
    {categories.map((categorie,index)=>(<li onClick={()=>setActive(index)} key={index} className={index==active?"active":""}>{categorie}</li>))}
    </ul>
  </div>
  )
}

export default Categories