import React, { Fragment } from "react";
import MealsSummary from "./mealssummary";
import AvailableMeals from "./availablemeals";

const Meals = props =>{
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>

};

export default Meals;