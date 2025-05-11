import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";
import { useEffect, useState } from "react";

// pizzas={pizzasToRender} loading={loading} setPizzas={(data)=>pizzasToRender=data} setLoading={setLoading} active={active} setActive={(ind)=>setActive(ind)}

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    type:0,
    isUp:true
  }); //состояние отоброжения видов сортировки

  




  useEffect(() => {
    const category = activeCategory == 0 ? "" : activeCategory;//фильтрации категорий
    const sort = ["rating","price","title"];//фильтрация по цене и так далее
    const order = activeSort.isUp==true?'asc':"desc";///* фильтрация стрелочки */
   
    fetch(
      `https://67cece81125cd5af757c0c7a.mockapi.io/items?category=${category}&sortBy=${sort[activeSort.type]}&order=${order}`
    )
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .finally(() => setLoading(false)) // исправлено: используя false вместо !loading
      .catch((error) => {
        alert(`ошибка запроса на сервер: ${error.name}, ${error.message}`); // Обработка ошибок
      });
  }, [activeCategory,activeSort]); //производить рендер только при изменении категории
  return (
    <>
      <div className="content__top">
        <Categories
          setPizzas={setPizzas}
          setLoading={setLoading}
          active={activeCategory}
          setActive={(ind) => setActiveCategory(ind)}
        />
        <Sort sort={activeSort} setSort={(obj)=>setActiveSort(obj)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!loading ? (
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : (
          <div>
            {[...new Array(10)].map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

// <div className="content__items">
//     {!loading ?pizzas.filter((item)=>{
//       if(active==0){
//         return item;//проверяем если категория нулеваая возращаем все пиццы(item)
//     }
//     return item.category==active}).map((pizza) => (
//     <PizzaBlock key={pizza.id} {...pizza} />
//      ))
//     : (
//       <div>
//         {[...new Array(10)].map((_, index) => (
//           <Skeleton key={index} />
//         ))}
//       </div>
//     )}
//   </div></> чистый front без запросов
