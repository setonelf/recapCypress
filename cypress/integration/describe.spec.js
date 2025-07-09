/// <reference types="cypress" />

//somente esse teste irá executar
it.only('Um teste externo...', () => {
    
})

describe('Deve agrupar os testes...', () => {
    it('Um teste interno...', () => {})

    describe ('Um grupo especifico...', () => {
        it('Um teste para o grupo especifico...', () =>{})
    })

    describe ('Um segundo grupo especifico...', () => {
        it.skip('Um segundo teste para o grupo especifico...', () =>{}) // esse teste está sendo pulado
    })
})