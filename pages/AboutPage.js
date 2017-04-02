module.exports = {
  props: {
  uri: 'about',
},
elements: {
       btnSignUp: 'div.track-manage-container > div > a.btn-sign-up'
   },
   commands: [{
     assertInModule () {
       console.log("Check we are on correct page " + this.api.globals.site_url + this.props.uri);
         this
             .assert.urlContains(this.api.globals.site_url + this.props.uri);
         return this.api;
     },
     clickOnSignUpButton () {
       console.log("Clicking on Sign up button");
         this
             .waitForElementVisible('@btnSignUp', 2000)
             .click('@btnSignUp')
             .api.pause(2000);
             return this.api;
     },
       goToPage () {
            console.log("Navigating to 'About Page': " + this.api.globals.site_url + this.props.uri);
           this
            .navigate(this.api.globals.site_url + this.props.uri)
            .assertInModule()
              .assert.visible("div.software-talks");
               return this.api;
       }
   }]


};
