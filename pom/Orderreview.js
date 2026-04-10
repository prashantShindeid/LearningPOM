const {test, expect} = require('@playwright/test');
class Orderreview{

    constructor(page){
        this.page= page;
        this.message = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
        this.myOrder =  page.locator("button[routerlink*='myorders']");
        this.orderRow = page.locator("tbody tr");
        this.orderColumn = page.locator(".col-text");
    }

    async verifyThanksMessage(){
        
       await expect(this.message).toBeVisible();
       await expect(this.message).toHaveText(" Thankyou for the order. ");
    }

    async verifyOrderId(){
        await expect(this.orderId).toBeVisible();
        const orderId = (await this.orderId.textContent()).trim();
        console.log("Captured Order ID:", orderId);

        await this.myOrder.click();
        await this.page.waitForLoadState('networkidle');
    
    const row = this.orderRow;
    const rowCount = await row.count();
    for(let i=0;i<rowCount;++i){
        const rowOrderid= await row.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderid)){
        await row.nth(i).locator("button").first().click();
        await this.page.waitForLoadState('networkidle');
        break;
        }
    }
   
   const orderIdDetails = await this.orderColumn.first({ timeout: 5000 }).innerText();
   console.log("Order ID Details:", orderIdDetails);
   await expect(orderId.includes(orderIdDetails.trim())).toBeTruthy();
    }
}
module.exports = {Orderreview}