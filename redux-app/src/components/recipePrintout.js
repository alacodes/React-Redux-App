import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { getData } from '../Actions';
import Recipe from './recipe';
import { }
const RecipePrintout = props => {
    
    return(
        <>
            <h1>GET BREWERY</h1>
            {/* button now initiates action creator which dispatches GETTING_RECIPE_DATA, this will update state so isLoading will be true */}
            <button onClick={props.getData}>
                {props.isLoading ? 
                    <Loader type="Bars" color="#00BFFF" height="20" width="120" /> : `Generate Brewery`}
            </button>
            {props.recipe && props.recipe.map(rec => <Recipe key={rec.name} recipe={rec} />
            )}
        </>
    )

}


const mapStateToProps = state => {

    return{
        isLoading: state.isLoading,
        recipe: state.recipe
    }

}

export default connect(
    mapStateToProps, 
    { getData }
    )(RecipePrintout);