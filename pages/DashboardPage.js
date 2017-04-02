module.exports = {
  props: {
  uri: 'https://dashboard.rapidapi.com/',
},
elements: {
       btnCreateApp: 'div.create-button'
   },
   commands: [{
     assertInModule () {
       console.log("Check we are on correct page " + this.props.uri);
         this
             .assert.urlContains(this.props.uri);
         return this.api;
     },
       goToPage () {
            console.log("Navigating to 'DashBoard Page': " + this.props.uri);
           this
            .navigate(this.props.uri)
            .assertInModule()
              .assert.visible('@btnCreateApp');
               return this.api;
       }
   }]

};
