import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import Recipe from './recipe';

const RecipePrintout = props => {
    
    return(
        <>
            <h1>GET TACO</h1>
            <button>
                {props.isLoading ? 
                    <Loader type="Bars" color="#00BFFF" height="20" width="120" /> : `Generate Recipe`}
            </button>
            {props.recipe && props.recipe.map(rec => <RecipePrintout key={rec.name} recipe={rec} />
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
    {}
    )(RecipePrintout);