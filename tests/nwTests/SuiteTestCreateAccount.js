var date = new Date();
var currDate = date.getTime(); //forcing to create email with timestamp in millis
module.exports = {
  '@tags': ['createaccount'],
    'e-2-e: Create Account through About Page, Expecting to get to Dahsboard Page': function (browser) {
     browser
         .init()
         .page.AboutPage().goToPage()
         .page.AboutPage().clickOnSignUpButton()
        .page.SignUpPage().goToPage()
        .page.SignUpPage().fillInForm(browser.globals.name, browser.globals.userName + currDate, browser.globals.userName + currDate + browser.globals.email, browser.globals.pass)
        .page.SignUpPage().clickOnSignUp()
        .end();
    },

    'e-2-e: Create Account with the same credentials, Expecting to get error or remain on same page': function (browser) {
     browser
         .init()
        .page.SignUpPage().goToPage()
        .page.SignUpPage().fillInForm(browser.globals.name, browser.globals.userName, browser.globals.userName + currDate + browser.globals.email, browser.globals.pass)
        .page.SignUpPage().clickOnSignUp()
        .page.SignUpPage().assertInModule() // expecting to get an error like 'account is already exists', right now i'm getting console error
        .end();
    },

};
