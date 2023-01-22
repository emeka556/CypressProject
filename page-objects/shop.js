export default class ShoppingPage{

    // selectors 
    checkoutBtnLoc = 'a.nav-link';

    //productPgItemsLoc = 'app-card-list app-card'; 
    
  

    openShoppingPage(){
        cy.visit('/angularpractice/shop');
    }

    clickCheckout(){
        cy.get(this.checkoutBtnLoc).contains('Checkout').click();
    };

    

    addSamsungNoteToCart(){
        cy.get(':nth-child(2) > .card > .card-footer > .btn').click();
    }  

    addBlackberryToCart(){
        cy.get(':nth-child(4) > .card > .card-footer > .btn').click();
    }  

   
     
 }
