<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Computer - CBT Mock Test</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --bg-color: #f4f7f6;
            --text-color: #333;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: var(--primary-color);
            border-bottom: 2px solid var(--secondary-color);
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .header-info {
            display: flex;
            justify-content: space-between;
            background: #eef2f5;
            padding: 15px;
            border-radius: 5px;
            font-weight: bold;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .question-container {
            margin-bottom: 20px;
        }
        .question-text {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        .options {
            list-style-type: none;
            padding: 0;
        }
        .options li {
            background: #f8f9fa;
            margin-bottom: 10px;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .options li:hover {
            background: #e2eff9;
        }
        .options li.selected {
            background: var(--secondary-color);
            color: white;
            border-color: var(--secondary-color);
        }
        .btn-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            color: white;
            transition: background 0.3s;
        }
        .btn-prev { background: #95a5a6; }
        .btn-next { background: var(--secondary-color); }
        .btn-submit { background: #27ae60; display: none; }
        button:hover { opacity: 0.9; }
        button:disabled { background: #ccc; cursor: not-allowed; }
        
        #result-screen { display: none; }
        .score-board {
            text-align: center;
            background: #e8f5e9;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .score-board h2 { color: #2e7d32; margin-top: 0; }
        .review-box {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
        }
        .correct-ans { color: #27ae60; font-weight: bold; }
        .wrong-ans { color: var(--accent-color); font-weight: bold; }
        .explanation {
            background: #fff3cd;
            padding: 10px;
            border-left: 4px solid #ffc107;
            margin-top: 10px;
            font-size: 14px;
        }
        .telegram-link {
            display: block;
            text-align: center;
            background: #0088cc;
            color: white;
            padding: 15px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            margin-top: 20px;
        }
        .telegram-link:hover { background: #006699; }
    </style>
</head>
<body>

<div class="container" id="quiz-container">
    <h1>Introduction to Computer</h1>
    <div class="header-info">
        <div>Question: <span id="current-q">1</span>/50</div>
        <div>Marking: +1.00 | -0.25</div>
    </div>

    <div class="question-container">
        <div class="question-text" id="question-text">Loading question...</div>
        <ul class="options" id="options-list"></ul>
    </div>

    <div class="btn-container">
        <button class="btn-prev" id="prev-btn" onclick="prevQuestion()" disabled>Previous</button>
        <button class="btn-next" id="next-btn" onclick="nextQuestion()">Next</button>
        <button class="btn-submit" id="submit-btn" onclick="submitQuiz()">Submit Test</button>
    </div>
</div>

<div class="container" id="result-screen">
    <div class="score-board">
        <h2>Test Completed!</h2>
        <p>Total Attempted: <span id="total-attempted">0</span> / 50</p>
        <p>Correct Answers: <span id="total-correct">0</span></p>
        <p>Incorrect Answers: <span id="total-wrong">0</span></p>
        <h3>Final Score: <span id="final-score">0</span> / 50.00</h3>
    </div>
    
    <a href="https://t.me/karnatakaeExamseries" target="_blank" class="telegram-link">
        Join Karnataka e-Exam Test Series on Telegram for More Free CBTs
    </a>

    <h3 style="margin-top: 30px; border-bottom: 2px solid #ccc; padding-bottom: 10px;">Answer Key & Explanations</h3>
    <div id="review-container"></div>
</div>

<script>
    const questions = [
        // BASICS & DEFINITIONS (10 Questions)
        {
            q: "Consider the following statements about a Computer:<br>1. It is a device that processes data into meaningful information.<br>2. GIGO (Garbage In, Garbage Out) relates to the accuracy characteristic of a computer.<br>Which of the statements given above is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 2,
            exp: "Both are correct. A computer processes raw data into information. GIGO states that if the input data is flawed (garbage in), the resulting output will also be flawed (garbage out), highlighting its accuracy dependence on input."
        },
        {
            q: "Which of the following components is primarily responsible for performing arithmetic operations and logical decisions?",
            opt: ["Control Unit", "Arithmetic Logic Unit (ALU)", "Primary Memory", "Cache Memory"],
            ans: 1,
            exp: "The Arithmetic Logic Unit (ALU) performs all mathematical calculations and logical comparisons in the CPU."
        },
        {
            q: "Which of the following is incorrectly matched regarding computer characteristics?",
            opt: ["Diligence - Ability to work without fatigue", "Versatility - Performing one specific task exclusively", "Reliability - Consistent output for the same input", "Speed - Processing instructions in picoseconds/nanoseconds"],
            ans: 1,
            exp: "Versatility means the capability of a computer to perform entirely different types of tasks simultaneously or sequentially, not just one specific task."
        },
        {
            q: "Consider the following components of a computer system:<br>1. Hardware<br>2. Software<br>3. Data<br>4. User<br>Which of these are considered the fundamental elements required for a computer system to function effectively?",
            opt: ["1 and 2 only", "1, 2, and 3 only", "1, 3, and 4 only", "1, 2, 3, and 4"],
            ans: 3,
            exp: "A complete computer system requires all four: Hardware (physical parts), Software (instructions), Data (raw facts to process), and Users (people operating or benefiting from it)."
        },
        {
            q: "Who is universally recognized as the 'Father of the Computer' for designing the Analytical Engine?",
            opt: ["Alan Turing", "John von Neumann", "Charles Babbage", "Herman Hollerith"],
            ans: 2,
            exp: "Charles Babbage designed the Analytical Engine in the 1830s, which had the basic architecture (input, memory, processing, output) of modern computers."
        },
        {
            q: "Match the following historical computing devices with their inventors:<br>A. Pascaline<br>B. Tabulating Machine<br>C. Z3<br>D. ENIAC<br><br>1. Herman Hollerith<br>2. Blaise Pascal<br>3. J. Presper Eckert & John Mauchly<br>4. Konrad Zuse",
            opt: ["A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-2, B-4, C-1, D-3", "A-4, B-1, C-2, D-3"],
            ans: 0,
            exp: "Pascaline by Blaise Pascal (1642); Tabulating Machine by Herman Hollerith (1890); Z3 by Konrad Zuse (1941); ENIAC by Eckert and Mauchly (1945)."
        },
        {
            q: "Which of the following statements about 'Data' and 'Information' is correct?",
            opt: ["Data is processed information.", "Information is organized, processed, and meaningful data.", "Data and Information are identical terms in computing.", "Information is the raw facts fed into the computer."],
            ans: 1,
            exp: "Data refers to raw, unorganized facts. Information is data that has been processed, organized, and structured in a given context to make it useful."
        },
        {
            q: "What does 'EDVAC' stand for in early computer history?",
            opt: ["Electronic Discrete Variable Automatic Computer", "Electronic Data Variable Automatic Calculator", "Electrical Digital Variable Automatic Computer", "Electronic Discrete Variable Advanced Computer"],
            ans: 0,
            exp: "EDVAC stands for Electronic Discrete Variable Automatic Computer. Unlike ENIAC, it used binary rather than decimal and was a stored-program computer."
        },
        {
            q: "The concept of the 'Stored Program Concept', where both data and instructions are stored in the same memory, was proposed by:",
            opt: ["Alan Turing", "Charles Babbage", "John von Neumann", "Ada Lovelace"],
            ans: 2,
            exp: "John von Neumann introduced the stored-program concept in 1945, which became the foundation (von Neumann architecture) for almost all modern computers."
        },
        {
            q: "Which of the following is considered the first programmer in the history of computers?",
            opt: ["Grace Hopper", "Ada Lovelace", "Alan Turing", "Margaret Hamilton"],
            ans: 1,
            exp: "Ada Lovelace is considered the first computer programmer for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine."
        },

        // GENERATIONS OF COMPUTERS (10 Questions)
        {
            q: "Consider the following statements regarding the First Generation of computers:<br>1. They used Vacuum Tubes for circuitry.<br>2. They used High-Level Languages like FORTRAN.<br>3. Magnetic drums were used for memory.<br>Which of the statements given above are correct?",
            opt: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2, and 3"],
            ans: 1,
            exp: "First-generation computers used Vacuum tubes and magnetic drums. However, they relied on Machine Language (0s and 1s), not high-level languages."
        },
        {
            q: "Match the Computer Generation with its core switching component:<br>A. 2nd Generation<br>B. 3rd Generation<br>C. 4th Generation<br>D. 5th Generation<br><br>1. Integrated Circuits (IC)<br>2. Transistors<br>3. Artificial Intelligence / ULSI<br>4. Microprocessors (VLSI)",
            opt: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-2, B-1, C-3, D-4", "A-4, B-1, C-2, D-3"],
            ans: 1,
            exp: "2nd Gen: Transistors; 3rd Gen: Integrated Circuits (SSI/MSI); 4th Gen: VLSI Microprocessors; 5th Gen: ULSI and AI."
        },
        {
            q: "Which of the following is an example of a First Generation computer?",
            opt: ["IBM 1401", "UNIVAC I", "IBM 360", "Apple II"],
            ans: 1,
            exp: "UNIVAC I (Universal Automatic Computer I) was the first commercial computer produced in the US, belonging to the first generation (using vacuum tubes)."
        },
        {
            q: "Consider the following features:<br>1. Introduction of Operating Systems.<br>2. Shift from machine language to assembly language.<br>3. Invention of the Microprocessor.<br>Which of these features belongs to the Second Generation of computers?",
            opt: ["1 and 2 only", "2 only", "1 and 3 only", "1, 2, and 3"],
            ans: 0,
            exp: "The 2nd Gen saw the shift to assembly languages (and early high-level like COBOL/FORTRAN) and the introduction of batch processing operating systems. Microprocessors are 4th Gen."
        },
        {
            q: "The Integrated Circuit (IC) chip, which revolutionized the 3rd generation of computers, was invented by:",
            opt: ["Jack Kilby and Robert Noyce", "Tim Berners-Lee", "Gordon Moore", "Douglas Engelbart"],
            ans: 0,
            exp: "The IC was independently co-invented by Jack Kilby (of Texas Instruments) and Robert Noyce (of Fairchild Semiconductor) in the late 1950s."
        },
        {
            q: "Which of the following is incorrectly matched regarding the scale of integration in ICs?",
            opt: ["SSI - Small Scale Integration (up to 100 components)", "MSI - Medium Scale Integration (100 to 3,000 components)", "LSI - Large Scale Integration (3,000 to 100,000 components)", "VLSI - Very Low Scale Integration (less than 10 components)"],
            ans: 3,
            exp: "VLSI stands for Very Large Scale Integration, containing hundreds of thousands to millions of transistors on a single chip, typical of 4th generation computers."
        },
        {
            q: "Consider the following statements regarding Supercomputers:<br>1. PARAM 8000 was India's first supercomputer.<br>2. C-DAC is responsible for the PARAM series.<br>3. Supercomputers primarily use sequential processing rather than parallel processing.<br>Which of the statements given above is/are correct?",
            opt: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
            ans: 0,
            exp: "PARAM 8000 was developed by C-DAC. Statement 3 is wrong because supercomputers achieve their immense speed through parallel processing, not sequential."
        },
        {
            q: "Which of the following generation of computers introduced Time-sharing and Multiprogramming operating systems?",
            opt: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
            ans: 2,
            exp: "Third-generation computers (using ICs) had enough computing power and memory to support time-sharing, multiprogramming, and real-time operating systems."
        },
        {
            q: "The speed of modern supercomputers is typically measured in:",
            opt: ["MIPS (Millions of Instructions Per Second)", "FLOPS (Floating Point Operations Per Second)", "BIPS (Billion Instructions Per Second)", "Hertz (Hz)"],
            ans: 1,
            exp: "Supercomputer performance is measured in FLOPS (Floating-Point Operations Per Second), often scaling to PetaFLOPS or ExaFLOPS today."
        },
        {
            q: "Which of the following statements about the Fifth Generation of computers is incorrect?",
            opt: ["They rely on Ultra Large Scale Integration (ULSI).", "They focus on Artificial Intelligence and Natural Language Processing.", "They use strictly single-core processors for logical execution.", "They employ parallel processing and quantum computing research."],
            ans: 2,
            exp: "Fifth-generation computers utilize multi-core processors and massive parallel processing. They are not strictly single-core."
        },

        // ARCHITECTURE & HARDWARE BASICS (10 Questions)
        {
            q: "In the von Neumann architecture, the pathway that carries the memory address of the data to be fetched or stored is called the:",
            opt: ["Data Bus", "Address Bus", "Control Bus", "Universal Bus"],
            ans: 1,
            exp: "The Address Bus carries the memory address. The Data Bus carries the actual data, and the Control Bus carries control signals (like read/write commands)."
        },
        {
            q: "Consider the following statements about CPU Registers:<br>1. They are the fastest type of memory in a computer.<br>2. The Program Counter (PC) register holds the address of the next instruction to be executed.<br>Which of the statements is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 2,
            exp: "Registers are the fastest and smallest memory locations located directly on the CPU. The Program Counter (PC) specifically tracks the next instruction's address."
        },
        {
            q: "Match the following CPU components with their functions:<br>A. ALU<br>B. Control Unit<br>C. Instruction Register<br><br>1. Directs the flow of data and operations.<br>2. Holds the current instruction being executed.<br>3. Performs mathematical calculations.",
            opt: ["A-3, B-1, C-2", "A-1, B-2, C-3", "A-3, B-2, C-1", "A-2, B-1, C-3"],
            ans: 0,
            exp: "ALU does math/logic (3). CU manages data flow and operations (1). Instruction Register holds the currently executing instruction (2)."
        },
        {
            q: "Which among the following is NOT a part of the motherboard?",
            opt: ["CMOS Battery", "BIOS Chip", "SMPS (Switched-Mode Power Supply)", "Expansion Slots (PCIe)"],
            ans: 2,
            exp: "SMPS is a separate hardware component in the cabinet that supplies power to the motherboard. It is not physically a part of the motherboard circuitry itself."
        },
        {
            q: "Consider the following statements about the Machine Cycle:<br>1. It consists of Fetch, Decode, Execute, and Store phases.<br>2. The Control Unit is responsible for decoding the instruction.<br>Which of the statements given above is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 2,
            exp: "The machine cycle involves Fetching instructions, Decoding them (done by the CU), Executing them (done by ALU), and Storing results."
        },
        {
            q: "Which of the following ports is widely used to connect high-speed graphics cards to the motherboard?",
            opt: ["SATA", "PCIe (Peripheral Component Interconnect Express)", "VGA", "PS/2"],
            ans: 1,
            exp: "PCIe (PCI Express) slots provide high-speed data transfer rates essential for modern graphics processing units (GPUs)."
        },
        {
            q: "The small amount of memory on the motherboard that stores basic hardware settings and the system time when the computer is turned off is powered by the:",
            opt: ["Cache Memory", "ALU", "CMOS Battery", "Northbridge Chip"],
            ans: 2,
            exp: "The CMOS (Complementary Metal-Oxide-Semiconductor) battery continuously powers the CMOS RAM chip, which holds the BIOS settings and real-time clock."
        },
        {
            q: "Which of the following correctly describes a 'Microprocessor'?",
            opt: ["A processor consisting of vacuum tubes.", "A single integrated circuit containing the core functions of a CPU.", "A software that processes micro-instructions.", "A type of memory chip that acts as a processor buffer."],
            ans: 1,
            exp: "A microprocessor is a computer processor where the data processing logic and control is included on a single integrated circuit (IC)."
        },
        {
            q: "Consider the following regarding buses in computer architecture:<br>1. Data Bus is bidirectional.<br>2. Address Bus is unidirectional.<br>Which of the statements is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 2,
            exp: "The Data Bus is bidirectional (CPU can read and write data). The Address Bus is unidirectional (CPU sends the address to memory/IO, not vice-versa)."
        },
        {
            q: "Which component bridges the communication between the CPU and slower peripheral devices (like USB ports and hard drives)?",
            opt: ["Northbridge", "Southbridge", "ALU", "L1 Cache"],
            ans: 1,
            exp: "In traditional chipsets, the Southbridge handles slower I/O devices (USB, SATA, BIOS), while the Northbridge handles high-speed components (RAM, PCIe)."
        },

        // INPUT AND OUTPUT DEVICES (10 Questions)
        {
            q: "Match the following input devices with their primary applications:<br>A. MICR<br>B. OMR<br>C. BCR (Barcode Reader)<br>D. OCR<br><br>1. Evaluating multiple-choice exam sheets<br>2. Processing bank cheques<br>3. Converting printed text images into editable text<br>4. Billing at retail store checkouts",
            opt: ["A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-2, B-4, C-1, D-3", "A-4, B-1, C-2, D-3"],
            ans: 0,
            exp: "MICR (Magnetic Ink) for cheques; OMR (Optical Mark) for exams; BCR for retail billing; OCR (Optical Character Recognition) for digitizing text."
        },
        {
            q: "Consider the following statements regarding Output Devices:<br>1. A plotter is an output device used for producing high-quality engineering drawings.<br>2. Impact printers like Dot Matrix use physical striking mechanisms.<br>Which of the statements is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 2,
            exp: "Both are correct. Plotters use pens to draw continuous high-resolution lines for CAD/engineering. Dot Matrix printers are impact printers."
        },
        {
            q: "Which of the following devices acts as both an Input and an Output device?",
            opt: ["Projector", "Touch Screen", "Scanner", "Plotter"],
            ans: 1,
            exp: "A Touch Screen receives user input (touches) and outputs visual information (display), making it both an I/O device."
        },
        {
            q: "Which of the following statements about printers is incorrect?",
            opt: ["Laser printers use a toner cartridge and a photosensitive drum.", "Inkjet printers spray droplets of ink onto paper.", "Thermal printers are commonly used for printing ATM receipts.", "Daisy wheel printers are examples of non-impact printers."],
            ans: 3,
            exp: "Daisy wheel printers are Impact printers. They have a wheel with characters that physically strike a ribbon against the paper."
        },
        {
            q: "In a standard QWERTY keyboard, the keys F1 to F12 are known as:",
            opt: ["Modifier keys", "Toggle keys", "Function keys", "Alphanumeric keys"],
            ans: 2,
            exp: "F1 through F12 are Function keys. Modifier keys are Shift, Ctrl, Alt. Toggle keys include Caps Lock and Num Lock."
        },
        {
            q: "Consider the following statements about computer displays:<br>1. LCD relies on liquid crystals to modulate light.<br>2. OLED displays require a continuous backlight to illuminate the screen.<br>Which of the statements given above is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 0,
            exp: "Only 1 is correct. OLED (Organic Light Emitting Diode) displays do not require a backlight because each pixel emits its own light."
        },
        {
            q: "Which input device is primarily used for playing video games and controlling simulators?",
            opt: ["Light Pen", "Joystick", "Digitizer", "Trackball"],
            ans: 1,
            exp: "A joystick consists of a stick that pivots on a base and reports its angle/direction. It is widely used in gaming and flight simulators."
        },
        {
            q: "What does DPI stand for in the context of computer printers and mice?",
            opt: ["Data Per Inch", "Dots Per Inch", "Digits Per Inch", "Density Per Image"],
            ans: 1,
            exp: "DPI stands for Dots Per Inch, a measure of spatial printing, video, or image scanner dot density (resolution)."
        },
        {
            q: "Which of the following is a pointing device widely used as an alternative to a mouse in laptops?",
            opt: ["Stylus", "Digitizing Tablet", "Touchpad", "Trackpad and Touchpad both mean the same in this context"],
            ans: 3,
            exp: "Touchpads (or trackpads) are tactile sensors built into laptops allowing users to control the cursor with finger movements."
        },
        {
            q: "Which biometric input device is most commonly used for recording employee attendance based on physiological characteristics?",
            opt: ["Webcam", "Fingerprint Scanner", "Microphone", "OMR Scanner"],
            ans: 1,
            exp: "Fingerprint scanners capture biometric data (fingerprint ridges) specifically to authenticate identity for attendance or security."
        },

        // MEMORY & STORAGE (10 Questions)
        {
            q: "Match the following memory units with their exact byte equivalents:<br>A. 1 Kilobyte (KB)<br>B. 1 Megabyte (MB)<br>C. 1 Gigabyte (GB)<br><br>1. 1024 MB<br>2. 1024 Bytes<br>3. 1024 KB",
            opt: ["A-2, B-3, C-1", "A-3, B-2, C-1", "A-1, B-2, C-3", "A-2, B-1, C-3"],
            ans: 0,
            exp: "1 KB = 1024 Bytes. 1 MB = 1024 KB. 1 GB = 1024 MB."
        },
        {
            q: "Consider the following statements regarding RAM (Random Access Memory):<br>1. It is a non-volatile memory.<br>2. SRAM is faster and more expensive than DRAM.<br>Which of the statements is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 1,
            exp: "RAM is volatile (loses data when power is off). Statement 2 is correct; SRAM (Static RAM) doesn't need constant refreshing like DRAM, making it faster and more expensive."
        },
        {
            q: "Which of the following types of memory is used to compensate for the speed difference between the main memory and the CPU?",
            opt: ["Virtual Memory", "Cache Memory", "Flash Memory", "Secondary Memory"],
            ans: 1,
            exp: "Cache memory is a small, extremely fast memory placed between the CPU and RAM to store frequently accessed data and instructions."
        },
        {
            q: "Which of the following is incorrectly matched?",
            opt: ["PROM - Programmable Read-Only Memory", "EPROM - Erasable Programmable Read-Only Memory (Erased via UV light)", "EEPROM - Electrically Erasable Programmable Read-Only Memory", "ROM - Random Only Memory"],
            ans: 3,
            exp: "ROM stands for Read-Only Memory, not Random Only Memory."
        },
        {
            q: "Consider the following statements about secondary storage:<br>1. Solid State Drives (SSDs) use flash memory and have no moving parts.<br>2. Hard Disk Drives (HDDs) use magnetic platters with read/write heads.<br>Which of the statements given above is/are correct?",
            opt: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
            ans: 2,
            exp: "Both statements are correct. SSDs are faster and more durable due to lack of mechanical parts, while HDDs rely on mechanical spinning magnetic disks."
        },
        {
            q: "The process of dividing a magnetic disk into concentric circles (tracks) and pie-shaped slices is known as:",
            opt: ["Tracking", "Formatting", "Crashing", "Partitioning"],
            ans: 1,
            exp: "Formatting a disk divides it into tracks and sectors so the operating system can store and locate data efficiently."
        },
        {
            q: "Which of the following represents the smallest unit of data in a computer?",
            opt: ["Byte", "Nibble", "Bit", "Record"],
            ans: 2,
            exp: "A Bit (Binary Digit, 0 or 1) is the smallest unit. A Nibble is 4 bits. A Byte is 8 bits."
        },
        {
            q: "In optical storage media like CDs and DVDs, data is read and written using:",
            opt: ["Magnetic heads", "Lasers", "Electrical charges", "Punched holes"],
            ans: 1,
            exp: "Optical disks use laser beams to read the physical microscopic pits and lands on the surface of the disc."
        },
        {
            q: "What is 'Virtual Memory' in a computer system?",
            opt: ["Memory stored on a cloud server.", "A technique allowing the execution of processes that are not completely in RAM by using hard disk space.", "The memory reserved exclusively for the Operating System.", "Another name for Cache memory."],
            ans: 1,
            exp: "Virtual memory is an OS feature that uses a portion of the secondary storage (HDD/SSD) to simulate additional RAM when physical RAM runs out."
        },
        {
            q: "Flash memory, commonly used in USB pen drives and SSDs, is fundamentally a type of:",
            opt: ["SRAM", "DRAM", "EEPROM", "Magnetic Storage"],
            ans: 2,
            exp: "Flash memory is a specialized type of EEPROM (Electrically Erasable Programmable Read-Only Memory) that can be erased and reprogrammed in large blocks."
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);

    const questionTextEl = document.getElementById("question-text");
    const optionsListEl = document.getElementById("options-list");
    const currentQEl = document.getElementById("current-q");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");
    const quizContainer = document.getElementById("quiz-container");
    const resultScreen = document.getElementById("result-screen");

    function loadQuestion() {
        const qData = questions[currentQuestionIndex];
        currentQEl.innerText = currentQuestionIndex + 1;
        questionTextEl.innerHTML = `Q${currentQuestionIndex + 1}. ${qData.q}`;
        
        optionsListEl.innerHTML = "";
        qData.opt.forEach((option, index) => {
            const li = document.createElement("li");
            li.innerHTML = option;
            if (userAnswers[currentQuestionIndex] === index) {
                li.classList.add("selected");
            }
            li.onclick = () => selectOption(index);
            optionsListEl.appendChild(li);
        });

        prevBtn.disabled = currentQuestionIndex === 0;
        
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    }

    function selectOption(index) {
        userAnswers[currentQuestionIndex] = index;
        const options = optionsListEl.children;
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove("selected");
        }
        options[index].classList.add("selected");
    }

    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    }

    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    function submitQuiz() {
        if(!confirm("Are you sure you want to submit the test?")) return;

        let correct = 0;
        let wrong = 0;
        let attempted = 0;
        
        let reviewHTML = "";

        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            const uAns = userAnswers[i];
            
            let statusText = "<span style='color:gray'>Not Attempted</span>";

            if (uAns !== null) {
                attempted++;
                if (uAns === q.ans) {
                    correct++;
                    statusText = "<span class='correct-ans'>Correct (+1)</span>";
                } else {
                    wrong++;
                    statusText = "<span class='wrong-ans'>Incorrect (-0.25)</span>";
                }
            }

            reviewHTML += `
                <div class="review-box">
                    <p><strong>Q${i + 1}. ${q.q}</strong></p>
                    <p>Your Answer: ${uAns !== null ? q.opt[uAns] : '<em>Skipped</em>'} | ${statusText}</p>
                    <p class="correct-ans">Correct Answer: ${q.opt[q.ans]}</p>
                    <div class="explanation"><strong>Explanation:</strong> ${q.exp}</div>
                </div>
            `;
        }

        const finalScore = (correct * 1) - (wrong * 0.25);

        document.getElementById("total-attempted").innerText = attempted;
        document.getElementById("total-correct").innerText = correct;
        document.getElementById("total-wrong").innerText = wrong;
        document.getElementById("final-score").innerText = finalScore.toFixed(2);
        
        document.getElementById("review-container").innerHTML = reviewHTML;

        quizContainer.style.display = "none";
        resultScreen.style.display = "block";
    }

    // Initialize Quiz
    loadQuestion();
</script>

</body>
</html>
