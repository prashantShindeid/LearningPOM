const { expect } = require('@playwright/test');

class CheckoutPage{

    constructor(page){
     this.page=page;
     this.checkoutBtn =page.locator("text=Checkout");
     this.countryInput  = page.locator("[placeholder='Select Country']");
     this.dropdown = page.locator(".ta-results");
     this.userEmail = page.locator(".user__name [type='text']").first()
     this.submitBtn = page.locator(".action__submit");

    }

    async verifyProductInCheckout(productName){
     await this.page.locator("div li").first().waitFor();
     await expect(this.page.locator(`h3:has-text('${productName}')`)).toBeVisible();
  
    }

    async clickOnCheckoutButton(){
         await this.checkoutBtn.click();
    }

    async selectCountry(countryName){
        await this.countryInput.pressSequentially(countryName,{delay:100});
        await this.dropdown.waitFor();
        const optionCount =await this.dropdown.locator("button").count();
        for(let i=0;i<optionCount;++i){
            let text = await this.dropdown.locator("button").nth(i).textContent();
        
            if (text.trim() === "India") {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
       }
    }
    async verifyEmailInCheckout(email){
        await expect(this.userEmail.first()).toHaveText(email);
    }

    async submitOrder(){
    await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.submitBtn.click()
        ]);
    }

}
module.exports = {CheckoutPage};