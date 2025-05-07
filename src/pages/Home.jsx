import { useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/Skeleton'



function Home({pizzas,loading}) {

  return (
    <><div className="content__top">
    <Categories />
    <Sort />
  </div>
  <h2 className="content__title">Все пиццы</h2>
  <div className="content__items">
    {!loading ? (
      pizzas.map((pizza) => (
        <PizzaBlock key={pizza.id} {...pizza} />
      ))
    ) : (
      <div>
        {[...new Array(10)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    )}
  </div></>
  )
}

export default Home