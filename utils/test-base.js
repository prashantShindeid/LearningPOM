const {test:base} = require('@playwright/test');

exports.customtest = base.extend( {
        testDataForOrder: async({}, use)=> {
            await use({
            email: "prashushinde431@gmail.com",
            password : "Admin@123",
            productName : "ZARA COAT 3"
            });

        }
});