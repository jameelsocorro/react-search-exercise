import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import RecipeReducer from './recipe';

const rootReducer = combineReducers({
    recipe: RecipeReducer,
    routing: routerReducer
});

export default rootReducer;
