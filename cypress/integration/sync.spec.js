/// <reference types="cypress" />

describe('Esperas', ()=>{

    before(()=>{
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', ()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retentativas', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
            //.should('not.exist')
    })

    it.only('Deve fazer uso do find', ()=>{
        cy.get('#buttonList').click()
        cy.get('#lista')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista')
            .find('span')
            .should('contain', 'Item 2')
    })
})
