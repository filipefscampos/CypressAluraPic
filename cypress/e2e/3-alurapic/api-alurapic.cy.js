describe('buscar fotos e dados por api', () => {
    
    it('buscar foto do filipe', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/filipe/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('logo')
        })
    });

    it.only('fazer login do filipe', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(13)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("felipetwo@gmail.com")
        })
    });

});