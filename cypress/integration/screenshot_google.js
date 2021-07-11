describe('screenshot', function () {
    it('must take a screenshot of page', function () {
        cy.visit('http://www.google.com')
        
        cy.screenshot('screenshot-google-current')

        cy.fixture('../images/screenshot-google-original.png').then((original) => {
            cy.fixture('../screenshots/screenshot_google.js/screenshot-google-current.png').then((current) => {
                expect(original).to.equal(current)
            })
        })
    })
})