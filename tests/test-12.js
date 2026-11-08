/* TEST 12 — Microsoft Excel (50 MCQs)
   Sub-topics: Excel Basics, Formulas & Operators, Functions, Cell References, Formatting, Data Tools, Charts, Shortcut Keys, Errors
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Microsoft Excel",
  questions: [
  {"type":"misc","topic":"Formulas & Operators","q":"Which of the following is NOT an arithmetic operator in Excel?","o":["&","^","*","/"],"a":0,"e":"& joins text. ^, * and / are arithmetic operators."},

  {"type":"real","topic":"Formatting","q":"A sheet has 500 rows and the heading row must remain visible while scrolling down. What should be used?","o":["Merge & Center","Freeze Panes","Wrap Text","Data Validation"],"a":1,"e":"Freeze Panes (View tab) keeps the selected rows or columns on screen while scrolling."},

  {"type":"real","topic":"Formatting","q":"A salary column should be shown with the rupee symbol and two decimals. Which option is used?","o":["Merge & Center","Sort A to Z","Freeze Panes","Format Cells → Currency"],"a":3,"e":"The Currency (or Accounting) number format displays the symbol and decimals."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the shortcut key (List I) with its action (List II):","l":["Ctrl + Home","Ctrl + End","F2","Alt + ="],"r":["Edit the active cell","Go to cell A1","Insert AutoSum","Go to the last used cell"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"Shortcut keys: Ctrl + Home – Go to cell A1; Ctrl + End – Go to the last used cell; F2 – Edit the active cell; Alt + = – Insert AutoSum."},

  {"type":"match","topic":"Functions","q":"Match the function (List I) with its purpose (List II):","l":["COUNT","COUNTA","COUNTBLANK","COUNTIF"],"r":["Counts non-empty cells","Counts cells that meet a condition","Counts cells containing numbers","Counts empty cells"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":1,"e":"Counting functions: COUNT – Counts cells containing numbers; COUNTA – Counts non-empty cells; COUNTBLANK – Counts empty cells; COUNTIF – Counts cells that meet a condition."},

  {"type":"misc","topic":"Charts","q":"Which one is different from the others?","o":["Pie","Column","Sort","Line"],"a":2,"e":"Pie, Column and Line are chart types. Sort is a data command."},

  {"type":"real","topic":"Functions","q":"A clerk wants to show \"Pass\" if the marks in A1 are 35 or more, otherwise \"Fail\". Which formula should be used?","o":["=IF(A1<=35,\"Pass\",\"Fail\")","=IF(A1>=35,\"Pass\",\"Fail\")","=IF(A1>=35,\"Fail\",\"Pass\")","=SUM(A1>=35,\"Pass\",\"Fail\")"],"a":1,"e":"IF tests the condition A1>=35. If true it shows Pass; otherwise Fail."},

  {"type":"stmt","topic":"Functions","q":"Consider the following statements:\n1. =SUM(A1:A5) adds the values in A1 to A5.\n2. =AVERAGE(A1:A5) gives the middle value (median).\n3. =MAX(A1:A5) gives the largest value.\n4. =MIN(A1:A5) gives the largest value.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"AVERAGE gives the arithmetic mean, and MIN gives the smallest value. Statements 1 and 3 are correct."},

  {"type":"match","topic":"Charts","q":"Match the chart type (List I) with its best use (List II):","l":["Pie","Line","Column","Scatter"],"r":["Relationship between two numeric variables","Parts of a whole","Comparing values across categories","Trend over time"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-3, C-4, D-1"],"a":2,"e":"Chart types: Pie – Parts of a whole; Line – Trend over time; Column – Comparing values across categories; Scatter – Relationship between two numeric variables."},

  {"type":"real","topic":"Data Tools","q":"A big staff list has many departments. The clerk wants to see only the employees of one department. Which feature should be used?","o":["Sort","Freeze Panes","Merge & Center","Filter"],"a":3,"e":"Filter shows only the rows that match the condition and hides the others."},

  {"type":"match","topic":"Excel Basics","q":"Match the file extension (List I) with its meaning (List II):","l":[".xlsx",".xls",".xlsm",".csv"],"r":["Comma-separated values file","Excel 97–2003 workbook","Excel workbook (2007 onwards)","Macro-enabled workbook"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":1,"e":"Excel file types: .xlsx – Excel workbook (2007 onwards); .xls – Excel 97–2003 workbook; .xlsm – Macro-enabled workbook; .csv – Comma-separated values file."},

  {"type":"stmt","topic":"Errors","q":"Consider the following statements:\n1. #NAME? appears when a number is divided by zero.\n2. #REF! appears when a formula refers to an invalid cell.\n3. ##### appears when a column is too narrow to show the value.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"#DIV/0! is the division-by-zero error. #NAME? appears for an unrecognised name or function. Statement 1 is wrong."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. Ctrl + End goes to cell A1.\n2. Ctrl + Space selects the entire row.\n3. Shift + Space selects the entire row.\n4. F5 edits the active cell.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"Ctrl + Home goes to A1, Ctrl + Space selects a column, and F2 edits the cell (F5 opens Go To). Only statement 3 is correct."},

  {"type":"stmt","topic":"Data Tools","q":"Consider the following statements about the Data tab:\n1. Sort arranges data in ascending or descending order.\n2. Filter displays only the rows that meet the given condition.\n3. Data Validation restricts the type of data entered in a cell.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"stmt","topic":"Charts","q":"Consider the following statements about charts:\n1. A pie chart is useful to show the parts of a whole.\n2. A line chart cannot show a trend over time.\n3. Charts can be created from the Insert tab.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Line charts are widely used to show trends over time. Statement 2 is wrong."},

  {"type":"pair","topic":"Excel Basics","q":"Choose the INCORRECTLY matched pair:","o":["Row – Horizontal set of cells","Column – Vertical set of cells","Worksheet – Grid of rows and columns","Workbook – A single worksheet only"],"a":3,"e":"A workbook is a file that can contain many worksheets."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. Alt + Enter starts a new line inside a cell.\n2. Ctrl + ; enters the current date.\n3. Ctrl + Home moves to cell A1.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"real","topic":"Cell References","q":"Prices are in A2:A10 and the tax rate is in B1. C2 contains =A2*B1. When copied down, the result goes wrong. Which formula should be in C2?","o":["=A2*$B$1","=$A$2*B1","=A$2*B1","=A2*B2"],"a":0,"e":"The tax rate cell must stay fixed, so B1 must be absolute ($B$1), while A2 should change."},

  {"type":"match","topic":"Excel Basics","q":"Match the part of the Excel window (List I) with its use (List II):","l":["Name Box","Formula Bar","Sheet tab","Fill handle"],"r":["Shows the name of a worksheet","Shows the address of the active cell","Small square used to copy or fill data","Shows the contents of the active cell"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":1,"e":"Excel window parts: Name Box – Shows the address of the active cell; Formula Bar – Shows the contents of the active cell; Sheet tab – Shows the name of a worksheet; Fill handle – Small square used to copy or fill data."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the correctly matched pair:","o":["Ctrl + ; – Enter today's date","Ctrl + Home – Go to the last cell","Alt + = – Format Cells","F2 – Save As"],"a":0,"e":"Ctrl + ; enters the current date. Ctrl + Home goes to A1, Alt + = inserts AutoSum, and F12 is Save As."},

  {"type":"match","topic":"Excel Basics","q":"Match the ribbon tab (List I) with the commands it contains (List II):","l":["Data","Insert","Formulas","View"],"r":["Charts and PivotTables","Freeze Panes","Sort and Filter","Function Library"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Excel ribbon tabs: Data – Sort and Filter; Insert – Charts and PivotTables; Formulas – Function Library; View – Freeze Panes."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the INCORRECTLY matched pair:","o":["Alt + Enter – New line in the same cell","F4 – Spell check","Ctrl + Home – Go to A1","Shift + F11 – Insert a new worksheet"],"a":1,"e":"F7 is the spell check key. F4 toggles reference types while editing a formula."},

  {"type":"match","topic":"Cell References","q":"Match the reference (List I) with its type (List II):","l":["A1","$A$1","A$1","$A1"],"r":["Absolute reference","Mixed reference, column fixed","Relative reference","Mixed reference, row fixed"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Cell reference types: A1 – Relative reference; $A$1 – Absolute reference; A$1 – Mixed reference, row fixed; $A1 – Mixed reference, column fixed."},

  {"type":"pair","topic":"Errors","q":"Choose the INCORRECTLY matched pair:","o":["#DIV/0! – Division by zero","#N/A – Column too narrow","#REF! – Invalid cell reference","#NAME? – Unrecognised function name"],"a":1,"e":"#N/A means a value is not available. A column that is too narrow shows #####."},

  {"type":"stmt","topic":"Excel Basics","q":"Consider the following statements:\n1. Excel is spreadsheet software.\n2. The intersection of column B and row 3 is cell B3.\n3. The last column in Excel 2007 and later is IV.\n4. Rows are numbered and columns are lettered.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"The last column is XFD (16,384th). IV was the last column of older versions. Only statement 3 is not correct."},

  {"type":"real","topic":"Errors","q":"After typing a long number in a narrow column, a cell shows #####. What should the user do?","o":["Increase the column width","Delete the cell","Rename the worksheet","Sort the column"],"a":0,"e":"##### means the column is too narrow to display the value; widening it fixes the problem."},

  {"type":"stmt","topic":"Formulas & Operators","q":"Consider the following statements:\n1. =2+3*4 gives 14.\n2. =(2+3)*4 gives 25.\n3. =2^3 gives 8.\n4. =10/2*5 gives 25.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":1,"e":"=(2+3)*4 gives 5*4 = 20, not 25. Statement 2 is wrong."},

  {"type":"stmt","topic":"Excel Basics","q":"Consider the following statements:\n1. A workbook is a file that can contain one or more worksheets.\n2. A worksheet is made up of rows and columns.\n3. An Excel 2007 worksheet has only 256 columns.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Excel 2007 and later have 16,384 columns (A to XFD). The 256 columns (A to IV) belong to older versions. Statement 3 is wrong."},

  {"type":"stmt","topic":"Cell References","q":"Consider the following statements:\n1. A relative reference does not change when the formula is copied.\n2. $A$1 is an absolute reference.\n3. Pressing F4 while editing a reference cycles through the reference types.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"A relative reference changes when copied. Statement 1 is wrong."},

  {"type":"match","topic":"Errors","q":"Match the error value (List I) with its cause (List II):","l":["#DIV/0!","#NAME?","#REF!","#####"],"r":["Column too narrow to show the value","Division by zero","Invalid cell reference","Unrecognised function or name"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-3, C-4, D-1"],"a":2,"e":"Excel error values: #DIV/0! – Division by zero; #NAME? – Unrecognised function or name; #REF! – Invalid cell reference; ##### – Column too narrow to show the value."},

  {"type":"stmt","topic":"Data Tools","q":"Consider the following statements:\n1. Data Validation restricts the data that can be entered.\n2. Remove Duplicates deletes repeated rows.\n3. Sort can arrange data only in ascending order.\n4. Filter permanently deletes the rows that do not match.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Sort works in ascending and descending order, and Filter only hides the rows that do not match. Statements 3 and 4 are not correct."},

  {"type":"direct","topic":"Formulas & Operators","q":"In MS Excel, a formula is normally started with the sign","o":["=","#","$","%"],"a":0,"e":"A formula starts with the equals sign (=)."},

  {"type":"misc","topic":"Functions","q":"Which of the following is NOT an Excel function?","o":["SUM","AVERAGE","COUNTA","TOTALSUM"],"a":3,"e":"SUM, AVERAGE and COUNTA are Excel functions. TOTALSUM does not exist."},

  {"type":"stmt","topic":"Charts","q":"Consider the following statements:\n1. A pie chart shows the data of a single series as slices.\n2. A column chart compares values across categories.\n3. Charts can be inserted from the Insert tab.\n4. F11 creates a chart of the selected data on a new chart sheet.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"pair","topic":"Functions","q":"Choose the correctly matched pair:","o":["=MAX(A1:A3) – Largest value","=MIN(A1:A3) – Largest value","=COUNT(A1:A3) – Average of the values","=SUM(A1:A3) – Smallest value"],"a":0,"e":"MAX gives the largest value. MIN gives the smallest, COUNT counts numeric cells and SUM adds."},

  {"type":"stmt","topic":"Functions","q":"Consider the following statements:\n1. COUNT counts only the cells that contain numbers.\n2. COUNTA counts all the non-empty cells.\n3. COUNTBLANK counts the cells that contain zero.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"COUNTBLANK counts empty cells; a cell containing 0 is not empty. Statement 3 is wrong."},

  {"type":"stmt","topic":"Cell References","q":"Consider the following statements:\n1. An absolute reference is written as A1.\n2. A$1 is a mixed reference with the column fixed.\n3. $A1 is a mixed reference with the row fixed.\n4. $A$1 is an absolute reference.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"A1 is relative. A$1 fixes the row and $A1 fixes the column. Only statement 4 is correct."},

  {"type":"stmt","topic":"Formatting","q":"Consider the following statements:\n1. Merge & Center joins the selected cells into one cell and centres the content.\n2. Wrap Text stops the text from wrapping inside a cell.\n3. Freeze Panes keeps the selected rows or columns visible while scrolling.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"Wrap Text shows long text on multiple lines inside the cell. Statement 2 is wrong."},

  {"type":"real","topic":"Charts","q":"A department wants to show how much each section contributes to the total budget. Which chart is the most suitable?","o":["Pie chart","Line chart","Scatter chart","Radar chart"],"a":0,"e":"A pie chart shows each part's share of the whole."},

  {"type":"misc","topic":"Excel Basics","q":"Which of the following is NOT a valid cell address in Excel?","o":["7B","B7","AA10","Z100"],"a":0,"e":"A cell address has the column letter(s) first and then the row number, so 7B is invalid."},

  {"type":"stmt","topic":"Functions","q":"Consider the following statements, if cell A1 contains the text Computer:\n1. =LEN(A1) gives 8.\n2. =LEFT(A1,3) gives Com.\n3. =MID(A1,2,3) gives omp.\n4. =RIGHT(A1,3) gives put.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"=RIGHT(A1,3) gives the last three characters, ter. Statements 1, 2 and 3 are correct."},

  {"type":"match","topic":"Functions","q":"Match the function (List I) with its result (List II):","l":["LEN","UPPER","TRIM","PROPER"],"r":["Removes extra spaces","Number of characters in the text","Capitalises the first letter of each word","Converts text to capital letters"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Text functions: LEN – Number of characters in the text; UPPER – Converts text to capital letters; TRIM – Removes extra spaces; PROPER – Capitalises the first letter of each word."},

  {"type":"direct","topic":"Excel Basics","q":"The default file extension of an Excel 2016 workbook is","o":[".xls",".xlsx",".csv",".xltx"],"a":1,"e":"Excel 2007 and later save workbooks as .xlsx by default."},

  {"type":"direct","topic":"Excel Basics","q":"The intersection of a row and a column in an Excel worksheet is called a","o":["Range","Workbook","Cell","Field"],"a":2,"e":"A cell is the box where a row and a column meet; its address is like B3."},

  {"type":"match","topic":"Formulas & Operators","q":"Match the operator (List I) with its meaning (List II):","l":["^","*","&","/"],"r":["Division","Exponent (power)","Multiplication","Joins text"],"o":["A-3, B-2, C-4, D-1","A-2, B-3, C-1, D-4","A-2, B-3, C-4, D-1","A-2, B-4, C-3, D-1"],"a":2,"e":"Operators: ^ – Exponent (power); * – Multiplication; & – Joins text; / – Division."},

  {"type":"stmt","topic":"Formatting","q":"Consider the following statements:\n1. Text is left-aligned by default in a cell.\n2. Numbers are right-aligned by default in a cell.\n3. Excel stores dates as text and cannot calculate with them.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"Excel stores dates as serial numbers, so date calculations are possible. Statement 3 is wrong."},

  {"type":"stmt","topic":"Formulas & Operators","q":"Consider the following statements:\n1. An Excel formula normally begins with the = sign.\n2. A formula cannot contain cell references.\n3. The formula bar shows the formula, while the cell shows its result.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Formulas can use cell references such as =A1+B1. Statement 2 is wrong."},

  {"type":"real","topic":"Functions","q":"A teacher's cells B2:B6 contain 40, AB (typed for absent), 55, an empty cell and 65. She types =COUNT(B2:B6). What is displayed?","o":["2","4","5","3"],"a":3,"e":"COUNT counts only numeric cells: 40, 55 and 65. The text AB and the empty cell are ignored."},

  {"type":"misc","topic":"Formulas & Operators","q":"Arrange the steps in the order in which Excel evaluates =2+3*4^2:\nA. Add 2 to the product\nB. Multiply 3 by the result of 4^2\nC. Calculate 4^2","o":["C, A, B","B, C, A","A, B, C","C, B, A"],"a":3,"e":"Exponent first (16), then multiplication (48), then addition (50)."},

  {"type":"pair","topic":"Charts","q":"Choose the correctly matched pair:","o":["Line chart – Divides data into slices","Pie chart – Parts of a whole","Column chart – Shows data as a circle","Scatter chart – Shows only text data"],"a":1,"e":"A pie chart shows parts of a whole. The other pairs are mismatched."}
  ]
};
