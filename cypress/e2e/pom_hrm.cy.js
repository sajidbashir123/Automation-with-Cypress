import { Login } from "./pages/login_HRM";
const login = new Login()

describe('Login Test', () => {


    it("Valid-login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        login.username("Admin");
        login.password("admin123");
        login.clicklogin();
    })

    it.skip ("Invalid-login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // it.skip-->this comaand use to skip that specifit it block 
        login.username("admin23");
        login.password("1234");
        login.clicklogin();
    })

    /*
    it.only ("Empty-login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // it.only-->comaand use to execute that specifit it block only
        login.username("Admin");
        login.password("sad");
        login.clicklogin();
    })
        */
})


it ("Out side the Describe block", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); //this it block contain the outside of the describe block
    login.username("Admin");
    login.password("admin123");
    login.clicklogin();
})