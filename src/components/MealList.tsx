import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import '../../public/style.css'

interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export function MealList() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCategories(response.data.categories);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <h2 className='mb-4 title'>Our Categories</h2>
            <div className='row justify-content-center align-items-center mb-4'>
                {categories.map((category) => (
                    <div key={category.idCategory} className="p-0 m-2 col-sm-12 col-md-6 col-lg-3 d-flex-column justify-content-center align-items-center" style={{ position: 'relative' }}>
                        <img src={category.strCategoryThumb} alt={category.strCategory} className='w-100 mb-2 img-fluid justify-content-center align-items-center'/>
                        <div className='mt-2 mb-0 pb-1 pt-1' style={{
                            backgroundColor: 'var(--primary-color)',
                            width: '100%',
                            color: '#fff',
                            textAlign: 'center',
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            textTransform: 'uppercase',
                            fontWeight: '200',
                            opacity: '80%',
                            fontSize: 'larger'
                        }}>
                            {category.strCategory}</div>
                    </div>
                ))}
            </div>
        </Container >
    );
};

