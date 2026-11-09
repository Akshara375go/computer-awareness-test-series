/* TEST 20 — Nudi Software (50 MCQs)
   Sub-topics: Nudi & Baraha, Unicode & Fonts, Typing Methods, Kannada Script, Kannada Language & Bodies
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Nudi Software",
  questions: [
  {"type":"match","topic":"Kannada Script","q":"Match the Kannada term (List I) with its meaning (List II):","l":["Swara","Vyanjana","Ottakshara","Varnamale"],"r":["Alphabet","Vowel","Conjunct (subscript) consonant","Consonant"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-3, C-4, D-1"],"a":2,"e":"Kannada script terms: Swara – Vowel; Vyanjana – Consonant; Ottakshara – Conjunct (subscript) consonant; Varnamale – Alphabet."},

  {"type":"stmt","topic":"Kannada Script","q":"Consider the following statements:\n1. The Kannada script is written from left to right.\n2. The Kannada script is written from right to left.\n3. Kannada has its own numerals.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":3,"e":"Kannada is written from left to right. Statement 2 is wrong."},

  {"type":"match","topic":"Kannada Language & Bodies","q":"Match the body (List I) with its role (List II):","l":["Kannada Sahitya Parishat","Kannada Development Authority","Kannada Ganaka Parishat","Kannada University, Hampi"],"r":["Developed the Nudi software","Promotes Kannada literature","University for Kannada studies","State body to promote Kannada"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":1,"e":"Kannada organisations: Kannada Sahitya Parishat – Promotes Kannada literature; Kannada Development Authority – State body to promote Kannada; Kannada Ganaka Parishat – Developed the Nudi software; Kannada University, Hampi – University for Kannada studies."},

  {"type":"misc","topic":"Kannada Script","q":"Which one is different from the others?","o":["Swara","Vyanjana","Unicode","Ottakshara"],"a":2,"e":"Swara, vyanjana and ottakshara are terms of the Kannada script. Unicode is an encoding standard."},

  {"type":"stmt","topic":"Unicode & Fonts","q":"Consider the following statements:\n1. Font-encoded Kannada text needs the same font to display correctly.\n2. Unicode Kannada text can be displayed only on Windows computers.\n3. Font converters cannot convert old Kannada font text into Unicode.\n4. Unicode Kannada text cannot be searched on the Internet.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"Unicode works on any system that supports it, converters exist, and Unicode text can be searched. Statements 2, 3 and 4 are not correct."},

  {"type":"stmt","topic":"Nudi & Baraha","q":"Consider the following statements:\n1. KGP stands for Kannada Ganaka Parishat.\n2. Nudi was developed by Kannada Ganaka Parishat.\n3. The development of Nudi was funded by the Government of Karnataka.\n4. Nudi is a spreadsheet application.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"Nudi is Kannada typing software, not a spreadsheet. Statement 4 is wrong."},

  {"type":"stmt","topic":"Typing Methods","q":"Consider the following statements:\n1. Phonetic typing needs the user to know the typewriter key positions.\n2. The typewriter layout lets the user type by pronunciation using English letters.\n3. A virtual keyboard is an on-screen keyboard.\n4. Phonetic typing cannot be used for Kannada.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"Phonetic typing works by sound, the typewriter layout uses fixed key positions, and phonetic typing is widely used for Kannada. Only statement 3 is correct."},

  {"type":"match","topic":"Kannada Script","q":"Match the sign (List I) with its name (List II):","l":["ಂ","ಃ","್","ಾ"],"r":["Visarga","Vowel sign of ಆ","Anusvara","Halant (virama)"],"o":["A-3, B-1, C-4, D-2","A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":0,"e":"Kannada signs: ಂ – Anusvara; ಃ – Visarga; ್ – Halant (virama); ಾ – Vowel sign of ಆ."},

  {"type":"stmt","topic":"Kannada Language & Bodies","q":"Consider the following statements:\n1. Kannada is a classical language of India.\n2. Kannada is the official language of Karnataka.\n3. Kannada is written in the Kannada script.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"real","topic":"Typing Methods","q":"When a user types Kannada sounds using English letters and the software shows the Kannada letters, this method of typing is called","o":["Optical character recognition","Phonetic typing","Speech synthesis","Data mining"],"a":1,"e":"Phonetic typing converts English letters typed by sound into Kannada letters."},

  {"type":"stmt","topic":"Kannada Language & Bodies","q":"Consider the following statements:\n1. Kannada got classical language status in 2008.\n2. Karnataka Rajyotsava is celebrated on 1 November.\n3. Kannada has received only two Jnanpith awards.\n4. Kannada is written in the Devanagari script.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Kannada has won eight Jnanpith awards and has its own script. Statements 1 and 2 are correct."},

  {"type":"stmt","topic":"Unicode & Fonts","q":"Consider the following statements:\n1. Unicode gives a unique code to every character.\n2. Unicode text can be read only in the font in which it was typed.\n3. The Unicode block of Kannada is U+0C80 to U+0CFF.\n4. Unicode helps Kannada text to be shared across devices.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":1,"e":"Unicode text does not depend on a particular font. Statement 2 is wrong."},

  {"type":"real","topic":"Typing Methods","q":"A student's keyboard has no Kannada letters, and she wants to click the letters with the mouse. Which tool helps?","o":["Task Manager","Disk Defragmenter","Virtual (on-screen) keyboard","Firewall"],"a":2,"e":"A virtual keyboard shows letters on the screen that can be clicked."},

  {"type":"real","topic":"Typing Methods","q":"In phonetic typing, which key gives the Kannada letter ಕ?","o":["K","A","a","k"],"a":3,"e":"Small k gives ಕ, capital K gives ಖ, a gives ಅ, and A gives ಆ."},

  {"type":"match","topic":"Kannada Language & Bodies","q":"Match the item (List I) with the correct fact (List II):","l":["Classical language status to Kannada","Karnataka Rajyotsava","Unicode block of Kannada","Jnanpith awards won by Kannada"],"r":["U+0C80 to U+0CFF","2008","8","1 November"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Kannada facts: Classical language status to Kannada – 2008; Karnataka Rajyotsava – 1 November; Unicode block of Kannada – U+0C80 to U+0CFF; Jnanpith awards won by Kannada – 8."},

  {"type":"pair","topic":"Kannada Script","q":"Choose the INCORRECTLY matched pair:","o":["Swara – Vowel","Visarga – Sign written as ಂ","Anusvara – Sign written as ಂ","Halant – Sign written as ್"],"a":1,"e":"Visarga is written as ಃ."},

  {"type":"misc","topic":"Unicode & Fonts","q":"Which of the following is NOT a feature of Unicode?","o":["It gives a unique code to each character","It depends on one particular font to store characters","It supports many languages","Its text can be searched on the Internet"],"a":1,"e":"Unicode stores characters independently of any font."},

  {"type":"pair","topic":"Unicode & Fonts","q":"Choose the correctly matched pair:","o":["U+0900 to U+097F – Kannada","U+0B80 to U+0BFF – Kannada","U+0D00 to U+0D7F – Kannada","U+0C80 to U+0CFF – Kannada"],"a":3,"e":"U+0900–U+097F is Devanagari, U+0B80–U+0BFF is Tamil, and U+0D00–U+0D7F is Malayalam."},

  {"type":"stmt","topic":"Typing Methods","q":"Consider the following statements:\n1. K. P. Rao modified the QWERTY layout so that Kannada could be typed using it.\n2. The government announced it as the standard Kannada keyboard.\n3. All Kannada characters could be typed with the 26 alphabet keys.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"match","topic":"Unicode & Fonts","q":"Match the software or font (List I) with its description (List II):","l":["Tunga","Noto Sans Kannada","Baraha","Nudi"],"r":["Kannada software created by Sheshadri Vasu","Kannada font supplied with Microsoft Windows","Kannada software of Kannada Ganaka Parishat","Kannada font family from Google"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Kannada fonts and software: Tunga – Kannada font supplied with Microsoft Windows; Noto Sans Kannada – Kannada font family from Google; Baraha – Kannada software created by Sheshadri Vasu; Nudi – Kannada software of Kannada Ganaka Parishat."},

  {"type":"stmt","topic":"Unicode & Fonts","q":"Consider the following statements:\n1. Unicode gives a unique number to every character.\n2. Unicode text can be read on any system that supports Unicode.\n3. Unicode is a Kannada font.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"Unicode is an encoding standard, not a font. Statement 3 is wrong."},

  {"type":"direct","topic":"Nudi & Baraha","q":"Nudi is software used for","o":["Editing videos","Managing databases","Typing in Kannada","Browsing the Internet"],"a":2,"e":"Nudi is Kannada typing software developed by Kannada Ganaka Parishat."},

  {"type":"misc","topic":"Kannada Script","q":"Arrange the following units of text from the smallest to the largest:\nA. Word\nB. Paragraph\nC. Character\nD. Sentence","o":["A, C, D, B","C, A, B, D","C, A, D, B","C, D, A, B"],"a":2,"e":"Character → word → sentence → paragraph."},

  {"type":"real","topic":"Kannada Language & Bodies","q":"Kannada Rajyotsava, the Karnataka formation day, is celebrated on","o":["1 November","26 January","15 August","2 October"],"a":0,"e":"The state was formed on 1 November 1956, and Kannada Rajyotsava is celebrated on this day."},

  {"type":"real","topic":"Unicode & Fonts","q":"An office wants its Kannada text to be readable on any device and searchable on the Internet. What should it use?","o":["Unicode text","A larger font size","Only printouts","A different page colour"],"a":0,"e":"Unicode text works across systems and can be searched."},

  {"type":"match","topic":"Typing Methods","q":"Match the typing method (List I) with its description (List II):","l":["Phonetic typing","Typewriter layout","Inscript layout","Virtual keyboard"],"r":["Kannada letters fixed on keys as on a Kannada typewriter","On-screen keyboard operated with the mouse","Typing Kannada sounds using English letters","Standard keyboard layout for Indian scripts"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Typing methods: Phonetic typing – Typing Kannada sounds using English letters; Typewriter layout – Kannada letters fixed on keys as on a Kannada typewriter; Inscript layout – Standard keyboard layout for Indian scripts; Virtual keyboard – On-screen keyboard operated with the mouse."},

  {"type":"pair","topic":"Nudi & Baraha","q":"Choose the correctly matched pair:","o":["Baraha – Developed by Kannada Ganaka Parishat","Nudi – Developed by Kannada Ganaka Parishat","Nudi – Developed by Sheshadri Vasu","Unicode – A Kannada typing software"],"a":1,"e":"Nudi was developed by Kannada Ganaka Parishat. Baraha was created by Sheshadri Vasu, and Unicode is an encoding standard."},

  {"type":"stmt","topic":"Typing Methods","q":"Consider the following statements:\n1. Phonetic typing means typing Kannada sounds using English letters.\n2. In phonetic typing, the English key k gives the Kannada letter ಕ.\n3. Phonetic typing requires a Kannada typewriter.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"],"a":2,"e":"Phonetic typing needs only an ordinary English keyboard. Statement 3 is wrong."},

  {"type":"real","topic":"Kannada Script","q":"To form a conjunct consonant (ottakshara) such as ಕ್ಕ, which sign is used between the two consonants?","o":["Anusvara (ಂ)","Visarga (ಃ)","Vowel sign (ಾ)","Halant (್)"],"a":3,"e":"The halant (virama) removes the inherent vowel and joins the consonants."},

  {"type":"misc","topic":"Kannada Script","q":"Which of the following is NOT a Kannada vowel (swara)?","o":["ಕ","ಅ","ಇ","ಉ"],"a":0,"e":"ಅ, ಇ and ಉ are vowels. ಕ is a consonant (vyanjana)."},

  {"type":"match","topic":"Nudi & Baraha","q":"Match the item (List I) with its description (List II):","l":["Nudi","Baraha","Unicode","KGP"],"r":["Standard giving a unique code to every character","Kannada typing software developed by Kannada Ganaka Parishat","Non-profit body that developed Nudi","Kannada typing software created by Sheshadri Vasu"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":1,"e":"Nudi and related terms: Nudi – Kannada typing software developed by Kannada Ganaka Parishat; Baraha – Kannada typing software created by Sheshadri Vasu; Unicode – Standard giving a unique code to every character; KGP – Non-profit body that developed Nudi."},

  {"type":"stmt","topic":"Kannada Script","q":"Consider the following statements:\n1. Anusvara is written as ಂ.\n2. Visarga is written as ಃ.\n3. Swaras are consonants.\n4. Vyanjanas are vowels.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Swaras are vowels and vyanjanas are consonants. Statements 3 and 4 are not correct."},

  {"type":"direct","topic":"Nudi & Baraha","q":"KGP, the organisation that developed Nudi, stands for","o":["Karnataka Government Press","Kannada Ganaka Parishat","Kannada Grantha Prakashana","Karnataka General Parishat"],"a":1,"e":"Kannada Ganaka Parishat is a non-profit organisation that developed Nudi."},

  {"type":"stmt","topic":"Nudi & Baraha","q":"Consider the following statements:\n1. Nudi allows Kannada to be typed using an English keyboard.\n2. Nudi can be used only for Hindi text.\n3. The development of Nudi was funded by the Government of Karnataka.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"Nudi is meant for Kannada. Statement 2 is wrong."},

  {"type":"stmt","topic":"Kannada Script","q":"Consider the following statements:\n1. An ottakshara is the subscript form of a consonant used in conjuncts.\n2. Visarga is written as ಂ.\n3. The halant (್) is used to form conjuncts.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"Visarga is written as ಃ; ಂ is the anusvara. Statement 2 is wrong."},

  {"type":"real","topic":"Nudi & Baraha","q":"A clerk wants to type an official letter in Kannada on a computer that has an English keyboard. Which software should she use?","o":["Excel","Nudi","Paint","Calculator"],"a":1,"e":"Nudi lets Kannada be typed with an English keyboard."},

  {"type":"pair","topic":"Kannada Language & Bodies","q":"Choose the INCORRECTLY matched pair:","o":["Karnataka Rajyotsava – 1 November","Classical language status for Kannada – 2008","Jnanpith awards won by Kannada – 8","Direction of the Kannada script – Right to left"],"a":3,"e":"Kannada is written from left to right."},

  {"type":"stmt","topic":"Nudi & Baraha","q":"Consider the following statements:\n1. Nudi allows Kannada to be typed with an English keyboard.\n2. Nudi is available free of cost.\n3. Nudi supports Windows-based applications.\n4. Nudi helps in using Kannada in governance.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"stmt","topic":"Unicode & Fonts","q":"Consider the following statements:\n1. Text typed in a non-Unicode font shows correctly on any computer, even without the font.\n2. Text typed in a non-Unicode Kannada font appears as strange symbols if the font is not installed.\n3. Unicode Kannada text can be searched on the Internet.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"Font-encoded text needs the font to be installed. Statement 1 is wrong."},

  {"type":"pair","topic":"Unicode & Fonts","q":"Choose the correctly matched pair:","o":["Baraha – Kannada font supplied with Windows","Unicode – Kannada typing software","Nudi – Kannada search engine","Tunga – Kannada Unicode font in Windows"],"a":3,"e":"Tunga is a Kannada font supplied with Windows. Baraha and Nudi are typing software, and Unicode is a standard."},

  {"type":"match","topic":"Typing Methods","q":"In Nudi typing, match the key (List I) with the Kannada letter obtained (List II):","l":["a","A","k","K"],"r":["ಖ","ಅ","ಕ","ಆ"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-3, C-4, D-1"],"a":2,"e":"Nudi key mapping: a – ಅ; A – ಆ; k – ಕ; K – ಖ."},

  {"type":"direct","topic":"Unicode & Fonts","q":"The international standard that gives a unique code to every character of every language is","o":["Unicode","ASCII","BCD","EBCDIC"],"a":0,"e":"Unicode covers the characters of all major scripts, including Kannada."},

  {"type":"match","topic":"Typing Methods","q":"Match the term (List I) with its meaning (List II):","l":["Transliteration","Translation","Encoding","Spell checker"],"r":["Assigning numbers (codes) to characters","Converting text from one script to another by sound","Finds misspelt words","Converting the meaning of text into another language"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"Text terms: Transliteration – Converting text from one script to another by sound; Translation – Converting the meaning of text into another language; Encoding – Assigning numbers (codes) to characters; Spell checker – Finds misspelt words."},

  {"type":"pair","topic":"Typing Methods","q":"Choose the INCORRECTLY matched pair:","o":["Transliteration – Translating the meaning of text into another language","Phonetic typing – Using English letters for Kannada sounds","Virtual keyboard – On-screen keyboard","Font converter – Converts old font text to Unicode"],"a":0,"e":"Transliteration converts text from one script to another by sound. Changing meaning into another language is translation."},

  {"type":"misc","topic":"Nudi & Baraha","q":"Which of the following is NOT a Kannada typing software?","o":["Nudi","Tally","Baraha","Google Input Tools"],"a":1,"e":"Tally is accounting software. Nudi, Baraha and Google Input Tools can be used for typing Kannada."},

  {"type":"stmt","topic":"Nudi & Baraha","q":"Consider the following statements:\n1. Baraha was developed by Kannada Ganaka Parishat.\n2. Baraha was developed by Sheshadri Vasu.\n3. Baraha allows Kannada to be typed phonetically.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"Nudi was developed by Kannada Ganaka Parishat; Baraha by Sheshadri Vasu. Statement 1 is wrong."},

  {"type":"match","topic":"Unicode & Fonts","q":"Match the term (List I) with its meaning (List II):","l":["Font-encoded text","Unicode text","Font converter","Glyph"],"r":["Changes old-font text into Unicode","Needs the same font to display correctly","Shape of a character as displayed","Displays on any system supporting Unicode"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"Fonts and Unicode: Font-encoded text – Needs the same font to display correctly; Unicode text – Displays on any system supporting Unicode; Font converter – Changes old-font text into Unicode; Glyph – Shape of a character as displayed."},

  {"type":"stmt","topic":"Nudi & Baraha","q":"Consider the following statements:\n1. Nudi is software for typing in Kannada script.\n2. Nudi was developed by Kannada Ganaka Parishat.\n3. Nudi must be bought separately for each computer.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"Nudi is available free of cost. Statement 3 is wrong."},

  {"type":"stmt","topic":"Nudi & Baraha","q":"Consider the following statements:\n1. Baraha was developed by Kannada Ganaka Parishat.\n2. Nudi was developed by Sheshadri Vasu.\n3. Baraha is a phonetic-based Kannada typing software.\n4. Nudi is a Kannada operating system.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"Baraha was created by Sheshadri Vasu, Nudi by Kannada Ganaka Parishat, and Nudi is not an operating system. Only statement 3 is correct."},

  {"type":"real","topic":"Unicode & Fonts","q":"Kannada text sent by a friend appears as strange symbols on your computer. It was typed in an old non-Unicode font. What is the likely cause?","o":["The keyboard is broken","The font is not installed on your computer","The monitor is too small","The mouse driver is missing"],"a":1,"e":"Font-encoded text shows correctly only when the same font is installed."}
  ]
};
