//var data = require('./data/prd');
module.exports = {
   '@disabled': true,
   '@tags': ['login'],
    'Search on RapidApi': function (browser) {

        browser
            .init()
            .page.LoginPage().goToPage()
            .page.LoginPage().fillInForm(data.existUserName, data.existPassword)
            .page.LoginPage().clickOnLogin();

            browser
                .init().page.DashboardPage().assertInModule()
            .end();
    },


};
