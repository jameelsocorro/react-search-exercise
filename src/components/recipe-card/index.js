import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    RecipeCardContainer,
    RecipeCardImage,
    RecipeCardInfo,
    RecipeCardTitle,
    RecipeCardDesc
} from './style';

const RecipeCard = ({ recipe }) => {
    return (
        <RecipeCardContainer>
            <Link to={`/recipe/${recipe.id}`}>
                <RecipeCardImage src={ recipe.image }/>
                <RecipeCardInfo>
                    <RecipeCardTitle>{ recipe.label }</RecipeCardTitle>
                    <RecipeCardDesc>Has { recipe.calories } calories. This is good for { recipe.dietLabels.map((dietLabel) => { return dietLabel }) } diet. </RecipeCardDesc>
                </RecipeCardInfo>
            </Link>
        </RecipeCardContainer>
    );
};

export default RecipeCard;
