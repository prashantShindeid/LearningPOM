const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {CheckoutPage} = require('./CheckoutPage');
const {Orderreview}  = require('./Orderreview');

class POMmanager{

    constructor(page)
    {
      this.page = page;
      this.loginPage = new LoginPage(page);
      this.dashboardPage = new DashboardPage(page);
      this.checkoutPage = new CheckoutPage(page);
      this.orderReviewPage = new Orderreview(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getOrderReviewPage(){
        return this.orderReviewPage;
    }

}
module.exports = {POMmanager}