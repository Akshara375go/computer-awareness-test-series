/* TEST 17 — Internet and Its Services (50 MCQs)
   Sub-topics: Internet Basics, WWW & Browsers, URL & Domain Names, E-mail, Search & Online Services, Online Payments
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Internet and Its Services",
  questions: [
  {"type":"stmt","topic":"Internet Basics","q":"Consider the following statements:\n1. The Internet is a global network of networks.\n2. The World Wide Web is a service that runs on the Internet.\n3. The Internet and the World Wide Web are exactly the same thing.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"],"a":2,"e":"The WWW is only one of the services on the Internet. Statement 3 is wrong."},

  {"type":"match","topic":"Internet Basics","q":"Match the item (List I) with its description (List II):","l":["ARPANET","WWW","Mosaic","VSNL"],"r":["Invented by Tim Berners-Lee","Launched public Internet service in India in 1995","Early network that led to the Internet","Early popular graphical web browser"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":1,"e":"Internet history: ARPANET – Early network that led to the Internet; WWW – Invented by Tim Berners-Lee; Mosaic – Early popular graphical web browser; VSNL – Launched public Internet service in India in 1995."},

  {"type":"misc","topic":"Search & Online Services","q":"Which of the following is NOT an Internet service?","o":["Disk defragmentation","E-mail","Video conferencing","Online banking"],"a":0,"e":"Disk defragmentation is a local disk maintenance task, not an Internet service."},

  {"type":"stmt","topic":"WWW & Browsers","q":"Consider the following statements:\n1. Cookies are small files stored by websites on the user's computer.\n2. Incognito mode makes the user completely invisible to the Internet service provider.\n3. Incognito mode does not save the browsing history on the device.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Incognito mode only avoids saving history on the device; the ISP and websites can still see the activity. Statement 2 is wrong."},

  {"type":"stmt","topic":"Internet Basics","q":"Consider the following statements:\n1. An ISP provides Internet connection to users.\n2. The home page is the first page of a website.\n3. A web browser is used to view web pages.\n4. A web server is software used by users to browse the web.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"A web server stores and delivers web pages; users browse with a web browser. Statement 4 is wrong."},

  {"type":"real","topic":"Search & Online Services","q":"A teacher in Mysuru wants to take a class for students in another city so that they can see and hear each other. Which service suits this?","o":["Video conferencing","E-mail","Blogging","Downloading"],"a":0,"e":"Video conferencing gives live audio and video between distant places."},

  {"type":"pair","topic":"WWW & Browsers","q":"Choose the INCORRECTLY matched pair:","o":["Ctrl + T – New tab","Ctrl + D – Bookmark","Ctrl + H – History","Ctrl + W – Reopen closed tab"],"a":3,"e":"Ctrl + W closes the current tab. Ctrl + Shift + T reopens a closed tab."},

  {"type":"stmt","topic":"E-mail","q":"Consider the following statements:\n1. Bcc hides the recipients from the other recipients.\n2. Cc sends a copy of the mail to additional recipients.\n3. Forward sends a received mail to other people.\n4. Reply All sends the reply only to the original sender.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"Reply All sends the reply to the sender and all other recipients. Statement 4 is wrong."},

  {"type":"stmt","topic":"Search & Online Services","q":"Consider the following statements:\n1. Video conferencing allows people at different places to see and hear each other.\n2. VoIP cannot be used for voice calls over the Internet.\n3. Google Meet and Zoom are video conferencing tools.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"VoIP (Voice over Internet Protocol) is used for voice calls over the Internet. Statement 2 is wrong."},

  {"type":"stmt","topic":"Online Payments","q":"Consider the following statements:\n1. UPI was developed by NPCI.\n2. RTGS is meant for small transfers below ₹1,000.\n3. IMPS works only during bank working hours.\n4. NEFT stands for Net Electronic Fund Transfer.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"RTGS is for large-value transfers, IMPS works 24×7, and NEFT is National Electronic Funds Transfer. Only statement 1 is correct."},

  {"type":"stmt","topic":"URL & Domain Names","q":"Consider the following statements:\n1. HTTPS is less secure than HTTP.\n2. HTTPS uses SSL/TLS encryption.\n3. A padlock symbol in the address bar indicates an encrypted connection.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"HTTPS is the secure version of HTTP. Statement 1 is wrong."},

  {"type":"stmt","topic":"Search & Online Services","q":"Consider the following statements:\n1. VoIP allows voice calls over the Internet.\n2. Streaming plays audio or video without waiting for the full download.\n3. Cloud storage lets files be saved on remote servers.\n4. Social media sites allow users to share content.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"real","topic":"WWW & Browsers","q":"A user accidentally closes a browser tab and wants to open it again. Which shortcut helps?","o":["Ctrl + T","Ctrl + W","Ctrl + Shift + T","Ctrl + D"],"a":2,"e":"Ctrl + Shift + T reopens the most recently closed tab."},

  {"type":"direct","topic":"Internet Basics","q":"A company that provides Internet access to users is called a(n)","o":["Web server","Search engine","Web browser","ISP"],"a":3,"e":"An Internet Service Provider (ISP) gives users access to the Internet."},

  {"type":"match","topic":"WWW & Browsers","q":"Match the web browser (List I) with its developer (List II):","l":["Chrome","Firefox","Safari","Edge"],"r":["Microsoft","Google","Apple","Mozilla"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Browsers and developers: Chrome – Google; Firefox – Mozilla; Safari – Apple; Edge – Microsoft."},

  {"type":"real","topic":"Search & Online Services","q":"A student wants search results containing the exact phrase \"computer awareness test\". How should she type it?","o":["Enclose the phrase in double quotation marks","Type it in capital letters","Add .com at the end","Add www at the start"],"a":0,"e":"Quotation marks make the search engine look for the exact phrase."},

  {"type":"match","topic":"Internet Basics","q":"Match the term (List I) with its meaning (List II):","l":["ISP","Search engine","Web server","Hyperlink"],"r":["Text or image that jumps to another page","Company that provides Internet access","Stores and delivers web pages","Finds web pages for given keywords"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Internet terms: ISP – Company that provides Internet access; Search engine – Finds web pages for given keywords; Web server – Stores and delivers web pages; Hyperlink – Text or image that jumps to another page."},

  {"type":"match","topic":"URL & Domain Names","q":"Match the domain extension (List I) with its meaning (List II):","l":[".com",".edu",".gov",".org"],"r":["Government bodies","Commercial organisations","Non-profit organisations","Educational institutions"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"Domain extensions: .com – Commercial organisations; .edu – Educational institutions; .gov – Government bodies; .org – Non-profit organisations."},

  {"type":"real","topic":"URL & Domain Names","q":"Before entering card details on a shopping website, a user should check that the address begins with","o":["http://","ftp://","www.","https://"],"a":3,"e":"https indicates an encrypted connection, so card details are protected in transit."},

  {"type":"misc","topic":"E-mail","q":"Which of the following is NOT a valid e-mail address?","o":["student@gmail.com","a.b@mail.co.in","student.gmail.com","stud_1@yahoo.com"],"a":2,"e":"An e-mail address must contain the @ symbol between the user name and the domain."},

  {"type":"pair","topic":"URL & Domain Names","q":"Choose the INCORRECTLY matched pair:","o":[".com – Commercial",".edu – Educational",".gov – Government",".org – Military"],"a":3,"e":".mil is used for the military. .org is for organisations."},

  {"type":"stmt","topic":"Internet Basics","q":"Consider the following statements:\n1. Downloading means copying a file from the Internet to one's own device.\n2. Uploading means sending a file from one's device to the Internet.\n3. Uploading means saving a web page in the browser history.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Uploading means sending files to the Internet. Statement 3 is wrong."},

  {"type":"match","topic":"E-mail","q":"Match the e-mail folder (List I) with its contents (List II):","l":["Inbox","Sent","Drafts","Spam"],"r":["Unsent mails saved for later","Mails received","Suspected junk mails","Copies of mails already sent"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"E-mail folders: Inbox – Mails received; Sent – Copies of mails already sent; Drafts – Unsent mails saved for later; Spam – Suspected junk mails."},

  {"type":"match","topic":"Online Payments","q":"Match the abbreviation (List I) with its full form (List II):","l":["UPI","NEFT","RTGS","IMPS"],"r":["Real Time Gross Settlement","Unified Payments Interface","Immediate Payment Service","National Electronic Funds Transfer"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"Online payment systems: UPI – Unified Payments Interface; NEFT – National Electronic Funds Transfer; RTGS – Real Time Gross Settlement; IMPS – Immediate Payment Service."},

  {"type":"misc","topic":"Search & Online Services","q":"Which of the following is NOT a search engine?","o":["Google","Mozilla Firefox","Bing","DuckDuckGo"],"a":1,"e":"Mozilla Firefox is a web browser, not a search engine."},

  {"type":"pair","topic":"Online Payments","q":"Choose the correctly matched pair:","o":["NEFT – National Electronic Fast Transfer","RTGS – Regular Time Gross Settlement","IMPS – Internet Money Payment System","UPI – Unified Payments Interface"],"a":3,"e":"UPI is the Unified Payments Interface. NEFT is National Electronic Funds Transfer, RTGS is Real Time Gross Settlement, and IMPS is Immediate Payment Service."},

  {"type":"pair","topic":"WWW & Browsers","q":"Choose the correctly matched pair:","o":["Safari – Microsoft browser","Chrome – Google browser","Edge – Mozilla browser","Firefox – Apple browser"],"a":1,"e":"Chrome is from Google. Safari is from Apple, Edge from Microsoft, and Firefox from Mozilla."},

  {"type":"real","topic":"WWW & Browsers","q":"A user wants to see the list of websites she visited earlier, recorded automatically by the browser. Where should she look?","o":["Cookies","History","Bookmarks","Downloads"],"a":1,"e":"The browser history lists the pages visited earlier."},

  {"type":"misc","topic":"E-mail","q":"Which one is different from the others?","o":["Gmail","Chrome","Outlook","Yahoo Mail"],"a":1,"e":"Gmail, Outlook and Yahoo Mail are e-mail services. Chrome is a web browser."},

  {"type":"misc","topic":"E-mail","q":"Arrange the steps to send an e-mail with an attachment in order:\nA. Click Send\nB. Attach the file\nC. Log in to the mail account\nD. Click Compose","o":["C, D, B, A","C, B, D, A","D, C, B, A","C, D, A, B"],"a":0,"e":"Log in, click Compose, attach the file, then send."},

  {"type":"match","topic":"E-mail","q":"Match the e-mail field (List I) with its meaning (List II):","l":["To","Cc","Bcc","Subject"],"r":["Copy visible to all recipients","Short title of the message","Main recipient","Copy hidden from the other recipients"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":3,"e":"E-mail fields: To – Main recipient; Cc – Copy visible to all recipients; Bcc – Copy hidden from the other recipients; Subject – Short title of the message."},

  {"type":"stmt","topic":"Internet Basics","q":"Consider the following statements:\n1. Ray Tomlinson sent the first network e-mail and introduced the @ symbol.\n2. The World Wide Web was invented by Tim Berners-Lee.\n3. ARPANET was developed in 1999.\n4. Chrome was developed by Microsoft.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"ARPANET dates from 1969, and Chrome is a Google product. Statements 1 and 2 are correct."},

  {"type":"pair","topic":"E-mail","q":"Choose the correctly matched pair:","o":["Cc – Recipients hidden from others","Subject – Main recipient","Bcc – Recipients hidden from others","Drafts – Received mails"],"a":2,"e":"Bcc hides recipients. Cc recipients are visible, Subject is the title, and Drafts holds unsent mails."},

  {"type":"direct","topic":"Internet Basics","q":"The inventor of the World Wide Web is","o":["Tim Berners-Lee","Bill Gates","Charles Babbage","Dennis Ritchie"],"a":0,"e":"Tim Berners-Lee invented the WWW at CERN around 1989–1991."},

  {"type":"real","topic":"Online Payments","q":"At midnight, a person wants to send ₹500 to a friend instantly using a mobile phone. Which is the most suitable?","o":["Cheque clearing","Demand draft","UPI","Money order"],"a":2,"e":"UPI provides instant payments 24×7 from a mobile phone."},

  {"type":"direct","topic":"E-mail","q":"Which symbol separates the user name and the domain name in an e-mail address?","o":["@","#","&","%"],"a":0,"e":"An e-mail address has the form username@domain."},

  {"type":"stmt","topic":"Search & Online Services","q":"Consider the following statements:\n1. E-commerce means buying and selling goods through the Internet.\n2. Amazon and Flipkart are e-commerce websites.\n3. B2C means business-to-consumer.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"real","topic":"WWW & Browsers","q":"A user wants to save the address of a website so that it can be opened quickly later. What should she use?","o":["Bookmark","Cookie","Download","Upload"],"a":0,"e":"A bookmark (favourite) stores a page address for quick access."},

  {"type":"stmt","topic":"URL & Domain Names","q":"Consider the following statements:\n1. A URL is the address of a web resource.\n2. A URL always begins with ftp://.\n3. A URL can contain the protocol, the domain name and the path.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"A URL may begin with http://, https://, ftp:// and so on. Statement 2 is wrong."},

  {"type":"match","topic":"Internet Basics","q":"Match the connection type (List I) with its feature (List II):","l":["Dial-up","Broadband","Wi-Fi","Mobile data"],"r":["Wireless connection to a router","Uses a telephone line and modem, slow","Uses the cellular network","High-speed, always-on connection"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":1,"e":"Connection types: Dial-up – Uses a telephone line and modem, slow; Broadband – High-speed, always-on connection; Wi-Fi – Wireless connection to a router; Mobile data – Uses the cellular network."},

  {"type":"stmt","topic":"WWW & Browsers","q":"Consider the following statements:\n1. Ctrl + T opens a new tab.\n2. Ctrl + W closes the current tab.\n3. Ctrl + D bookmarks the current page.\n4. F5 opens a new window.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"F5 refreshes the page. Only statement 4 is not correct."},

  {"type":"pair","topic":"Internet Basics","q":"Choose the INCORRECTLY matched pair:","o":["Download – Copy a file from the Internet to the device","Home page – Last page of a website","Upload – Send a file from the device to the Internet","Hyperlink – Click to jump to another page"],"a":1,"e":"The home page is the first page of a website."},

  {"type":"stmt","topic":"Search & Online Services","q":"Consider the following statements about search engines:\n1. A search engine finds web pages related to the keywords typed.\n2. Google and Bing are search engines.\n3. Search engines use crawlers to collect information from web pages.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"stmt","topic":"URL & Domain Names","q":"Consider the following statements:\n1. .com is used for educational institutions.\n2. .org is used for organisations such as non-profit bodies.\n3. .gov is used for commercial sites.\n4. .edu is used for government sites.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":1,"e":".com is commercial, .gov is government and .edu is educational. Only statement 2 is correct."},

  {"type":"match","topic":"WWW & Browsers","q":"Match the browser shortcut (List I) with its action (List II):","l":["Ctrl + T","Ctrl + Shift + T","Ctrl + D","Ctrl + H"],"r":["Open the browsing history","Open a new tab","Reopen the last closed tab","Bookmark the page"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-4, D-1","A-2, B-3, C-1, D-4","A-2, B-4, C-3, D-1"],"a":0,"e":"Browser shortcuts: Ctrl + T – Open a new tab; Ctrl + Shift + T – Reopen the last closed tab; Ctrl + D – Bookmark the page; Ctrl + H – Open the browsing history."},

  {"type":"stmt","topic":"E-mail","q":"Consider the following statements:\n1. An e-mail address has the form username@domain.\n2. SMTP is used to send e-mail.\n3. POP3 is used to send e-mail.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"POP3 is used to receive e-mail. Statement 3 is wrong."},

  {"type":"stmt","topic":"E-mail","q":"Consider the following statements about e-mail:\n1. Bcc recipients are visible to all other recipients.\n2. Cc sends a copy to additional recipients who are visible to the others.\n3. A file can be sent with an e-mail as an attachment.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"Bcc recipients are hidden from the other recipients. Statement 1 is wrong."},

  {"type":"stmt","topic":"WWW & Browsers","q":"Consider the following statements:\n1. The cache stores copies of web pages for faster loading.\n2. A bookmark saves the address of a page for quick access.\n3. Browsing history cannot be deleted.\n4. Cookies are computer viruses.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"History can be cleared, and cookies are ordinary small files, not viruses. Statements 3 and 4 are not correct."},

  {"type":"real","topic":"E-mail","q":"A clerk wants to send a copy of an e-mail to a colleague without the other recipients knowing. Which field should she use?","o":["Bcc","Cc","To","Subject"],"a":0,"e":"Bcc (blind carbon copy) hides the recipient from the others."},

  {"type":"match","topic":"URL & Domain Names","q":"Match the part of the URL https://www.karnataka.gov.in/index.html (List I) with its name (List II):","l":["https","www.karnataka.gov.in","/index.html",".in"],"r":["Domain name","Country code domain","Protocol","Path of the file"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Parts of a URL: https – Protocol; www.karnataka.gov.in – Domain name; /index.html – Path of the file; .in – Country code domain."}
  ]
};
