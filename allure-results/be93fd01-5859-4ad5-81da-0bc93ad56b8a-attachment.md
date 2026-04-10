# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIControl.spec.js >> Rahul Shetty asignment for login Page
- Location: tests\UIControl.spec.js:52:6

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
        - /url: http://qasummit.org/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - generic [ref=e25]:
      - heading "Your Orders" [level=1] [ref=e26]
      - table [ref=e27]:
        - rowgroup [ref=e28]:
          - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
            - columnheader "Order Id" [ref=e30]
            - columnheader "Product Image" [ref=e31]
            - columnheader "Name" [ref=e32]
            - columnheader "Price" [ref=e33]
            - columnheader "Ordered Date" [ref=e34]
            - columnheader "View" [ref=e35]
            - columnheader "Delete" [ref=e36]
        - rowgroup [ref=e37]:
          - row "69d84ff7f86ba51a655768b6 ZARA COAT 3 $ 11500 Fri Apr 10 View Delete" [ref=e38]:
            - rowheader "69d84ff7f86ba51a655768b6" [ref=e39]
            - cell [ref=e40]:
              - img [ref=e41]
            - cell "ZARA COAT 3" [ref=e42]
            - cell "$ 11500" [ref=e43]
            - cell "Fri Apr 10" [ref=e44]
            - cell "View" [ref=e45]:
              - button "View" [ref=e46] [cursor=pointer]
            - cell "Delete" [ref=e47]:
              - button "Delete" [ref=e48] [cursor=pointer]
          - row "69d27277f86ba51a6548e1e2 ZARA COAT 3 $ 11500 Sun Apr 05 View Delete" [ref=e49]:
            - rowheader "69d27277f86ba51a6548e1e2" [ref=e50]
            - cell [ref=e51]:
              - img [ref=e52]
            - cell "ZARA COAT 3" [ref=e53]
            - cell "$ 11500" [ref=e54]
            - cell "Sun Apr 05" [ref=e55]
            - cell "View" [ref=e56]:
              - button "View" [ref=e57] [cursor=pointer]
            - cell "Delete" [ref=e58]:
              - button "Delete" [ref=e59] [cursor=pointer]
          - row "69d26963f86ba51a6548cab0 ZARA COAT 3 $ 11500 Sun Apr 05 View Delete" [ref=e60]:
            - rowheader "69d26963f86ba51a6548cab0" [ref=e61]
            - cell [ref=e62]:
              - img [ref=e63]
            - cell "ZARA COAT 3" [ref=e64]
            - cell "$ 11500" [ref=e65]
            - cell "Sun Apr 05" [ref=e66]
            - cell "View" [ref=e67]:
              - button "View" [ref=e68] [cursor=pointer]
            - cell "Delete" [ref=e69]:
              - button "Delete" [ref=e70] [cursor=pointer]
          - row "69d26460f86ba51a6548c169 ZARA COAT 3 $ 11500 Sun Apr 05 View Delete" [ref=e71]:
            - rowheader "69d26460f86ba51a6548c169" [ref=e72]
            - cell [ref=e73]:
              - img [ref=e74]
            - cell "ZARA COAT 3" [ref=e75]
            - cell "$ 11500" [ref=e76]
            - cell "Sun Apr 05" [ref=e77]
            - cell "View" [ref=e78]:
              - button "View" [ref=e79] [cursor=pointer]
            - cell "Delete" [ref=e80]:
              - button "Delete" [ref=e81] [cursor=pointer]
          - row "69d2423ff86ba51a65485b78 ZARA COAT 3 $ 11500 Sun Apr 05 View Delete" [ref=e82]:
            - rowheader "69d2423ff86ba51a65485b78" [ref=e83]
            - cell [ref=e84]:
              - img [ref=e85]
            - cell "ZARA COAT 3" [ref=e86]
            - cell "$ 11500" [ref=e87]
            - cell "Sun Apr 05" [ref=e88]
            - cell "View" [ref=e89]:
              - button "View" [ref=e90] [cursor=pointer]
            - cell "Delete" [ref=e91]:
              - button "Delete" [ref=e92] [cursor=pointer]
          - row "69cfd72df86ba51a65444cfa ZARA COAT 3 $ 11500 Fri Apr 03 View Delete" [ref=e93]:
            - rowheader "69cfd72df86ba51a65444cfa" [ref=e94]
            - cell [ref=e95]:
              - img [ref=e96]
            - cell "ZARA COAT 3" [ref=e97]
            - cell "$ 11500" [ref=e98]
            - cell "Fri Apr 03" [ref=e99]
            - cell "View" [ref=e100]:
              - button "View" [ref=e101] [cursor=pointer]
            - cell "Delete" [ref=e102]:
              - button "Delete" [ref=e103] [cursor=pointer]
          - row "69cfd6def86ba51a65444ba6 ZARA COAT 3 $ 11500 Fri Apr 03 View Delete" [ref=e104]:
            - rowheader "69cfd6def86ba51a65444ba6" [ref=e105]
            - cell [ref=e106]:
              - img [ref=e107]
            - cell "ZARA COAT 3" [ref=e108]
            - cell "$ 11500" [ref=e109]
            - cell "Fri Apr 03" [ref=e110]
            - cell "View" [ref=e111]:
              - button "View" [ref=e112] [cursor=pointer]
            - cell "Delete" [ref=e113]:
              - button "Delete" [ref=e114] [cursor=pointer]
      - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
    - generic [ref=e117]:
      - button "Go Back to Shop" [ref=e118] [cursor=pointer]
      - button "Go Back to Cart" [ref=e119] [cursor=pointer]
  - generic "Order Placed Successfully" [ref=e121]
