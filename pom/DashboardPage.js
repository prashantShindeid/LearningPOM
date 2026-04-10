class DashboardPage {

    constructor(page){
        this.page = page;
        this.product = page.locator(".card-body");
        this.productText =page.locator(".card-body b");
        this.cart = page.locator("[routerlink='/dashboard/cart']");
    }

   async productSearchAddToCart(productName){
    await this.productText.first().waitFor();
        const Listitles = await this.productText.allTextContents();
        console.log(Listitles);
        const count = await this.product.count();
       //
        for (let i = 0; i < count; i++) {
            if(await this.product.nth(i).locator("b").textContent()== productName){
                await this.product.nth(i).locator("text=Add To Cart").click();
                break;
            }
    
        }
    }

    async navigateToCart(){
        await this.cart.click();
        
    }
 

}
module.exports = {DashboardPage};