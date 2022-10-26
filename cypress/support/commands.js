import appData from '../fixtures/data.json';

/**
* selectFromMenu(menuName,subMenuName)
* 
*  This method selects item from the NavBar and click it
*  This meehotd takes two parameters: menuName and subMenuName.
*  menuName : This is menu name we see on the main MenuBar.
*  subMenuName : This is a menu name we see after we hover over any item on the the main Menu Bar.
*/
Cypress.Commands.add('selectFromMenu', (menuName, subMenuName) => {
    cy.get('nav#navigation ul>li>button').contains(menuName).trigger('mouseover')
    cy.get('nav#navigation ul>li>div').contains(subMenuName).click();
    cy.get('h1[data-automation="product-listing-title"]').contains(subMenuName)
})




/**
* preventUnCaughtException()
* 
*  This method prevents any uncaught Exception while running Cypress Tests.
*/
Cypress.Commands.add('preventUnCaughtException', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


})

/**
* getAPetId()
* 
* This method calls the API for all available pets and returns a valid petID.
*/
Cypress.Commands.add('getAPetId', () => {
    cy.request({
        method: 'GET',
        url: appData.apiURL+'findByStatus?status=available',
    }).then((resp) => {
        expect(resp.status).to.eq(200)
        // var respBody = resp.body
         var petID = resp.body[0].id;
        //  cy.log(" resp body ="+JSON.stringify(resp.body))
        //  cy.log(" id ="+petID)
         return petID;
    })

})

/**
* findAPetById(petID)
* 
* This method calls the API to find the pet with the given ID.
* petID - the perID that needs to be passed on
* failOnStatusCode - true or false - to determine if the request shlould fail when the response is not 200 OK
*/
Cypress.Commands.add('findAPetById',(petID , failOnStatusCode) => {
    cy.request({
        method: 'GET',
        failOnStatusCode: failOnStatusCode,
        url: appData.apiURL + petID,
    }).then((resp) => {
       return resp
    })

})

/**
* updateAPetById(petID)
* 
* This method calls the API to find the pet with the given ID.
* petID - the perID that needs to be passed on
* petName - the petName to be updated with
*/
Cypress.Commands.add('updatePetName', (petID,petName) => {
    cy.request({
        method: 'POST',
        url: appData.apiURL + petID,
        form: true,
        body: {
            name: petName,
        },
    }).then((resp) => {
        expect(resp.status).to.eq(200)
        return resp.body
    })

})


/**
* deletePet(petID)
* 
* This method calls the API to delete the pet with the given ID.
* petID - the perID that needs to be passed on
*/
Cypress.Commands.add('deletePet', (petID) => {
    cy.request({
        method: 'DELETE',
        failOnStatusCode: false,
        url: appData.apiURL + petID,
    }).then((resp) => {
       return resp.status
    })

})