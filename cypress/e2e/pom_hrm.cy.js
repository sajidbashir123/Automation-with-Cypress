import { Login } from "./pages/login_HRM";
const login = new Login()

it("Page object model", ()=>{
    cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    login.username("Admin");
    login.password("admin123");
    login.clicklogin();
})
