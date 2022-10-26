import appData from '../../fixtures/data.json';
class FilterBar {

    filterBy(menuName, subMenuName) {
       
        cy.get('#filters-category-container > div > div  button').contains(menuName).click({ force: true });
        cy.get('#filters-category-container > div > div > div').contains(subMenuName).click({ force: true });
        cy.wait(appData.shortWaitTime);
        cy.get('#filters-category-container div[data-automation="applied-filter-tags"]').contains(subMenuName)
    }
}
export default FilterBar