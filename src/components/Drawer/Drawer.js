import React from 'react';
import './Drawer.css';
import Header from "../Header/Header";


const Drawer = ({drawerOpen, drawerToggle, logOut, isRegistered, login}) => {
   const classArray = drawerOpen ? "drawer open" : "drawer";
        return (
            <div className={classArray}>
                {drawerOpen && <Header drawerToggle={drawerToggle}
                                       logOut={logOut}
                                       isRegistered = {isRegistered}
                                       login = {login}/>}
            </div>
        )
};
export default Drawer;