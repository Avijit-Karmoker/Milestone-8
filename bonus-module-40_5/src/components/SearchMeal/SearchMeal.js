import React, { useEffect, useState } from "react";

const SearchMeal = () => {
  const [food, setFood] = useState("");
  const [meals, setMeals] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFood(event.target.value);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(response => response.json())
    .then(data => setMeals(data.meals))
  }, [food]);
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Search Meal" />
      <h3>Meal found: {meals?.length}</h3>
      <>
          {
              meals?.map(meal => 
              <div>
                  <h4>{meal.strMeal}</h4>
                  <img src={meal.strMealThumb} alt="" style={{width: '300px'}}/>
              </div>)
          }
      </>
    </div>
  );
};

export default SearchMeal;
