// describe('Navigation', () => {
//   it('cy.visit() - visit a remote url', () => {
//     cy.visit('http://localhost:3000/')
//     cy.wait(50000)
//   })
// })


describe('Cognito', function () {
  beforeEach(function () {
    
    // Programmatically login via Amazon Cognito API
    cy.visit("http://localhost:3000/")

    cy.get('input[name="username"]').type(Cypress.env('cognito_username')) 
    cy.get('input[name="password"]').type(Cypress.env('cognito_password'))
    cy.get('button[type="submit"]').click()
    
  })


  it('shows onboarding', function () {
    cy.contains('Hello').should('be.visible')
  })
})


describe('click for picture', function(){
  this.beforeEach(function(){
  cy.get('amplify-s3-album').shadow().find('div').find('amplify-picker').shadow().find('div').find('input').selectFile('public\\logo512.png')
  // cy.get('amplify-s3-album').shadow().find('div').find('amplify-picker').shadow().find('div').find('input').selectFile('public\\logo192.png')
  })
  it('shows picture', function(){
  
    cy.get('amplify-s3-album').shadow().find('div').find('*[class^="album-container"]').find('div').find('div').find('amplify-s3-image').shadow().find('img').should('be.visible')
  })

})

// .click().then(() => {
//   attachFile('C:\appsamp\Amplify-Chrome-extension\public\logo512.png')
// })