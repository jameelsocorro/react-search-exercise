import {
    SEARCH_RECIPE_SUCCESS,
    GET_RECIPE
} from '../constants';

const INITIAL_STATE = {
    recipes: [],
    recipeID: null
};

function covertToRecipes({ data }) {
    let recipes = [];

    if ( data && data.hits ) {
        recipes = data.hits.map((item, index) => {
            const { label, image, calories, ingredients, dietLabels } = item.recipe;

            return {
                id: index,
                urlTag: encodeURIComponent(label),
                label,
                image,
                calories: calories.toFixed(2),
                ingredients,
                dietLabels
            };
        });
    }

    return recipes;
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_RECIPE_SUCCESS:
            return Object.assign({}, state, {
                recipes: covertToRecipes(action.payload)
            });
        case GET_RECIPE:
            return Object.assign({}, state, {
                recipeID: action.payload
            });
        default:
            return state;
    };
};
