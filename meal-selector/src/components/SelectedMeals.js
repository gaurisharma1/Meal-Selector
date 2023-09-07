import React from 'react';

function SelectedMeals({ selectedMeals, meals }) {
  return (
    <div className="selected-meals">
      <h2>Selected Meals</h2>
      {Object.entries(selectedMeals).map(([person, selectedMealIds]) => (
        <div key={person}>
          <ul>
            {selectedMealIds.map((mealId) => {
              const selectedMeal = meals.find((meal) => meal.id === mealId);
              return (
                <li key={mealId}>
                  Meal ID: {mealId}, <br></br>
                  Meal Name: {selectedMeal ? selectedMeal.title : 'Not Found'}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SelectedMeals;
