import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { getData } from '../Actions';
import Brewery from './brewery';


const BreweryPrintout = props => {
    
    return(
        <>
            <h1>Get Brewery</h1>
            {/* button now initiates action creator which dispatches GETTING_RECIPE_DATA, this will update state so isLoading will be true */}
            <button onClick={props.getData}>
                {props.isLoading ? 
                    <Loader type="Bars" color="#00BFFF" height="20" width="120" /> : `PROST!`}
            </button>
            {props.brewery && props.brewery.map(brew => <Brewery key={brew.name} brewery={brew} />
            )}
        </>
    )

}


const mapStateToProps = state => {

    return{
        isLoading: state.isLoading,
        brewery: state.brewery
    }

}

export default connect(
    mapStateToProps, 
    { getData }
    )(BreweryPrintout);