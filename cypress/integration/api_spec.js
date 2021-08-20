describe('My First API Test', () => {
    let scenarios = require('../fixtures/apiTestScenario.json');
    let fakeUser
    before(async () => {
        cy.task('freshUser').then((user) => {
            fakeUser = user;
        });
    })
    context('When I send GET to /api', () => {
        scenarios.forEach((scenario) => {
            console.log(scenario)
            it(`${scenario.test}`, () => {
                cy.log(JSON.stringify(fakeUser))
                cy.request({
                    method: scenario.method,
                    url: scenario.url,
                    qs: scenario.query
                }).should((response) => {
                    console.log(response.body)
                    expect(response.status).to.eq(scenario.expected[0].status)
                    expect(response.body).to.have.property('info')
                    expect(response.body.info).to.have.property('version', '1.3')
                })
            })
        })
    })
})