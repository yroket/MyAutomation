module.exports = {
  props: {
  uri: 'signup',
},
elements: {
       signUpBtn: 'form.login-form button',
       txtName: 'form.login-form input:nth-of-type(1)',
       txtUserName: 'form.login-form input:nth-of-type(2)',
       txtEmail: 'form.login-form input:nth-of-type(3)',
       txtPass: 'form.login-form input:nth-of-type(4)',
   },
   commands: [{
     assertInModule () {
       console.log("Check we are on correct page " + this.api.globals.signup_url + this.props.uri);
         this
             .assert.urlContains(this.api.globals.signup_url + this.props.uri);
         return this.api;
     },
     fillInForm (name, userName, email, pass) {
       console.log("Filling form");
         this
             .fillInNameInput(name);
             this
             .fillInUserNameInput(userName);
             this
             .fillInEmailInput(email);
             this
             .fillInPassInput(pass);
         return this.api;
     },
       fillInNameInput (name) {
         console.log("Filling name input: " + name);
           this
               .waitForElementVisible('@txtName', 2000)
               .setValue('@txtName', name);
           return this.api;
       },
       fillInUserNameInput (userName) {
         console.log("Filling uname input: " + userName);
           this
               .waitForElementVisible('@txtUserName', 2000)
               .setValue('@txtUserName', userName);
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
       clickOnSignUp () {
           this
               .waitForElementVisible('@signUpBtn', 2000)
               .click('@signUpBtn')
               .api.pause(2000);
           return this.api;
       },
       goToPage () {
            console.log("Navigating to 'SignUp Page': " + this.api.globals.signup_url + this.props.uri);
           this
            .navigate(this.api.globals.signup_url + this.props.uri)
            .assertInModule()
               return this.api;
       }
   }]
};
