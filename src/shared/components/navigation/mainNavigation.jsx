import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'

import MainHeader from './mainHeader';
import NavLinks from './navLinks';
import SideDrawer from './sideDrawer';

import './mainNavigation.css';
import Backdrop from './backDrop';



const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(d => !d);
    };
    return (
        <Fragment>
            {drawerIsOpen && <Backdrop onClick={openDrawer} />}
               
                <SideDrawer show={drawerIsOpen} onClick={openDrawer}>
                    <nav className='main-navigation__drawer-nav'>
                        <NavLinks />
                    </nav>
                </SideDrawer>

            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer} >
                    <span />
                    <span />
                    <span />
                </button>
                
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </Fragment>
    );
}

export default MainNavigation;