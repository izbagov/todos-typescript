import { SET_VISIBILITY_FILTER } from '../actions/actionsTypes';
import { VisibilityFilters } from '../actions/app';
import { AppActionTypes } from '../types/app';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: AppActionTypes): string => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
