module.exports = {
  props: {
  uri: 'login',
},
elements: {
       loginBtn: 'form.login-form button',
       txtEmail: 'form.login-form input:nth-of-type(1)',
       txtPass: 'form.login-form input:nth-of-type(2)',
   },
   commands: [{
     assertInModule () {
       console.log("Check we are on correct page " + this.api.globals.signup_url + this.props.uri);
         this
             .assert.urlContains(this.api.globals.signup_url + this.props.uri);
         return this.api;
     },
     fillInForm (email, pass) {
       console.log("Filling form");
             this
             .fillInEmailInput(email);
             this
             .fillInPassInput(pass);
         return this.api;
     },
       fillInEmailInput (email) {
         console.log("Filling email input: " + email);
           this
               .waitForElementVisible('@txtEmail', 2000)
               .setValue('@txtEmail', email);
           return this.api;
       },
       fillInPassInput (pass) {
         console.log("Filling pass input: " + pass);
           this
               .waitForElementVisible('@txtPass', 2000)
               .setValue('@txtPass', pass);
           return this.api;
       },
       clickOnLogin () {
           this
               .waitForElementVisible('@loginBtn', 2000)
               .click('@loginBtn')
               .api.pause(2000);
           return this.api;
       },
       goToPage () {
            console.log("Navigating to 'Login Page': " + this.api.globals.signup_url + this.props.uri);
           this
            .navigate(this.api.globals.signup_url + this.props.uri)
            .assertInModule()
               return this.api;
       }
   }]
};
