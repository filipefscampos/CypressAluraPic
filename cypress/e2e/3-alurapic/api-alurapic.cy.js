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

});