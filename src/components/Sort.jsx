import { useState } from "react";

function Sort() {
  const sortTypes = ["популярности", "цене", "алфавиту"];
  const [sort, setSort] = useState(0); //состояние отоброжения видов сортировки
  const [isOpen, setIsOpen] = useState(false); //попап с сортировкой
  const [isUp, setIsUp] = useState(true);//положения стрелочки
  // вариант с е таргет
  // // let svg=e.target;
  // // if (!e.target.matches("svg")) {
  // //   svg=e.target.parentElement;
  // //   console.log(svg);
    
  // // }
  // // // function sortClickHAndler() {
  // //   setIsUp(!isUp)
  // // // }
  // вариант с юсреф
// let svgRef=useRef(null);

// function clickSvgHandler() {
//   svgRef.current.classList.toggle("sortSvg__sort-down")
// }

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
        // ref={svgRef}
        // onClick={clickSvgHandler}
          onClick={()=>setIsUp(!isUp)}
          className={"sortSvg " + (isUp ? "sortSvg__sort-down" : "")}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sortTypes[sort]}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((type, index) => (
              <li
                onClick={() => {
                  setSort(index), setIsOpen(false);
                }}
                key={index}
                className={sort == index ? "active" : ""}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
