const {test, expect} = require('@playwright/test');
const { log } = require('node:console');
const { text } = require('node:stream/consumers');

test('UI control Playwright Test',async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName= page.locator("#username");
   const signInBtn=page.locator("#signInBtn");
   const documentLink=page.locator("[href*='documents-request']");
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption("consult");
   await page.locator(".radiotextsty").last().click();
   await page.locator("#okayBtn").click();
   //await page.pause();
   await page.locator("#terms").click();
   await expect(page.locator("#terms")).toBeChecked();
   await page.locator("#terms").uncheck();
   expect(await page.locator("#terms").isChecked()).toBeFalsy();
   await expect(documentLink).toHaveAttribute("class","blinkingText");
   




}); 

test('This is my second Test',async ({browser})=>
{
  
   const context = await browser.newContext();
   const page =  await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName= page.locator("#username");
   const signInBtn=page.locator("#signInBtn");
   const documentLink=page.locator("[href*='documents-request']");
   
   const [newpage]=await Promise.all([
      context.waitForEvent('page'),
      documentLink.click(),
])
   const text = await newpage.locator(".red").textContent();
   const arrayText =text.split("@");
   const domain = arrayText[1].split(" ")[0];
   await userName.fill(domain);
   await page.pause();
   console.log(await userName.inputValue());


}); 

test.only('Rahul Shetty asignment for login Page',async({browser})=>
{
   const email= "prashushinde431@gmail.com";
   const context=await browser.newContext();
   const Page =await context.newPage();
   const userName= Page.locator("#userEmail");
   const password = Page.locator("#userPassword");
   const loginBtn= Page.locator("#login");
   const product =  Page.locator(".card-body");
   await Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   
   await userName.fill("prashushinde431@gmail.com");
   await password.fill("Admin@123");
   await loginBtn.click();

  await Page.waitForLoadState('networkidle');
 // Page.locator(".card-body b").waitFor();
  await Page.locator(".card-body b").first().waitFor();
  const Listitles = await Page.locator(".card-body b").allTextContents();
  console.log(Listitles);
  const count = await product.count();
  const productName = "ZARA COAT 3";
  for (let i = 0; i < count; i++) {
      if(await product.nth(i).locator("b").textContent()== productName){
         await product.nth(i).locator("text=Add To Cart").click();
         break;
      }
   
  }
  await Page.locator("[routerlink='/dashboard/cart']").click();
  await Page.locator("div li").first().waitFor();
  const bool = await Page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  await expect(bool).toBeTruthy();
  await Page.locator("text=Checkout").click();
  await Page.locator("[placeholder='Select Country']").pressSequentially('ind',{delay:100});
  const dropdown = await Page.locator(".ta-results");
  await dropdown.waitFor();
  const optionCount =await dropdown.locator("button").count();
  for(let i=0;i<optionCount;++i){
    let text = await dropdown.locator("button").nth(i).textContent();
  
  if (text.trim() === "India") {
    await dropdown.locator("button").nth(i).click();
    break;
   }
  }
  expect(Page.locator(".user__name [type='text']").first()).toHaveText(email);
  await Page.locator(".action__submit").click();
  await expect(Page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderId= await Page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);
  await Page.locator("button[routerlink*='myorders']").click();

  const row = Page.locator("tbody tr");
  
  for(let i=0;i<row.count();++i){
     const rowOrderid= row.locator("th").textContent();
     if(orderId.includes(rowOrderid)){
       await row.nth(i).locator("button").first().click();
       break;
     }
  }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
});