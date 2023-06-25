Cypress.Commands.add('clickOpenInSameTab', (linkSelector) => {
  cy.get(linkSelector)
    .invoke('removeAttr', 'target') //remove target attribute so page opens in same tab
    .click();
});
