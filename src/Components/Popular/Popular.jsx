import React from 'react';

import './Popular.scss';


function Popular() {

    return (
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png" alt="" />
            <div className="det">
                <p className="popular_title">Lorem ipsum dolor.</p>

                <div className="type">
                    <p>Lorem </p>
                    <p>Lorem ipsum </p>

                </div>
                <div className="data">
                    <p className="rate"><span>4.5</span><i className="fas fa-star"></i></p>
                    <p className="price">$14 USD</p>
                </div>

                <i className="fab fa-windows"></i></div>
        </div>
    )
}

export default Popular;
