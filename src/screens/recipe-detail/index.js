import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/recipe';

import {
    Page,
    PageBody,
    PageCenter,
    PageInstruction
} from '../screen-style';

import {
    RecipeSearchButton,
    RecipeBackButton,
    RecipeDetailContainer,
    RecipeDetailCard,
    RecipeDetailImage,
    RecipeDetailInfoContainer,
    RecipeDetailTitle,
    RecipeDetailRow,
    RecipeDetailRowTitle,
    RecipeDetailRowValue,

} from './style';

import NavBar from '../../components/navbar';

class RecipeDetail extends Component {
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getRecipe(id);
    }
    renderRowDetail(title, desc) {
        return (
            <RecipeDetailRow>
                <RecipeDetailRowTitle>{ title }</RecipeDetailRowTitle>
                <RecipeDetailRowValue>{ desc }</RecipeDetailRowValue>
            </RecipeDetailRow>
        );
    }
    renderIngredients(ingredients) {
        return (
            <RecipeDetailRow>
                <RecipeDetailRowTitle>Ingredients</RecipeDetailRowTitle>
                <ul>
                {
                    ingredients.map((ingredient, key) => {
                        return (
                            <li key={key}><RecipeDetailRowValue>{ ingredient.text }</RecipeDetailRowValue></li>
                        )
                    })
                }
                </ul>
            </RecipeDetailRow>
        );
    }
    render() {
        const { recipe } = this.props;
        return (
            <Page>
                <NavBar />
                <PageBody>
                {
                    recipe ? (
                        <RecipeDetailContainer>
                            <RecipeBackButton to={`/`}>Back</RecipeBackButton>
                            <RecipeDetailCard>
                                <RecipeDetailImage src={ recipe.image } />
                                <RecipeDetailInfoContainer>
                                    <RecipeDetailTitle>{ recipe.label }</RecipeDetailTitle>
                                    {this.renderRowDetail('Calories', recipe.calories)}
                                    {this.renderIngredients(recipe.ingredients)}
                                </RecipeDetailInfoContainer>
                            </RecipeDetailCard>
                        </RecipeDetailContainer>
                    ) : (
                        <PageCenter>
                            <PageInstruction src="/src/images/recipe-detail-instructions.png" />
                            <RecipeSearchButton to={`/`}>Search again</RecipeSearchButton>
                        </PageCenter>
                    )
                }
                </PageBody>
            </Page>
        );
    }
}

const mapStateToProps = (state) => {
    const { recipes, recipeID } = state.recipe;
    return { recipe: recipes[recipeID] };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        actions,
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
