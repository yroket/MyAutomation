nightwatch_config = {
  src_folders : [ "tests/nwTests/SuiteSearchAPI.js" ],
  "page_objects_path": "pages",
  "globals_path": "globals.js",
  selenium : {
    "start_process" : false,
    "host" : "hub.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    'browserstack.user': '',
    'browserstack.key': '',
    'browserstack.debug': true
  },

  test_settings: {
    default: {},
    chrome: {
      "launch_url" : "https://rapidapi.com",
            "globals" : {
                "site_url" : "https://rapidapi.com/",
                "signup_url": "https://dashboard.rapidapi.com/"
            },
      desiredCapabilities: {
        browser: "chrome"
      }
    }
  }
};

//
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
