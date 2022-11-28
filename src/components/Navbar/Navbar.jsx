import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const selectedLink = () => {
    return (
        select => select.isActive ? classes.active : classes.item
    )
}

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={selectedLink()}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" className={selectedLink()}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={selectedLink()}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={selectedLink()}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={selectedLink()}>Settings</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;