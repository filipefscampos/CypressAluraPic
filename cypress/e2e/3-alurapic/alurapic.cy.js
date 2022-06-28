describe('login e registro de usuario', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    }) 

    it('verifica mensagens de validação', () => {
        cy.contains('a','Register now').click();
        cy.get('.btn').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.get('.btn').click();
        cy.contains('ap-vmessage','Full name is required!').should('be.visible');
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
    })

    it('verifica mensagem de email invalido', () => {
        cy.contains('a','Register now').click();
        cy.get('.btn').click();
        cy.get('input[formcontrolname="email"]').type('filipe');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha minima', () => {
        cy.contains('a','Register now').click();
        cy.get('.btn').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('.btn').click();
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
    })

    it('fazer login com sucesso', () => {
        cy.login('filipefscampos','12345678')
        cy.contains('a','(Logout)').should('be.visible');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('filipefscampos','23232')
            cy.on('window:alert', (str) => {
            expect(str).to.equals('Invalid user name or password')
        })
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it.only(`registrar novo usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button','Register').click();
        });
    });


})