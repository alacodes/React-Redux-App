import React from 'react';


const Brewery = props => {
    
    return(
        <div class= 'brewery-block'>
            <h2>{props.brewery.name}</h2>
            <h3>Call: {props.brewery.phone} </h3>
            <a href={props.brewery.website_url} target='blank'>Website</a>
        </div>
    )

}


export default Brewery;