import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../components/App";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/slices/filterSlice";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
const activeCategory=useSelector((state)=>state.filter.category)
const dispatch=useDispatch();

  // const {activeCategory, setActiveCategory} = useContext(AppContext);

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
        {categories.map((categorie, index) => (
          <li
            onClick={() => dispatch(setCategory(index))}
            key={index}
            className={index == activeCategory ? "active" : ""}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
