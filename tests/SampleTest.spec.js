const {test, expect} = require('@playwright/test');
const { POMmanager } = require('../pom/POMmanager');
const{customtest} = require('../utils/test-base');
// JSON -->string --> js object
const dataset = JSON.parse(JSON.stringify(require("../utils/PlaceOrderTestData.json")));


for(const data of dataset)
{
test(`Login Page Assignment ${data.productName}`,async({page})=>{
    const poManager= new POMmanager(page)
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.email,data.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.productSearchAddToCart(data.productName);
    await dashboardPage.navigateToCart();  
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.verifyProductInCheckout(data.productName);
    await checkoutPage.clickOnCheckoutButton();
    await checkoutPage.selectCountry('ind')
    await checkoutPage.verifyEmailInCheckout(data.email);
    await checkoutPage.submitOrder();
    await page.locator(".hero-primary").waitFor({ state: "visible" });
    const orderReviewPage = poManager.getOrderReviewPage();
    await orderReviewPage.verifyThanksMessage();
    await orderReviewPage.verifyOrderId();

});
}
 customtest.only(`Login Page Assignment `,async({page,testDataForOrder})=>{
    const poManager= new POMmanager(page)
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.email,testDataForOrder.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.productSearchAddToCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.verifyProductInCheckout(testDataForOrder.productName);
    await checkoutPage.clickOnCheckoutButton();
 });





