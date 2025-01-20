
import { describe, test, expect, jest } from '@jest/globals';
import { render,screen } from '@testing-library/react';
import GifGrid from '../../src/Components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en gifGrid', () => {
    
    const category = "One Punch"
    test('Debe de mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true,
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText(category))
    })
    
    test('Debe mostrar items cuando se cargan las imagenes', () => {
    
        const gifs = [{
            id:'ABC',
            title:'Saitama',
            url: 'https://localhost/saitama.jgp'
        },
        {
            id:'123',
            title:'Goku',
            url: 'https://localhost/goku.jgp'
        }
    ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false,
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
    
})
