import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";
import { useEffect, useState,useContext } from "react";
import {AppContext} from "../components/App";



// pizzas={pizzasToRender} loading={loading} setPizzas={(data)=>pizzasToRender=data} setLoading={setLoading} active={active} setActive={(ind)=>setActive(ind)}

function Home() {

const{pizzas,setPizzas,loading,activeCategory,activeSort}=useContext(AppContext)



  



  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort />
      </div>
    {loading==false?(pizzas.length>0?<h2 className="content__title">Все пиццы</h2>:<h2 className="content__title">Пиццы не найдены😢</h2>):null}
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
