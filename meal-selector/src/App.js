import React, { useState, useEffect } from 'react';
import MealList from './components/MealsList';
import TagFilter from './components/TagFilter';
import SelectedMeals from './components/SelectedMeals';
import TotalPrice from './components/TotalPrice';
import data from './data.json';
import './App.css';

function App() {
  const [mealData, setMealData] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState({});
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const [filteredTag, setFilteredTag] = useState('all');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const mealData = data.meals;
        const tagsD = data.labels;
        setMealData(mealData);
        setTags(tagsD);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleMealSelection = (mealId, person) => {
    const updatedSelectedMeals = { ...selectedMeals };
    if (updatedSelectedMeals.hasOwnProperty(person)) {
      if (updatedSelectedMeals[person].includes(mealId)) {
        updatedSelectedMeals[person] = updatedSelectedMeals[person].filter(id => id !== mealId);
      } else {
        updatedSelectedMeals[person] = [...updatedSelectedMeals[person], mealId];
      }
    } else {
      updatedSelectedMeals[person] = [mealId];
    }
    setSelectedMeals(updatedSelectedMeals);
  };

  const handleDrinkSelection = (drinkId, person) => {
    const updatedSelectedDrinks = { ...selectedDrinks };
    if (updatedSelectedDrinks.hasOwnProperty(person)) {
      if (updatedSelectedDrinks[person].includes(drinkId)) {
        updatedSelectedDrinks[person] = updatedSelectedDrinks[person].filter(id => id !== drinkId);
      } else {
        updatedSelectedDrinks[person] = [...updatedSelectedDrinks[person], drinkId];
      }
    } else {
      updatedSelectedDrinks[person] = [drinkId];
    }
    setSelectedDrinks(updatedSelectedDrinks);
  };

  const filterMealsByTag = (tagId) => {
    setFilteredTag(tagId);
  };

  return (
    <div className="App">
      <div className="left-column">
      <TagFilter tags={tags} filteredTag={filteredTag} filterMeals={filterMealsByTag} />
        <MealList
          meals={mealData.filter((meal) => filteredTag === 'all' || meal.labels.includes(filteredTag))}
          selectedMeals={selectedMeals}
          handleSelection={handleMealSelection}
          selectedDrinks={selectedDrinks}
          handleDrinkSelection={handleDrinkSelection}
        />
      </div>

      <div className="right-column">
        <br></br>
        <br></br>
        <SelectedMeals selectedMeals={selectedMeals} meals={mealData} />
        <br></br>
        <br></br>
        <TotalPrice selectedMeals={selectedMeals} selectedDrinks={selectedDrinks} meals={mealData} />
      </div>
    </div>
  );
}

export default App;
