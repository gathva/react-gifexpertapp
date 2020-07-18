import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( ['Dragon Ball']);


    // const handleAdd = () => {
    //     //HunterxHunter
    //     //Solucion 1
    //    // setCategories([...categories, 'HunterxHunter']);

    //     //solucion 2
    //     setCategories(  cats => [...cats, 'HunterxHunter']);
    // };

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            {/* <button onClick = { handleAdd } >Agregar</button> */}

            <ol>
                {/* { categories.map( category => <li key = {category}> {category} </li> ) } */}
                {
                   categories.map( category => (

                      <GifGrid key = {category}
                               category={category} />
                   )) 
                }
            </ol>
        </>
    );
}; 

export default GifExpertApp;

