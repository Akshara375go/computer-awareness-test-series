/* TEST 9 — HTML (50 MCQs, basic level)
   Sub-topics: HTML Basics, Document Structure, Text Formatting, Tags & Attributes, Links & Images,
               Lists & Tables, Forms & HTML5 Elements
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "HTML",
  questions: [
  {"type":"match","topic":"Document Structure","q":"Match the tag (List I) with its role in an HTML page (List II):","l":["<html>","<head>","<title>","<body>"],"r":["Contains information about the page","Contains the content shown on the page","Root element of the page","Text shown in the browser's title bar or tab"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":3,"e":"Structure of an HTML page: <html> – Root element of the page; <head> – Contains information about the page; <title> – Text shown in the browser's title bar or tab; <body> – Contains the content shown on the page."},

  {"type":"match","topic":"Text Formatting","q":"Match the formatting tag (List I) with its effect (List II):","l":["<b>","<i>","<u>","<sub>"],"r":["Underlined text","Bold text","Subscript text","Italic text"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"Formatting tags: <b> – Bold text; <i> – Italic text; <u> – Underlined text; <sub> – Subscript text."},

  {"type":"stmt","topic":"Forms & HTML5 Elements","q":"Consider the following statements about forms:\n1. A radio button allows several options to be selected at the same time.\n2. A checkbox allows several options to be selected.\n3. <textarea> creates a multi-line text box.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"A radio button allows only one choice from a group, so statement 1 is wrong. Checkboxes allow several choices."},

  {"type":"misc","topic":"Text Formatting","q":"Which of the following is NOT a valid HTML heading tag?","o":["<h1>","<h3>","<h6>","<h7>"],"a":3,"e":"HTML has six heading levels, <h1> to <h6>. There is no <h7>."},

  {"type":"stmt","topic":"Lists & Tables","q":"Consider the following statements about lists:\n1. <ul> creates a bulleted list.\n2. <ol> creates a numbered list.\n3. <li> creates a table row.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"<li> defines a list item. Table rows are created with <tr>, so statement 3 is wrong."},

  {"type":"direct","topic":"HTML Basics","q":"Who is known as the inventor of the World Wide Web and HTML?","o":["Bill Gates","Dennis Ritchie","Linus Torvalds","Tim Berners-Lee"],"a":3,"e":"Tim Berners-Lee invented the World Wide Web and HTML around 1989–1991 while working at CERN."},

  {"type":"pair","topic":"Lists & Tables","q":"Choose the correctly matched pair:","o":["<ol> – Numbered list","<ul> – Numbered list with letters","<dl> – Table header","<li> – Hyperlink"],"a":0,"e":"<ol> creates a numbered (ordered) list. <ul> creates a bulleted list, <dl> a description list, and <li> a list item."},

  {"type":"real","topic":"Links & Images","q":"A web page shows a student's photo. If the photo cannot load, a short description should appear instead. Which attribute gives this description?","o":["src","href","width","alt"],"a":3,"e":"The alt attribute gives alternate text that is shown when the image cannot be displayed."},

  {"type":"pair","topic":"Tags & Attributes","q":"Choose the INCORRECTLY matched pair:","o":["href – Address of a link","src – Source of an image","alt – Alternate text for an image","width – Colour of the text"],"a":3,"e":"The width attribute sets the width of an element such as an image. Text colour is set with CSS."},

  {"type":"real","topic":"Tags & Attributes","q":"A student wants to write a note inside her HTML code that should not appear on the web page. Which syntax should she use?","o":["// note","<!-- note -->","/* note */","# note"],"a":1,"e":"HTML comments are written between <!-- and -->, and the browser does not display them."},

  {"type":"real","topic":"Lists & Tables","q":"A teacher wants a marks list shown in rows and columns on a web page. Which tag is used?","o":["<table>","<ul>","<form>","<img>"],"a":0,"e":"The <table> tag, together with <tr>, <td> and <th>, displays data in rows and columns."},

  {"type":"stmt","topic":"Forms & HTML5 Elements","q":"Consider the following statements:\n1. <form> is used to collect input from users.\n2. <input type=\"submit\"> sends the form data.\n3. <select> creates a drop-down list.\n4. <input type=\"password\"> shows the typed characters clearly.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"A password field hides the typed characters (usually as dots), so statement 4 is wrong."},

  {"type":"stmt","topic":"Lists & Tables","q":"Consider the following statements:\n1. The colspan attribute merges cells across columns.\n2. The rowspan attribute merges cells across rows.\n3. <th> defines a header cell.\n4. <caption> defines the title of a table.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"misc","topic":"HTML Basics","q":"Which of the following is NOT a web browser?","o":["Google Chrome","Mozilla Firefox","Notepad","Microsoft Edge"],"a":2,"e":"Notepad is a text editor (it can be used to write HTML code). Chrome, Firefox and Edge are web browsers."},

  {"type":"match","topic":"Forms & HTML5 Elements","q":"Match the input type (List I) with its behaviour (List II):","l":["text","password","checkbox","radio"],"r":["Typed characters are hidden","Only one choice from a group can be selected","Single-line text box","Several choices can be selected"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"<input> types: text – Single-line text box; password – Typed characters are hidden; checkbox – Several choices can be selected; radio – Only one choice from a group can be selected."},

  {"type":"real","topic":"Links & Images","q":"A visitor clicks \"Contact us\" and the email program opens with the address already filled in. Which href value makes this possible?","o":["http://info@example.com","email:info@example.com","mailto:info@example.com","tel:info@example.com"],"a":2,"e":"The mailto: protocol in the href attribute opens the default email program with the address filled in."},

  {"type":"real","topic":"Document Structure","q":"You are creating a web page for your school and want the school's name to appear in the browser tab. Which tag should hold the name?","o":["<h1>","<body>","<title>","<p>"],"a":2,"e":"The text inside <title> (placed in the head section) appears in the browser tab or title bar."},

  {"type":"pair","topic":"Links & Images","q":"Choose the correctly matched pair:","o":["<a> – Plays a video","<img> – Inserts an image","<li> – Creates a table","<title> – Defines a paragraph"],"a":1,"e":"<img> inserts an image. <a> creates a hyperlink, <li> defines a list item, and <title> gives the page title."},

  {"type":"direct","topic":"Links & Images","q":"Which tag is used to create a hyperlink in HTML?","o":["<img>","<href>","<p>","<a>"],"a":3,"e":"The <a> (anchor) tag creates a hyperlink, and its href attribute holds the address."},

  {"type":"stmt","topic":"Tags & Attributes","q":"Consider the following statements about HTML tags:\n1. HTML tags are enclosed in curly brackets { }.\n2. A closing tag has a forward slash before the tag name.\n3. The <br> tag does not need a closing tag.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"HTML tags are enclosed in angle brackets < >, so statement 1 is wrong. A closing tag has a forward slash, and empty tags such as <br> need no closing tag."},

  {"type":"misc","topic":"Document Structure","q":"Arrange the following opening tags in the order in which they appear in a basic HTML page:\nA. <body>\nB. <html>\nC. <head>\nD. <title>","o":["B, C, A, D","B, C, D, A","C, B, D, A","B, A, C, D"],"a":1,"e":"A page starts with <html>, then <head> containing <title>, and finally <body>."},

  {"type":"match","topic":"Forms & HTML5 Elements","q":"Match the HTML5 element (List I) with its purpose (List II):","l":["<video>","<audio>","<nav>","<footer>"],"r":["Bottom part of a page or section","Plays sound files","Plays video files","Group of navigation links"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-2, C-4, D-1","A-3, B-4, C-2, D-1"],"a":2,"e":"HTML5 elements: <video> – Plays video files; <audio> – Plays sound files; <nav> – Group of navigation links; <footer> – Bottom part of a page or section."},

  {"type":"stmt","topic":"Text Formatting","q":"Consider the following statements:\n1. <b> makes text bold.\n2. <i> makes text italic.\n3. <u> underlines text.\n4. <sup> makes text subscript.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"<sup> makes text superscript (raised); <sub> makes it subscript. Only statement 4 is wrong."},

  {"type":"stmt","topic":"HTML Basics","q":"Consider the following statements:\n1. HTML is a markup language used to create web pages.\n2. HTML is a programming language like C.\n3. HTML was created by Tim Berners-Lee.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"HTML is a markup language, not a programming language, so statement 2 is wrong. It was created by Tim Berners-Lee."},

  {"type":"stmt","topic":"Lists & Tables","q":"Consider the following statements about tables:\n1. <td> defines a data cell.\n2. <tr> defines a table column.\n3. <th> defines a header cell, which is bold and centred by default.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"<tr> defines a table row, not a column, so statement 2 is wrong."},

  {"type":"stmt","topic":"Text Formatting","q":"Consider the following statements:\n1. <p> defines a paragraph.\n2. <br> inserts a horizontal line.\n3. <hr> inserts a line break.\n4. <b> makes the text italic.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"<br> inserts a line break, <hr> inserts a horizontal line, and <b> makes text bold. Only statement 1 is correct."},

  {"type":"stmt","topic":"Document Structure","q":"Consider the following statements:\n1. <html> is the root tag of an HTML page.\n2. <head> contains information about the page.\n3. <title> text appears in the browser tab.\n4. <body> contains the title of the page.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"The title of the page is placed in <head> using <title>. The <body> tag contains the visible content, so statement 4 is wrong."},

  {"type":"stmt","topic":"Lists & Tables","q":"Consider the following statements:\n1. <ul> creates a numbered list.\n2. <li> defines a list item.\n3. <ol> creates a bulleted list.\n4. <dt> defines a table cell.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":1,"e":"<ul> creates a bulleted list, <ol> creates a numbered list, and <dt> defines a term in a description list. Only statement 2 is correct."},

  {"type":"pair","topic":"Tags & Attributes","q":"Choose the INCORRECTLY matched pair:","o":["<td> – Table row","<h1> – Largest heading","<ul> – Bulleted list","<a> – Hyperlink"],"a":0,"e":"<td> defines a table data cell. A table row is defined by <tr>."},

  {"type":"stmt","topic":"Document Structure","q":"Consider the following statements:\n1. The <title> tag is placed inside the <head> section.\n2. The content shown in the browser window is placed inside the <body> tag.\n3. The <body> tag contains the metadata of the page.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Information about the page (metadata) goes in <head>. The <body> tag contains the visible content, so statement 3 is wrong."},

  {"type":"pair","topic":"Text Formatting","q":"Choose the correctly matched pair:","o":["<hr> – Paragraph","<br> – Line break","<p> – Horizontal line","<b> – Italic text"],"a":1,"e":"<br> inserts a line break. <hr> draws a horizontal line, <p> defines a paragraph and <b> gives bold text."},

  {"type":"stmt","topic":"Tags & Attributes","q":"Consider the following statements:\n1. Comments in HTML are written between <!-- and -->.\n2. Comments are not displayed in the browser.\n3. A web browser interprets HTML tags and displays the page.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1, 2 and 3","2 and 3 only","1 and 3 only"],"a":1,"e":"All three statements are correct."},

  {"type":"stmt","topic":"Links & Images","q":"Consider the following statements about images:\n1. The <img> tag needs a closing tag </img>.\n2. The src attribute gives the file name or address of the image.\n3. The alt attribute gives alternate text for an image.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"<img> is an empty tag and needs no closing tag. The src attribute gives the image source and alt gives alternate text."},

  {"type":"match","topic":"Links & Images","q":"Match the attribute (List I) with its use (List II):","l":["href","src","alt","target"],"r":["Alternate text for an image","Address of the link","Where the linked page opens","Source file of an image"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"Attributes: href – Address of the link; src – Source file of an image; alt – Alternate text for an image; target – Where the linked page opens."},

  {"type":"pair","topic":"HTML Basics","q":"Choose the INCORRECTLY matched pair:","o":["HTML – HyperText Markup Language","HTTP – HyperText Transfer Protocol","CSS – Computer Style Sheets","URL – Uniform Resource Locator"],"a":2,"e":"CSS stands for Cascading Style Sheets."},

  {"type":"match","topic":"HTML Basics","q":"Match the web term (List I) with its meaning (List II):","l":["Web browser","Web server","Hyperlink","Home page"],"r":["Clickable text or image that opens another page","Software used to view web pages","First page of a website","Computer that stores and delivers web pages"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"Web terms: Web browser – Software used to view web pages; Web server – Computer that stores and delivers web pages; Hyperlink – Clickable text or image that opens another page; Home page – First page of a website."},

  {"type":"match","topic":"HTML Basics","q":"Match the abbreviation (List I) with its full form (List II):","l":["HTML","HTTP","URL","CSS"],"r":["Cascading Style Sheets","HyperText Markup Language","Uniform Resource Locator","HyperText Transfer Protocol"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-3, C-4, D-1"],"a":2,"e":"Full forms: HTML – HyperText Markup Language; HTTP – HyperText Transfer Protocol; URL – Uniform Resource Locator; CSS – Cascading Style Sheets."},

  {"type":"match","topic":"Lists & Tables","q":"Match the table tag (List I) with its meaning (List II):","l":["<table>","<tr>","<td>","<th>"],"r":["Table data cell","Table header cell","Defines a table","Table row"],"o":["A-4, B-3, C-1, D-2","A-3, B-4, C-2, D-1","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":2,"e":"Table tags: <table> – Defines a table; <tr> – Table row; <td> – Table data cell; <th> – Table header cell."},

  {"type":"direct","topic":"HTML Basics","q":"HTML stands for","o":["High Text Machine Language","Hyperlinks and Text Markup Language","Home Tool Markup Language","HyperText Markup Language"],"a":3,"e":"HTML is HyperText Markup Language, the standard language used to create web pages."},

  {"type":"misc","topic":"Tags & Attributes","q":"Which of the following is NOT an empty tag (a tag without a closing tag) in HTML?","o":["<br>","<p>","<hr>","<img>"],"a":1,"e":"<br>, <hr> and <img> are empty tags. <p> is a container tag with a closing tag </p>."},

  {"type":"match","topic":"Text Formatting","q":"Match the tag (List I) with its purpose (List II):","l":["<p>","<br>","<hr>","<h1>"],"r":["Largest heading","Paragraph","Horizontal line","Line break"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Basic text tags: <p> – Paragraph; <br> – Line break; <hr> – Horizontal line; <h1> – Largest heading."},

  {"type":"real","topic":"Lists & Tables","q":"A shopping page shows a list of items with bullet points. Which pair of tags creates such a list?","o":["<ol> and <li>","<table> and <tr>","<p> and <br>","<ul> and <li>"],"a":3,"e":"<ul> creates the bulleted list and <li> defines each item. <ol> would give numbers."},

  {"type":"real","topic":"Forms & HTML5 Elements","q":"A registration page asks students to choose their gender, and only one choice must be allowed. Which input type should be used?","o":["checkbox","radio","password","submit"],"a":1,"e":"Radio buttons in the same group allow only one choice. Checkboxes allow several."},

  {"type":"stmt","topic":"Links & Images","q":"Consider the following statements:\n1. The <a> tag creates a hyperlink.\n2. The href attribute holds the file name of an image.\n3. target=\"_blank\" opens the link in a new tab or window.\n4. The <a> tag is used to insert images.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"The href attribute holds the address of the link (images use src), and images are inserted with <img>. Statements 1 and 3 are correct."},

  {"type":"real","topic":"Text Formatting","q":"A chemistry teacher wants to show H2O with the 2 written slightly below the line. Which tag should she use for the 2?","o":["<sup>","<sub>","<b>","<i>"],"a":1,"e":"<sub> creates subscript text. <sup> creates superscript text (raised), as in x²."},

  {"type":"stmt","topic":"HTML Basics","q":"Consider the following statements:\n1. An HTML file can be saved with the extension .html or .htm.\n2. An HTML page can be created using a simple text editor such as Notepad.\n3. An HTML page can be opened only in Microsoft Word.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"HTML pages are displayed by web browsers, not only by Microsoft Word, so statement 3 is wrong."},

  {"type":"stmt","topic":"HTML Basics","q":"Consider the following statements:\n1. HTML stands for HyperText Markup Language.\n2. HTML is used to design the structure of web pages.\n3. HTML files are executed by a compiler.\n4. Web pages are viewed using a web browser.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"HTML pages are interpreted and displayed by a web browser; they are not compiled. Statement 3 is wrong."},

  {"type":"match","topic":"Lists & Tables","q":"Match the list tag (List I) with its meaning (List II):","l":["<ul>","<ol>","<li>","<dl>"],"r":["Description list","Ordered (numbered) list","Unordered (bulleted) list","List item"],"o":["A-3, B-2, C-4, D-1","A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":0,"e":"List tags: <ul> – Unordered (bulleted) list; <ol> – Ordered (numbered) list; <li> – List item; <dl> – Description list."},

  {"type":"stmt","topic":"Text Formatting","q":"Consider the following statements about headings:\n1. <h1> is the largest heading.\n2. <h6> is the largest heading.\n3. HTML provides six levels of headings.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"<h1> is the largest and <h6> is the smallest of the six heading levels. Statement 2 is wrong."},

  {"type":"misc","topic":"Lists & Tables","q":"Which of the following is NOT a type of list in HTML?","o":["Merged list","Ordered list","Unordered list","Description list"],"a":0,"e":"HTML has ordered (<ol>), unordered (<ul>) and description (<dl>) lists. There is no merged list."}
  ]
};
