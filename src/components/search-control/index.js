import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/recipe';

import {
    SearchControlContainer,
    SearchText,
    SearchButton
} from './style';

class SearchControl extends Component {
    constructor(props) {
        super(props);

        this.state = { criteria: '' }

        this.searchRecipe = this.searchRecipe.bind(this);
        this.searchTextOnChange = this.searchTextOnChange.bind(this);
    }
    searchTextOnChange(e) {
        const criteria = e.target.value;

            if ( criteria ) {
                this.setState({ criteria });
                this.searchRecipe(e);
            }
    }
    searchRecipe(e) {
        const { searchRecipe, isLoading } = this.props;

        isLoading(true);
        searchRecipe(this.state.criteria).then(() => {
            isLoading(false);
        });
    }
    render() {
        return (
            <SearchControlContainer>
                <SearchText
                    debounceTimeout={400}
                    placeholder="Enter recipes"
                    onChange={ this.searchTextOnChange }/>
                <SearchButton
                    onClick={ this.searchRecipe }>
                    Search
                </SearchButton>
            </SearchControlContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const { recipes } = state.recipe;
    return { recipes };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        actions,
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl);
