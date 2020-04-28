import Page from "./page";

class CartPage extends Page {

    get quantity(){return $$('input.cart_quantity_input')}

    itemQuantity(id){
        return this.quantity[id-1].getValue()
    }
    
    waitForLoad(){
        $('#cart_summary').waitForDisplayed(10000)
    }

    open(){
        super.open('index.php?controller=order')
    }
}

export default new CartPage();