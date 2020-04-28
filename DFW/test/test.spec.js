import storePage from "../pageObjects/storePage";
import itemPage from "../pageObjects/itemPage";
import cartPage from "../pageObjects/cartPage";

describe('Test buying stuff', ()=>{

    beforeEach(()=>{
        storePage.open()
        storePage.waitForLoad()
    })

    it('Add item 1 to cart and check if quantity of this item is one',()=>{
        storePage.clickAddToCart(1)
        expect(storePage.quantityOfItem).toBe('1')
    })

    it('Add item 4 with quantity 4 and size l', ()=>{
        storePage.chooseProduct(3)
        itemPage.waitForLoad()
        itemPage.addItemWith(4, 'L', 'Pink')
        expect(storePage.quantityOfItem).toBe('4')
    })

    it('Add item 7 with quantity 3 and size s', ()=>{
        storePage.chooseProduct(6)
        itemPage.waitForLoad()
        itemPage.addItemWith(3, 'S', 'Green')
        expect(storePage.quantityOfItem).toBe('3')
    })

    it('Go to cart and check if all products are there',()=>{
        cartPage.open()
        cartPage.waitForLoad()
        expect(cartPage.itemQuantity(1)).toBe('1')
        expect(cartPage.itemQuantity(2)).toBe('4')
        expect(cartPage.itemQuantity(3)).toBe('3')
    })
})