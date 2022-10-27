/// <reference types="cypress" />

import Products from '../../support/pageobjects/Products';
import FilterBar from '../../support/pageobjects/FilterBar';
import appData from '../../fixtures/data.json';

describe('Verify Pet Store API response', () => {
var petID;
var petName = appData.petName;
    it('Verify Find Pet by Id', () => {
        cy.getAPetId()
            .then(($id) => {
                petID = $id;
                cy.findAPetById(petID,true,200)
                    .then(($resp) => {
                        cy.log("**** Request Successful ***** ")
                        cy.log(" PetID :" + JSON.stringify($resp.body.id));
                        cy.log(" PetName :" + JSON.stringify($resp.body.name));
                        cy.log(" InStock? :" + JSON.stringify($resp.body.status));
                        expect($resp.status).to.eq(200)

                    })
            })
    })

    it('Update a Pet by Id', () => {
        cy.getAPetId()
            .then(($id) => {
                cy.updatePetName(petID,petName)
                    .then(($respBody) => {
                        cy.findAPetById(petID ,true,200)
                            .then(($resp) => {
                                cy.log("**** Request Successful ***** ")
                                cy.log(" PetID :" + JSON.stringify($resp.body.id));
                                cy.log(" PetName :" + JSON.stringify($resp.body.name));
                                cy.log(" Available ? :" + JSON.stringify($resp.body.status));

                                expect($resp.status).to.eq(200)
                                expect($resp.body.name).to.eq(petName)
                                expect($resp.body.id).to.eq(petID)
                            })

                    })
            })
    })

    it('Delete a Pet by Id', () => {
            cy.deletePet(petID)
                    .then(($respStatus) => {
                        expect($respStatus).to.eq(200)
                        cy.findAPetById(petID , false,404)
                            .then(($resp) => {
                                expect($resp.status).to.eq(404)
                            })

                    })
           
    })

})
   
afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
})