/// <reference types="Cypress"/>


import ShoppingPage from "../page-objects/shop";
import CartPagee from "../page-objects/cArT";
import ChckoutPage from "../page-objects/chEckOutPage";

// instance of the class

const ShopPgeObj = new ShoppingPage();
const CartPgeObj = new CartPagee();
const CheckoutPgeObj = new ChckoutPage();



// test suite 
describe('Proto commerce rahulshetty', () => {

 



    it('place a phone order and check result.', () => {

      ShopPgeObj.openShoppingPage();
      ShopPgeObj.addSamsungNoteToCart(); // add Samsung Note
      ShopPgeObj.addBlackberryToCart(); // add Blackberry
      ShopPgeObj.clickCheckout();   //to click checkout

      CartPgeObj.verifyEachQuantityEq1(); 
      
      CartPgeObj.clickCheckout();

      CheckoutPgeObj.typeInCity('Ire'); //Typing Ire to filter Ireland
      CheckoutPgeObj.chooseCity();       
      CheckoutPgeObj.tickCheckbox();
      CheckoutPgeObj.clickPurchaseBtn();
      CheckoutPgeObj.verifySuccess();
    })
})












/* 

describe('RahulShetty shopping', () => {
    it('Place an order and check result', () => {
      
      cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
      
 
    // Add Samsung Note8 
    cy.get(':nth-child(2) > .card > .card-footer > .btn').click();

    // Add Blackberry
    cy.get(':nth-child(4) > .card > .card-footer > .btn').click();
    
    // Click on Checkout
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();

    // click on Checkout Box
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click();

   
    // Enter City
    cy. get('#country'). type('Dublin' );
    

    
    // Tick the "Agree to the Terms & Conditions" checkbox   //
    cy.get('.checkbox').click();
      
    //Click on Purchase
    cy.get('.ng-untouched > .btn').click();


    // Check for the Success message
    cy.get('.alert') .should('contain.text', 'Thank you! Your order will be delivered in next few weeks :-).');

   // 
        



          });
});

*/