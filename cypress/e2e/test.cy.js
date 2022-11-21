/// <reference types= "cypress"/>



it ('google search',()=>{
cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123{Enter}");
cy.wait(1000);
cy.get(':nth-child(2) > .oxd-main-menu-item').click();
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); //Add employee form open
cy.wait(1000);
cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click();
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click(); //first name
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Sajid"); //fistname
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click(); //midname
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Bashir"); //midname
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click(); //lastname
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Ahmad");//lastname
cy.wait(1000);
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click();
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("000");
cy.get('.oxd-button--secondary').click();
})