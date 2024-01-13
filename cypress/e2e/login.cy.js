
describe('Проверка авторизации', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
    })      

   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Kristin_sm@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') 
    })

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio15');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') 
    })

   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov7.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') 
    })

   it('логин без @', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
    })

   it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') 
    })
})
