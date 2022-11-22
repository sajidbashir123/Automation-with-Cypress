//const { contains } = require("cypress/types/jquery");
/// <reference types= "cypress"/>

it ('google search',()=>{
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123{Enter}");
    cy.wait(1000);
    cy.contains('Admin').click(); // clicking on the Admin from the sidebar
    cy.get(':nth-child(2) > .oxd-input').click();
    cy.get(':nth-child(2) > .oxd-input').type("Sajid");
    cy.wait(1000);
    



})