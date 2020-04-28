import Page from "./page";

class ItemPage extends Page {

    get quantity() { return $('#quantity_wanted')}
    get dropdown() { return $('#group_1')}
    get cart() { return $('#layer_cart')}
    get addToCart() {return $('#add_to_cart')}
    get colorPick() {return $('#color_to_pick_list')}
    chooseColor(color) {return this.colorPick.$('//*[@name="'+color+'"]')}

    addItemWith(quantity, size, color){
        this.quantity.setValue(quantity)
        this.dropdown.selectByVisibleText(size)
        this.chooseColor(color).click()
        this.addToCart.click()
        this.cart.waitForDisplayed()
    }
    waitForLoad(){
        $('.box-info-product').waitForDisplayed(10000)
    }
}

export default new ItemPage();