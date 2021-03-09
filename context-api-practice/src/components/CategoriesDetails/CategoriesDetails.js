import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoriesDetails = (props) => {
    const {name} = props.product;
    // console.log(props);
    return (
        <div>
            <h4>This is your category detail.</h4>
            <h6>Selected Product: {name}</h6>
        </div>
    );
};

export default CategoriesDetails;