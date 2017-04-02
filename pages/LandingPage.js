module.exports = {
elements: {
       txtSearch: 'input#search-text',
       btnSearch: 'div.circle-input'
   },
   commands: [{
       fillInSearchInput (input) {
         console.log("Filling search input: " + input);
           this
               .waitForElementVisible('body', 2000)
               .setValue('@txtSearch', input);
           return this.api;
       },
       submit () {
           this
               .waitForElementVisible('@btnSearch',2000)
               .click('@btnSearch')
               .api.pause(2000);
           return this.api;
       },
       goToHomePage () {
            console.log("Navigating to: " + this.api.globals.site_url);
           this
               .assert.title("RapidAPI")
               .assert.visible("input#search-text");
               return this.api;
       }
   }]
};
