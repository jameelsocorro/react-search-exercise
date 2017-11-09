import React, { Component } from 'react';

import {
    NavBarContainer,
    NavBarItems,
    NavBarImage
} from './style';

const NavBar = (props) => (
    <NavBarContainer>
        <NavBarItems>
            <NavBarImage src="/src/images/recipes.png" width="150px" />
            {props.children}
        </NavBarItems>
    </NavBarContainer>
);

export default NavBar;
