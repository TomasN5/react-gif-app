import { getGifs } from "../../src/helpers/getGifs"
import { describe, test, expect } from '@jest/globals';

describe('Prueba en getGifs', () => {
    test('Debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('one punch')
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title:expect.any(String),
                url:expect.any(String),
            }
        )
        
    })
    
})
