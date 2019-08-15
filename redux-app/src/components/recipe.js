import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner'


const Recipe = props => {
    
    return(
        <div>
            <h2>{props.recipe.name}</h2>
        </div>
    )

}


export default Recipe;