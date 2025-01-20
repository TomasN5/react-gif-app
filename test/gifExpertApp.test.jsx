import { describe, test, expect, jest } from '@jest/globals';
import { fireEvent, render,screen } from '@testing-library/react';
import GifExpetApp from '../src/GifExpetApp';

describe('Pruebas en la app Principal', () => {
    test('should ', () => {
        render (<GifExpetApp />)
        screen.debug()
    })
    
})
