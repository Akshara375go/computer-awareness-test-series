/* TEST 11 — Microsoft Word (50 MCQs)
   Sub-topics: Word Basics, Formatting, Page Layout, Insert & Tables, Review & Proofing, Mail Merge, Shortcut Keys, References & Views
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Microsoft Word",
  questions: [
  {"type":"pair","topic":"Page Layout","q":"Choose the INCORRECTLY matched pair:","o":["Portrait – Taller than wide","Landscape – Wider than tall","Justify – Aligns text to both margins","Centre – Aligns text to the right margin"],"a":3,"e":"Centre alignment places text in the middle of the page."},

  {"type":"real","topic":"Word Basics","q":"Before taking a printout, a user wants to see how the document will look on paper. What should she use?","o":["Print Preview","Thesaurus","Mail Merge","Word Count"],"a":0,"e":"Print Preview (File → Print or Ctrl + P) shows the document as it will be printed."},

  {"type":"misc","topic":"References & Views","q":"Which of the following is NOT a view in MS Word?","o":["Print Layout","Slide Sorter","Read Mode","Outline"],"a":1,"e":"Slide Sorter is a PowerPoint view. Word has Print Layout, Read Mode, Web Layout, Outline and Draft."},

  {"type":"match","topic":"References & Views","q":"Match the term (List I) with its meaning (List II):","l":["Header","Footer","Footnote","Endnote"],"r":["Note at the bottom of the same page","Note at the end of the document","Repeated text in the top margin","Repeated text in the bottom margin"],"o":["A-4, B-3, C-1, D-2","A-3, B-4, C-1, D-2","A-3, B-4, C-2, D-1","A-3, B-1, C-4, D-2"],"a":1,"e":"Headers, footers and notes: Header – Repeated text in the top margin; Footer – Repeated text in the bottom margin; Footnote – Note at the bottom of the same page; Endnote – Note at the end of the document."},

  {"type":"stmt","topic":"Word Basics","q":"Consider the following statements:\n1. Save As allows a file to be saved with a new name or in a different format.\n2. Ctrl + S saves the document.\n3. A Word document can be saved as a PDF.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"direct","topic":"Word Basics","q":"The default file extension of a document created in MS Word 2016 is","o":[".doc",".txt",".docx",".dotx"],"a":2,"e":"Word 2007 and later save documents as .docx by default."},

  {"type":"real","topic":"Review & Proofing","q":"In a long document, the clerk wants to change every \"Mr.\" into \"Shri\". Which feature is best?","o":["Replace (Ctrl + H)","Go To (Ctrl + G)","Thesaurus (Shift + F7)","Hyperlink (Ctrl + K)"],"a":0,"e":"Find and Replace changes all occurrences of a word at once."},

  {"type":"misc","topic":"Formatting","q":"Which of the following is NOT a paragraph alignment option in Word?","o":["Left","Diagonal","Right","Justify"],"a":1,"e":"Paragraph alignment options are Left, Centre, Right and Justify."},

  {"type":"stmt","topic":"Mail Merge","q":"Consider the following statements:\n1. Mail Merge is found in the Mailings tab.\n2. A Mail Merge needs a main document.\n3. A data source such as an Excel sheet can supply the recipient details.\n4. Envelopes and labels can be created from the Mailings tab.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"match","topic":"Formatting","q":"Match the feature (List I) with its purpose (List II):","l":["Format Painter","Drop Cap","WordArt","Watermark"],"r":["Faint text behind the page content","Copies formatting to other text","Decorative text","Large first letter of a paragraph"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Formatting features: Format Painter – Copies formatting to other text; Drop Cap – Large first letter of a paragraph; WordArt – Decorative text; Watermark – Faint text behind the page content."},

  {"type":"stmt","topic":"Formatting","q":"Consider the following statements about Format Painter:\n1. It copies the formatting, not the text.\n2. A single click on it lets the formatting be applied to any number of selections.\n3. Double-clicking it lets the formatting be applied several times.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"A single click applies the copied format once; double-clicking keeps it active. Statement 2 is wrong."},

  {"type":"stmt","topic":"Word Basics","q":"Consider the following statements:\n1. The Ribbon contains tabs and groups of commands.\n2. The File tab opens the Backstage view.\n3. The Status bar is located at the top of the window.\n4. The Quick Access Toolbar is a part of the Status bar.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"The Status bar is at the bottom of the window, and the Quick Access Toolbar is a separate toolbar. Statements 1 and 2 are correct."},

  {"type":"misc","topic":"Word Basics","q":"Arrange the steps to save a new document in order:\nA. Type the file name\nB. Click Save\nC. Choose the folder\nD. Click File → Save As","o":["D, A, C, B","C, D, A, B","D, C, B, A","D, C, A, B"],"a":3,"e":"Open Save As, choose the folder, type the name, then click Save."},

  {"type":"real","topic":"Formatting","q":"A department wants the word \"CONFIDENTIAL\" to appear faintly behind the text on every page. What should be inserted?","o":["Footnote","Drop cap","Text box","Watermark"],"a":3,"e":"A watermark is faint text or a picture shown behind the page content."},

  {"type":"match","topic":"Word Basics","q":"Match the ribbon tab (List I) with the commands it contains (List II):","l":["Home","Insert","Review","Mailings"],"r":["Tables and pictures","Envelopes and mail merge","Font and Paragraph groups","Spelling and comments"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":3,"e":"Ribbon tabs: Home – Font and Paragraph groups; Insert – Tables and pictures; Review – Spelling and comments; Mailings – Envelopes and mail merge."},

  {"type":"direct","topic":"Shortcut Keys","q":"Which key is used to start the spelling and grammar check in MS Word?","o":["F4","F9","F7","F12"],"a":2,"e":"F7 starts Spelling and Grammar. F12 opens Save As."},

  {"type":"real","topic":"Mail Merge","q":"A school clerk must send the same notice to 200 parents, each letter showing the parent's own name and address. Which feature saves the most time?","o":["Mail Merge","Format Painter","Thesaurus","Word Count"],"a":0,"e":"Mail Merge combines one main document with a list of recipients."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the shortcut key (List I) with its action (List II):","l":["Ctrl + E","Ctrl + J","Ctrl + R","Ctrl + L"],"r":["Left alignment","Justify alignment","Centre alignment","Right alignment"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":1,"e":"Alignment shortcuts: Ctrl + E – Centre alignment; Ctrl + J – Justify alignment; Ctrl + R – Right alignment; Ctrl + L – Left alignment."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the shortcut key (List I) with its action (List II):","l":["Ctrl + K","Ctrl + H","Ctrl + F","Ctrl + G"],"r":["Replace","Go To","Insert a hyperlink","Find"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":3,"e":"Find/Replace shortcuts: Ctrl + K – Insert a hyperlink; Ctrl + H – Replace; Ctrl + F – Find; Ctrl + G – Go To."},

  {"type":"pair","topic":"References & Views","q":"Choose the INCORRECTLY matched pair:","o":["Header – Top of the page","Endnote – Top of the first page","Footer – Bottom of the page","Footnote – Bottom of the page where the reference appears"],"a":1,"e":"An endnote appears at the end of the document or section."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. Ctrl + Z undoes the last action.\n2. Ctrl + Y redoes an undone action.\n3. Ctrl + Shift + C copies the selected text.\n4. Ctrl + Home takes the cursor to the beginning of the document.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"Ctrl + Shift + C copies formatting, not text. Only statement 3 is not correct."},

  {"type":"stmt","topic":"References & Views","q":"Consider the following statements:\n1. A footnote appears at the bottom of the same page.\n2. An endnote appears at the end of the document.\n3. A footnote always appears at the top of the page.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Footnotes appear at the bottom of the page, not the top. Statement 3 is wrong."},

  {"type":"stmt","topic":"References & Views","q":"Consider the following statements about headers and footers:\n1. A header appears in the top margin of a page.\n2. A footer appears in the top margin of a page.\n3. Page numbers can be placed in the header or footer.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":3,"e":"A footer appears in the bottom margin. Statement 2 is wrong."},

  {"type":"stmt","topic":"References & Views","q":"Consider the following statements:\n1. A watermark appears faintly behind the text of the page.\n2. A header is placed in the bottom margin.\n3. A footer is placed in the top margin.\n4. A drop cap makes the whole paragraph bigger.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"A header is in the top margin, a footer in the bottom margin, and a drop cap enlarges only the first letter. Only statement 1 is correct."},

  {"type":"stmt","topic":"Insert & Tables","q":"Consider the following statements:\n1. A row is a vertical arrangement of cells.\n2. A column is a horizontal arrangement of cells.\n3. A cell is formed at the intersection of a row and a column.\n4. Splitting cells joins two cells into one.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"A row is horizontal, a column is vertical, and splitting divides a cell. Only statement 3 is correct."},

  {"type":"match","topic":"Word Basics","q":"Match the file extension (List I) with its meaning (List II):","l":[".docx",".doc",".dotx",".rtf"],"r":["Word template","Word document (2007 onwards)","Rich Text Format","Word 97–2003 document"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Word file types: .docx – Word document (2007 onwards); .doc – Word 97–2003 document; .dotx – Word template; .rtf – Rich Text Format."},

  {"type":"stmt","topic":"Review & Proofing","q":"Consider the following statements:\n1. F7 starts the Spelling and Grammar check.\n2. The Thesaurus suggests synonyms for a selected word.\n3. Word Count shows the number of words and characters.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"pair","topic":"Word Basics","q":"Choose the correctly matched pair:","o":[".dotx – Word template",".docx – Word template",".rtf – Excel file",".pdf – Word 97–2003 format"],"a":0,"e":".dotx is a Word template. .docx is a normal document, .rtf is Rich Text Format, and .pdf is Portable Document Format."},

  {"type":"stmt","topic":"Mail Merge","q":"Consider the following statements about Mail Merge:\n1. Mail Merge is available in the Review tab.\n2. Mail Merge needs a main document and a data source.\n3. Merge fields act as placeholders for details such as names and addresses.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"Mail Merge is available in the Mailings tab. Statement 1 is wrong."},

  {"type":"stmt","topic":"References & Views","q":"Consider the following statements about document views:\n1. Print Layout shows the document as it will appear on the printed page.\n2. Read Mode is the only view in which a document can be edited.\n3. Outline view displays the document as headings and sub-points.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Documents can be edited in Print Layout and other views; Read Mode is meant for reading. Statement 2 is wrong."},

  {"type":"match","topic":"Word Basics","q":"Match the part of the Word window (List I) with its use (List II):","l":["Quick Access Toolbar","Ribbon","Status bar","Ruler"],"r":["Shows page number and word count","Used to set indents and margins","Frequently used commands such as Save and Undo","Tabs containing groups of commands"],"o":["A-4, B-3, C-1, D-2","A-3, B-4, C-2, D-1","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":2,"e":"Word window parts: Quick Access Toolbar – Frequently used commands such as Save and Undo; Ribbon – Tabs containing groups of commands; Status bar – Shows page number and word count; Ruler – Used to set indents and margins."},

  {"type":"direct","topic":"Mail Merge","q":"The Mail Merge feature is found on which tab of the Word ribbon?","o":["Mailings","Review","References","Insert"],"a":0,"e":"Mail Merge commands are on the Mailings tab."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the shortcut (List I) with its action (List II):","l":["Ctrl + Enter","Ctrl + Home","Ctrl + End","Ctrl + Shift + C"],"r":["Copy formatting","Insert a page break","Go to the beginning of the document","Go to the end of the document"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-4, D-1","A-2, B-3, C-1, D-4","A-2, B-4, C-3, D-1"],"a":0,"e":"Navigation and formatting shortcuts: Ctrl + Enter – Insert a page break; Ctrl + Home – Go to the beginning of the document; Ctrl + End – Go to the end of the document; Ctrl + Shift + C – Copy formatting."},

  {"type":"match","topic":"Formatting","q":"Match the mouse action (List I) with the text it selects (List II):","l":["Double-click on a word","Triple-click in a paragraph","Single click in the left margin","Ctrl + A"],"r":["That line","That word","Whole document","That paragraph"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Selecting text: Double-click on a word – That word; Triple-click in a paragraph – That paragraph; Single click in the left margin – That line; Ctrl + A – Whole document."},

  {"type":"misc","topic":"Formatting","q":"Which one is different from the others?","o":["Bold","Margins","Italic","Underline"],"a":1,"e":"Bold, italic and underline are font formatting. Margins belong to page layout."},

  {"type":"real","topic":"Insert & Tables","q":"A 20-page report needs page numbers at the bottom of every page. Where should the clerk go?","o":["Review tab → Track Changes","Mailings tab → Envelopes","View tab → Zoom","Insert tab → Page Number"],"a":3,"e":"Page numbers are inserted from the Insert tab (Header & Footer group)."},

  {"type":"real","topic":"Page Layout","q":"In a portrait report, only the last page, which has a wide table, must be printed in landscape. What should be used?","o":["A page break","A footnote","A section break","A drop cap"],"a":2,"e":"A section break lets one section have a different orientation. A page break only starts a new page."},

  {"type":"stmt","topic":"Review & Proofing","q":"Consider the following statements:\n1. F7 starts the Spelling and Grammar check.\n2. Shift + F7 opens the Thesaurus.\n3. The Thesaurus is used to count words.\n4. Word cannot check spelling automatically while typing.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"The Thesaurus gives synonyms, and Word can check spelling while typing. Statements 3 and 4 are not correct."},

  {"type":"misc","topic":"Formatting","q":"Which of the following is NOT a type of tab stop in Word?","o":["Justify","Left","Decimal","Bar"],"a":0,"e":"Word tab stops are Left, Centre, Right, Decimal and Bar."},

  {"type":"real","topic":"Formatting","q":"A clerk typed a whole paragraph in small letters by mistake. Which feature can convert it to capital letters quickly?","o":["Format Painter","Change Case","Thesaurus","Drop Cap"],"a":1,"e":"Change Case (Shift + F3) can change the text to UPPERCASE, lowercase and other cases."},

  {"type":"stmt","topic":"Page Layout","q":"Consider the following statements:\n1. Landscape orientation makes the page taller than it is wide.\n2. Margins are the blank spaces around the edges of a page.\n3. The Columns command splits text into newspaper-style columns.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Landscape pages are wider than they are tall. Statement 1 is wrong."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the correctly matched pair:","o":["Ctrl + P – Paste","Ctrl + N – Save","Ctrl + Enter – Page break","Ctrl + W – Open"],"a":2,"e":"Ctrl + Enter inserts a page break. Ctrl + P prints, Ctrl + N opens a new document, and Ctrl + W closes the document."},

  {"type":"stmt","topic":"Formatting","q":"Consider the following statements:\n1. Superscript raises text above the line, as in x².\n2. Subscript lowers text below the line, as in H₂O.\n3. Strikethrough draws a line through the text.\n4. Change Case cannot convert text to UPPERCASE.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"Change Case can convert text to lowercase, UPPERCASE, Sentence case and more. Statement 4 is wrong."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the key (List I) with its action in MS Word (List II):","l":["F7","F12","Shift + F7","Shift + F3"],"r":["Thesaurus","Spelling and Grammar check","Change case of selected text","Save As"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"Function key shortcuts: F7 – Spelling and Grammar check; F12 – Save As; Shift + F7 – Thesaurus; Shift + F3 – Change case of selected text."},

  {"type":"pair","topic":"Formatting","q":"Choose the correctly matched pair:","o":["Watermark – Bold text","Drop cap – Enlarged first letter of a paragraph","Bullets – Numbered list","Justify – Aligns text to the right only"],"a":1,"e":"A drop cap enlarges the first letter. A watermark is faint background text, bullets are marked lists, and justify aligns both margins."},

  {"type":"stmt","topic":"Insert & Tables","q":"Consider the following statements about tables:\n1. The box formed at the intersection of a row and a column is a cell.\n2. Pressing the Tab key in the last cell of a table adds a new row.\n3. Cells of a table cannot be merged.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"Cells can be merged and split in Word tables. Statement 3 is wrong."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the INCORRECTLY matched pair:","o":["Ctrl + H – Help","Ctrl + O – Open","Ctrl + S – Save","Ctrl + K – Hyperlink"],"a":0,"e":"Ctrl + H opens Replace. Help is F1."},

  {"type":"stmt","topic":"Word Basics","q":"Consider the following statements:\n1. The default file extension of Word 2007 and later versions is .docx.\n2. A Word template file has the .dotx extension.\n3. .docx is the extension used by Word 97–2003.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"],"a":2,"e":"Word 97–2003 used .doc. Statement 3 is wrong."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. Ctrl + B makes the text bold.\n2. Ctrl + I makes the text italic.\n3. Ctrl + U underlines the text.\n4. Ctrl + Y undoes the last action.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"Ctrl + Y redoes an action. Undo is Ctrl + Z. Statement 4 is wrong."},

  {"type":"real","topic":"Formatting","q":"A typist has formatted one heading and wants the same formatting on other headings quickly. Which tool should she use?","o":["Thesaurus","Drop Cap","Page Border","Format Painter"],"a":3,"e":"Format Painter copies formatting from one place to another."}
  ]
};
