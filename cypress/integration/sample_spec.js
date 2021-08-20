describe('My First Test', () => {
    before(() => {
        cy.visit('https://example.cypress.io')
        cy.fixture("example").then((data) => {
            cy.log(data)
            this.data = data;
        })
    })
    it('Visits the Kitchen Sink', () => {
        cy.contains('type').click()
        console.log(this.data)
    })
})