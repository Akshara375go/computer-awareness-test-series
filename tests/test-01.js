/* TEST 1 — INTRODUCTION TO COMPUTER (50 MCQs)
   Fields: type  = match | stmt | pair | direct | real | misc
           topic = shown in "weak topics" analysis
           a     = index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
           l / r = optional List I / List II for "match the following"
*/
window.TEST_DATA = {
  title: "Introduction to Computer",
  questions: [

  { type:"match", topic:"History",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["Pascaline","Difference Engine","Tabulating Machine","Stepped Reckoner"],
    r:["Herman Hollerith","Blaise Pascal","Charles Babbage","Gottfried Leibniz"],
    o:["A-1, B-2, C-3, D-4","A-2, B-3, C-1, D-4","A-2, B-1, C-4, D-3","A-4, B-3, C-2, D-1"], a:1,
    e:"Pascaline – Blaise Pascal (1642); Difference Engine – Charles Babbage; Tabulating Machine – Herman Hollerith (1890 US Census); Stepped Reckoner – Gottfried Leibniz (it could also multiply and divide)." },

  { type:"stmt", topic:"Generations",
    q:"Consider the following statements about first-generation computers:\n1. They used vacuum tubes as the main electronic component.\n2. Programs were written in machine language.\n3. They used transistors to reduce heat and size.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:0,
    e:"First generation (about 1940–56) used vacuum tubes and machine language. Transistors belong to the second generation, so statement 3 is wrong." },

  { type:"real", topic:"Applications",
    q:"A national bank connects thousands of branch terminals and ATMs to one central system that processes millions of transactions every day. Which type of computer is most suitable for this central system?",
    o:["Microcomputer","Embedded computer","Mainframe computer","Analog computer"], a:2,
    e:"Mainframes support a very large number of simultaneous users and bulk transaction processing, so banks, railways and airlines use them for central processing." },

  { type:"pair", topic:"History",
    q:"Choose the correctly matched pair:",
    o:["Napier's Bones – Blaise Pascal","Slide Rule – Herman Hollerith","Mark I – Charles Babbage","Stepped Reckoner – Gottfried Leibniz"], a:3,
    e:"Napier's Bones – John Napier; Slide Rule – William Oughtred; Mark I – Howard Aiken. Only the Stepped Reckoner – Leibniz pair is correct." },

  { type:"stmt", topic:"History",
    q:"Consider the following statements:\n1. The abacus is considered one of the earliest calculating devices.\n2. Napier's Bones were invented by Blaise Pascal.\n3. The Pascaline could perform addition and subtraction.\n4. Jacquard's loom used punched cards to control weaving patterns.\nHow many of the statements given above are correct?",
    o:["Only one","Only two","Only three","All four"], a:2,
    e:"Statements 1, 3 and 4 are correct. Napier's Bones were invented by John Napier (1617), not Blaise Pascal." },

  { type:"match", topic:"Generations",
    q:"Match the generation (List I) with its main technology (List II):",
    l:["First generation","Second generation","Third generation","Fourth generation"],
    r:["Microprocessor","Integrated Circuit","Vacuum tube","Transistor"],
    o:["A-3, B-4, C-2, D-1","A-4, B-3, C-1, D-2","A-3, B-2, C-4, D-1","A-1, B-2, C-3, D-4"], a:0,
    e:"1st – vacuum tubes; 2nd – transistors; 3rd – integrated circuits (ICs); 4th – microprocessors (LSI/VLSI)." },

  { type:"direct", topic:"Generations",
    q:"The transistor, which started the second generation of computers, was invented at",
    o:["IBM Research","Bell Laboratories","Intel Corporation","Texas Instruments"], a:1,
    e:"The transistor was invented in 1947 at Bell Laboratories by John Bardeen, Walter Brattain and William Shockley." },

  { type:"stmt", topic:"Characteristics & Limitations",
    q:"Consider the following statements:\n1. A computer has its own IQ and can think independently.\n2. The output of a computer depends on the quality of its input (GIGO).\n3. A computer cannot work without instructions given through a program.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"], a:3,
    e:"A computer has zero IQ, so statement 1 is wrong. GIGO (Garbage In, Garbage Out) and dependence on programs are correct." },

  { type:"misc", topic:"Generations",
    q:"Arrange the following electronic components in the order in which they were used in successive generations of computers:\nA. Integrated Circuit\nB. Vacuum tube\nC. Microprocessor\nD. Transistor",
    o:["A, B, D, C","B, A, D, C","B, D, A, C","D, B, A, C"], a:2,
    e:"Vacuum tube (1st) → Transistor (2nd) → Integrated Circuit (3rd) → Microprocessor (4th)." },

  { type:"stmt", topic:"Generations",
    q:"Consider the following statements:\n1. ENIAC belongs to the second generation of computers.\n2. Integrated circuits were used in first-generation computers.\n3. Fourth-generation computers mainly used vacuum tubes.\n4. Fifth-generation computing focuses on artificial intelligence.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:3,
    e:"ENIAC is a first-generation machine (vacuum tubes). ICs came in the third generation and microprocessors in the fourth. Only statement 4 is correct." },

  { type:"match", topic:"Classification",
    q:"Match the type of computer (List I) with its typical use (List II):",
    l:["Supercomputer","Mainframe computer","Microcomputer","Embedded computer"],
    r:["Personal desktop used at home","Microwave oven controller","National-level weather and climate modelling","Airline reservation and bank core processing"],
    o:["A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2","A-4, B-3, C-1, D-2","A-3, B-4, C-2, D-1"], a:1,
    e:"Supercomputers do heavy scientific modelling; mainframes handle bulk transactions; microcomputers are personal computers; embedded computers are built into appliances." },

  { type:"real", topic:"Classification",
    q:"A modern washing machine has a small built-in chip that senses the load and automatically selects the wash cycle. This chip is an example of",
    o:["Embedded computer","Mainframe computer","Supercomputer","Minicomputer"], a:0,
    e:"An embedded computer is built into a device to perform a dedicated task, as in washing machines, microwave ovens, ATMs and cars." },

  { type:"pair", topic:"Generations",
    q:"Choose the INCORRECTLY matched pair:",
    o:["First generation – Machine language","Second generation – Magnetic core memory","Third generation – Microprocessor","Fifth generation – Artificial intelligence"], a:2,
    e:"The microprocessor (Intel 4004, 1971) marks the fourth generation. Third-generation computers used integrated circuits." },

  { type:"stmt", topic:"Classification",
    q:"Consider the following statements about mainframe computers:\n1. They are used for bulk transaction processing in banks and airlines.\n2. They are designed for a single user at home.\n3. They can run many programs concurrently for many users.\nWhich of the statements given above is/are correct?",
    o:["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"], a:0,
    e:"Mainframes are large multi-user systems. Single-user home use describes a personal computer, so statement 2 is wrong." },

  { type:"match", topic:"Classification",
    q:"Match the type of computer (List I) with an example (List II):",
    l:["Analog computer","Digital computer","Hybrid computer","Special-purpose computer"],
    r:["Laptop","Car speedometer (measures continuously)","Patient-monitoring system in a hospital ICU","Traffic-signal controller"],
    o:["A-1, B-2, C-3, D-4","A-2, B-1, C-4, D-3","A-3, B-2, C-1, D-4","A-2, B-1, C-3, D-4"], a:3,
    e:"Analog machines measure continuous quantities; digital computers process discrete binary data; hybrids combine both (e.g., ICU monitoring); special-purpose computers do one dedicated job." },

  { type:"real", topic:"Characteristics & Limitations",
    q:"A clerk enters wrong marks into a result-processing software. The computer calculates correctly but prints wrong ranks. This situation best illustrates",
    o:["Versatility of computers","GIGO principle","Automation","High storage capacity"], a:1,
    e:"GIGO – Garbage In, Garbage Out. A computer processes whatever data it receives; wrong input gives wrong output." },

  { type:"stmt", topic:"Classification",
    q:"Consider the following statements:\n1. Minicomputers are more powerful than supercomputers.\n2. Analog computers process data only in binary form.\n3. Embedded computers are built into devices to perform dedicated tasks.\n4. A laptop is a type of mainframe computer.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:2,
    e:"Supercomputers are the most powerful, analog computers work on continuous signals and a laptop is a microcomputer. Only statement 3 is correct." },

  { type:"misc", topic:"History",
    q:"Which of the following is NOT a manual or mechanical calculating aid used before the electronic era?",
    o:["Abacus","Napier's Bones","Pascaline","ENIAC"], a:3,
    e:"ENIAC (1946) was an electronic computer using vacuum tubes. The others are manual or mechanical aids." },

  { type:"stmt", topic:"Generations",
    q:"Consider the following statements about second-generation computers:\n1. Transistors replaced vacuum tubes.\n2. They were smaller, faster and produced less heat than first-generation machines.\n3. Microprocessors were introduced in this generation.\nWhich of the statements given above is/are correct?",
    o:["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"], a:1,
    e:"Second generation (about 1956–63) used transistors. Microprocessors came in the fourth generation." },

  { type:"match", topic:"History",
    q:"Match the device (List I) with its inventor or origin (List II):",
    l:["Abacus","Napier's Bones","Slide Rule","Analytical Engine"],
    r:["William Oughtred","John Napier","Charles Babbage","Ancient civilisations (Babylon/China)"],
    o:["A-4, B-2, C-1, D-3","A-4, B-1, C-2, D-3","A-2, B-4, C-1, D-3","A-1, B-2, C-4, D-3"], a:0,
    e:"Abacus – ancient civilisations; Napier's Bones – John Napier (1617); Slide Rule – William Oughtred (1622); Analytical Engine – Charles Babbage (designed 1837)." },

  { type:"pair", topic:"Classification",
    q:"Choose the correctly matched pair:",
    o:["Minicomputer – Single-user pocket device","Supercomputer – Designed only for simple tasks like a calculator","Microcomputer – Uses a microprocessor as its CPU","Mainframe – Slowest type of computer"], a:2,
    e:"A microcomputer is built around a microprocessor. A supercomputer is the fastest class, and mainframes are large and powerful, not the slowest." },

  { type:"real", topic:"Applications",
    q:"A petrol pump measures the continuous flow of fuel and displays the quantity and price in digital form. It works on the principle of a",
    o:["Analog computer","Hybrid computer","Mainframe computer","General-purpose digital computer"], a:1,
    e:"A hybrid computer combines analog and digital features: it measures a continuous quantity and shows digital results." },

  { type:"stmt", topic:"Classification",
    q:"Consider the following statements:\n1. The speed of supercomputers is measured in FLOPS.\n2. The speed of mainframe computers is commonly measured in MIPS.\n3. A microcomputer is also called a personal computer.\n4. Hybrid computers combine features of analog and digital computers.\nHow many of the statements given above are correct?",
    o:["Only one","Only two","Only three","All four"], a:3,
    e:"All four statements are correct: FLOPS = floating-point operations per second, MIPS = million instructions per second." },

  { type:"direct", topic:"Classification",
    q:"The PARAM series of supercomputers in India was developed by C-DAC under the leadership of",
    o:["Vijay P. Bhatkar","Homi J. Bhabha","Vikram Sarabhai","Satish Dhawan"], a:0,
    e:"Dr. Vijay P. Bhatkar led the development of PARAM, with PARAM 8000 built in 1991 at C-DAC, Pune." },

  { type:"match", topic:"Components & Functions",
    q:"Match the unit (List I) with its function (List II):",
    l:["Arithmetic Logic Unit","Control Unit","Registers","Output unit"],
    r:["Directs and coordinates all operations","Performs arithmetic and logical operations","High-speed temporary storage inside the CPU","Presents processed results to the user"],
    o:["A-1, B-2, C-3, D-4","A-2, B-1, C-4, D-3","A-2, B-1, C-3, D-4","A-3, B-1, C-2, D-4"], a:2,
    e:"ALU does calculations and comparisons, the Control Unit directs operations, registers are the CPU's fast temporary storage, and the output unit presents results." },

  { type:"stmt", topic:"Applications",
    q:"Consider the following statements:\n1. Weather forecasting uses supercomputers to process huge amounts of data.\n2. Banks use computers for ATMs and core banking.\n3. Hospitals use computers in CT scans and patient records.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:3,
    e:"All three are real applications of computers in science, banking and healthcare." },

  { type:"misc", topic:"Characteristics & Limitations",
    q:"Which of the following is NOT a limitation of a computer?",
    o:["Lack of common sense","Very high processing speed","Dependence on instructions","Absence of feelings"], a:1,
    e:"High speed is a characteristic (advantage) of computers. The others are limitations." },

  { type:"real", topic:"Characteristics & Limitations",
    q:"An online exam software automatically evaluates MCQs but cannot judge whether a student's essay is original unless it is programmed with specific rules. Which limitation of computers does this show?",
    o:["Computers have no intelligence of their own","Computers are slow","Computers cannot store data","Computers cannot perform calculations"], a:0,
    e:"A computer has no IQ and works only on the instructions it has been given; it cannot judge on its own." },

  { type:"stmt", topic:"History",
    q:"Consider the following statements:\n1. The word “computer” is derived from the Latin word “computare”, meaning to calculate.\n2. Charles Babbage designed ENIAC.\n3. Ada Lovelace is known as the father of the computer.\n4. Herman Hollerith invented the Pascaline.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:0,
    e:"Babbage designed the Difference and Analytical Engines. Ada Lovelace is the first programmer. The Pascaline was invented by Blaise Pascal." },

  { type:"match", topic:"History",
    q:"Match the computer (List I) with its significance (List II):",
    l:["ENIAC","UNIVAC I","Mark I","EDVAC"],
    r:["Stored-program concept","First commercially produced computer","Electromechanical computer by Howard Aiken","First general-purpose electronic digital computer"],
    o:["A-1, B-2, C-3, D-4","A-4, B-3, C-2, D-1","A-2, B-4, C-1, D-3","A-4, B-2, C-3, D-1"], a:3,
    e:"ENIAC – first general-purpose electronic digital computer; UNIVAC I – first commercial computer (1951); Mark I – Howard Aiken; EDVAC – stored-program concept." },

  { type:"pair", topic:"Classification",
    q:"Choose the INCORRECTLY matched pair:",
    o:["PARAM – Supercomputer series of C-DAC","IBM PC – Mainframe computer","Cray-1 – Supercomputer designed by Seymour Cray","PDP-8 – Minicomputer"], a:1,
    e:"The IBM PC (1981) is a microcomputer (personal computer), not a mainframe." },

  { type:"stmt", topic:"History",
    q:"Consider the following statements about Charles Babbage:\n1. He is often called the “Father of the Computer”.\n2. He built the ENIAC.\n3. He designed the Analytical Engine.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:2,
    e:"Babbage designed the Difference Engine and the Analytical Engine. ENIAC was built by Eckert and Mauchly." },

  { type:"real", topic:"Generations",
    q:"Face-unlock on smartphones, voice assistants and machine learning reflect the goals of which generation of computers?",
    o:["Second generation","Third generation","Fourth generation","Fifth generation"], a:3,
    e:"The fifth generation focuses on artificial intelligence, parallel processing and ULSI technology." },

  { type:"match", topic:"Characteristics & Limitations",
    q:"Match the characteristic (List I) with the situation (List II):",
    l:["Speed","Accuracy","Diligence","Versatility"],
    r:["One PC used for typing, music, video editing and accounts","Processing a billion calculations in seconds","Error-free results as long as correct data is fed","Working for hours without tiredness or loss of concentration"],
    o:["A-1, B-2, C-3, D-4","A-2, B-3, C-4, D-1","A-2, B-4, C-3, D-1","A-3, B-2, C-1, D-4"], a:1,
    e:"Speed – very fast calculation; Accuracy – error-free results; Diligence – no tiredness; Versatility – many different tasks." },

  { type:"stmt", topic:"Components & Functions",
    q:"Consider the following statements:\n1. Hardware refers to the physical components of a computer.\n2. Software can be touched and seen physically.\n3. Liveware refers to the users of a computer system.\n4. Firmware is software that is lost when the power is switched off.\nHow many of the statements given above are correct?",
    o:["Only two","Only one","Only three","All four"], a:0,
    e:"Statements 1 and 3 are correct. Software is a set of programs and cannot be touched, and firmware is stored permanently in ROM." },

  { type:"direct", topic:"Generations",
    q:"Which of the following was the world's first microprocessor?",
    o:["Intel 8080","Intel 8086","Intel 4004","Motorola 68000"], a:2,
    e:"The Intel 4004 (1971) was the first commercial microprocessor and started the fourth generation." },

  { type:"stmt", topic:"Characteristics & Limitations",
    q:"Consider the following statements:\n1. Computers can think and reason independently of programs.\n2. Computers have no feelings.\n3. Computers cannot take decisions without instructions.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:1,
    e:"Computers cannot think independently. They have no feelings or common sense and only follow programmed instructions." },

  { type:"misc", topic:"Components & Functions",
    q:"Which of the following is NOT a part of the CPU?",
    o:["Arithmetic Logic Unit","Control Unit","Registers","Hard disk drive"], a:3,
    e:"The CPU consists of the ALU, control unit and registers. A hard disk drive is a secondary storage device outside the CPU." },

  { type:"match", topic:"History",
    q:"Match the computer or processor (List I) with the year (List II):",
    l:["ENIAC","UNIVAC I","Intel 4004","IBM PC"],
    r:["1951","1971","1946","1981"],
    o:["A-3, B-1, C-2, D-4","A-1, B-3, C-2, D-4","A-3, B-1, C-4, D-2","A-2, B-3, C-1, D-4"], a:0,
    e:"ENIAC – 1946; UNIVAC I – 1951; Intel 4004 – 1971; IBM PC – 1981." },

  { type:"pair", topic:"History",
    q:"Choose the correctly matched pair:",
    o:["John von Neumann – Difference Engine","Herman Hollerith – Analytical Engine","Ada Lovelace – First computer programmer","Jacquard – Stepped Reckoner"], a:2,
    e:"Ada Lovelace wrote the first algorithm intended for Babbage's Analytical Engine. Jacquard is linked to punched cards on looms." },

  { type:"real", topic:"Characteristics & Limitations",
    q:"A banking software performs the same interest calculation on ten lakh accounts at 3 a.m. with the same precision as at 10 a.m., without any fatigue. Which characteristic is mainly shown?",
    o:["Speed","Diligence","Versatility","Storage capacity"], a:1,
    e:"Diligence means a computer can work for long hours without tiredness, boredom or loss of concentration." },

  { type:"stmt", topic:"Generations",
    q:"Consider the following statements about third-generation computers:\n1. They used integrated circuits (ICs).\n2. Keyboards and monitors replaced punched cards for input and output.\n3. Operating systems allowed multiprogramming.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:3,
    e:"Third generation (about 1964–71) used ICs, introduced keyboards and monitors, and operating systems that supported multiprogramming." },

  { type:"stmt", topic:"History",
    q:"Consider the following statements:\n1. Napier's Bones were used for storing data electronically.\n2. The Analytical Engine was designed as a general-purpose mechanical computer.\n3. EDVAC was built before ENIAC.\n4. Hollerith's tabulating machine was first used for the census of the United Kingdom.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:1,
    e:"Napier's Bones were a manual multiplication aid, ENIAC (1946) came before EDVAC, and Hollerith's machine was used for the 1890 US Census." },

  { type:"match", topic:"Components & Functions",
    q:"Match the term (List I) with its meaning (List II):",
    l:["Hardware","Software","Firmware","Liveware"],
    r:["Programs and instructions","Physical, touchable parts","Permanent programs stored in ROM chips","Users and people operating the computer"],
    o:["A-1, B-2, C-3, D-4","A-2, B-1, C-4, D-3","A-2, B-1, C-3, D-4","A-2, B-3, C-1, D-4"], a:2,
    e:"Hardware – physical parts; software – programs; firmware – permanent software in ROM; liveware – the people who use computers." },

  { type:"real", topic:"Applications",
    q:"Which of the following tasks is best handled by a supercomputer rather than an ordinary personal computer?",
    o:["Simulating the path of a cyclone using millions of data points","Typing a letter","Listening to songs","Browsing a website"], a:0,
    e:"Supercomputers handle huge scientific calculations such as weather forecasting, climate modelling and research simulations." },

  { type:"stmt", topic:"Classification",
    q:"Consider the following statements about microcomputers:\n1. Microcomputers belong to the first generation of computers.\n2. They use a microprocessor as their CPU.\n3. Desktops, laptops and tablets are examples.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"], a:3,
    e:"Microcomputers came only after the microprocessor (1971), so statement 1 is wrong." },

  { type:"misc", topic:"Generations",
    q:"Which of the following is NOT correct about fourth-generation computers?",
    o:["They use microprocessors","They use VLSI technology","Vacuum tubes were their main component","GUI and networking developed"], a:2,
    e:"Vacuum tubes belong to the first generation. The fourth generation used microprocessors and VLSI." },

  { type:"stmt", topic:"Characteristics & Limitations",
    q:"Consider the following statements:\n1. Computers have no IQ of their own.\n2. Computers can think and take decisions independently.\n3. Computers become tired after working for long hours.\n4. Computers produce output based on stored instructions.\nHow many of the statements given above are NOT correct?",
    o:["Only two","Only one","Only three","All four"], a:0,
    e:"Statements 2 and 3 are incorrect. Statements 1 and 4 are correct." },

  { type:"pair", topic:"History",
    q:"Choose the INCORRECTLY matched pair:",
    o:["EDVAC – Stored-program concept","Hollerith's Tabulating Machine – 1890 US Census","UNIVAC I – First commercially produced computer","ENIAC – Built using transistors"], a:3,
    e:"ENIAC used about 18,000 vacuum tubes. Transistors came later, in the second generation." },

  { type:"stmt", topic:"Components & Functions",
    q:"Consider the following statements:\n1. The stored-program concept is associated with John von Neumann.\n2. In a stored-program computer, instructions and data are kept in the same memory.\n3. ENIAC was the first computer to use the stored-program concept.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:0,
    e:"The stored-program concept came with EDVAC and von Neumann's architecture. ENIAC was originally programmed by rewiring and switches." }

  ]
};
