import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';
import RecipePrintout from './components/recipePrintout';
import './index.css';


//build the reducer (issues: recipeReducer)
const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return(
    <div className="App">
        <RecipePrintout />
    </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
