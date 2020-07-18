import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
       // console.log(e.target.value);
       setinputValue(e.target.value);
    };

    const handleSubmmit = (e) => {

        e.preventDefault();
        //console.log('Submit echo');
        if( inputValue.trim().length > 2 ){//quitando los espacios en blanco del input

            setCategories(catg => [inputValue, ...catg]);
            setinputValue('');
        };
    };


    return (
        <>
            {/* <h2>AddCategory</h2> */}
            {/* <h1>{inputValue}</h1> */}
            <form onSubmit= {handleSubmmit} >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            </form>
        </>
    )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}
