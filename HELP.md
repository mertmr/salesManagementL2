Project description:
A trade company is building a centralized sale management system. This level task involves dashboard report of sales.
This front-end project is built using the React js framework.

Sale data entity consists of three fields; saleTotal, buyerName and creditCard. You will find the data in sales.json file in public folder.
Use axios to retrieve data in App.js.

The application requires the following four dashboard reports. Each report has a different function in Reports.js, 
implement them and use in main App.js. Each function will require the sale data, fetch it with axios from sales.json file and 
pass them into these functions. Implementation details below:

- Total Sale Report: Implement calculateTotalSale function in Reports.js. You must return sum of all sales.
- Total Cash Sale Report: Implement calculateTotalCashSale function in Reports.js. You must return sum of all sales, creditCard attribute false ones.
- Total Credit Card Sale Report: Implement calculateCreditCardSale function in Reports.js. You must return sum of all sales, creditCard attribute true ones.
- Buyer With Most Sale: Implement calculateBuyerWithMostSale function in Reports.js. You must return the buyer with most saleTotal. Example: If 
 Alan Parsons is the person with the most purchased items, return Alan Parsons and sum of the purchases he made. Return format must
  be: {"buyerName": "Alan Parsons", "saleTotal": 1234}

Note: Do not change the functions provided for you in the Reports.js, just fill them with the correct implementation. These will be used for your evaluation.
Implementation related specifics are added directly as comments in the workspace. Ensure that the structure and
datatype of the components are followed as specified in the comments to ensure that the code is evaluated correctly.
Use Test App button often as described below (4. step), so you will be guided by test error messages. When you delete or edit something you shouldn't have,
test messages will give an error accordingly.

Your task is to complete the files:
src/App.js
src/Reports.js

Sales Data in File:
public/sales.json

Click the "submit app" in the run dropdown once all the tasks are completed.
Once all tasks are successfully implemented, you will receive an answer key. Go back to the question and save the answer key in the text editor below.

---

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
