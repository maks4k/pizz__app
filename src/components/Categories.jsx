import { useEffect} from "react";

function Categories({setPizzas ,setLoading,active,setActive }) {
  const categories=["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];
  
  // useEffect(() => {
  //   fetch(`https://67cece81125cd5af757c0c7a.mockapi.io/items?category=${active}`)
  //     .then((response) => response.json())
  //     .then((data) => setPizzas(data))
  //     .finally(() => setLoading(false)) // исправлено: используя false вместо !loading
  //     .catch((error) => {
  //       alert(`ошибка запроса на сервер ${error.name}, ${error.message}`); // Обработка ошибок
  //     });
  // }, [active]);
  return (
    <div className="categories">
    <ul>
    {categories.map((categorie,index)=>(<li onClick={()=>setActive(index)} key={index} className={index==active?"active":""}>{categorie}</li>))}
    </ul>
  </div>
  )
}

export default Categories