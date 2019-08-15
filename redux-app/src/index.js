import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import RecipePrintout from './components/recipePrintout';
import './index.css';


//build the reducer (issues: recipeReducer)
const store = createStore(reducer);

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
