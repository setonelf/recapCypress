/// <reference types="cypress" />

describe('Esperas', ()=>{

    before(()=>{
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()
    })

    it.only('Deve aguardar elemento estar disponível', ()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
})
