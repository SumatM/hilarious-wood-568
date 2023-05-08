import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as budgetReducer } from "./budgetReducer/reducer";
import { reducer as expenseReducer } from "./budgetExpenseReducer/reducer";


const rootReducer=combineReducers({
budgetReducer,
expenseReducer,
});


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));