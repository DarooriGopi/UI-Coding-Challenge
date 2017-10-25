import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {reducer as modal} from 'react-redux-modal-flex';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    filter, routing, modal: modal({classContent: 'modal-content', animation: 'zoomIn', duration: 200, mask: true})
});

export default rootReducer;
