describe('screenshot', function () {
    it('must take a screenshot of page', function () {

        // levar isso para o frontend da embraer
        // visitar o cms ou portal
        // se precisar logar loga se não faz nada
        // adicionar no projeto uma pasta com a imagem original ou pegar de um link -> s3 ou algo do tipo
        // Talvez não seja necessário. Precisamos apenas do base64 da imagem e adicionamos isso na variavel diretamente(Esta forma eh melhor)
        // tirar screenshot e retornar se o teste teve sucesso ou falha

        cy.visit('http://www.google.com')
        
        cy.screenshot('screenshot-google-current')

        /**cy.fixture('../images/screenshot-google-original.png').then((original) => {
            cy.fixture('../screenshots/screenshot_google.js/screenshot-google-current.png').then((current) => {
                expect(current).to.equal(original)
            })
        })**/
    })
})