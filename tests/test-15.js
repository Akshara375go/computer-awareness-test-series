/* TEST 15 — Data Communication (50 MCQs)
   Sub-topics: Basics, Transmission Modes, Transmission Media, Wireless Communication, Multiplexing & Switching, Signals & Devices, Error Detection, Mobile Generations
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Data Communication",
  questions: [
  {"type":"misc","topic":"Basics","q":"Which of the following is NOT a unit of data transfer rate?","o":["Pixel","bps","Kbps","Mbps"],"a":0,"e":"bps, Kbps and Mbps measure data transfer rate. A pixel is a picture element."},

  {"type":"stmt","topic":"Wireless Communication","q":"Consider the following statements:\n1. Bluetooth is used for short-range communication.\n2. Infrared communication requires a line of sight.\n3. Radio waves can pass through walls.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"match","topic":"Mobile Generations","q":"Match the generation (List I) with its feature (List II):","l":["1G","2G","3G","4G"],"r":["Mobile internet and video calls","Analog voice calls","High-speed all-IP broadband (LTE)","Digital voice and SMS"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":1,"e":"Mobile generations: 1G – Analog voice calls; 2G – Digital voice and SMS; 3G – Mobile internet and video calls; 4G – High-speed all-IP broadband (LTE)."},

  {"type":"real","topic":"Signals & Devices","q":"A home connects to the Internet through a telephone line. Which device converts the computer's digital data into signals for the line?","o":["Scanner","Plotter","Projector","Modem"],"a":3,"e":"A modem converts digital data to analog signals and back."},

  {"type":"stmt","topic":"Basics","q":"Consider the following statements:\n1. Bandwidth is the capacity of a channel.\n2. Latency is the delay in data transfer.\n3. Throughput is the actual data rate achieved.\n4. Attenuation is the loss of signal strength.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"stmt","topic":"Transmission Modes","q":"Consider the following statements:\n1. In simplex mode data flows in one direction only.\n2. In half duplex mode both devices transmit at the same time.\n3. A telephone call is an example of full duplex mode.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"In half duplex, devices take turns; they do not transmit together. Statement 2 is wrong."},

  {"type":"pair","topic":"Transmission Modes","q":"Choose the INCORRECTLY matched pair:","o":["Keyboard to computer – Full duplex","Radio broadcast – Simplex","Walkie-talkie – Half duplex","Telephone call – Full duplex"],"a":0,"e":"A keyboard sends data to the computer in one direction only (simplex)."},

  {"type":"match","topic":"Multiplexing & Switching","q":"Match the term (List I) with its description (List II):","l":["Circuit switching","Packet switching","Message switching","Unicast"],"r":["Data divided into packets, as on the Internet","One sender to one receiver","Dedicated path, as in the telephone network","Whole message stored and forwarded"],"o":["A-3, B-1, C-4, D-2","A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":0,"e":"Switching and transmission types: Circuit switching – Dedicated path, as in the telephone network; Packet switching – Data divided into packets, as on the Internet; Message switching – Whole message stored and forwarded; Unicast – One sender to one receiver."},

  {"type":"stmt","topic":"Basics","q":"Consider the following statements:\n1. Bit rate is measured in bits per second.\n2. Baud rate and bit rate are always equal.\n3. Higher bandwidth allows more data to be sent in a given time.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"One signal change can carry more than one bit, so baud rate and bit rate need not be equal. Statement 2 is wrong."},

  {"type":"pair","topic":"Transmission Media","q":"Choose the correctly matched pair:","o":["Coaxial cable – Light pulses","Microwave – Copper wires","Infrared – Passes through walls","Optical fibre – Light signals"],"a":3,"e":"Optical fibre carries light signals. Coaxial cable uses copper, microwaves are wireless, and infrared cannot pass through walls."},

  {"type":"misc","topic":"Basics","q":"Which one is different from the others?","o":["Simplex","Half duplex","Baud","Full duplex"],"a":2,"e":"Simplex, half duplex and full duplex are transmission modes. Baud is a unit of signalling rate."},

  {"type":"match","topic":"Signals & Devices","q":"Match the term (List I) with its meaning (List II):","l":["AM","FM","PM","Modem"],"r":["Frequency of the carrier is varied","Converts digital and analog signals","Amplitude of the carrier is varied","Phase of the carrier is varied"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Modulation and modem: AM – Amplitude of the carrier is varied; FM – Frequency of the carrier is varied; PM – Phase of the carrier is varied; Modem – Converts digital and analog signals."},

  {"type":"misc","topic":"Mobile Generations","q":"Arrange the mobile generations in order from the oldest to the newest:\nA. 4G\nB. 2G\nC. 1G\nD. 3G","o":["B, C, D, A","C, B, D, A","C, B, A, D","C, D, B, A"],"a":1,"e":"1G → 2G → 3G → 4G."},

  {"type":"direct","topic":"Transmission Media","q":"Which transmission medium carries data as light pulses?","o":["Twisted pair","Coaxial cable","Optical fibre","Microwave"],"a":2,"e":"Optical fibre transmits data as light through glass or plastic strands."},

  {"type":"real","topic":"Wireless Communication","q":"Two students want to share photos between their phones, a metre apart, without using the Internet. Which technology suits this?","o":["Satellite","Microwave tower","Optical fibre","Bluetooth"],"a":3,"e":"Bluetooth is a short-range wireless technology."},

  {"type":"real","topic":"Transmission Modes","q":"A television channel sends its programme to viewers, who cannot send anything back through the same link. This is","o":["Half duplex","Full duplex","Parallel","Simplex"],"a":3,"e":"Data flows in one direction only, which is simplex."},

  {"type":"real","topic":"Transmission Modes","q":"Policemen use walkie-talkies, where only one person can speak at a time. This mode of transmission is","o":["Simplex","Half duplex","Full duplex","Parallel"],"a":1,"e":"Both sides can send, but only one at a time: half duplex."},

  {"type":"pair","topic":"Transmission Modes","q":"Choose the correctly matched pair:","o":["Half duplex – Simultaneous two-way","Full duplex – One-way only","Serial – Many bits at once","Simplex – One-way communication"],"a":3,"e":"Simplex is one-way. Half duplex is two-way by turns, full duplex is simultaneous two-way, and serial sends one bit at a time."},

  {"type":"match","topic":"Signals & Devices","q":"Match the device (List I) with its function (List II):","l":["Modem","Repeater","Multiplexer","Antenna"],"r":["Combines several signals on one link","Converts between digital and analog signals","Sends and receives radio waves","Regenerates weak signals"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Communication devices: Modem – Converts between digital and analog signals; Repeater – Regenerates weak signals; Multiplexer – Combines several signals on one link; Antenna – Sends and receives radio waves."},

  {"type":"stmt","topic":"Error Detection","q":"Consider the following statements:\n1. A parity bit helps to detect errors.\n2. A checksum is used to detect errors.\n3. Hamming code can only detect errors and can never correct them.\n4. CRC is a method of data compression.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Hamming code can correct single-bit errors, and CRC is an error-detection method. Statements 3 and 4 are not correct."},

  {"type":"match","topic":"Basics","q":"Match the term (List I) with its meaning (List II):","l":["Bandwidth","Baud rate","Latency","Throughput"],"r":["Actual data rate achieved","Number of signal changes per second","Capacity of a channel","Delay in data transfer"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-2, C-4, D-1","A-3, B-4, C-2, D-1"],"a":2,"e":"Data communication terms: Bandwidth – Capacity of a channel; Baud rate – Number of signal changes per second; Latency – Delay in data transfer; Throughput – Actual data rate achieved."},

  {"type":"pair","topic":"Signals & Devices","q":"Choose the correctly matched pair:","o":["Repeater – Converts digital to analog","Multiplexer – Amplifies radio waves","Antenna – Combines many signals","Modem – Modulator–demodulator"],"a":3,"e":"Modem stands for modulator–demodulator. A repeater regenerates signals, a multiplexer combines signals, and an antenna sends and receives radio waves."},

  {"type":"real","topic":"Signals & Devices","q":"On a very long cable, the signal becomes weak. Which device regenerates the signal?","o":["Repeater","Modem","Multiplexer","Scanner"],"a":0,"e":"A repeater regenerates a weakened signal so it can travel farther."},

  {"type":"stmt","topic":"Transmission Modes","q":"Consider the following statements:\n1. Asynchronous transmission uses start and stop bits.\n2. Synchronous transmission sends data in blocks.\n3. A parity bit is used for error detection.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"match","topic":"Transmission Media","q":"Match the medium (List I) with its feature or use (List II):","l":["Twisted pair","Coaxial cable","Optical fibre","Microwave"],"r":["Light signals with very high bandwidth","Telephone and LAN cables","Line-of-sight towers","Cable television"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"Transmission media: Twisted pair – Telephone and LAN cables; Coaxial cable – Cable television; Optical fibre – Light signals with very high bandwidth; Microwave – Line-of-sight towers."},

  {"type":"real","topic":"Transmission Media","q":"A telecom company wants a cable with very high speed, long distance and minimal interference. Which medium is best?","o":["Optical fibre","Twisted pair","Coaxial cable","Infrared"],"a":0,"e":"Optical fibre has very high bandwidth, low attenuation and no electromagnetic interference."},

  {"type":"pair","topic":"Transmission Media","q":"Choose the INCORRECTLY matched pair:","o":["Twisted pair – Guided medium","Microwave – Guided medium","Coaxial cable – Guided medium","Optical fibre – Guided medium"],"a":1,"e":"Microwave is an unguided (wireless) medium."},

  {"type":"stmt","topic":"Transmission Media","q":"Consider the following statements about optical fibre:\n1. It transmits data as light pulses.\n2. It has a core and a cladding.\n3. It has higher bandwidth than coaxial cable.\n4. It is heavily affected by electromagnetic interference.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"Optical fibre is immune to electromagnetic interference. Statement 4 is wrong."},

  {"type":"stmt","topic":"Transmission Media","q":"Consider the following statements about optical fibre:\n1. It carries data as electrical signals.\n2. It has much higher bandwidth than twisted pair.\n3. It is not affected by electromagnetic interference.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"Optical fibre carries data as light pulses. Statement 1 is wrong."},

  {"type":"stmt","topic":"Mobile Generations","q":"Consider the following statements:\n1. 1G used analog signals.\n2. 2G introduced digital voice transmission.\n3. 4G offers faster data than 3G.\n4. 3G introduced SMS for the first time.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"SMS came with 2G (GSM). Only statement 4 is not correct."},

  {"type":"direct","topic":"Transmission Modes","q":"The transmission mode in which data can flow in both directions at the same time is","o":["Simplex","Half duplex","Full duplex","Parallel"],"a":2,"e":"In full duplex, both devices can send and receive simultaneously, as in a telephone call."},

  {"type":"stmt","topic":"Transmission Modes","q":"Consider the following statements:\n1. Parallel transmission sends several bits at the same time.\n2. Parallel transmission is preferred for long-distance communication.\n3. Serial transmission sends one bit at a time over a single line.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"Parallel transmission suits short distances; long-distance links use serial transmission. Statement 2 is wrong."},

  {"type":"stmt","topic":"Basics","q":"Consider the following statements:\n1. Data communication is the exchange of data between devices through a transmission medium.\n2. The components of data communication are sender, receiver, message, medium and protocol.\n3. A protocol is the physical cable used for communication.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"A protocol is a set of rules for communication, not a cable. Statement 3 is wrong."},

  {"type":"stmt","topic":"Multiplexing & Switching","q":"Consider the following statements:\n1. Circuit switching sets up a dedicated path before the transfer.\n2. Packet switching divides the data into packets.\n3. The Internet uses only circuit switching.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"The Internet is based on packet switching. Statement 3 is wrong."},

  {"type":"stmt","topic":"Wireless Communication","q":"Consider the following statements:\n1. A geostationary satellite appears fixed over one point of the Earth.\n2. Microwave communication needs a line of sight.\n3. Infrared signals can pass through walls.\n4. Bluetooth is used for communication over hundreds of kilometres.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Infrared cannot pass through walls, and Bluetooth is short-range. Statements 1 and 2 are correct."},

  {"type":"stmt","topic":"Multiplexing & Switching","q":"Consider the following statements:\n1. WDM is used with optical fibre.\n2. FDM divides the link into time slots.\n3. TDM divides the link into frequency bands.\n4. A demultiplexer combines many signals into one.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"FDM uses frequency bands, TDM uses time slots, and a demultiplexer separates the signals. Only statement 1 is correct."},

  {"type":"direct","topic":"Signals & Devices","q":"The device that converts digital signals to analog signals and back is","o":["Modem","Repeater","Hub","Antenna"],"a":0,"e":"A modem modulates digital data into analog signals and demodulates them back."},

  {"type":"real","topic":"Basics","q":"A 16 MB file is downloaded over a link that works at a steady 8 Mbps. How long will the download take?","o":["2 seconds","8 seconds","16 seconds","128 seconds"],"a":2,"e":"16 MB = 16 × 8 = 128 megabits. At 8 Mbps, 128 ÷ 8 = 16 seconds."},

  {"type":"real","topic":"Wireless Communication","q":"A TV remote control sends signals to the TV when pointed at it. Which technology does it normally use?","o":["Satellite","Infrared","Optical fibre","Twisted pair"],"a":1,"e":"Infrared needs a line of sight, so the remote must be pointed at the TV."},

  {"type":"stmt","topic":"Signals & Devices","q":"Consider the following statements:\n1. Modem stands for modulator–demodulator.\n2. A modem converts digital signals to analog signals for transmission.\n3. A modem converts analog signals back to digital at the receiving end.\n4. A modem can be used only in simplex mode.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"Modems are used in other modes too. Statement 4 is wrong."},

  {"type":"match","topic":"Error Detection","q":"Match the technique (List I) with its purpose (List II):","l":["Parity bit","Checksum","CRC","Hamming code"],"r":["Error correction","Simple error detection using one extra bit","Error detection by polynomial division","Error detection using a sum of the data"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Error control techniques: Parity bit – Simple error detection using one extra bit; Checksum – Error detection using a sum of the data; CRC – Error detection by polynomial division; Hamming code – Error correction."},

  {"type":"match","topic":"Multiplexing & Switching","q":"Match the term (List I) with its meaning (List II):","l":["FDM","TDM","WDM","Demultiplexer"],"r":["Separates the combined signals again","Different frequency bands share one link","Different wavelengths of light in a fibre","Time slots share one link"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Multiplexing terms: FDM – Different frequency bands share one link; TDM – Time slots share one link; WDM – Different wavelengths of light in a fibre; Demultiplexer – Separates the combined signals again."},

  {"type":"misc","topic":"Wireless Communication","q":"Which of the following is NOT an unguided (wireless) medium?","o":["Radio waves","Infrared","Microwave","Coaxial cable"],"a":3,"e":"Coaxial cable is a guided (wired) medium."},

  {"type":"match","topic":"Transmission Modes","q":"Match the term (List I) with its description (List II):","l":["Simplex","Half duplex","Full duplex","Serial transmission"],"r":["Bits sent one after another on one line","Both directions, but one at a time","Communication in one direction only","Both directions at the same time"],"o":["A-3, B-2, C-4, D-1","A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":0,"e":"Transmission terms: Simplex – Communication in one direction only; Half duplex – Both directions, but one at a time; Full duplex – Both directions at the same time; Serial transmission – Bits sent one after another on one line."},

  {"type":"misc","topic":"Transmission Modes","q":"Which of the following is NOT a data transmission mode?","o":["Simplex","Half duplex","Full duplex","Triplex"],"a":3,"e":"The three modes are simplex, half duplex and full duplex."},

  {"type":"stmt","topic":"Transmission Media","q":"Consider the following statements:\n1. Twisting the wires of a twisted pair reduces interference.\n2. Coaxial cable is used for cable television.\n3. Twisted pair is an unguided medium.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"],"a":2,"e":"Twisted pair is a guided medium (wired). Statement 3 is wrong."},

  {"type":"match","topic":"Wireless Communication","q":"Match the wireless technology (List I) with its property (List II):","l":["Bluetooth","Infrared","Radio waves","Satellite"],"r":["Line of sight, cannot pass through walls","Uses transponders in orbit","Short-range wireless link","Can pass through walls, travel in all directions"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":1,"e":"Wireless technologies: Bluetooth – Short-range wireless link; Infrared – Line of sight, cannot pass through walls; Radio waves – Can pass through walls, travel in all directions; Satellite – Uses transponders in orbit."},

  {"type":"stmt","topic":"Transmission Modes","q":"Consider the following statements:\n1. A walkie-talkie works in full duplex mode.\n2. Radio broadcasting works in half duplex mode.\n3. A telephone call works in full duplex mode.\n4. Television broadcasting works in half duplex mode.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"A walkie-talkie is half duplex, and radio and TV broadcasts are simplex. Only statement 3 is correct."},

  {"type":"pair","topic":"Error Detection","q":"Choose the INCORRECTLY matched pair:","o":["FDM – Frequency division multiplexing","CRC – Central Routing Code","TDM – Time division multiplexing","WDM – Wavelength division multiplexing"],"a":1,"e":"CRC stands for Cyclic Redundancy Check."},

  {"type":"stmt","topic":"Signals & Devices","q":"Consider the following statements:\n1. Attenuation is the increase in signal strength.\n2. A repeater regenerates a weak signal.\n3. Noise is unwanted signal that disturbs the data.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"Attenuation is the loss of signal strength. Statement 1 is wrong."}
  ]
};
