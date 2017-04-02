module.exports = {
  '@tags': ['searchapi'],
    'Search on RapidApi': function (browser) {
        browser
            .init()
            .page.LandingPage().goToHomePage()
            .page.LandingPage().fillInSearchInput(browser.globals.searchTerm)
            .page.LandingPage().submit()
            .assert.containsText('span.package-title', browser.globals.apiName)
            .end();
    },
    'Negative Search on RapidApi': function (browser) {
        browser
            .init()
            .page.LandingPage().goToHomePage()
            .page.LandingPage().fillInSearchInput(browser.globals.negativeSearchTerm)
            .page.LandingPage().submit()
            .assert.elementNotPresent('span.package-title')
            .end();
    },

};
