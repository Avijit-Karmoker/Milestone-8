import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const allProducts = [
    {name: 'Dell', category: 'laptop', id: '1'},
    {name: 'Lenovo', category: 'laptop', id: '2'},
    {name: 'Hp', category: 'laptop', id: '3'},
    {name: 'Samsung', category: 'mobile', id: '4'},
    {name: 'Apple', category: 'mobile', id: '5'},
    {name: 'Xiaomi', category: 'mobile', id: '6'},
    {name: 'Sony', category: 'camera', id: '7'},
    {name: 'Nikon', category: 'camera', id: '8'},
    {name: 'Canon', category: 'camera', id: '9'},
]

const Categories = () => {
    let [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProducts);
    }, [category])
    return (
        <div>
            <h3>Select your Category: {category}</h3>
            {
                products.map(pd => <CategoriesDetails product={pd} key = {pd.id}></CategoriesDetails>)
            }
        </div>
    );
};

export default Categories;