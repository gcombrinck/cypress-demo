/// <reference types="cypress" />
const faker = require("faker");
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    on("task", {
        freshUser() {
            return {
                name: faker.name.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                administrator: "true"
            };
        }
    })
    return config
}
