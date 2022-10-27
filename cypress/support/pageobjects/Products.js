class Products {
    /**
     * verifyPrice(operator,price)
     * 
     *  This method verifies if the list of products displayed on the page match the price expected
     *  It takes two arguments:
     *       operator : expected values are '<' , '>' , '<=> (use this to compare in between values)'
     *       price : the price to compare to        
     */
    verifyPrice(operator, lowerPrice, UpperPrice) {
        cy.get('li[data-automation="product-grid-item"] span[data-automation="product-price-was"]')
            .then(($els) => Cypress._.map($els, 'innerText').toString())
            .invoke('replaceAll', '$', '')
            .then(($priceStr) => {
                var priceArr = $priceStr.split(',')
                for (var i = 0; i < priceArr.length; i++) {
                    if (operator == '<') {
                        expect(parseFloat(priceArr[i])).to.be.lessThan(UpperPrice);
                    }
                    else if (operator == '<=>') {
                        expect(parseFloat(priceArr[i])).to.be.within(lowerPrice, UpperPrice);
                    }
                    else if (operator == '>') {
                        expect(parseFloat(priceArr[i])).to.be.greaterThan(UpperPrice);
                    }
                }
            })


    }
}
export default Products