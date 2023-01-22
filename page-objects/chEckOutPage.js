export default class ChckoutPage {

    // selectors 

    countryFieldLoc = '#country';
    countriesFilterList = 'div.suggestions ul li a'; // get all, we just take first 
    chckboxLoc = "#checkbox2[type='checkbox']";
    purchaseButton = "input[value='Purchase']";
    successMsgLoc = 'div.alert';

  
     

    typeInCity(in_string){
        cy.get(this.countryFieldLoc).type(in_string)
    };

    chooseCity(){
        
          
        cy.get(this.countriesFilterList, {timeout:20000}).click();
    };

    tickCheckbox(){
        cy.get(this.chckboxLoc, {force: true}).check({force: true});
    };

    clickPurchaseBtn(){
        cy.get(this.purchaseButton).click();
    };

    verifySuccess(){
        cy.get(this.successMsgLoc).should('contain.text', 'Thank you! Your order will be delivered in next few weeks :-).');
        //cy.get('.alert') .should('contain.text', 'Thank you! Your order will be delivered in next few weeks :-).');
    };

}