/* TEST 2 — COMPUTER ARCHITECTURE (50 MCQs)
   Sub-topics: Components of Computer Architecture, Microprocessor, Motherboard,
   Interconnection of Units via Buses, Instruction Cycle, Computer Ports,
   Factors Affecting CPU Performance
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Computer Architecture",
  questions: [

  { type:"match", topic:"Components",
    q:"Match the unit (List I) with its function (List II):",
    l:["Input unit","Memory unit","Arithmetic Logic Unit","Control Unit"],
    r:["Interprets instructions and issues control signals","Performs arithmetic and logical operations","Stores data and instructions","Accepts data and instructions from outside"],
    o:["A-1, B-2, C-3, D-4","A-4, B-3, C-2, D-1","A-4, B-2, C-3, D-1","A-3, B-4, C-2, D-1"], a:1,
    e:"Input unit – accepts data; memory unit – stores data and instructions; ALU – arithmetic and logic; Control Unit – interprets instructions and directs the other units." },

  { type:"stmt", topic:"Microprocessor",
    q:"Consider the following statements:\n1. A microprocessor is a CPU fabricated on a single integrated circuit chip.\n2. The Intel 4004 (1971) was the first microprocessor.\n3. Microprocessors are built using vacuum tubes.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:0,
    e:"A microprocessor is a complete CPU on one silicon chip (VLSI). Vacuum tubes belong to the first generation, so statement 3 is wrong." },

  { type:"real", topic:"Computer Ports",
    q:"A desktop is connected to a broadband router using a cable that has an 8-pin plastic connector. Which port of the computer is used?",
    o:["HDMI port","VGA port","Ethernet (RJ-45) port","PS/2 port"], a:2,
    e:"LAN and broadband cables use the RJ-45 connector, which plugs into the Ethernet port." },

  { type:"pair", topic:"Motherboard",
    q:"Choose the correctly matched pair:",
    o:["PCIe slot – Graphics card","DIMM slot – Hard disk","SATA connector – RAM module","CPU socket – Monitor"], a:0,
    e:"PCIe slots hold graphics and other add-on cards. DIMM slots hold RAM, SATA connects drives, and the CPU socket holds the processor." },

  { type:"stmt", topic:"Instruction Cycle",
    q:"Consider the following statements:\n1. The instruction cycle consists of fetch, decode and execute steps.\n2. The opcode specifies the data on which the operation is performed.\n3. A clock cycle and an instruction cycle always take the same time.\n4. After executing an instruction, the CPU stops permanently.\nWhich of the statements given above is correct?",
    o:["Only 4","Only 3","Only 2","Only 1"], a:3,
    e:"The opcode specifies the operation, not the data (that is the operand). One instruction usually takes several clock cycles, and the CPU keeps repeating the cycle until it is halted." },

  { type:"match", topic:"Buses & Interconnection",
    q:"Match the bus or interface (List I) with its role (List II):",
    l:["Control bus","Expansion bus","USB","Address bus"],
    r:["Serial interconnection for external devices","Carries read and write signals","Carries memory location addresses from the CPU","Connects add-on cards such as a graphics card"],
    o:["A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3","A-1, B-4, C-2, D-3","A-3, B-4, C-1, D-2"], a:1,
    e:"Control bus – read/write and timing signals; expansion bus (such as PCIe) – add-on cards; USB (Universal Serial Bus) – external devices; address bus – memory addresses." },

  { type:"stmt", topic:"CPU Performance",
    q:"Consider the following statements:\n1. A higher clock speed means more clock cycles per second.\n2. More cores allow more tasks to run in parallel.\n3. Cache memory is slower than main memory.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"], a:0,
    e:"Cache is much faster than main memory, which is why it speeds up the CPU. Statement 3 is wrong." },

  { type:"real", topic:"Components",
    q:"You press a key and the letter appears on the monitor. Through which sequence of units does the data flow?",
    o:["Output unit → CPU → Input unit","Input unit → CPU and memory → Output unit","CPU → Input unit → Output unit","Memory → Input unit → CPU"], a:1,
    e:"Data enters through the input unit (keyboard), is processed by the CPU with memory, and is shown through the output unit (monitor)." },

  { type:"match", topic:"Computer Ports",
    q:"Match the port (List I) with its use (List II):",
    l:["VGA","HDMI","RJ-45","USB"],
    r:["Carries digital video and audio through one cable","Carries analog video through a 15-pin connector","Connects a LAN cable for network access","Universal port for pen drives, keyboards and mice"],
    o:["A-1, B-2, C-3, D-4","A-2, B-1, C-4, D-3","A-3, B-1, C-2, D-4","A-2, B-1, C-3, D-4"], a:3,
    e:"VGA – analog video, 15 pins; HDMI – digital video and audio; RJ-45 – Ethernet/LAN; USB – general-purpose external devices." },

  { type:"stmt", topic:"Microprocessor",
    q:"Consider the following statements:\n1. A microprocessor contains no ALU.\n2. A microcontroller always needs external RAM and I/O chips.\n3. Moore's law says that the number of transistors on a chip doubles roughly every two years.\n4. The Intel 4004 was an 8-bit processor.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:2,
    e:"A microprocessor contains an ALU, control unit and registers. A microcontroller has memory and I/O on the same chip, and the Intel 4004 was a 4-bit processor. Only statement 3 is correct." },

  { type:"misc", topic:"Instruction Cycle",
    q:"Arrange the following steps of the instruction cycle in the correct order:\nA. Decode\nB. Fetch\nC. Store the result\nD. Execute",
    o:["A, B, D, C","B, A, D, C","B, D, A, C","B, A, C, D"], a:1,
    e:"The correct order is Fetch → Decode → Execute → Store the result." },

  { type:"stmt", topic:"Motherboard",
    q:"Consider the following statements:\n1. The motherboard is the main circuit board of the computer.\n2. The CPU socket, RAM slots and expansion slots are present on the motherboard.\n3. The SMPS is permanently built into the motherboard.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"], a:0,
    e:"The SMPS (power supply unit) is a separate unit inside the cabinet. It connects to the motherboard through power connectors." },

  { type:"match", topic:"CPU Performance",
    q:"Match the term (List I) with its meaning (List II):",
    l:["Clock speed","Cache memory","Number of cores","Word size"],
    r:["Number of independent processing units on one chip","Number of bits processed at one time","Clock cycles per second","Small, fast memory that holds frequently used data"],
    o:["A-1, B-2, C-3, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2","A-4, B-3, C-1, D-2"], a:2,
    e:"Clock speed is measured in cycles per second (Hz). Cache stores frequently used data, cores are independent processing units, and word size is the number of bits handled at once." },

  { type:"real", topic:"Buses & Interconnection",
    q:"A designer wants a CPU to be able to address 1 MB of memory. What is the minimum number of address lines required?",
    o:["16","20","24","32"], a:1,
    e:"n address lines address 2^n locations, so 2^20 = 1,048,576 = 1 MB." },

  { type:"pair", topic:"Components",
    q:"Choose the correctly matched pair:",
    o:["Control Unit – Performs arithmetic operations","Registers – Slow storage outside the CPU","ALU – Performs logical comparisons","Memory unit – Displays the final results"], a:2,
    e:"The ALU performs both arithmetic and logical operations, including comparisons. The Control Unit directs the operations, registers are fast storage inside the CPU, and results are displayed by output devices." },

  { type:"stmt", topic:"Computer Ports",
    q:"Consider the following statements:\n1. USB supports hot plugging of devices.\n2. The USB Type-C connector can be plugged in either way up.\n3. A VGA port carries digital audio.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:0,
    e:"VGA carries only analog video. Audio needs a separate cable, whereas HDMI carries digital audio and video." },

  { type:"stmt", topic:"CPU Performance",
    q:"Consider the following statements:\n1. Clock speed alone decides the speed of a computer.\n2. More cache helps the CPU access frequently used data faster.\n3. Adding more cores always doubles the speed of every program.\n4. Insufficient RAM can slow a computer down.\nHow many of the statements given above are correct?",
    o:["Only one","Only three","All four","Only two"], a:3,
    e:"Statements 2 and 4 are correct. Speed depends on clock speed, cores, cache, RAM and the program itself, and a single-threaded program does not gain from extra cores." },

  { type:"direct", topic:"Motherboard",
    q:"The set of chips on the motherboard that controls the flow of data between the CPU, memory and peripherals is called the",
    o:["Heat sink","CPU socket","Jumper","Chipset"], a:3,
    e:"The chipset coordinates communication between the processor, memory and I/O devices on the motherboard." },

  { type:"match", topic:"Microprocessor",
    q:"Match the term (List I) with its meaning (List II):",
    l:["Microprocessor","Microcontroller","Core","Socket"],
    r:["Slot on the motherboard where the processor is fixed","CPU on a single chip that needs external memory and I/O","CPU, memory and I/O together on one chip","Independent processing unit inside the processor chip"],
    o:["A-1, B-2, C-3, D-4","A-2, B-3, C-4, D-1","A-2, B-3, C-1, D-4","A-3, B-2, C-4, D-1"], a:1,
    e:"A microprocessor is a CPU on one chip; a microcontroller also has memory and I/O on the chip; a core is an independent processing unit; the socket holds the processor on the motherboard." },

  { type:"real", topic:"Instruction Cycle",
    q:"A CPU is executing a program when a key is pressed. At which point does the CPU normally respond to this interrupt?",
    o:["In the middle of fetching an instruction","At the end of the current instruction cycle","Only after the whole program ends","Only when the computer restarts"], a:1,
    e:"The CPU completes the current instruction cycle and then checks for pending interrupts before starting the next instruction." },

  { type:"stmt", topic:"Buses & Interconnection",
    q:"Consider the following statements:\n1. The address bus is unidirectional.\n2. The data bus is bidirectional.\n3. The width of the address bus decides the word length of the computer.\nWhich of the statements given above is/are correct?",
    o:["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"], a:2,
    e:"The width of the address bus decides the maximum memory that can be addressed, not the word length, so statement 3 is wrong." },

  { type:"match", topic:"Motherboard",
    q:"Match the motherboard part (List I) with its function (List II):",
    l:["CMOS battery","Chipset","PCIe slot","DIMM slot"],
    r:["Fits graphics or sound cards","Coordinates data flow between CPU, memory and peripherals","Holds memory modules","Keeps date, time and BIOS settings"],
    o:["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-4, B-1, C-2, D-3","A-1, B-2, C-4, D-3"], a:0,
    e:"The CMOS battery keeps the real-time clock and BIOS settings. The chipset coordinates data flow, PCIe slots hold add-on cards, and DIMM slots hold RAM." },

  { type:"pair", topic:"Computer Ports",
    q:"Choose the correctly matched pair:",
    o:["RJ-45 – Telephone line connection","VGA – Digital audio output","HDMI – Digital video and audio","PS/2 – Pen drive"], a:2,
    e:"HDMI carries digital video and audio. RJ-45 is used for Ethernet (a telephone line uses RJ-11), VGA is analog video, and PS/2 is for a keyboard or mouse." },

  { type:"real", topic:"CPU Performance",
    q:"A student's computer has a fast processor but becomes very slow when many programs are open, and it has only 2 GB of RAM. What is the most likely reason?",
    o:["Insufficient RAM, so the system swaps data to the disk","Too many USB ports","A large monitor","A missing printer driver"], a:0,
    e:"When RAM is full, the operating system moves data to the much slower disk (virtual memory), which slows the whole system." },

  { type:"stmt", topic:"Components",
    q:"Consider the following statements:\n1. The CPU is often called the brain of the computer.\n2. The CPU consists of the ALU, the control unit and registers.\n3. The hard disk is a part of the CPU.\nWhich of the statements given above is/are correct?",
    o:["1, 2 and 3","2 and 3 only","1 and 3 only","1 and 2 only"], a:3,
    e:"The hard disk is secondary storage outside the CPU, so statement 3 is wrong." },

  { type:"match", topic:"Instruction Cycle",
    q:"Match the term (List I) with its meaning (List II):",
    l:["Opcode","Operand","Clock cycle","Instruction cycle"],
    r:["Complete process of fetching, decoding and executing an instruction","Time between two consecutive clock pulses","Data or address on which the operation acts","Part of the instruction that specifies the operation"],
    o:["A-3, B-4, C-2, D-1","A-4, B-3, C-1, D-2","A-4, B-3, C-2, D-1","A-1, B-2, C-3, D-4"], a:2,
    e:"The opcode specifies the operation, the operand is the data or its address, a clock cycle is one clock pulse period, and an instruction cycle is fetch, decode and execute." },

  { type:"stmt", topic:"Buses & Interconnection",
    q:"Consider the following statements:\n1. The width of the address bus decides the word size.\n2. The width of the data bus decides the memory capacity.\n3. The control bus carries only memory addresses.\n4. The system bus is formed by the data, address and control buses together.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:3,
    e:"Address-bus width decides the memory that can be addressed, data-bus width decides how many bits move at a time, and the control bus carries control signals. Only statement 4 is correct." },

  { type:"stmt", topic:"Computer Ports",
    q:"Consider the following statements:\n1. An Ethernet port uses an RJ-45 connector.\n2. Older parallel ports were commonly used to connect printers.\n3. FireWire is based on the IEEE 1394 standard.\n4. HDMI cannot carry audio.\nHow many of the statements given above are correct?",
    o:["Only three","Only two","Only one","All four"], a:0,
    e:"Statements 1, 2 and 3 are correct. HDMI carries both digital video and audio." },

  { type:"pair", topic:"Microprocessor",
    q:"Choose the INCORRECTLY matched pair:",
    o:["Core i5 – Intel","Ryzen – AMD","Snapdragon – Qualcomm","Pentium – AMD"], a:3,
    e:"Pentium is an Intel processor family, not an AMD one." },

  { type:"stmt", topic:"CPU Performance",
    q:"Consider the following statements:\n1. A 64-bit processor can process 64 bits of data at a time.\n2. Cache memory reduces the average time needed to access data and instructions.\n3. Overheating can force a CPU to reduce its speed (thermal throttling).\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1, 2 and 3","2 and 3 only","1 and 3 only"], a:1,
    e:"All three statements are correct." },

  { type:"stmt", topic:"Motherboard",
    q:"Consider the following statements:\n1. The BIOS runs the Power-On Self Test (POST) when the computer is switched on.\n2. The BIOS is erased every time the computer is shut down.\n3. The BIOS is stored in a ROM or flash chip on the motherboard.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:2,
    e:"The BIOS is stored in non-volatile memory, so it is not erased on shutdown. Statement 2 is wrong." },

  { type:"misc", topic:"Components",
    q:"Which of the following is NOT a basic functional unit of a computer system?",
    o:["Input unit","Output unit","Central Processing Unit","Application software"], a:3,
    e:"Application software is not a hardware functional unit. The basic units are the input unit, CPU, memory and output unit." },

  { type:"stmt", topic:"Instruction Cycle",
    q:"Consider the following statements about the instruction cycle:\n1. During fetch, the instruction is read from the memory location pointed to by the Program Counter.\n2. The Program Counter is updated to point to the next instruction.\n3. Decoding of the instruction is done by the ALU.\nWhich of the statements given above is/are correct?",
    o:["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"], a:1,
    e:"Decoding is done by the Control Unit, not the ALU, so statement 3 is wrong." },

  { type:"match", topic:"Computer Ports",
    q:"Match the audio/PS2 port (List I) with its colour code (List II):",
    l:["PS/2 keyboard port","Microphone jack","Line-in jack","Line-out (speaker) jack"],
    r:["Green","Pink","Purple","Blue"],
    o:["A-1, B-2, C-3, D-4","A-3, B-1, C-4, D-2","A-3, B-2, C-4, D-1","A-2, B-3, C-1, D-4"], a:2,
    e:"PS/2 keyboard – purple; microphone – pink; line-in – blue; line-out (speaker) – green. The PS/2 mouse port is also green." },

  { type:"direct", topic:"Buses & Interconnection",
    q:"In a system with a 32-bit address bus, the maximum memory that can be addressed is",
    o:["2 GB","4 GB","8 GB","16 GB"], a:1,
    e:"2^32 = 4,294,967,296 locations, which is 4 GB for byte-addressable memory." },

  { type:"match", topic:"CPU Performance",
    q:"Match the factor (List I) with its effect (List II):",
    l:["More cache","Overclocking","Insufficient RAM","Better cooling"],
    r:["Increases heat and may cause throttling","Forces use of slower virtual memory (swapping)","Reduces average memory access time","Lets the CPU sustain higher speed without throttling"],
    o:["A-1, B-3, C-2, D-4","A-3, B-2, C-1, D-4","A-2, B-1, C-3, D-4","A-3, B-1, C-2, D-4"], a:3,
    e:"More cache reduces access time, overclocking raises heat, low RAM causes swapping, and good cooling prevents thermal throttling." },

  { type:"real", topic:"Microprocessor",
    q:"Why do desktop computers have a metal heat sink and a fan fixed on the processor?",
    o:["To increase the clock speed permanently","To remove the heat produced by the processor","To store data when the power fails","To connect the processor to the internet"], a:1,
    e:"Processors produce heat when working. A heat sink and fan carry the heat away and prevent overheating and throttling." },

  { type:"stmt", topic:"Components",
    q:"Consider the following statements:\n1. The CPU is also called the processor.\n2. The Control Unit performs addition and subtraction.\n3. Registers are the fastest storage locations in a computer.\n4. The output unit accepts data from the keyboard.\nHow many of the statements given above are correct?",
    o:["Only two","Only one","Only three","All four"], a:0,
    e:"Statements 1 and 3 are correct. Arithmetic is done by the ALU, and the keyboard is connected to the input unit." },

  { type:"pair", topic:"Instruction Cycle",
    q:"Choose the INCORRECTLY matched pair:",
    o:["PC – Address of the next instruction","MAR – Address of the memory location to be accessed","IR – Instruction being decoded","MDR – Address of the next instruction"], a:3,
    e:"The MDR holds the data or instruction being transferred to or from memory. The address of the next instruction is held by the Program Counter." },

  { type:"stmt", topic:"Computer Ports",
    q:"Consider the following statements:\n1. HDMI carries digital video and audio.\n2. VGA carries analog video signals.\n3. A serial port transmits data one bit at a time.\nWhich of the statements given above is/are correct?",
    o:["1, 2 and 3","1 and 2 only","2 and 3 only","1 and 3 only"], a:0,
    e:"All three statements are correct. A parallel port sends several bits at once, while a serial port sends one bit at a time." },

  { type:"real", topic:"Motherboard",
    q:"A computer shows the wrong date and time every time it is switched on after being unplugged for a few days, and the BIOS settings reset. Which part most likely needs replacement?",
    o:["Hard disk","Power button","CMOS battery","Keyboard"], a:2,
    e:"The small CMOS battery keeps the clock and BIOS settings alive when the computer is off. A dead battery resets them." },

  { type:"stmt", topic:"CPU Performance",
    q:"Consider the following statements:\n1. Overclocking runs a CPU faster than its rated speed.\n2. Overclocking increases the heat produced by the CPU.\n3. L1 cache is larger than L3 cache.\n4. Hyper-threading makes each physical core appear as two logical processors.\nHow many of the statements given above are correct?",
    o:["Only two","Only three","Only one","All four"], a:1,
    e:"Statements 1, 2 and 4 are correct. L1 is the smallest and fastest cache level, and L3 is the largest of the three." },

  { type:"match", topic:"Instruction Cycle",
    q:"Match the register (List I) with its role in the fetch cycle (List II):",
    l:["Program Counter","Memory Address Register","Memory Data Register","Instruction Register"],
    r:["Holds the fetched instruction for decoding","Holds the address to be placed on the address bus","Holds the address of the next instruction","Holds the data or instruction just read from memory"],
    o:["A-1, B-2, C-3, D-4","A-3, B-4, C-2, D-1","A-2, B-3, C-4, D-1","A-3, B-2, C-4, D-1"], a:3,
    e:"PC – next address; MAR – address sent to memory; MDR – data read from memory; IR – instruction being decoded." },

  { type:"misc", topic:"Buses & Interconnection",
    q:"Which of the following does NOT travel on the control bus?",
    o:["Read signal","Write signal","Interrupt request","Contents of the file being saved"], a:3,
    e:"The control bus carries signals such as read, write, interrupt and clock. File contents travel on the data bus." },

  { type:"real", topic:"Computer Ports",
    q:"You want to connect your laptop to a TV using a single cable that carries both picture and sound. Which port should you use?",
    o:["HDMI","VGA","PS/2","Serial port"], a:0,
    e:"HDMI carries digital video and audio in one cable. VGA carries only analog video." },

  { type:"stmt", topic:"Motherboard",
    q:"Consider the following statements:\n1. SATA connectors link hard disks and SSDs to the motherboard.\n2. The ATX power connector supplies power from the SMPS to the motherboard.\n3. PCIe slots are commonly used for graphics cards.\n4. ATX and Micro-ATX are motherboard form factors.\nHow many of the statements given above are correct?",
    o:["Only two","Only three","All four","Only one"], a:2,
    e:"All four statements are correct." },

  { type:"direct", topic:"Instruction Cycle",
    q:"For a processor running at 2 GHz, the time taken by one clock cycle is",
    o:["0.5 nanosecond","2 nanoseconds","5 nanoseconds","0.2 nanosecond"], a:0,
    e:"2 GHz means 2 × 10^9 cycles per second, so one cycle lasts 1/(2 × 10^9) s = 0.5 ns." },

  { type:"misc", topic:"Microprocessor",
    q:"Which of the following is NOT a processor (CPU) brand or family?",
    o:["Seagate Barracuda","Intel Core i7","AMD Ryzen","Qualcomm Snapdragon"], a:0,
    e:"Seagate Barracuda is a storage-drive (hard disk) series. The others are processor families." },

  { type:"misc", topic:"CPU Performance",
    q:"Which of the following does NOT directly improve CPU performance?",
    o:["Higher clock speed","Larger cache","A larger monitor","More cores"], a:2,
    e:"A larger monitor only affects the display. Clock speed, cache size and core count affect how fast the CPU works." },

  { type:"pair", topic:"Buses & Interconnection",
    q:"Choose the INCORRECTLY matched pair:",
    o:["Address bus – One direction, CPU to memory","Data bus – Two directions","Data bus – Carries memory location addresses","Control bus – Read, write and clock signals"], a:2,
    e:"Memory location addresses travel on the address bus. The data bus carries the actual data in both directions." }

  ]
};
