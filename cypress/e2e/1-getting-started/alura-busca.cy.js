describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br/')
    }) 

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.wait(2000);
        //cy.get('h4.busca-resultado-nome').should('contains', 'Formação Java e Orientação a Objetos');
        cy.get('h4.busca-resultado-nome').contains('Formação Java e Orientação a Objetos');
    })
})