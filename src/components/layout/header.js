import {Fragment} from "react";

import HeaderCartButton from "./headercartbutton";

import mealsImage from '../../assets/meals1.jpg';
import classes from './header.module.css'

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>OrderMunch</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>

    </Fragment>

};

export default Header;