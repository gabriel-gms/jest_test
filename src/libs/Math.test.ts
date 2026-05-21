// Esse teste é unitário da biblioteca Math

import { describe } from 'node:test';
import { Math } from './Math';

describe('Testes para a biblioteca Math', () => {

    beforeEach(() => {

    })

    afterEach(() => {

    })

    beforeAll(() => {

    })

    afterAll(() => {
        
    })

    it('retorna a soma de dois números', () => {
        expect(Math.sum(1, 2)).toBe(3);
    })

    it('retorna a subtração de dois números', () => {
        expect(Math.sub(5, 2)).toBe(3);
    })

    it('retorna a multiplicação de dois números', () => {
        expect(Math.mult(3, 4)).toBe(12);
    })

    it('retorna a divisão de dois números', () => {
        expect(Math.div(10, 2)).toBe(5);
        expect(Math.div(10, 0)).toBe(false);
    })
})

