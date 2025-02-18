import { useState } from "react";
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
const AddCategory = ( {onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.trim().length <=1)  return  ;
        
        setInputValue('');
        onNewCategory(inputValue.trim())
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
            type="text" 
            placeholder="Buscar Gifs" 
            onChange={onInputChange} 
            value={inputValue}/>
        </form>
    )
}

export default AddCategory


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}