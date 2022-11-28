export class Login{
    username(name)
    {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    }
    password(password)
    {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
    }
    clicklogin()
    { 
        cy.get('.oxd-button').click();
    }
}