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

    it('Uso do Retry', ()=>{
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it.only('Should vs Then', ()=>{
        //O should ignora o que esta dentro do return
        cy.get('#buttonListDOM').should($el =>{
            //console.log($el)
            expect($el).to.have.length(1)
            return 2
        }).and('have.id', 'buttonListDOM')

        //Ja o then ele leva em consideração o que está dentro do retorno e neste caso gera um erro
        cy.get('#buttonListDOM').then($el =>{
            //console.log($el)
            expect($el).to.have.length(1)
            return 2
        }).and('eq', 2)

         cy.get('#buttonListDOM').click()
         
        //O should faz a verificação enquanto faz a busca
        cy.get('#lista li span').should($el =>{
            //console.log($el)
            expect($el).to.have.length(1)
        })
        // //O then aguarda a busca para poder realizar a verificação
        cy.get('#lista li span').then($el =>{
            //console.log($el)
            expect($el).to.have.length(1)
        })
    })
})
