import React from 'react';

function TotalPrice({ selectedMeals,  selectedDrinks,meals }) {
  const calculateTotalPrice = () => {
    console.log(selectedDrinks);
    let totalPrice = 0;

    for (const person in selectedMeals) {
      for (const mealId of selectedMeals[person]) {
        const selectedMeal = meals.find((meal) => meal.id === mealId);

        if (selectedMeal) 
        {
          totalPrice += selectedMeal.price;
        
      }
    }
  }

  for (const person in selectedDrinks) {
    for (const drinkId of selectedDrinks[person]) {
      const selectedDrink = meals
        .flatMap((meal) => meal.drinks)
        .find((drink) => drink.id === drinkId);

      if (selectedDrink) {
        totalPrice += selectedDrink.price;
      }
    }
  }

  return totalPrice.toFixed(2); 
};

  return (
    <div className="total-price">
      <h2>Total Price : ${calculateTotalPrice()} </h2>
    </div>
  );
}

export default TotalPrice;
