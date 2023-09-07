import React from 'react';

function SelectedDrinks({ selectedMeals, meals }) {
  return (
    <div className="selected-drinks">
      <h2>Selected Drinks</h2>
      {Object.entries(selectedMeals).map(([person, selectedMealIds]) => (
        <div key={person}>
          <h3>{person}'s Selected Drinks:</h3>
          <ul>
            {selectedMealIds.map((mealId) => {
              const selectedMeal = meals.find((meal) => meal.id === mealId);
              if (selectedMeal && selectedMeal.drinks) {
                return selectedMeal.drinks.map((drink) => (
                  <li key={drink.id}>
                    Drink: {drink.title}, Price: ${drink.price.toFixed(2)}
                  </li>
                ));
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SelectedDrinks;
