import Page from "./page";

class StorePage extends Page {

    get logo() { return $('#header_logo')}
    get cartModal() { return $('#layer_cart')}
    get continueButton(){ return $('.continue.btn')}
    get quantityOfItem(){ return this.cartModal.$('#layer_cart_product_quantity').getText()}
    get cartButton() { return $('.shopping_cart')}

    addToCartButton(id){return $('//*[@data-id-product="'+id+'"]')}
    productContainter(id) {return $$('.product-container')[id]}

    chooseProduct(id){
        this.productContainter(id).click()
    }

    clickAddToCart(id){
        this.productContainter(id-1).scrollIntoView({block:'center'})
        this.productContainter(id-1).moveTo()
        this.addToCartButton(id).waitForDisplayed()
        this.addToCartButton(id).click()
        this.cartModal.waitForDisplayed()
    }
    continueShopping(){
        this.continueButton.click()
        browser.pause(1000)
    }

    waitForLoad(){
        this.logo.waitForDisplayed()
    }


    open(){
        super.open('index.php')
    }
}

export default new StorePage();