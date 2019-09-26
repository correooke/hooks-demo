// <reference types="Cypress" /> 

context("Carga inicial", () => {
    beforeEach(() => {
       cy.visit("/")
    })
    it("Ingreso básico", () => {
        cy.get('.MuiInputBase-input-140')
        .type("rock")
        .should("have.value", "rock")
    })
    it("Ingreso brinda resultados", () => {
        cy.get('.MuiInputBase-input-140')
        .type("rock")
        .should("have.value", "rock")

        cy.get('.App > :nth-child(4) > :nth-child(1)')
        .should("contain", "Acepción")
        cy.screenshot()
    })
    it("Ingreso lento", () => {
        cy.get('.MuiInputBase-input-140')
        .type("rock", { delay: 300 })
        .should("have.value", "rock")

        cy.get(':nth-child(4) > :nth-child(2) > p')
        .should("contain", "solid mineral material")
    })    
})