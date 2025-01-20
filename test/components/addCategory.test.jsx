import AddCategory from "../../src/Components/AddCategory"
import { describe, test, expect, jest } from '@jest/globals';
import { fireEvent, render,screen } from '@testing-library/react';

describe('Pruebas en addCategory', () => {
    test('Debe cambiar el valor del input', () => {
        
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Saitama'}})
        screen.debug()
        expect(input.value).toBe('Saitama')

    })
    
    test('Debe llamar al onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        //Es una simulacion real de la funciuon

        render(<AddCategory onNewCategory={onNewCategory}/>);
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe("")
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
    test('No debe llamar al onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory}/>);
    
        const form = screen.getByRole('form');

        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
    
})
