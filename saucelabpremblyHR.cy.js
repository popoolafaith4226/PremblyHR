describe('Sauce Demo Login and Sort Products', () => {

    it('logs in, sorts by name (A-Z)', () => {
        
      cy.visit('https://www.saucedemo.com/'); 
  
      // Login with correct credentials
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('.btn-primary').click();
  
      // Verify login 
      cy.get('.inventory_container').should('be.visible');
  
      // Get product names before sorting
      cy.get('.inventory_item_name').then(($elements) => {
        const namesBeforeSort = $elements.map((i, el) => el.textContent).get();
  
        // Sort product names alphabetically (ascending order)
        namesBeforeSort.sort();
  
        // Click the sort dropdown
        cy.get('.product_sort_container').click();
  
        // Select "Name (A to Z)"
        cy.get('.select_option').contains('Name (A to Z)').click();
  
        // Get product names after sorting
        cy.get('.inventory_item_name').then(($elements) => {
          const namesAfterSort = $elements.map((i, el) => el.textContent).get();
  
          // Assert that product names are sorted in ascending order
          expect(namesAfterSort).to.deep.equal(namesBeforeSort);
        });
      });
    });
  
    it('sorts by name (Z-A), and verifies sort order', () => {
      cy.visit('https://www.saucedemo.com/'); 
  
      // Login with correct credentials
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('.btn-primary').click();
  
      // Verify login 
      cy.get('.inventory_container').should('be.visible');
  
      // Get product names before sorting
      cy.get('.inventory_item_name').then(($elements) => {
        const namesBeforeSort = $elements.map((i, el) => el.textContent).get();
  
        // Click the sort dropdown
        cy.get('.product_sort_container').click();
  
        // Select "Name (Z to A)"
        cy.get('.select_option').contains('Name (Z to A)').click();
  
        // Get product names after sorting
        cy.get('.inventory_item_name').then(($elements) => {
          const namesAfterSort = $elements.map((i, el) => el.textContent).get();
  
          // Sort product names alphabetically (descending order)
          namesBeforeSort.sort().reverse();
  
          // Assert that product names are sorted in descending order
          expect(namesAfterSort).to.deep.equal(namesBeforeSort);
        });
      });
    });
  });
  