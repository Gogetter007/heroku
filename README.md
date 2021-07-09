# heroku
Comprises of Herokuapp webpage automation

Please find the code snippets at Cypress->Integration/Practise->Dropdown.js & Inputs.js

Task Completion status:
### Build a web ui automation framework using cypress/protractor/any JavaScript UI tool -
a. Use the provided url to test any 2 of the points mentioned in the website. → (Mandatory) - (COMPLETED using CYPRESS)
b. Provide report of the tests after every run. → (Not Mandatory but If Done Extra 5 Points for this) - (COMPLETED)

## UI Automation Task

In this File I'm going to explain <b>How to configure </b> and <b>Run this Framework</b>

The tech stack used for developing this framework are:
1. **JAVASCRIPT** as the programming language for writing test code
2. **Cypress** as the UI/frontend automation tool
3. **Visual studio Code** as the preferred IDE for writing javaScript code.

#### Getting Started
Setup your machine.
1. Install Visual studio Code
2. Install Cypress and dependencies(For UI Automation)
3. Install mochawesome and dependencies(For report generation)

#### Running tests
1. Clone the project from Github
2. npm i - Install all the dependencies
3. Run npx cypress open to open & execute the tests in Test Runner | Run npx cypress run to execute the tests in CLI

---

#### Reason to choose Cypress as the Automation tool:
1. Debuggability: Stop guessing why your tests are failing. 
2. Automatic Waiting: Never add waits or sleeps to your tests.
3. Consistent Results: Architecture doesn’t use Selenium or WebDriver.
4. Screenshots and Videos: We can view screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.
5. Cross browser Testing
6. Maintainable 
7. Easy to write End-to-end/Integration/Unit tests.


### Tests

#### Step 1: Navigate to the folder location in the terminal and enter
			 npm init 

#### Step 2: All possible dependencies are downloaded and a package.json 			  file is created.

#### Step 3: Further, use npm install cypress --save-dev  so that    				 cypress and all relevant dependencies are downloaded.

#### Step 4: Install mochawesome using the following commands:
			 npm install mocha --save-dev
			 npm install cypress-multi-reporters --save-dev
			 npm install mochawesome--save-dev
			 npm install mochawesome-merge  --save-dev  
			 npm install mochawesome-report-generator  --save-dev

#### Step 5: Add the following lines in your package.json file
			  "merge:reports": "mochawesome-merge mochawesome-report/*.json > cypress-combined-report.json",
			  "create:html:report": "npm run merge:reports && marge --reportDir TestReport cypress-combined-report.json"

				
#### Step 6: Run npx cypress open to open & execute the tests in Test 				 Runner | Run npx cypress run to execute the tests in CLI

#### Step 7: We can examine the Framework execution by referring to HTML 			  report and Log.

### Framework Folder Structure

### Project Folder- Root Directory
	
	### /Users/arjun.m/Desktop/heroku/cypress/integration/Practise 	stores the root folder
	###input.js: Automates the INPUT element
	###dropDown.js: Automates the DROPDOWN element
	### package.json: holds various metadata relevant to the project.
	### cypress.json: configuration file
		
	
*** UIAutoReadMe.md - Details about the project - ***
