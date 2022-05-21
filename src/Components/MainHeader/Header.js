import classes from "./Header.module.css";

import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                        to="/welcome"
                        className={(activeValue) => 
                        activeValue.isActive ? classes.active : ""
                    }
                        >
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/product"
                        className={(activeValue) => 
                        activeValue.isActive ? classes.active : ""
                        }
                        >
                            Product
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;