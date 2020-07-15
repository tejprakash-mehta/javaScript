exports.config = {
    directConnect: true,
   // framework: 'jasmine', 
   
   
   // Capabilities to be passed to the webdriver instance.
   capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: [ "--start-maximized" ] // to start browser as maximixed 
    }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Spec patterns are relative to the current working directory when
  // protractor is called.
    specs: ['login.js'],


     // Options to be passed to Jasmine.
     jasmineNodeOpts: {
       defaultTimeoutInterval: 30000
  }

    
  };