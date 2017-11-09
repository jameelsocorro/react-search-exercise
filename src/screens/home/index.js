import React, { Component } from 'react';
import { connect } from 'react-redux';
import MDSpinner from "react-md-spinner";

import {
    Page,
    PageBody,
    PageCenter,
    PageInstruction
} from '../screen-style';

import {
    RecipeCards
} from './style';

import NavBar from '../../components/navbar';
import SearchControl from '../../components/search-control';
import RecipeCard from '../../components/recipe-card';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: false };
    }
    renderRecipes() {
        const { recipes } = this.props;

        if (this.state.loading)
            return (
                <PageCenter>
                    <MDSpinner size={48} />
                </PageCenter>
            );

        if (!recipes || recipes.length <= 0)
            return (
                <PageCenter>
                    <PageInstruction src="/src/images/home-instructions.png" />
                </PageCenter>
            );

        return (
            <RecipeCards>
                {
                    this.props.recipes.map((item, key) => {
                        return <RecipeCard key={key} recipe={item} />;
                    })
                }
            </RecipeCards>
        );
    }
    render() {
        return (
            <Page>
                <NavBar>
                    <SearchControl isLoading={(loading) => this.setState({ loading })}></SearchControl>
                </NavBar>
                <PageBody>
                    {this.renderRecipes()}
                </PageBody>
            </Page>
        );
    }
}

const mapStateToProps = (state) => {
    const { recipes } = state.recipe;
    return { recipes };
};

export default connect(mapStateToProps)(Home);
