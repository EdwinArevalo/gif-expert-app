import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GitExpertApp() { 

    const [categories, setCategories] = useState(['Stranger Things']);
 

    return (
        <>
            <h2> GitExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr/> 
            <ol>
                { 
                    categories.map(category => (
                        <GifGrid
                            key ={category}  
                            category={category}
                        />
                    )) 
                }
            </ol>
        </>
    )
} 
