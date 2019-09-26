// <reference types="Cypress" />

context("Test with server", () => {
    beforeEach(() => {
        
    })
    it("load static server", () => {
        //cy.request("http://localhost:3001/traductor/rock")
        cy.server()
        .should(server => {
            expect(server.method).to.eq("GET")
        })
    })

    it("load server and search", () => {
        cy.visit("/")
        cy.get('.MuiInputBase-input-140')
        .type("rock", { delay: 300 })
        .should("have.value", "rock")

        cy.server().should(server => {
            debugger
            // Se verifica que el método ejecutado contra el servidor sea el que nosotros esperamos
            expect(server.method).to.eq("GET")
        })
    })  
    
    it("load stub data", () => {
        cy.server()
        cy.fixture('get_dictionary_rock.json').as('definition')
        // when application makes an Ajax request matching "GET comments/*"
        // Cypress will intercept it and reply with object
        // from the "comment" alias
        cy.route('GET', 'http://localhost:3001/traductor/r*', '@definition').as('getDefinition')
    
        cy.visit("/")
        cy.get('.MuiInputBase-input-140')
        .type("rock", { delay: 300 })
    
        cy.wait('@getDefinition').its('responseBody')
          .should('have.property', 'results')
          //.and('include', 'rock')
        
    
    })    
})