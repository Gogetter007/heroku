//Firstly, we validate if we are landing on the right page

describe('herokuValidation', ()=> {
    context('Herokuapp home page',() =>{
        beforeEach('Visitng herokuapp page',()=>{
            cy.visit('http://the-internet.herokuapp.com/');
            cy.wait(2000)
        });

        it('contains header',()=>{
            cy.contains('Welcome to the-internet');
        });

        it('contains sub-header',()=>{
            cy.contains('Available Examples');
        });

        //Input values
        describe('Navigate to Inputs page',()=>{
            beforeEach('click on the Dropdown page',()=>{
                cy.get('#content > ul > li',{timeout:4000}).contains('Inputs').click();
            });

            afterEach('Navigate back to Home page', ()=>{
                cy.go('back');
            });

            it('Enter values into the input field',()=>{
                cy.get('input').type('123456789');
                cy.wait(4000)
            })
            
            });
        });
    });