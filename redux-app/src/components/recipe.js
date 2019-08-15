import React from 'react';
import {connect} from 'react-redux';


const Recipe = props => {
    
    return(
        <div>
            <h1>{props.test}</h1>
            <p>it's working</p>
        </div>
    )

}


const mapStateToProps = state => {
    return(
        state
    )
}

export default connect(
    mapStateToProps, 
    {}
    )(Recipe);