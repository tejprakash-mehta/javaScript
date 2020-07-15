describe ('amz storesettings', function(){

    it ('storesettings', function(){

        element(by.css("input[formControlName=sellerId]")).sendKeys('A3C90SBFWYSNBY');
        element(by.css("input[formControlName=mwsAuthToken]")).sendKeys('amzn.mws.8cb93305-feb7-f87b-43d3-4d5ec416829d');
        element(by.xpath("//span[contains(text(),'VERIFY ID')]")).click();




    });

});