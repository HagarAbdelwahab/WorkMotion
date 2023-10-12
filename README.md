# Project : WorkMotion -- kpfoafpkoa

## Description : 
A test scenario to automate adding a new talent and verifying that the talent's status to be On Boarding. 

## Technologies
cypress : 3.8.3,

## Project Organization : 
Test Data files : 
* /workMotionTask/cypress/fixtures/locators.json : used for reading the web elements.
* /workMotionTask/cypress/fixtures/userDetails.json : used for reading the talent data.


Test Classes : 
* /workMotionTask/cypress/integration/AddingTalent.spec.js : to simulate the test scenaio of adding a new talent and asserting on its status


Page Object Model Classes : 
* /workMotionTask/cypress/pages/.* : each class represents a page we have interacted with its elements



## Setup : 
Run `npx cypress open`

