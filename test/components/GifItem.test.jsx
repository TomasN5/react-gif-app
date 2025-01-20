/* eslint-env jest */
import { describe, test, expect } from '@jest/globals';
import { render,screen } from '@testing-library/react';
import GifItem from '../../src/Components/GifItem';

describe('Pruebas en GifItem', () => {
  
  const url = "http://localhost/Hola" 
  const title = "Chau"

  test('Debe hacer match con el snapshot', () => {
    const {asFragment} = render(<GifItem title={title} url={url}/>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Debe mostrar la imagen con el url y el ALT indicado', () => {
    render(<GifItem title={title} url={url}/>)
    //expect(screen.getByRole('img').src).toBe(url);
    const {src,alt}=screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })
  test('Debe mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url}/>)
    expect(screen.getByText(title)).toBeTruthy()
  })
  
  
})
