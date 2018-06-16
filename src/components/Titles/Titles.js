import React from 'react';

// one statles element, explictitly returning from arrow function
// no props used in this component

const Titles = () => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
    </div>
)

export default Titles;