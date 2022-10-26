/// <reference types="cypress" />

import Products from '../../support/pageobjects/Products';
import FilterBar from '../../support/pageobjects/FilterBar';
describe('Verify Price Filters', () => {
  var filter;
  var products;
  beforeEach(() => {
    cy.visit('https://www.myer.com.au')
    cy.preventUnCaughtException();
    filter = new FilterBar();
    products = new Products();
  })

  it('Filter Kids Books By Price under 25', () => {
    cy.selectFromMenu('Toys', 'Kids Book')
    filter.filterBy('Price', 'Under 25');
    products.verifyPrice('<',0,25);
  })

  it('Filter M.A.C BeautyProducts By Price between 25 to 50', () => {
    cy.selectFromMenu('Beauty', 'M.A.C')
    filter.filterBy('Price', '25 to 50');
    products.verifyPrice('<=>',25,50);

  })

  it('Filter Christmas TechGifts By Price Over 500', () => {
    cy.selectFromMenu('Christmas', 'Tech & Gadget Gifts')
    filter.filterBy('Price', 'Over 500');
    products.verifyPrice('>',0,500);

  })
})
