
describe('Asertions', () =>{
it ('Assertion Demo',()=>{
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123{Enter}");
   // cy.wait(1000);
    cy.contains('Admin').click(); // clicking on the Admin from the sidebar
    cy.get(':nth-child(2) > .oxd-input').click();
    cy.get(':nth-child(2) > .oxd-input').type("Sajid");
    //cy.wait(1000);
  
    /***********adding assertions for the serach button************
       Use of Implicit assertion ("SHould" & "And" )*/
    cy.get('.oxd-form-actions > .oxd-button--secondary')
    .should("have.class","oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space")
    .should("be.visible") // here we can also use "and" intead of 1st "should"
    .should("be.enabled"); // here we can also use "and" intead of 1st "should"
 

    /***********adding assertions for the serach button************
    Use of Implicit assertion ("expect" & "assert" )*/ 
    
    expect(true).to.be.true;

})
})