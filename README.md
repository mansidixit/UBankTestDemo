# UBankTestDemo
This is a demo Cypress Test Demo

#How to get the project into your workspace

1) You must have node js installed . If not follow the link to install nodeJS : https://nodejs.org/en/download/
2) Clone the repo from : https://github.com/mansidixit/UBankTestDemo.git
3) Now open the project in VSCode Editor and open Terminal
4) Run "npm install" in your terminal . This will install all pacakages including cypress.

Your project is now setup!


#How to run the tests in your machine

1) After you have completed setting up the project, you need to run the tests. This project has follwing tests in two spec files:
        APITest.cy.js  -   To Test the APIs  
                - Find a Pet by ID
                - Update a Pet
                - Delete a Pet
        
        UITest.cy.js - To Test the UI for myer.com.au
                -Filter Kids Books By Sale of 20% off
                -Filter M.A.C BeautyProducts By Price between 10 to 200
                -Filter Christmas TechGifts By Price Over 50

2) Open your terminal and run  "npm run runTests" . This will run both the tests in headless mode and you can see the execution status in the terminal.

<img width="743" alt="image" src="https://user-images.githubusercontent.com/8281129/198167300-3eb0c60e-936a-46e2-8662-4c16ba77a2a7.png">

#How to generate reports
1) The project uses the mochawesome package as the reporting tool
2) The "npm run runTests" commands also generates the report in the results folder.
3) Since the config video is kept on in the cypress config, videos are also generated in Cypress

<img width="229" alt="image" src="https://user-images.githubusercontent.com/8281129/198168795-de49a538-f1ac-49f6-b1e3-8167a83bef16.png">

4)You can view the test results by opening the mochawesome.html file in Browser

<img width="626" alt="image" src="https://user-images.githubusercontent.com/8281129/198171199-953ee56a-88d4-42c1-9052-b9e47a26732c.png">
<img width="574" alt="image" src="https://user-images.githubusercontent.com/8281129/198171241-bcf1e1a2-10a6-4677-bfe8-9e1d05fe4877.png">







