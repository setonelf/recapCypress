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

    it('Deve fazer retentativas', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
            //.should('not.exist')
    })

    it('Deve fazer uso do find', ()=>{
        cy.get('#buttonList').click()
        cy.get('#lista')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista')
            .find('span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', ()=>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout:30000})
            .should('contain', 'Item 2')
    })

    it.only('Uso do Retry', ()=>{
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })
})
