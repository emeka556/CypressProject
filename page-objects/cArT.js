export default class CartPagee {

    // selectors 
    checkoutBtnLoc = "button[type='button']";
    quantityLoc = "input.form-control[type='number']";
    
     // -----------------------------------------------------
    // Class methods for the Cart Page

    
    clickCheckout(){
        cy.get(this.checkoutBtnLoc).contains('Checkout').click();
    };

    
    verifyEachQuantityEq1(){
        // do a for loop to check if equal 1 = to check the quantity is 1
        cy.get(this.quantityLoc).as("itemsQuantities"); 
        cy.get("@itemsQuantities").each((itemQuantity) =>{
            cy.get(itemQuantity).should('have.value', 1)
        })
    }

     
         
   

}