```

# Test source

```ts
  14  |    await page.locator("#okayBtn").click();
  15  |    //await page.pause();
  16  |    await page.locator("#terms").click();
  17  |    await expect(page.locator("#terms")).toBeChecked();
  18  |    await page.locator("#terms").uncheck();
  19  |    expect(await page.locator("#terms").isChecked()).toBeFalsy();
  20  |    await expect(documentLink).toHaveAttribute("class","blinkingText");
  21  |    
  22  | 
  23  | 
  24  | 
  25  | 
  26  | }); 
  27  | 
  28  | test('This is my second Test',async ({browser})=>
  29  | {
  30  |   
  31  |    const context = await browser.newContext();
  32  |    const page =  await context.newPage();
  33  |    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  34  |    const userName= page.locator("#username");
  35  |    const signInBtn=page.locator("#signInBtn");
  36  |    const documentLink=page.locator("[href*='documents-request']");
  37  |    
  38  |    const [newpage]=await Promise.all([
  39  |       context.waitForEvent('page'),
  40  |       documentLink.click(),
  41  | ])
  42  |    const text = await newpage.locator(".red").textContent();
  43  |    const arrayText =text.split("@");
  44  |    const domain = arrayText[1].split(" ")[0];
  45  |    await userName.fill(domain);
  46  |    await page.pause();
  47  |    console.log(await userName.inputValue());
  48  | 
  49  | 
  50  | }); 
  51  | 
  52  | test.only('Rahul Shetty asignment for login Page',async({browser})=>
  53  | {
  54  |    const email= "prashushinde431@gmail.com";
  55  |    const context=await browser.newContext();
  56  |    const Page =await context.newPage();
  57  |    const userName= Page.locator("#userEmail");
  58  |    const password = Page.locator("#userPassword");
  59  |    const loginBtn= Page.locator("#login");
  60  |    const product =  Page.locator(".card-body");
  61  |    await Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  62  |    
  63  |    await userName.fill("prashushinde431@gmail.com");
  64  |    await password.fill("Admin@123");
  65  |    await loginBtn.click();
  66  | 
  67  |   await Page.waitForLoadState('networkidle');
  68  |  // Page.locator(".card-body b").waitFor();
  69  |   await Page.locator(".card-body b").first().waitFor();
  70  |   const Listitles = await Page.locator(".card-body b").allTextContents();
  71  |   console.log(Listitles);
  72  |   const count = await product.count();
  73  |   const productName = "ZARA COAT 3";
  74  |   for (let i = 0; i < count; i++) {
  75  |       if(await product.nth(i).locator("b").textContent()== productName){
  76  |          await product.nth(i).locator("text=Add To Cart").click();
  77  |          break;
  78  |       }
  79  |    
  80  |   }
  81  |   await Page.locator("[routerlink='/dashboard/cart']").click();
  82  |   await Page.locator("div li").first().waitFor();
  83  |   const bool = await Page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  84  |   await expect(bool).toBeTruthy();
  85  |   await Page.locator("text=Checkout").click();
  86  |   await Page.locator("[placeholder='Select Country']").pressSequentially('ind',{delay:100});
  87  |   const dropdown = await Page.locator(".ta-results");
  88  |   await dropdown.waitFor();
  89  |   const optionCount =await dropdown.locator("button").count();
  90  |   for(let i=0;i<optionCount;++i){
  91  |     let text = await dropdown.locator("button").nth(i).textContent();
  92  |   
  93  |   if (text.trim() === "India") {
  94  |     await dropdown.locator("button").nth(i).click();
  95  |     break;
  96  |    }
  97  |   }
  98  |   expect(Page.locator(".user__name [type='text']").first()).toHaveText(email);
  99  |   await Page.locator(".action__submit").click();
  100 |   await expect(Page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  101 |   const orderId= await Page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  102 |   console.log(orderId);
  103 |   await Page.locator("button[routerlink*='myorders']").click();
  104 | 
  105 |   const row = Page.locator("tbody tr");
  106 |   
  107 |   for(let i=0;i<row.count();++i){
  108 |      const rowOrderid= row.locator("th").textContent();
  109 |      if(orderId.includes(rowOrderid)){
  110 |        await row.nth(i).locator("button").first().click();
  111 |        break;
  112 |      }
  113 |   }
> 114 |    const orderIdDetails = await page.locator(".col-text").textContent();
      |                           ^ ReferenceError: page is not defined
  115 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  116 | });
```