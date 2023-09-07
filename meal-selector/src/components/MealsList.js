import React from 'react';
import SelectedDrinks from './selectedDrinks';

function MealList({ meals, selectedMeals, handleSelection , handleDrinkSelection, selectedDrinks}) {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <div key={meal.id} className="meal-card">
          <img src={meal.img} alt={meal.title} className="meal-image" />
          <div className='meal-card-content'>
          <h2>{meal.title}</h2>
          <p>Starter: {meal.starter}<br></br>
          Desert: {meal.desert}<br></br>
          Price: ${meal.price}</p>

          <div className="drink-options">
            {meal.drinks.map((drink) => (
              <div key={drink.id} className='drink_name'>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleDrinkSelection(drink.id, meal.id)}
                    checked={SelectedDrinks[drink.id] && SelectedDrinks[drink.id].includes(drink.id)}
                  />
                  {drink.title} (${drink.price})
                </label>
              </div>
            ))}
          </div>
          </div>
          <button className = 'btn' onClick={() => handleSelection(meal.id)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default MealList;

