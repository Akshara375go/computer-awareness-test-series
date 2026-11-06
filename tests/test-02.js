/* TEST 2 — COMPUTER ARCHITECTURE (50 MCQs)
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Computer Architecture",
  questions: [

  { type:"match", topic:"Registers",
    q:"Match the register (List I) with its function (List II):",
    l:["Program Counter","Instruction Register","Memory Address Register","Accumulator"],
    r:["Holds intermediate results of the ALU","Holds the address of the memory location being accessed","Holds the address of the next instruction","Holds the instruction currently being executed"],
    o:["A-1, B-2, C-3, D-4","A-3, B-4, C-2, D-1","A-3, B-2, C-4, D-1","A-2, B-4, C-3, D-1"], a:1,
    e:"PC – address of the next instruction; IR – current instruction; MAR – address of the memory location being accessed; Accumulator – intermediate ALU results." },

  { type:"stmt", topic:"CPU Organisation",
    q:"Consider the following statements:\n1. The ALU performs arithmetic and logical operations.\n2. The Control Unit performs the arithmetic operations.\n3. The Control Unit directs the flow of data and instructions inside the computer.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"], a:3,
    e:"Arithmetic and logic work is done by the ALU. The Control Unit only fetches, decodes and directs, so statement 2 is wrong." },

  { type:"real", topic:"Architecture Types",
    q:"Most smartphones use ARM processors. This is mainly because the RISC design of ARM gives",
    o:["Low power consumption with good performance","Very high power consumption","Compatibility with all Intel x86 software","A very large and complex instruction set"], a:0,
    e:"RISC uses simple instructions, so ARM chips use less power and generate less heat, which suits battery-powered devices." },

  { type:"pair", topic:"Registers",
    q:"Choose the correctly matched pair:",
    o:["MAR – Holds data read from memory","PC – Holds the instruction currently being executed","MDR – Holds data being transferred to or from memory","IR – Holds the address of the next instruction"], a:2,
    e:"MDR (or MBR) holds the data going to or coming from memory. MAR holds an address, PC holds the next instruction's address and IR holds the current instruction." },

  { type:"stmt", topic:"Buses",
    q:"Consider the following statements:\n1. The address bus is unidirectional.\n2. A 16-bit address bus can address 64 KB of memory.\n3. The control bus carries data between the CPU and memory.\n4. The data bus is unidirectional.\nHow many of the statements given above are correct?",
    o:["Only one","Only two","Only three","All four"], a:1,
    e:"Statements 1 and 2 are correct (2^16 = 65,536 bytes = 64 KB). The control bus carries control signals, and the data bus is bidirectional." },

  { type:"match", topic:"Buses",
    q:"Match the bus (List I) with its description (List II):",
    l:["Data bus","Address bus","Control bus","System bus"],
    r:["Carries read/write and timing signals","Carries memory addresses in one direction","Bidirectional, carries the actual data","Collective term for the buses linking CPU, memory and I/O"],
    o:["A-2, B-3, C-1, D-4","A-3, B-1, C-2, D-4","A-1, B-2, C-3, D-4","A-3, B-2, C-1, D-4"], a:3,
    e:"Data bus – bidirectional data; address bus – one-way addresses; control bus – read/write and timing signals; system bus – all three together." },

  { type:"direct", topic:"Registers",
    q:"Which register always contains the address of the next instruction to be fetched?",
    o:["Instruction Register","Program Counter","Accumulator","Stack Pointer"], a:1,
    e:"The Program Counter holds the address of the next instruction and is incremented after each fetch." },

  { type:"stmt", topic:"Registers",
    q:"Consider the following statements:\n1. Registers are the fastest storage locations in a computer.\n2. The Program Counter holds the address of the next instruction.\n3. The Instruction Register holds the result of the last ALU operation.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"], a:0,
    e:"Registers sit inside the CPU and are the fastest memory. The IR holds the current instruction, not an ALU result, so statement 3 is wrong." },

  { type:"misc", topic:"Instruction Cycle",
    q:"Arrange the following steps of the instruction cycle in the correct order:\nA. Execute\nB. Fetch\nC. Decode\nD. Store the result",
    o:["B, A, C, D","B, C, A, D","C, B, A, D","A, B, C, D"], a:1,
    e:"The cycle is Fetch → Decode → Execute → Store (write back), and it repeats for the next instruction." },

  { type:"stmt", topic:"Registers",
    q:"Consider the following statements:\n1. The Program Counter stores the result of the ALU.\n2. The Accumulator holds the address of the next instruction.\n3. The Instruction Register holds the instruction currently being executed.\n4. The MAR holds the data to be written into memory.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:2,
    e:"PC holds the next address, the accumulator holds ALU results, and MAR holds an address, not data (that is MDR). Only statement 3 is correct." },

  { type:"match", topic:"Architecture Types",
    q:"Match the architecture (List I) with its feature (List II):",
    l:["Von Neumann","Harvard","RISC","CISC"],
    r:["Separate memories for instructions and data","Single memory for instructions and data","Simple, fixed-length instructions","Complex, variable-length instructions"],
    o:["A-2, B-1, C-3, D-4","A-1, B-2, C-3, D-4","A-2, B-1, C-4, D-3","A-3, B-4, C-2, D-1"], a:0,
    e:"Von Neumann uses one memory; Harvard keeps instruction and data memories separate; RISC has simple fixed-length instructions; CISC has complex variable-length ones." },

  { type:"real", topic:"Performance & Parallelism",
    q:"A graphics card applies the same colour-correction operation to millions of pixels at the same time. In Flynn's classification this is closest to",
    o:["SISD","MISD","MIMD","SIMD"], a:3,
    e:"SIMD means a Single Instruction is applied to Multiple Data items at once, as in GPUs and vector processors." },

  { type:"pair", topic:"Buses",
    q:"Choose the INCORRECTLY matched pair:",
    o:["Address bus – Unidirectional","Data bus – Bidirectional","Control bus – Carries read/write signals","Data bus – Decides how many memory locations can be addressed"], a:3,
    e:"The width of the address bus decides the number of memory locations that can be addressed. The data bus width decides how many bits move at a time." },

  { type:"stmt", topic:"Buses",
    q:"Consider the following statements:\n1. The address bus is bidirectional.\n2. The data bus is bidirectional.\n3. The width of the address bus decides the maximum memory that can be addressed.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"], a:2,
    e:"The address bus is unidirectional (CPU to memory), so statement 1 is wrong. Statements 2 and 3 are correct." },

  { type:"match", topic:"Performance & Parallelism",
    q:"Match Flynn's category (List I) with its description (List II):",
    l:["SISD","SIMD","MISD","MIMD"],
    r:["Multiple instructions on multiple data (multicore systems)","Single instruction on multiple data (GPU)","Single instruction on a single data stream (traditional uniprocessor)","Multiple instructions on a single data stream (rare)"],
    o:["A-1, B-2, C-3, D-4","A-3, B-2, C-4, D-1","A-3, B-4, C-2, D-1","A-2, B-3, C-4, D-1"], a:1,
    e:"SISD – classic single-core machine; SIMD – GPUs; MISD – very rare; MIMD – multiprocessors and multicore CPUs." },

  { type:"real", topic:"Interfacing & Motherboard",
    q:"While you are typing in a document, the CPU briefly pauses its current work to read a key press and then carries on. This is possible because of",
    o:["Pipelining","Overclocking","Interrupt","Cache miss"], a:2,
    e:"An interrupt is a signal that makes the CPU pause its current task, run an interrupt service routine (ISR) and then resume." },

  { type:"stmt", topic:"Architecture Types",
    q:"Consider the following statements:\n1. Harvard architecture uses separate memories for instructions and data.\n2. Modern CPUs use separate L1 instruction and data caches, which resembles the Harvard idea.\n3. Von Neumann architecture uses a single memory for instructions and data.\n4. Harvard architecture allows an instruction fetch and a data access at the same time.\nHow many of the statements given above are correct?",
    o:["Only one","Only two","Only three","All four"], a:3,
    e:"All four are correct. Separate paths let Harvard-style systems fetch an instruction and access data simultaneously." },

  { type:"misc", topic:"Registers",
    q:"Which of the following is NOT a register?",
    o:["Program Counter","Accumulator","Instruction Register","Address Bus"], a:3,
    e:"The address bus is a set of wires carrying addresses. The others are CPU registers." },

  { type:"stmt", topic:"Instruction Cycle",
    q:"Consider the following statements about the instruction cycle:\n1. In the fetch step, the instruction is brought from memory into the Instruction Register.\n2. In the decode step, the ALU interprets the opcode.\n3. The cycle repeats until a halt instruction is reached.\nWhich of the statements given above is/are correct?",
    o:["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"], a:0,
    e:"Decoding is done by the Control Unit, not the ALU, so statement 2 is wrong." },

  { type:"match", topic:"Architecture Types",
    q:"Match the Intel processor (List I) with its word size (List II):",
    l:["Intel 4004","Intel 8085","Intel 8086","Intel 80386"],
    r:["16-bit","4-bit","32-bit","8-bit"],
    o:["A-4, B-2, C-1, D-3","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3","A-1, B-4, C-2, D-3"], a:2,
    e:"Intel 4004 – 4-bit; 8085 – 8-bit; 8086 – 16-bit; 80386 – 32-bit." },

  { type:"pair", topic:"Performance & Parallelism",
    q:"Choose the correctly matched pair:",
    o:["SIMD – Graphics (GPU) style processing","SISD – Multicore processors","MISD – Common in desktop computers","MIMD – Single-core processor"], a:0,
    e:"SIMD fits GPUs. Multicore processors are MIMD, SISD is a single-core machine, and MISD is rare." },

  { type:"real", topic:"Interfacing & Motherboard",
    q:"A large video file is copied from a pen drive to the hard disk while the CPU stays free for other work. Which technique makes this possible?",
    o:["Pipelining","Interrupt vector","Direct Memory Access (DMA)","Overclocking"], a:2,
    e:"A DMA controller transfers data directly between an I/O device and memory without involving the CPU for each byte." },

  { type:"stmt", topic:"Architecture Types",
    q:"Consider the following statements:\n1. Intel 4004 was a 16-bit processor.\n2. Intel 8086 was a 16-bit microprocessor.\n3. Intel 8085 was a 16-bit processor.\n4. Intel 80386 was an 8-bit processor.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:1,
    e:"4004 was 4-bit, 8085 was 8-bit and 80386 was 32-bit. Only the 8086 (16-bit) statement is correct." },

  { type:"direct", topic:"Architecture Types",
    q:"The Von Neumann bottleneck is caused mainly by",
    o:["A slow ALU","A shared path between CPU and memory for both instructions and data","Too many registers","A large cache memory"], a:1,
    e:"Instructions and data share the same memory and bus, so the CPU cannot fetch both at the same time. This limits speed." },

  { type:"match", topic:"Performance & Parallelism",
    q:"Match the performance term (List I) with its meaning (List II):",
    l:["Clock speed","MIPS","FLOPS","Word length"],
    r:["Number of bits processed at one time","Millions of instructions executed per second","Floating-point operations per second","Clock cycles per second (Hz)"],
    o:["A-4, B-2, C-3, D-1","A-4, B-1, C-2, D-3","A-1, B-2, C-3, D-4","A-2, B-3, C-4, D-1"], a:0,
    e:"Clock speed is in Hz, MIPS counts instructions per second, FLOPS counts floating-point operations per second, and word length is the bits handled at once." },

  { type:"stmt", topic:"Architecture Types",
    q:"Consider the following statements about the Von Neumann architecture:\n1. Instructions and data are stored in the same memory.\n2. A single shared bus can create a bottleneck.\n3. The CPU fetches and executes instructions one after another.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:3,
    e:"All three describe the Von Neumann (stored-program) model proposed in 1945." },

  { type:"misc", topic:"Architecture Types",
    q:"Which of the following is NOT a feature of RISC architecture?",
    o:["Fixed-length instructions","Load-store architecture","Large number of registers","Complex, variable-length instructions"], a:3,
    e:"Complex variable-length instructions are a feature of CISC. RISC uses simple fixed-length instructions." },

  { type:"stmt", topic:"CPU Organisation",
    q:"Consider the following statements:\n1. The ALU can perform comparison operations.\n2. The Control Unit performs arithmetic calculations.\n3. Registers are slower than RAM.\n4. Cache memory lies between the CPU and main memory.\nHow many of the statements given above are NOT correct?",
    o:["Only two","Only one","Only three","All four"], a:0,
    e:"Statements 2 and 3 are wrong: arithmetic is done by the ALU, and registers are the fastest memory. Statements 1 and 4 are correct." },

  { type:"real", topic:"Performance & Parallelism",
    q:"In a factory line, one worker assembles item 3 while another packs item 2 and a third paints item 1. This is similar to which CPU technique?",
    o:["Pipelining","Multiprogramming","Interrupt handling","Caching"], a:0,
    e:"Pipelining overlaps the stages of several instructions so that more instructions finish per unit time." },

  { type:"stmt", topic:"Architecture Types",
    q:"Consider the following statements:\n1. CISC uses fixed-length instructions only.\n2. RISC has complex, multi-cycle instructions.\n3. ARM processors are CISC processors.\n4. Smartphone processors are mostly based on ARM RISC.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:3,
    e:"CISC has variable-length instructions, RISC uses simple instructions, and ARM is RISC. Only statement 4 is correct." },

  { type:"stmt", topic:"Architecture Types",
    q:"Consider the following statements:\n1. RISC processors use simple instructions.\n2. RISC processors generally have more registers than CISC processors.\n3. RISC instructions are complex and of variable length.\nWhich of the statements given above is/are correct?",
    o:["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"], a:1,
    e:"RISC uses simple, mostly fixed-length instructions and many registers. Complex variable-length instructions belong to CISC, so statement 3 is wrong." },

  { type:"match", topic:"Instruction Cycle",
    q:"Match the stage (List I) with its activity (List II):",
    l:["Fetch","Decode","Execute","Store"],
    r:["Writing the result back to a register or memory","Interpreting the opcode in the Control Unit","Performing the operation, for example in the ALU","Reading the instruction from memory using the PC"],
    o:["A-1, B-2, C-3, D-4","A-4, B-2, C-1, D-3","A-4, B-2, C-3, D-1","A-3, B-2, C-4, D-1"], a:2,
    e:"Fetch reads the instruction, decode interprets it, execute performs it and store writes the result." },

  { type:"match", topic:"Instruction Cycle",
    q:"Match the addressing mode (List I) with its meaning (List II):",
    l:["Immediate","Direct","Indirect","Register"],
    r:["The instruction gives the address of the operand","The operand is in a CPU register","The operand is part of the instruction itself","The instruction gives the address of a location that holds the operand's address"],
    o:["A-2, B-3, C-4, D-1","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-1, B-2, C-3, D-4"], a:2,
    e:"Immediate – operand inside the instruction; direct – address of the operand given; indirect – address of the address; register – operand held in a register." },

  { type:"direct", topic:"CPU Organisation",
    q:"Which component produces the timing signals that synchronise all operations inside the CPU?",
    o:["System clock","Control bus","ALU","Cache memory"], a:0,
    e:"The system clock (driven by a crystal oscillator) generates regular pulses that keep CPU operations in step." },

  { type:"stmt", topic:"Architecture Types",
    q:"Consider the following statements:\n1. Intel x86 processors follow CISC design.\n2. CISC uses fewer and simpler instructions than RISC.\n3. CISC often uses microprogrammed control.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:2,
    e:"CISC has a larger set of complex instructions, so statement 2 is wrong." },

  { type:"misc", topic:"Buses",
    q:"Which of the following is NOT true about the data bus?",
    o:["It is bidirectional","Its width decides how many bits move at a time","It carries memory addresses from CPU to memory","It carries data between CPU, memory and I/O devices"], a:2,
    e:"Memory addresses travel on the address bus, not the data bus." },

  { type:"match", topic:"Interfacing & Motherboard",
    q:"Match the term (List I) with its meaning (List II):",
    l:["Interrupt","DMA","ISR","Pipelining"],
    r:["Overlapping the execution of several instructions","Direct I/O-memory transfer without the CPU","A signal asking the CPU to pause its current task","The routine executed in response to an interrupt"],
    o:["A-3, B-1, C-4, D-2","A-3, B-2, C-4, D-1","A-1, B-2, C-3, D-4","A-2, B-3, C-4, D-1"], a:1,
    e:"Interrupt – pause request; DMA – direct transfer; ISR – interrupt service routine; pipelining – overlapped execution." },

  { type:"pair", topic:"Architecture Types",
    q:"Choose the correctly matched pair:",
    o:["Intel 8086 – 8-bit processor","Intel 8085 – 16-bit processor","Intel 4004 – 4-bit processor","Intel 80386 – 16-bit processor"], a:2,
    e:"The Intel 4004 (1971) was a 4-bit processor. The 8086 is 16-bit, the 8085 is 8-bit and the 80386 is 32-bit." },

  { type:"real", topic:"Performance & Parallelism",
    q:"A computer is advertised with a 3.2 GHz processor. This means the CPU clock",
    o:["Has 3.2 GB of RAM","Completes about 3.2 billion clock cycles per second","Has 3.2 cores","Can store 3.2 billion instructions"], a:1,
    e:"Clock speed is measured in hertz: 1 GHz is one billion cycles per second." },

  { type:"stmt", topic:"Performance & Parallelism",
    q:"Consider the following statements about pipelining:\n1. A pipeline executes one instruction completely before it starts the next.\n2. Pipelining increases the throughput of instructions.\n3. Pipelining splits instruction processing into stages.\nWhich of the statements given above is/are correct?",
    o:["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"], a:0,
    e:"In a pipeline, different stages of several instructions run at the same time, so statement 1 is wrong." },

  { type:"stmt", topic:"Performance & Parallelism",
    q:"Consider the following statements:\n1. Flynn's classification is based on instruction and data streams.\n2. SIMD applies the same instruction to many data items.\n3. A multicore processor is an example of MIMD.\n4. SISD means multiple processors working on multiple data.\nHow many of the statements given above are correct?",
    o:["Only one","Only two","Only three","All four"], a:2,
    e:"Statements 1, 2 and 3 are correct. SISD means a single instruction stream on a single data stream." },

  { type:"pair", topic:"Architecture Types",
    q:"Choose the INCORRECTLY matched pair:",
    o:["RISC – ARM processors","CISC – Intel x86 processors","Harvard – Separate instruction and data memories","Von Neumann – Separate instruction and data memories"], a:3,
    e:"Von Neumann architecture uses a single memory for both instructions and data. Separate memories belong to the Harvard architecture." },

  { type:"match", topic:"Buses",
    q:"Match the number of address lines (List I) with the memory that can be addressed (List II):",
    l:["10 address lines","16 address lines","20 address lines","32 address lines"],
    r:["4 GB","1 MB","1 KB","64 KB"],
    o:["A-1, B-2, C-3, D-4","A-3, B-2, C-4, D-1","A-3, B-1, C-2, D-4","A-3, B-4, C-2, D-1"], a:3,
    e:"n address lines address 2^n locations: 2^10 = 1 KB, 2^16 = 64 KB, 2^20 = 1 MB, 2^32 = 4 GB." },

  { type:"real", topic:"Performance & Parallelism",
    q:"A 4-core processor can run a video player, a download and an antivirus scan together more efficiently mainly because",
    o:["It has a faster printer port","It has more RAM slots","It uses a larger monitor","Each core can run a separate task in parallel"], a:3,
    e:"Multicore processors have several cores on one chip, and each core can execute a separate task at the same time." },

  { type:"real", topic:"Interfacing & Motherboard",
    q:"The control chip of a washing machine contains a CPU, a small memory and I/O ports on a single chip. Such a chip is called a",
    o:["Chipset","Mainframe","Microcontroller","Supercomputer"], a:2,
    e:"A microcontroller integrates the CPU, memory and I/O on one chip and is used in embedded devices such as washing machines and microwave ovens." },

  { type:"stmt", topic:"Performance & Parallelism",
    q:"Consider the following statements:\n1. Clock speed is measured in hertz.\n2. Word length affects how much data the CPU processes at one time.\n3. Cache memory reduces the average time needed to access data and instructions.\nWhich of the statements given above is/are correct?",
    o:["1, 2 and 3","1 and 2 only","2 and 3 only","1 and 3 only"], a:0,
    e:"All three statements are correct." },

  { type:"misc", topic:"Performance & Parallelism",
    q:"Which of the following is NOT a category in Flynn's classification?",
    o:["SISD","SIMD","MIMD","SIMO"], a:3,
    e:"Flynn's four categories are SISD, SIMD, MISD and MIMD. There is no SIMO." },

  { type:"stmt", topic:"Instruction Cycle",
    q:"Consider the following statements:\n1. The opcode specifies the operation to be performed.\n2. The operand specifies the operation to be performed.\n3. In immediate addressing, the operand address is stored in memory.\n4. In indirect addressing, the operand is placed inside the instruction.\nWhich of the statements given above is correct?",
    o:["Only 1","Only 2","Only 3","Only 4"], a:0,
    e:"The opcode gives the operation; the operand is the data or its address. In immediate addressing the operand is inside the instruction, and in indirect addressing the instruction gives the address of the operand's address." },

  { type:"pair", topic:"Performance & Parallelism",
    q:"Choose the INCORRECTLY matched pair:",
    o:["Clock speed – Measured in Hz","Word length – Measured in GHz","MIPS – Millions of instructions per second","FLOPS – Floating-point operations per second"], a:1,
    e:"Word length is measured in bits. GHz is the unit of clock speed." },

  { type:"stmt", topic:"Interfacing & Motherboard",
    q:"Consider the following statements:\n1. An interrupt permanently terminates the running program.\n2. DMA transfers data directly between an I/O device and memory.\n3. An ISR is executed when an interrupt occurs.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"], a:1,
    e:"An interrupt only pauses the running program temporarily; it then resumes. Statements 2 and 3 are correct." }

  ]
};
