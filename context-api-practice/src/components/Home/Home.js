import React from 'react';
import Categories from '../Categories/Categories';

const Home = () => {
    const styles = {
        margin: '10px',
        padding: '10px',
        border: '1px solid blue',
        borderRadius: '10px',
    }
    return (
        <div style={styles}>
            <h1>This is home.</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;