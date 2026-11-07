/* TEST 7 — NUMBER SYSTEM AND LOGIC GATES (50 MCQs)
   Sub-topics: Number Systems, Conversions, Binary Arithmetic, Codes, Logic Gates,
               Universal Gates & Circuits, Boolean Algebra
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Number System and Logic Gates",
  questions: [
  {"type":"match","topic":"Number Systems","q":"Match the number system (List I) with its base (List II):","l":["Binary","Octal","Decimal","Hexadecimal"],"r":["Base 8","Base 16","Base 2","Base 10"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":1,"e":"Binary has base 2, octal base 8, decimal base 10 and hexadecimal base 16."},

  {"type":"real","topic":"Universal Gates & Circuits","q":"A digital circuit has 4 inputs. How many rows will its complete truth table have?","o":["16","4","8","32"],"a":0,"e":"A circuit with n inputs has 2^n input combinations, so 2^4 = 16 rows."},

  {"type":"stmt","topic":"Number Systems","q":"Consider the following statements:\n1. A bit is the smallest unit of data.\n2. A nibble contains 4 bits.\n3. A byte contains 8 bits.\n4. With 8 bits, 256 different values can be represented.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct (2^8 = 256)."},

  {"type":"direct","topic":"Conversions","q":"The binary equivalent of the decimal number 25 is","o":["10011","11001","11010","10101"],"a":1,"e":"25 = 16 + 8 + 1, which is 11001 in binary."},

  {"type":"stmt","topic":"Logic Gates","q":"Consider the following statements:\n1. The output of an XOR gate is 1 when its two inputs are the same.\n2. The output of an XNOR gate is 1 when its two inputs are the same.\n3. The output of a two-input XOR gate is 0 when both inputs are 1.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"An XOR gate gives 1 when the inputs are different, so statement 1 is wrong. XNOR is the complement of XOR."},

  {"type":"real","topic":"Universal Gates & Circuits","q":"A corridor light has two switches, one at each end. The light is ON when the two switches are in different positions and OFF when they are in the same position. The circuit works like a(n)","o":["AND gate","OR gate","XOR gate","NAND gate"],"a":2,"e":"An XOR gate gives output 1 only when its inputs are different."},

  {"type":"real","topic":"Logic Gates","q":"A smartphone unlocks only when both the correct fingerprint and the correct PIN are given. This logic is like a(n)","o":["OR gate","NOT gate","AND gate","XOR gate"],"a":2,"e":"An AND gate gives output 1 (unlock) only when all inputs are 1 (both conditions are satisfied)."},

  {"type":"stmt","topic":"Number Systems","q":"Consider the following statements:\n1. The base of the decimal number system is 10.\n2. The base of the binary number system is 2.\n3. The base of the octal number system is 7.\n4. The base of the hexadecimal number system is 16.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"The base of the octal system is 8, not 7, so statement 3 is wrong."},

  {"type":"real","topic":"Codes","q":"The letter A is typed in a text file and stored with the ASCII value 65. In 8-bit binary this is","o":["01000010","01000001","01000000","10000001"],"a":1,"e":"65 = 64 + 1, which is 01000001 in 8-bit binary."},

  {"type":"match","topic":"Codes","q":"Match the code (List I) with its feature (List II):","l":["ASCII","EBCDIC","Unicode","BCD"],"r":["Represents each decimal digit by 4 bits","7-bit code for 128 characters","Universal code covering the world's languages","8-bit code developed by IBM"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":1,"e":"ASCII is a 7-bit code (128 characters); EBCDIC is an 8-bit IBM code; Unicode covers the characters of the world's languages; BCD codes each decimal digit in 4 bits."},

  {"type":"real","topic":"Logic Gates","q":"A fire alarm rings if either the smoke sensor or the heat sensor detects danger. This logic is like a(n)","o":["AND gate","NOT gate","OR gate","NAND gate"],"a":2,"e":"An OR gate gives output 1 when at least one input is 1, so the alarm rings if either sensor is triggered."},

  {"type":"match","topic":"Conversions","q":"Match the decimal number (List I) with its binary equivalent (List II):","l":["10 (decimal)","13 (decimal)","22 (decimal)","31 (decimal)"],"r":["10110","1010","11111","1101"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Divide repeatedly by 2 and read the remainders from bottom to top. 10 (decimal) = 1010; 13 (decimal) = 1101; 22 (decimal) = 10110; 31 (decimal) = 11111."},

  {"type":"direct","topic":"Number Systems","q":"The largest decimal number that can be stored in 8 bits (unsigned) is","o":["256","128","255","127"],"a":2,"e":"With 8 bits we can store 2^8 = 256 values, from 0 to 255."},

  {"type":"pair","topic":"Logic Gates","q":"Choose the INCORRECTLY matched pair:","o":["AND – Output 1 only when all inputs are 1","NAND – Output 1 only when all inputs are 1","OR – Output 1 when any input is 1","NOT – Complements the input"],"a":1,"e":"A NAND gate gives 0 when all inputs are 1 and 1 otherwise. It is the complement of AND."},

  {"type":"match","topic":"Boolean Algebra","q":"Match the Boolean law (List I) with its expression (List II):","l":["De Morgan's law","Identity law","Complement law","Idempotent law"],"r":["A + A' = 1","A + A = A","A + 0 = A","(A · B)' = A' + B'"],"o":["A-4, B-3, C-1, D-2","A-3, B-4, C-1, D-2","A-4, B-3, C-2, D-1","A-4, B-1, C-3, D-2"],"a":0,"e":"These are standard laws of Boolean algebra. De Morgan's law = (A · B)' = A' + B'; Identity law = A + 0 = A; Complement law = A + A' = 1; Idempotent law = A + A = A."},

  {"type":"stmt","topic":"Logic Gates","q":"Consider the following statements:\n1. The output of an AND gate is 1 only when all its inputs are 1.\n2. The output of an OR gate is 0 when any input is 1.\n3. The output of a NOT gate is the complement of its input.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"An OR gate gives 1 when at least one input is 1, so statement 2 is wrong."},

  {"type":"real","topic":"Conversions","q":"In a web page, the colour code #FF0000 gives maximum red. What is the decimal value of the hexadecimal part FF used for red?","o":["16","256","15","255"],"a":3,"e":"FF in hexadecimal = 15 × 16 + 15 = 255."},

  {"type":"stmt","topic":"Universal Gates & Circuits","q":"Consider the following statements:\n1. A NAND gate is an AND gate followed by a NOT gate.\n2. A NOR gate is an OR gate followed by a NOT gate.\n3. An XNOR gate is the complement of the XOR gate.\n4. An XOR gate is the complement of the AND gate.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"Statement 4 is wrong. The complement of an AND gate is a NAND gate; XOR gives 1 when the inputs are different."},

  {"type":"pair","topic":"Boolean Algebra","q":"Choose the correctly matched pair:","o":["De Morgan's law – (A + B)' = A' · B'","Complement law – A · A' = 1","Idempotent law – A + A = 2A","Absorption law – A + AB = B"],"a":0,"e":"De Morgan's law gives (A + B)' = A' · B'. The complement law is A · A' = 0, the idempotent law is A + A = A, and the absorption law is A + AB = A."},

  {"type":"stmt","topic":"Number Systems","q":"Consider the following statements:\n1. Each octal digit can be written using 3 binary bits.\n2. Each hexadecimal digit can be written using 4 binary bits.\n3. The decimal value of the hexadecimal digit F is 16.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"Octal digits need 3 bits (2^3 = 8) and hex digits need 4 bits (2^4 = 16). The hex digit F equals 15, not 16."},

  {"type":"stmt","topic":"Boolean Algebra","q":"Consider the following statements about De Morgan's laws:\n1. (A · B)' = A' · B'\n2. (A + B)' = A' · B'\n3. (A · B)' = A' + B'\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"De Morgan's laws: (A · B)' = A' + B' and (A + B)' = A' · B'. Statement 1 is wrong."},

  {"type":"match","topic":"Conversions","q":"Match the hexadecimal number (List I) with its decimal value (List II):","l":["1A (hex)","2F (hex)","64 (hex)","FF (hex)"],"r":["255","47","26","100"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-2, C-4, D-1","A-3, B-4, C-2, D-1"],"a":2,"e":"Multiply each hex digit by the power of 16 and add (A = 10 … F = 15). 1A (hex) = 26; 2F (hex) = 47; 64 (hex) = 100; FF (hex) = 255."},

  {"type":"pair","topic":"Conversions","q":"Choose the INCORRECTLY matched pair:","o":["1010 (binary) = 10 (decimal)","FF (hexadecimal) = 255 (decimal)","17 (octal) = 15 (decimal)","100 (binary) = 8 (decimal)"],"a":3,"e":"Binary 100 equals 4 in decimal (1 × 2^2). The other three pairs are correct."},

  {"type":"stmt","topic":"Binary Arithmetic","q":"Consider the following statements:\n1. The 1's complement of binary 1010 is 0110.\n2. The 2's complement of binary 1010 is 0101.\n3. The 1's complement of binary 1010 is 0101.\n4. The 2's complement of binary 1010 is 1010.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"The 1's complement of 1010 is 0101, and the 2's complement is 0101 + 1 = 0110. Only statement 3 is correct."},

  {"type":"stmt","topic":"Boolean Algebra","q":"Consider the following Boolean identities:\n1. A + 0 = A\n2. A · 1 = A\n3. A + A' = 1\n4. A · 0 = 1\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"A · 0 = 0, so statement 4 is wrong. The other three identities are correct."},

  {"type":"misc","topic":"Number Systems","q":"Which of the following is NOT a valid octal number?","o":["725","358","1034","567"],"a":1,"e":"Octal uses only the digits 0 to 7. The digit 8 in 358 makes it invalid."},

  {"type":"match","topic":"Logic Gates","q":"Match the gate (List I) with its Boolean expression (List II):","l":["AND gate","OR gate","NAND gate","NOR gate"],"r":["(A + B)'","A · B","(A · B)'","A + B"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"In Boolean algebra · means AND, + means OR and the prime (') means NOT. AND gate = A · B; OR gate = A + B; NAND gate = (A · B)'; NOR gate = (A + B)'."},

  {"type":"stmt","topic":"Boolean Algebra","q":"Consider the following Boolean identities:\n1. A + A' = 1\n2. A · A' = 1\n3. A + 1 = 1\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":3,"e":"A · A' = 0, not 1, so statement 2 is wrong."},

  {"type":"stmt","topic":"Binary Arithmetic","q":"Consider the following statements about complements:\n1. The 1's complement of a binary number is obtained by inverting every bit.\n2. The 2's complement is obtained by adding 1 to the 1's complement.\n3. The 2's complement is obtained by subtracting 1 from the 1's complement.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"],"a":2,"e":"2's complement = 1's complement + 1, so statement 3 is wrong."},

  {"type":"misc","topic":"Boolean Algebra","q":"Which of the following Boolean identities is NOT correct?","o":["A + A' = 1","A · A' = 0","A + 1 = A","A · 1 = A"],"a":2,"e":"A + 1 = 1 (anything OR 1 is 1). The other three identities are correct."},

  {"type":"stmt","topic":"Universal Gates & Circuits","q":"Consider the following statements about a half adder:\n1. A half adder adds two single-bit inputs and produces a sum and a carry.\n2. The sum output of a half adder is the XOR of its inputs.\n3. The carry output of a half adder is the AND of its inputs.\nWhich of the statements given above is/are correct?","o":["1, 2 and 3","1 and 2 only","2 and 3 only","1 and 3 only"],"a":0,"e":"All three statements are correct: sum = A XOR B and carry = A AND B."},

  {"type":"match","topic":"Conversions","q":"Match the number (List I) with its decimal value (List II):","l":["1010 (binary)","17 (octal)","1F (hexadecimal)","25 (decimal)"],"r":["25","10","31","15"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Convert each number to decimal using the powers of its base. 1010 (binary) = 10; 17 (octal) = 15; 1F (hexadecimal) = 31; 25 (decimal) = 25."},

  {"type":"pair","topic":"Number Systems","q":"Choose the correctly matched pair:","o":["Octal – Base 10","Decimal – Base 8","Hexadecimal – Base 2","Binary – Base 2"],"a":3,"e":"Binary has base 2, octal base 8, decimal base 10 and hexadecimal base 16."},

  {"type":"pair","topic":"Universal Gates & Circuits","q":"Choose the INCORRECTLY matched pair:","o":["Half adder – Sum is XOR, carry is AND","Universal gates – NAND and NOR","XNOR – Output 1 when both inputs are equal","XOR – Output 1 when both inputs are equal"],"a":3,"e":"An XOR gate gives 1 when the inputs are different. XNOR is the gate that gives 1 when they are equal."},

  {"type":"direct","topic":"Logic Gates","q":"Which logic gate gives the output 1 only when both of its inputs are 0?","o":["NAND","NOR","XOR","AND"],"a":1,"e":"A NOR gate is the complement of OR, so its output is 1 only when all inputs are 0."},

  {"type":"real","topic":"Codes","q":"A digital weighing machine stores the decimal number 47 in BCD (Binary Coded Decimal). How is it stored?","o":["101111","0111 0100","0100 1011","0100 0111"],"a":3,"e":"In BCD each decimal digit is coded separately in 4 bits: 4 = 0100 and 7 = 0111."},

  {"type":"stmt","topic":"Binary Arithmetic","q":"Consider the following statements:\n1. 1 + 1 = 10 in binary addition.\n2. 1 + 1 + 1 = 11 in binary addition.\n3. 0 − 1 requires a borrow in binary subtraction.\n4. 11 + 1 = 101 in binary addition.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"11 + 1 = 100 in binary (3 + 1 = 4), so statement 4 is wrong. The others are correct."},

  {"type":"stmt","topic":"Conversions","q":"Consider the following statements:\n1. Binary 1010 equals decimal 12.\n2. Binary 1111 equals decimal 15.\n3. Binary 100 equals decimal 8.\n4. Binary 11 equals decimal 4.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":1,"e":"1010 = 10, 1111 = 15, 100 = 4 and 11 = 3 in decimal. Only statement 2 is correct."},

  {"type":"pair","topic":"Codes","q":"Choose the correctly matched pair:","o":["Unicode – Universal character set for many languages","ASCII – Supports more than 65,000 characters","EBCDIC – 7-bit code developed by Microsoft","BCD – Represents a whole number as a single binary value"],"a":0,"e":"Unicode covers the characters of many languages. ASCII has only 128 characters, EBCDIC is an IBM code, and BCD codes each decimal digit separately."},

  {"type":"real","topic":"Codes","q":"Standard ASCII uses 7 bits for each character. How many different characters can it represent?","o":["127","128","256","64"],"a":1,"e":"With 7 bits there are 2^7 = 128 different combinations."},

  {"type":"stmt","topic":"Codes","q":"Consider the following statements:\n1. ASCII stands for American Standard Code for Information Interchange.\n2. The ASCII value of capital A is 66.\n3. The ASCII value of small a is 65.\n4. The ASCII value of the digit 0 is 48.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"The ASCII value of capital A is 65, small a is 97, and the digit 0 is 48. Statements 1 and 4 are correct."},

  {"type":"misc","topic":"Number Systems","q":"Which of the following is NOT a valid hexadecimal number?","o":["1AF","9C","FF","2G5"],"a":3,"e":"Hexadecimal uses the digits 0–9 and the letters A–F only. The letter G is not allowed."},

  {"type":"stmt","topic":"Universal Gates & Circuits","q":"Consider the following statements:\n1. XOR is a universal gate.\n2. NAND is a universal gate.\n3. NOR is a universal gate.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"NAND and NOR are the universal gates because any logic circuit can be built using only one of them. XOR is not universal."},

  {"type":"match","topic":"Conversions","q":"Match the octal number (List I) with its decimal value (List II):","l":["17 (octal)","20 (octal)","77 (octal)","100 (octal)"],"r":["16","64","15","63"],"o":["A-3, B-1, C-4, D-2","A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":0,"e":"Multiply each octal digit by the power of 8 and add. 17 (octal) = 15; 20 (octal) = 16; 77 (octal) = 63; 100 (octal) = 64."},

  {"type":"match","topic":"Logic Gates","q":"Match the logic gate (List I) with its rule (List II):","l":["AND gate","OR gate","NOT gate","XOR gate"],"r":["Output is the opposite of the input","Output is 1 when at least one input is 1","Output is 1 when the inputs are different","Output is 1 only when all inputs are 1"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-3, D-1","A-4, B-1, C-2, D-3","A-4, B-2, C-1, D-3"],"a":3,"e":"AND gives 1 only when all inputs are 1; OR gives 1 when at least one input is 1; NOT inverts the input; XOR gives 1 when the inputs are different."},

  {"type":"stmt","topic":"Codes","q":"Consider the following statements about character codes:\n1. ASCII is a 7-bit code that represents 128 characters.\n2. Unicode can represent characters of many languages, including Kannada.\n3. EBCDIC is a code developed by Microsoft.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"EBCDIC was developed by IBM, so statement 3 is wrong."},

  {"type":"misc","topic":"Codes","q":"Which of the following is NOT a character encoding system?","o":["Boolean algebra","ASCII","Unicode","EBCDIC"],"a":0,"e":"Boolean algebra is a mathematical system for logic. ASCII, Unicode and EBCDIC are character encodings."},

  {"type":"misc","topic":"Number Systems","q":"Arrange the following number systems in increasing order of their base:\nA. Octal\nB. Binary\nC. Hexadecimal\nD. Decimal","o":["A, B, D, C","B, A, C, D","B, A, D, C","B, D, A, C"],"a":2,"e":"Binary (2) < Octal (8) < Decimal (10) < Hexadecimal (16)."},

  {"type":"match","topic":"Binary Arithmetic","q":"Match the binary operation (List I) with its result (List II):","l":["101 + 11","1100 − 101","11 × 11","1000 ÷ 10"],"r":["111","100","1000","1001"],"o":["A-3, B-1, C-4, D-2","A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":0,"e":"Check by converting to decimal: 5 + 3 = 8, 12 − 5 = 7, 3 × 3 = 9, 8 ÷ 2 = 4. 101 + 11 = 1000; 1100 − 101 = 111; 11 × 11 = 1001; 1000 ÷ 10 = 100."},

  {"type":"stmt","topic":"Number Systems","q":"Consider the following statements:\n1. The binary number system uses only the digits 0 and 1.\n2. The octal number system uses the digits 0 to 8.\n3. The hexadecimal number system has 16 symbols.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"The octal system uses the digits 0 to 7 only (base 8), so statement 2 is wrong. Hexadecimal uses 0–9 and A–F, which is 16 symbols."}
  ]
};
