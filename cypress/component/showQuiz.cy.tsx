import React from 'react'
import App from "../../src/App";

describe('<App/>', () => {
  it('playground', () => {
    cy.mount(<App/>)
    cy.get('[data-cy=show-quiz]').click();
    cy.get('[data-cy=quiz]');
  })
})