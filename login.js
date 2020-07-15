describe ('amz login', function(){

    //global variables
    var originalTimeout;
    var username = element(by.css("input[formControlName=username]"));
    var password = element(by.css("input[formControlName=password]"));
    var loginbtn = element(by.xpath("//span[contains(text(),'LOGIN')]"));
    var sellerid = element(by.xpath("//input[@id='mat-input-16']"));
    var mwstoken = element(by.xpath("//input[@id='mat-input-17']"));
    var sellerid1 = element(by.css("input[formControlName=sellerId]"));
    var mwstoken1 = element(by.css("input[formControlName=mwsAuthToken]"));
    var verifybtn =  element(by.xpath("//span[contains(text(),'VERIFY ID')]"));
    var dashboardheading = element(by.xpath("//h1[contains(text(),'Dashboard')]"));
    var products = element(by.xpath("//div[@class='mat-list-item-content']//span[contains(text(),'Products')]"));
    var addproduct = element(by.xpath("//span[contains(text(),'Add Product')]"));
    var producttitle = element(by.css("input[formControlName=productTitle]"));
    var productdesc = element(by.css("input[formControlName=description]"));
    var productsku = element(by.css("input[formControlName=sku]"));



    //executes before each 'it' block
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        browser.get('http://15.222.225.13/stage/#/');
        //browser.driver.manage().window().maximize();
        browser.driver.sleep(3000);
    });

    //executes after each 'it' block
    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    //TC-1
    it ('login', function(){

        expect(browser.getTitle()).toEqual('AMZ PREP CANADA');
        username.sendKeys('mailboxtest@mailinator.com');
        password.sendKeys('Amehta123#');
        loginbtn.click();
        //browser.manage().timeouts().implicitlyWait(25000);
         browser.driver.sleep(3000);   

        //sellerid.sendKeys('A3C90SBFWYSNBY');
        //mwstoken.sendKeys('amzn.mws.8cb93305-feb7-f87b-43d3-4d5ec416829d');
        //sellerid1.sendKeys('A3C90SBFWYSNBY');
        //mwstoken1.sendKeys('amzn.mws.8cb93305-feb7-f87b-43d3-4d5ec416829d');
        //verifybtn.click();
        products.click();
        addproduct.click();
        producttitle.sendKeys('product1');
        productdesc.sendKeys('product1 description');

    });

});


