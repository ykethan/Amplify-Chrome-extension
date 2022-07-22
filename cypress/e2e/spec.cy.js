describe('Navigation', () => {
  it('cy.visit() - visit a remote url', () => {
    cy.visit('chrome-extension://lijblbamahjoddoaiohoapbheccknfcc/index.html')
    cy.wait(50000)
  })
})


describe('Cognito', function () {
  // beforeEach(function () {
  //   // Seed database with test data
  //   // cy.task('db:seed')
  //   // Programmatically login via Amazon Cognito API
  //   cy.visit("http://localhost:3000/")

  //   cy.get('input[name="username"]').type(Cypress.env('cognito_username')) 
  //   cy.get('input[name="password"]').type(Cypress.env('cognito_password'))
  //   cy.get('button[type="submit"]').click()
  //   // cy.loginByCognitoApi(
  //   //   Cypress.env('cognito_username'),
  //   //   Cypress.env('cognito_password')
  //   // )
  // })


  it('shows onboarding', function () {
    cy.contains('Hello').should('be.visible')
  })
})
