import {combineReducers} from "redux";//объединяет все редюсеры которые есть в приоложении
import {createStore, applyMiddleware} from "redux";// 1 подключает редакс стор, второй редакс-фанк
import reposReducer from "./reposReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer
})

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
