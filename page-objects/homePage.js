export default class FinalHomePage1{

nameInputBox = 'input[name="name"]:nth-child(2)' ;
selectGenderFromDropDown1 = '#exampleFormControlSelect1' ;
homePagePath = '/angularpractice/';
dataBindingSelector = 'input[name="name"]:nth-child(1)'
emailInputBox = "[name='email']";
    
    
    openAngularPracticeWebsite(){
cy.visit(this.homePagePath) ;
}

typeNameInTextBox(firstName){
    cy.get(this.nameInputBox).type(firstName);

   
}

typeEmailInTextBox(emailID){
    cy.get(this.emailInputBox).type(emailID);
}

selectGenderFromDropDown(gender){
cy.get(this.selectGenderFromDropDown1).select(gender);


}

verifyDataBindingExample(verifyName){
cy.get(this.dataBindingSelector).should('have.value',verifyName)

}

verifyMinimumLengthOfName(){
cy.get(this.nameInputBox).should('have.attr','minLength', 2);


}
verifyEnterpreneurButtonDisabled(){
cy.get('#inlineRadio3').should('be.disabled');

}


}