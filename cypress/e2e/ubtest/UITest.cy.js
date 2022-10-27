/// <reference types="cypress" />

import Products from '../../support/pageobjects/Products';
import FilterBar from '../../support/pageobjects/FilterBar';
describe('Verify Product Filters', () => {
  var filter;
  var products;
  beforeEach(() => {
    cy.visit('https://www.myer.com.au')
    cy.preventUnCaughtException();
    filter = new FilterBar();
    products = new Products();
  })

  it('Filter Kids Books By Sale of 20% off', () => {
    cy.selectFromMenu('Toys', 'Kids Book')
    filter.filterBy('Sales & Offers', '20% off');
    products.verifyPrice('<',0,25);
  })

  it('Filter M.A.C BeautyProducts By Price between 10 to 200', () => {
    cy.selectFromMenu('Beauty', 'M.A.C')
    filter.filterBy('Product Category', 'Makeup');
    products.verifyPrice('<=>',10,200);

   })

  it('Filter Christmas TechGifts By Price Over 50', () => {
    cy.selectFromMenu('Christmas', 'Tech & Gadget Gifts')
    filter.filterBy('Sales & Offers', '10% off');
    products.verifyPrice('>',0,50);

  })
})
