describe ('amz register', function(){

    it ('register', function(){

        browser.get('http://15.222.225.13/stage/#/');
        //element(by.id('mat-input-2')).sendKeys('mailbox@mailinator.com');
        //element(by.id('mat-input-3')).sendKeys('Amehta123#');
        //element(by.css('[class="mat-button-wrapper"]')).click();
         element(by.xpath("//span[contains(text(),'Register')]")).click();
         element(by.xpath("//input[@id='mat-input-4']")).sendKeys("mailboxtest@mailinator.com");
         element(by.xpath("//input[@id='mat-input-5']")).sendKeys("Amehta123#");
         element(by.xpath("//input[@id='mat-input-6']")).sendKeys("Amehta123#");
         element(by.xpath("//input[@id='mat-input-7']")).sendKeys("matellio");
         element(by.xpath("//input[@id='mat-input-8']")).sendKeys("firstname");
         element(by.xpath("//input[@id='mat-input-9']")).sendKeys("lastname");
         element(by.xpath("//input[@id='mat-input-10']")).sendKeys("9999999999");
         element(by.xpath("//input[@id='mat-input-17']")).sendKeys("515111");
         element(by.xpath("//input[@id='mat-input-11']")).sendKeys("india");
         element(by.xpath("//input[@id='mat-input-12']")).sendKeys("andhrapradesh");
         element(by.xpath("//input[@id='mat-input-13']")).sendKeys("anantapur");
         element(by.xpath("//input[@id='mat-input-14']")).sendKeys("address1");
         var ele = element(by.xpath("//div[@class='mat-checkbox-inner-container']"));
         browser.actions().mouseMove(ele).click().perform();
         var ele2 = element(by.xpath("//span[contains(text(),'Register')]"));
         browser.actions().mouseMove(ele2).click().perform();
         



    });

});




