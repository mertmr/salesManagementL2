React Js Project Usage Instructions

1. Click on the triangle play icon shown on the left side panel.
2. Scroll to the run bar.
3. You will find a dropdown in the top left side of the screen that says “Start&Debug”. -> You can click on this to start the application for previewing the project in browser and debugging.
4. The next entry is called “Test App” . You can use this to test your application when you have successfully completed the task set in the problem statement.
5. The next entry in the dropdown is called “Submit App”. You can select this entry and click on the play icon to submit your application code once you have completed all the tasks assigned.
   If the task is completed successfully an alphanumeric code will be displayed. This code needs to be pasted in the answer box provided in the platform,
   and the save answer button below it needs to be clicked to successfully complete evaluation.

Note: you need to click on the play icon selected in step 1 after selecting the required entry from dropdown mentioned in step 2 to experience the behaviour described above.

Note 2: Please ensure that instruction in step 5 is followed completely, otherwise your code may not be evaluated.

-----

Project description:

A trade company is building a centralized sale management system. You are asked to build a dashboard report of sales using the React js framework.

In this project a sale data entity consists of three fields; saleTotal, buyerName and creditCard. You will find the data in sales.json file in the public folder. You can use axios to retrieve data in App.js.

The application requires four dashboard reports. Implement the reports and import them in main App.js.  The behaviour of the four reports are described below:

1. Total Sale Report: Implement calculateTotalSale function in Reports.js. You must return the sum of all sales.
2. Total Cash Sale Report: Implement calculateTotalCashSale function in Reports.js. You must return the sum of all sales, creditCard attribute false ones.
3. Total Credit Card Sale Report: Implement calculateCreditCardSale function in Reports.js. You must return the sum of all sales, creditCard attribute true ones.
4. Buyer With Most Sale: Implement calculateBuyerWithMostSale function in Reports.js. You must return the buyer with the most saleTotal. Example: If
Alan Parsons is the person with the most purchased items, return Alan Parsons and sum of the purchases he made. Return format must be: {"buyerName": "Alan Parsons", "saleTotal": 1234}
   
It is given that each report has a different function in Reports.js, but each function will require the sale data. You can fetch the data with axios from sales.json file and pass them into these functions.

Your task is to complete the files:
src/App.js
src/Reports.js

Sale Data is in File:
public/sales.json

Note:
Do not change the function names and method types provided for you in the Reports.js, just fill them with the correct implementation. These will be imported and used for your evaluation.
Implementation related specifics are added directly as comments in the workspace.
Ensure that the structure and datatype of the components are followed as specified in the comments to ensure that the code is evaluated correctly.
Use the Test App button often as described in step 4, so you are guided by test error messages.
When you delete or edit something you shouldn't have, test messages will give an error accordingly.
Click the "submit app" in the run dropdown once all the tasks are completed. Once all tasks are successfully implemented, you will receive an answer key. Go back to the question and save the answer key in the text editor below.


