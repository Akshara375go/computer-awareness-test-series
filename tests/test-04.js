/* TEST 4 — COMPUTER MEMORY (50 MCQs)
   Sub-topics: Memory Basics & Units, RAM (SRAM & DRAM), ROM & Its Types, Cache & Registers,
   Virtual Memory, Secondary Storage, Optical & Flash Storage, Memory Hierarchy, Special-Purpose Memory
   Fields: type  = match | stmt | pair | direct | real | misc
           topic = shown in "weak topics" analysis
           a     = index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
           l / r = optional List I / List II for "match the following"
*/
window.TEST_DATA = {
  title: "Computer Memory",
  questions: [

  { type:"direct", topic:"Memory Basics & Units",
    q:"The smallest unit of memory in a computer is",
    o:["Byte", "Bit", "Nibble", "Word"], a:1,
    e:"A bit (binary digit), either 0 or 1, is the smallest unit. 4 bits make a nibble and 8 bits make a byte." },

  { type:"match", topic:"Memory Hierarchy",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["RAM", "ROM", "Cache memory", "Virtual memory"],
    r:["Uses part of the hard disk as an extension of RAM", "Holds the bootstrap program", "Placed between the CPU and main memory", "Volatile read/write main memory"],
    o:["A-4, B-2, C-3, D-1", "A-2, B-4, C-3, D-1", "A-4, B-2, C-1, D-3", "A-1, B-3, C-2, D-4"], a:0,
    e:"RAM – volatile read/write main memory; ROM – holds the bootstrap program; Cache – placed between CPU and main memory; Virtual memory – uses part of the hard disk as an extension of RAM." },

  { type:"stmt", topic:"Memory Hierarchy",
    q:"Consider the following statements:\n1. RAM is a volatile memory.\n2. ROM loses its contents when the power is switched off.\n3. Cache memory is faster than main memory.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], a:2,
    e:"RAM is volatile and cache is faster than main memory, so 1 and 3 are correct. ROM is non-volatile and keeps its contents without power, so statement 2 is wrong." },

  { type:"real", topic:"Virtual Memory",
    q:"A student opens many programs together on a laptop with little RAM. The laptop becomes extremely slow and the hard disk light blinks continuously. Which of the following best explains this?",
    o:["Excessive paging between RAM and the hard disk (thrashing)", "Cache memory has become non-volatile", "The ROM chip has been overwritten", "The CMOS battery has drained"], a:0,
    e:"When RAM is insufficient, the system keeps swapping pages between RAM and the disk-based virtual memory. This constant paging is called thrashing and it makes the system very slow." },

  { type:"pair", topic:"ROM & Its Types",
    q:"Choose the correctly matched pair:",
    o:["PROM – Erased using ultraviolet light", "EEPROM – Erased electrically", "Mask ROM – Programmed once by the user", "Flash memory – Volatile memory"], a:1,
    e:"PROM can be programmed only once and cannot be erased; EPROM uses UV light. Mask ROM is programmed by the manufacturer. Flash memory is non-volatile. Only EEPROM – electrical erasing is correct." },

  { type:"stmt", topic:"RAM (SRAM & DRAM)",
    q:"Consider the following statements:\n1. SRAM does not require periodic refreshing.\n2. DRAM stores each bit using a capacitor and a transistor.\n3. Cache memory is generally built using DRAM.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], a:0,
    e:"SRAM uses flip-flops and needs no refresh. DRAM uses a capacitor and transistor and must be refreshed. Cache memory is built with fast SRAM, not DRAM, so statement 3 is wrong." },

  { type:"direct", topic:"Memory Hierarchy",
    q:"Which of the following can be accessed directly by the CPU?",
    o:["Hard disk", "Magnetic tape", "Main memory (RAM)", "Optical disc"], a:2,
    e:"The CPU works directly with registers, cache and main memory. Hard disks, tapes and optical discs are secondary storage; their data must first be loaded into main memory." },

  { type:"misc", topic:"Memory Hierarchy",
    q:"Arrange the following in decreasing order of access speed (fastest first):\nA. Hard disk\nB. Cache memory\nC. Registers\nD. RAM",
    o:["B, C, D, A", "C, D, B, A", "C, B, A, D", "C, B, D, A"], a:3,
    e:"Registers are the fastest, then cache, then RAM, and the hard disk is the slowest: C, B, D, A." },

  { type:"match", topic:"ROM & Its Types",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["Mask ROM", "PROM", "EPROM", "EEPROM"],
    r:["Erased using ultraviolet light", "Contents fixed by the manufacturer", "Erased electrically", "Programmed once by the user"],
    o:["A-2, B-1, C-4, D-3", "A-4, B-2, C-1, D-3", "A-2, B-4, C-3, D-1", "A-2, B-4, C-1, D-3"], a:3,
    e:"Mask ROM – contents fixed by the manufacturer; PROM – programmed once by the user; EPROM – erased with ultraviolet light; EEPROM – erased electrically." },

  { type:"stmt", topic:"Virtual Memory",
    q:"Consider the following statements:\n1. Virtual memory allows programs larger than the physical RAM to run.\n2. It uses a part of the hard disk as an extension of RAM.\n3. It increases the amount of physical RAM installed on the motherboard.\n4. Excessive swapping between RAM and disk can slow down the system.\nHow many of the statements given above are correct?",
    o:["Only one", "Only two", "Only three", "All four"], a:2,
    e:"Statements 1, 2 and 4 are correct. Virtual memory is only a software technique; it does not add any physical RAM, so statement 3 is wrong." },

  { type:"real", topic:"Special-Purpose Memory",
    q:"A computer works normally but shows a wrong date and time every time it is switched on after being unplugged. Which component most likely needs replacement?",
    o:["Hard disk drive", "Optical drive", "CMOS battery", "Cache memory"], a:2,
    e:"The CMOS memory keeps the date, time and BIOS settings using a small battery. When that battery is weak, the settings are lost each time the power is removed." },

  { type:"pair", topic:"RAM (SRAM & DRAM)",
    q:"Choose the INCORRECTLY matched pair:",
    o:["Cache memory – Located between the CPU and RAM", "DRAM – Needs periodic refreshing", "SRAM – Stores bits in capacitors", "Virtual memory – Uses space on the hard disk"], a:2,
    e:"SRAM stores bits in flip-flop circuits made of transistors. Capacitors are used in DRAM, which is why DRAM needs refreshing." },

  { type:"stmt", topic:"Secondary Storage",
    q:"Consider the following statements:\n1. Secondary memory is non-volatile.\n2. The CPU accesses secondary memory directly without the help of main memory.\n3. The cost per bit of secondary memory is lower than that of primary memory.\nWhich of the statements given above is/are correct?",
    o:["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], a:1,
    e:"Secondary storage is non-volatile, larger and cheaper per bit. The CPU cannot access it directly; data is first loaded into main memory, so statement 2 is wrong." },

  { type:"direct", topic:"ROM & Its Types",
    q:"The bootstrap (startup) program that runs when a computer is switched on is stored in",
    o:["RAM", "Cache memory", "Virtual memory", "ROM"], a:3,
    e:"The BIOS/bootstrap program is kept in ROM-type non-volatile memory so that it is available as soon as the power is switched on." },

  { type:"match", topic:"Memory Basics & Units",
    q:"Match the unit (List I) with its size (List II):",
    l:["Nibble", "Byte", "Kilobyte", "Megabyte"],
    r:["8 bits", "1024 KB", "4 bits", "1024 bytes"],
    o:["A-1, B-3, C-4, D-2", "A-3, B-1, C-4, D-2", "A-3, B-1, C-2, D-4", "A-3, B-4, C-1, D-2"], a:1,
    e:"Nibble = 4 bits; Byte = 8 bits; Kilobyte = 1024 bytes; Megabyte = 1024 KB." },

  { type:"stmt", topic:"ROM & Its Types",
    q:"Consider the following statements about ROM types:\nStatement I: EPROM can be erased by exposing it to ultraviolet light.\nStatement II: EEPROM can be erased only by exposing it to ultraviolet light.\nWhich one of the following is correct?",
    o:["Only Statement I is correct", "Only Statement II is correct", "Both Statement I and Statement II are correct", "Neither Statement I nor Statement II is correct"], a:0,
    e:"EPROM is erased with UV light. EEPROM is erased electrically, without removing the chip, so Statement II is wrong." },

  { type:"real", topic:"Secondary Storage",
    q:"A hospital wants to store old scanned records for more than ten years at very low cost. The records are rarely needed and can be read in sequence when required. Which medium is most suitable?",
    o:["Registers", "Cache memory", "Dynamic RAM", "Magnetic tape"], a:3,
    e:"Magnetic tape is cheap, holds large amounts of data and is used for backup and archival storage. It gives sequential access, which is fine for rarely used records." },

  { type:"stmt", topic:"RAM (SRAM & DRAM)",
    q:"Assertion (A): DRAM is used as the main memory of most computers.\nReason (R): DRAM is faster than SRAM.\nWhich one of the following is correct?",
    o:["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"], a:2,
    e:"DRAM is used as main memory because it is cheaper and denser than SRAM. SRAM is the faster one, so the reason is false." },

  { type:"direct", topic:"Virtual Memory",
    q:"In a virtual memory system, 'thrashing' refers to",
    o:["Replacing damaged RAM modules", "Excessive paging activity that slows down the system", "Erasing a ROM chip using ultraviolet rays", "Writing the same data to cache twice"], a:1,
    e:"Thrashing happens when the system spends most of its time swapping pages between RAM and disk instead of executing programs." },

  { type:"pair", topic:"Memory Basics & Units",
    q:"Choose the correctly matched pair:",
    o:["Nibble – 8 bits", "Byte – 4 bits", "Kilobyte – 1024 bytes", "Megabyte – 1024 bytes"], a:2,
    e:"Nibble = 4 bits; Byte = 8 bits; Megabyte = 1024 kilobytes. Only Kilobyte – 1024 bytes is correct." },

  { type:"stmt", topic:"Memory Basics & Units",
    q:"Consider the following statements:\n1. A nibble consists of 4 bits.\n2. 1 megabyte equals 1024 kilobytes.\n3. 1 gigabyte equals 1024 terabytes.\n4. 1 byte equals 8 bits.\nWhich of the statements given above is/are NOT correct?",
    o:["Only 1", "Only 3", "1 and 2", "3 and 4"], a:1,
    e:"1 gigabyte equals 1024 megabytes. 1024 gigabytes make 1 terabyte. So only statement 3 is incorrect." },

  { type:"real", topic:"Optical & Flash Storage",
    q:"A photographer needs a small, removable, non-volatile card to store photos in a digital camera. Which of the following is most suitable?",
    o:["SRAM chip", "Mask ROM chip", "Flash memory card (SD card)", "3.5-inch floppy disk"], a:2,
    e:"Memory cards such as SD cards use flash memory. It is non-volatile, compact and can be erased and rewritten electrically." },

  { type:"misc", topic:"Memory Hierarchy",
    q:"Choose the odd one out:",
    o:["RAM", "ROM", "Cache memory", "Magnetic tape"], a:3,
    e:"RAM, ROM and cache memory are primary (internal) memories. Magnetic tape is a secondary storage device." },

  { type:"stmt", topic:"Cache & Registers",
    q:"Consider the following statements:\n1. Registers are located inside the CPU.\n2. Registers are the fastest memory in a computer.\n3. Registers have a larger storage capacity than cache memory.\nWhich of the statements given above is/are correct?",
    o:["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"], a:1,
    e:"Registers sit inside the CPU and are the fastest memory, but they are very few and tiny. Cache is much larger, so statement 3 is wrong." },

  { type:"match", topic:"Optical & Flash Storage",
    q:"Match the storage medium (List I) with its typical capacity (List II):",
    l:["CD-ROM", "DVD (single layer)", "Blu-ray disc (single layer)", "Floppy disk (3.5-inch)"],
    r:["25 GB", "1.44 MB", "About 700 MB", "4.7 GB"],
    o:["A-4, B-3, C-1, D-2", "A-3, B-4, C-2, D-1", "A-3, B-4, C-1, D-2", "A-1, B-4, C-3, D-2"], a:2,
    e:"CD-ROM – about 700 MB; DVD (single layer) – 4.7 GB; Blu-ray (single layer) – 25 GB; 3.5-inch floppy – 1.44 MB." },

  { type:"direct", topic:"Secondary Storage",
    q:"Which of the following is NOT a secondary storage device?",
    o:["Hard disk", "Magnetic tape", "Cache memory", "Blu-ray disc"], a:2,
    e:"Cache memory is a fast primary memory placed between the CPU and RAM. The other three are secondary storage devices." },

  { type:"stmt", topic:"Optical & Flash Storage",
    q:"Consider the following statements:\n1. A CD-R can be written only once.\n2. A CD-RW can be erased and written again.\n3. Blu-ray discs use a red laser.\n4. DVDs use an infrared laser, the same as CDs.\nHow many of the statements given above are correct?",
    o:["Only one", "Only two", "Only three", "All four"], a:1,
    e:"Statements 1 and 2 are correct. Blu-ray uses a blue-violet laser, and DVDs use a red laser. CDs use an infrared laser." },

  { type:"real", topic:"Optical & Flash Storage",
    q:"A person wants to store a 20 GB high-definition movie file on a single-layer optical disc. Which disc can hold it?",
    o:["CD-ROM", "DVD (single layer)", "Blu-ray disc (single layer)", "3.5-inch floppy disk"], a:2,
    e:"A single-layer Blu-ray disc holds about 25 GB. A single-layer DVD holds 4.7 GB and a CD about 700 MB, so they are too small." },

  { type:"pair", topic:"Secondary Storage",
    q:"Choose the INCORRECTLY matched pair:",
    o:["Magnetic tape – Sequential access", "Hard disk – Magnetic platters", "Pen drive – Flash memory", "Blu-ray disc – Infrared laser"], a:3,
    e:"Blu-ray discs are read with a blue-violet laser. Infrared lasers are used for CDs." },

  { type:"stmt", topic:"ROM & Its Types",
    q:"Consider the following statements:\n1. ROM is used to store firmware such as startup instructions.\n2. The contents of ROM are erased when the power is switched off.\n3. Flash memory is a type of EEPROM.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only", "2 and 3 only", "1 only", "1 and 3 only"], a:3,
    e:"ROM holds firmware and is non-volatile, so statement 2 is wrong. Flash memory is an advanced form of EEPROM that is erased in blocks." },

  { type:"match", topic:"Secondary Storage",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["Pen drive", "Hard disk", "Magnetic tape", "CMOS memory"],
    r:["Stores BIOS settings with battery backup", "Sequential-access backup medium", "Magnetic platters with read/write heads", "Flash memory"],
    o:["A-4, B-3, C-2, D-1", "A-4, B-3, C-1, D-2", "A-3, B-4, C-2, D-1", "A-4, B-2, C-3, D-1"], a:0,
    e:"Pen drive – flash memory; Hard disk – magnetic platters with read/write heads; Magnetic tape – sequential-access backup medium; CMOS – stores BIOS settings with battery backup." },

  { type:"real", topic:"Cache & Registers",
    q:"A librarian keeps the most frequently requested books on a desk near the counter instead of fetching them from the main shelves every time. This is similar to which computer memory concept?",
    o:["Virtual memory", "Cache memory", "Read Only Memory", "Magnetic tape"], a:1,
    e:"Cache memory keeps frequently used data and instructions close to the CPU so that they can be reached faster than from main memory." },

  { type:"stmt", topic:"Memory Hierarchy",
    q:"Consider the following statements:\nAs we move from registers towards secondary storage in the memory hierarchy:\n1. The access time increases.\n2. The cost per bit decreases.\n3. The storage capacity decreases.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], a:0,
    e:"Moving down the hierarchy, memory becomes slower, cheaper per bit and larger in capacity. Statement 3 is wrong." },

  { type:"direct", topic:"ROM & Its Types",
    q:"Which of the following memories is non-volatile?",
    o:["Cache memory", "SRAM", "DRAM", "EEPROM"], a:3,
    e:"EEPROM keeps its data without power. Cache (SRAM) and DRAM are volatile and lose data when power is switched off." },

  { type:"pair", topic:"Cache & Registers",
    q:"Choose the correctly matched pair:",
    o:["Memory Data Register – Holds data read from or to be written to memory", "Program Counter – Holds the instruction being executed", "Instruction Register – Holds the address of the next instruction", "Accumulator – Holds the address of the memory location to be accessed"], a:0,
    e:"The Program Counter holds the address of the next instruction. The Instruction Register holds the current instruction. The Memory Address Register holds the address to be accessed. Only the MDR pair is correct." },

  { type:"misc", topic:"Memory Basics & Units",
    q:"Arrange the following units in ascending order of size:\nA. Gigabyte\nB. Kilobyte\nC. Terabyte\nD. Megabyte",
    o:["B, D, A, C", "B, A, D, C", "D, B, A, C", "B, D, C, A"], a:0,
    e:"Kilobyte < Megabyte < Gigabyte < Terabyte, so the order is B, D, A, C." },

  { type:"match", topic:"Cache & Registers",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["Program Counter", "Instruction Register", "Memory Address Register", "Accumulator"],
    r:["Holds the address of the next instruction", "Holds intermediate results of arithmetic and logic operations", "Holds the address of the memory location to be accessed", "Holds the instruction currently being executed"],
    o:["A-1, B-4, C-3, D-2", "A-1, B-4, C-2, D-3", "A-4, B-1, C-3, D-2", "A-2, B-4, C-3, D-1"], a:0,
    e:"Program Counter – address of the next instruction; Instruction Register – instruction being executed; Memory Address Register – address of the location to be accessed; Accumulator – intermediate results of arithmetic and logic operations." },

  { type:"stmt", topic:"Secondary Storage",
    q:"Consider the following statements:\n1. Data in a hard disk is stored on magnetic platters.\n2. Data on a hard disk is organised into tracks and sectors.\n3. A hard disk is a non-volatile storage device.\nWhich of the statements given above is/are correct?",
    o:["1 only", "1 and 2 only", "2 and 3 only", "All of the above"], a:3,
    e:"All three statements are correct: a hard disk stores data magnetically on platters, in tracks and sectors, and keeps it without power." },

  { type:"real", topic:"Special-Purpose Memory",
    q:"A printer is much slower than the computer. The computer sends the document to a temporary memory area and continues with other work while the printer prints. This temporary area is called a",
    o:["Register", "Buffer", "ROM", "Virtual memory"], a:1,
    e:"A buffer is a temporary storage area that compensates for the speed difference between two devices, such as the CPU and a printer." },

  { type:"stmt", topic:"Secondary Storage",
    q:"Consider the following statements:\n1. An SSD has no moving mechanical parts.\n2. An SSD generally gives faster data access than an HDD.\n3. An SSD is usually cheaper than an HDD for the same capacity.\n4. An SSD stores data in NAND flash memory chips.\nWhich of the statements given above is/are correct?",
    o:["1, 2 and 3 only", "1, 2 and 4 only", "2, 3 and 4 only", "1, 3 and 4 only"], a:1,
    e:"SSDs have no moving parts, are faster and use NAND flash. They usually cost more per GB than hard disks, so statement 3 is wrong." },

  { type:"match", topic:"Memory Hierarchy",
    q:"Match the memory (List I) with its feature (List II):",
    l:["Registers", "Cache memory", "Main memory", "Magnetic disk"],
    r:["Non-volatile with the largest capacity", "Uses SRAM, sits between CPU and RAM", "Fastest memory, located inside the CPU", "Built with DRAM chips"],
    o:["A-1, B-2, C-4, D-3", "A-3, B-4, C-2, D-1", "A-3, B-2, C-4, D-1", "A-3, B-2, C-1, D-4"], a:2,
    e:"Registers – fastest, inside the CPU; Cache – SRAM between CPU and RAM; Main memory – built with DRAM; Magnetic disk – non-volatile with the largest capacity." },

  { type:"pair", topic:"Optical & Flash Storage",
    q:"Choose the INCORRECTLY matched pair:",
    o:["CD-ROM – About 700 MB", "DVD (single layer) – 4.7 GB", "Blu-ray disc (single layer) – 25 GB", "Floppy disk (3.5-inch) – 1.44 GB"], a:3,
    e:"A 3.5-inch floppy disk holds 1.44 MB, not 1.44 GB." },

  { type:"stmt", topic:"Cache & Registers",
    q:"Consider the following statements:\n1. L1 cache is usually the smallest and fastest level of cache.\n2. A cache hit occurs when the required data is found in the cache.\n3. In a cache miss, the data has to be fetched from a slower memory such as RAM.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], a:3,
    e:"All three statements are correct. L1 is closest to the CPU and the fastest. A miss forces the CPU to go to slower memory." },

  { type:"real", topic:"Special-Purpose Memory",
    q:"A gamer buys a graphics card that has its own dedicated memory for storing image frames before they are shown on the screen. This memory is called",
    o:["CMOS memory", "Video RAM (VRAM)", "BIOS ROM", "Virtual memory"], a:1,
    e:"Video RAM (frame buffer memory) on a graphics card stores image data for the display, so the main RAM is not burdened." },

  { type:"misc", topic:"RAM (SRAM & DRAM)",
    q:"Which of the following statements about RAM is NOT correct?",
    o:["It is a volatile memory", "It allows both reading and writing", "It is also called main memory", "Its contents remain permanently after the power is switched off"], a:3,
    e:"RAM is volatile: it loses its contents when power is switched off. Permanent storage is the job of ROM and secondary storage." },

  { type:"stmt", topic:"Special-Purpose Memory",
    q:"Consider the following statements:\n1. The BIOS startup instructions are stored in non-volatile memory.\n2. CMOS memory keeps the date and time with the help of a small battery.\n3. Removing the CMOS battery erases all the data on the hard disk.\nWhich of the statements given above is/are correct?",
    o:["1 and 2 only", "2 only", "1 and 3 only", "1, 2 and 3"], a:0,
    e:"BIOS is in non-volatile ROM or flash, and CMOS keeps settings using a battery. Removing the battery only resets those settings; the hard disk data stays safe." },

  { type:"match", topic:"Memory Hierarchy",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["Sequential access", "Random (direct) access", "Cache hit", "Thrashing"],
    r:["Excessive paging that slows the system", "Magnetic tape", "Required data found in the cache", "RAM"],
    o:["A-2, B-4, C-3, D-1", "A-4, B-2, C-3, D-1", "A-2, B-4, C-1, D-3", "A-1, B-3, C-4, D-2"], a:0,
    e:"Sequential access – magnetic tape; Random access – RAM; Cache hit – required data found in cache; Thrashing – excessive paging that slows the system." },

  { type:"stmt", topic:"Secondary Storage",
    q:"Consider the following statements about magnetic tape:\nStatement I: Magnetic tape provides direct (random) access to data.\nStatement II: Magnetic tape is widely used for backup and archival storage.\nWhich one of the following is correct?",
    o:["Only Statement I is correct", "Only Statement II is correct", "Both Statement I and Statement II are correct", "Neither Statement I nor Statement II is correct"], a:1,
    e:"Magnetic tape gives only sequential access, so Statement I is wrong. It is used for backup and archives, so Statement II is correct." },

  { type:"misc", topic:"Memory Basics & Units",
    q:"A memory chip has 12 address lines. The maximum number of memory locations it can address is",
    o:["1024", "2048", "4096", "8192"], a:2,
    e:"With n address lines, 2^n locations can be addressed. 2^12 = 4096 locations (4K)." },

  { type:"match", topic:"RAM (SRAM & DRAM)",
    q:"Match List I with List II and select the correct answer using the codes given below:",
    l:["SRAM", "DRAM", "SSD", "DDR SDRAM"],
    r:["Transfers data on both edges of the clock", "Built on flip-flops; needs no refresh", "Needs periodic refreshing", "No moving parts; uses flash chips"],
    o:["A-3, B-2, C-4, D-1", "A-2, B-3, C-1, D-4", "A-4, B-3, C-2, D-1", "A-2, B-3, C-4, D-1"], a:3,
    e:"SRAM – flip-flops, no refresh needed; DRAM – needs periodic refreshing; SSD – flash chips, no moving parts; DDR SDRAM – transfers data on both edges of the clock." }

  ]
};
