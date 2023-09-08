import React from 'react'
import {QuizBlock} from "../../src/components/QuizBlock";
import App from "../../src/App";

const title = 'Test';
const checkboxes= [
  {value: '1', label: 'LinkedIn Bio'},
  {value: '2', label: 'Years of experience'},
]

describe('<QuizBlock/>', () => {
  it('playground', () => {
    cy.mount(<App/>)
    cy.get('[data-cy=show-quiz]').click();
    cy.mount(<QuizBlock title={title} checkboxes={checkboxes}/>);
    cy.get('[data-cy=quizBlock]').contains(title);
    cy.get('[data-cy=quizBlock]').contains(checkboxes[0].label);
    cy.get('[data-cy=quizBlock]').contains(checkboxes[1].label);
  })
})