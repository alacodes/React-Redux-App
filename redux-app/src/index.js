import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import Recipe from './components/recipe';
import './index.css';


//build the reducer (issues: recipeReducer)
const store = createStore(reducer);

function App() {
    return(
    <div className="App">
        <Recipe />
    </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
