/* TEST 16 — Computer Networks (50 MCQs)
   Sub-topics: Network Types, Topologies, Network Devices, Addressing, Protocols, OSI & TCP/IP, Standards
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Computer Networks",
  questions: [
  {"type":"stmt","topic":"Standards","q":"Consider the following statements:\n1. Wi-Fi uses the IEEE 802.11 standard.\n2. Ethernet uses the IEEE 802.3 standard.\n3. Bluetooth uses the IEEE 802.3 standard.\n4. 192.168.1.256 is a valid IPv4 address.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Bluetooth uses 802.15, and an IPv4 octet cannot exceed 255. Statements 3 and 4 are not correct."},

  {"type":"real","topic":"Network Types","q":"An office has 20 computers in one building sharing a printer and files. This network is a","o":["LAN","WAN","MAN","PAN"],"a":0,"e":"A network within a building or campus is a LAN."},

  {"type":"match","topic":"Addressing","q":"Match the item (List I) with its size or type (List II):","l":["IPv4 address","IPv6 address","MAC address","Port number"],"r":["16-bit number identifying an application","128-bit","32-bit","48-bit physical address"],"o":["A-2, B-3, C-4, D-1","A-3, B-2, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":1,"e":"Address sizes: IPv4 address – 32-bit; IPv6 address – 128-bit; MAC address – 48-bit physical address; Port number – 16-bit number identifying an application."},

  {"type":"misc","topic":"Network Devices","q":"Which of the following is NOT a protocol?","o":["Router","HTTP","SMTP","FTP"],"a":0,"e":"HTTP, SMTP and FTP are protocols. A router is a network device."},

  {"type":"stmt","topic":"Network Types","q":"Consider the following statements:\n1. A WAN covers a large geographical area.\n2. A LAN covers a whole country.\n3. A MAN covers a single room.\n4. A PAN covers a whole city.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"A LAN covers a small area, a MAN covers a city, and a PAN covers a person's immediate surroundings. Only statement 1 is correct."},

  {"type":"stmt","topic":"Addressing","q":"Consider the following statements about the MAC address:\n1. It is the physical address of a network interface card.\n2. It is changed by the network every time the computer joins it.\n3. It is 48 bits long.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"The MAC address is built into the NIC and does not change with the network (the IP address may). Statement 2 is wrong."},

  {"type":"match","topic":"OSI & TCP/IP","q":"Match the OSI layer (List I) with its function (List II):","l":["Physical","Data Link","Network","Transport"],"r":["End-to-end delivery (TCP/UDP)","Transmission of raw bits","Routing using IP addresses","Frames and MAC addressing"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":1,"e":"OSI layers: Physical – Transmission of raw bits; Data Link – Frames and MAC addressing; Network – Routing using IP addresses; Transport – End-to-end delivery (TCP/UDP)."},

  {"type":"pair","topic":"Network Types","q":"Choose the INCORRECTLY matched pair:","o":["LAN – Small area like a building","MAN – City","PAN – Entire country","WAN – Large geographical area"],"a":2,"e":"A PAN covers the immediate surroundings of a person."},

  {"type":"real","topic":"Addressing","q":"Which address is fixed by the manufacturer on a network interface card?","o":["IP address","Port number","MAC address","Domain name"],"a":2,"e":"The MAC address is the physical address burnt into the NIC."},

  {"type":"real","topic":"Protocols","q":"A clerk wants to check whether another computer on the network is reachable. Which command should she use?","o":["ipconfig","cls","dir","ping"],"a":3,"e":"ping sends test messages (ICMP) to check reachability. ipconfig only shows the computer's own IP settings."},

  {"type":"pair","topic":"Network Devices","q":"Choose the correctly matched pair:","o":["Router – Connects different networks","Hub – Selects the best path between networks","Repeater – Converts IP addresses to MAC addresses","Bridge – Converts domain names to IP addresses"],"a":0,"e":"A router connects different networks. A hub broadcasts data, a repeater regenerates signals, and a bridge connects LAN segments."},

  {"type":"stmt","topic":"OSI & TCP/IP","q":"Consider the following statements:\n1. The OSI model has seven layers.\n2. The OSI model was developed by ISO.\n3. The Physical layer is the topmost layer of the OSI model.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"The Application layer is the topmost layer; the Physical layer is the lowest. Statement 3 is wrong."},

  {"type":"real","topic":"Topologies","q":"In a computer lab all computers connect to a central switch. When one computer's cable breaks, only that computer is disconnected. The topology is","o":["Bus","Ring","Star","Mesh"],"a":2,"e":"In a star topology, a cable failure affects only the node using that cable."},

  {"type":"real","topic":"Protocols","q":"A laptop joins the office Wi-Fi and receives its IP address automatically. Which protocol does this?","o":["DNS","DHCP","FTP","SMTP"],"a":1,"e":"DHCP assigns IP addresses to devices automatically."},

  {"type":"misc","topic":"Addressing","q":"Which of the following is NOT a valid IPv4 address?","o":["10.0.0.1","172.16.5.4","192.168.0.255","192.168.1.300"],"a":3,"e":"Each part of an IPv4 address must be between 0 and 255, so 300 is invalid."},

  {"type":"direct","topic":"Network Types","q":"The full form of LAN is","o":["Long Area Network","Logical Access Network","Linked Area Node","Local Area Network"],"a":3,"e":"A LAN is a Local Area Network covering a small area such as a building."},

  {"type":"stmt","topic":"Network Devices","q":"Consider the following statements:\n1. A switch forwards data only to the intended port using the MAC address.\n2. A hub broadcasts data to all the connected devices.\n3. A router works only with MAC addresses.\n4. A gateway can connect only the networks that use the same protocol.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"A router uses IP addresses, and a gateway connects networks with different protocols. Statements 1 and 2 are correct."},

  {"type":"match","topic":"Standards","q":"Match the IEEE standard (List I) with the technology (List II):","l":["802.3","802.11","802.15","802.16"],"r":["Bluetooth (PAN)","Ethernet","WiMAX","Wi-Fi"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"IEEE standards: 802.3 – Ethernet; 802.11 – Wi-Fi; 802.15 – Bluetooth (PAN); 802.16 – WiMAX."},

  {"type":"stmt","topic":"Protocols","q":"Consider the following statements:\n1. TCP is connectionless and unreliable.\n2. UDP is connectionless.\n3. TCP provides reliable delivery of data.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","1, 2 and 3","2 and 3 only"],"a":3,"e":"TCP is connection-oriented and reliable. Statement 1 is wrong."},

  {"type":"stmt","topic":"Addressing","q":"Consider the following statements:\n1. The first octet of a Class A address ranges from 128 to 191.\n2. The first octet of a Class C address ranges from 192 to 223.\n3. The first octet of a Class B address ranges from 1 to 126.\n4. The first octet of a Class D address ranges from 1 to 126.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":1,"e":"Class A is 1–126, Class B is 128–191 and Class D is 224–239. Only statement 2 is correct."},

  {"type":"stmt","topic":"Network Types","q":"Consider the following statements:\n1. In a client–server network the server provides services to the clients.\n2. In a peer-to-peer network all computers have equal status.\n3. Peer-to-peer networks are generally used for small networks.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"real","topic":"Topologies","q":"A fully connected mesh network is built with 6 computers. How many links are needed?","o":["6","12","15","30"],"a":2,"e":"Links = n(n−1)/2 = 6×5/2 = 15."},

  {"type":"match","topic":"Addressing","q":"Match the IP class (List I) with its first-octet range (List II):","l":["Class A","Class B","Class C","Class D"],"r":["192 to 223","1 to 126","224 to 239 (multicast)","128 to 191"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"IPv4 address classes: Class A – 1 to 126; Class B – 128 to 191; Class C – 192 to 223; Class D – 224 to 239 (multicast)."},

  {"type":"direct","topic":"Network Devices","q":"Which device connects different networks and forwards packets using IP addresses?","o":["Hub","Router","Repeater","Modem"],"a":1,"e":"A router connects networks and chooses the path for packets."},

  {"type":"pair","topic":"Topologies","q":"Choose the correctly matched pair:","o":["Bus topology – Every node connected to every node","Ring topology – Single backbone cable with terminators","Mesh topology – One central device","Star topology – Central hub or switch"],"a":3,"e":"Star uses a central device. Bus uses a backbone, ring links each node to two neighbours, and mesh links every node to every other."},

  {"type":"stmt","topic":"Topologies","q":"Consider the following statements about the star topology:\n1. All the nodes are connected to a central device.\n2. Failure of the central hub does not affect the network.\n3. Failure of one cable affects only the node connected through it.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"If the central hub or switch fails, the whole network goes down. Statement 2 is wrong."},

  {"type":"direct","topic":"Topologies","q":"Which network topology uses a central hub or switch to connect all the nodes?","o":["Bus","Ring","Star","Mesh"],"a":2,"e":"In a star topology every node is connected to a central device."},

  {"type":"match","topic":"Network Types","q":"Match the network type (List I) with its coverage (List II):","l":["PAN","LAN","MAN","WAN"],"r":["A building or campus","A large geographical area such as countries","Around a single person, a few metres","A city"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":1,"e":"Network types by area: PAN – Around a single person, a few metres; LAN – A building or campus; MAN – A city; WAN – A large geographical area such as countries."},

  {"type":"stmt","topic":"Topologies","q":"Consider the following statements about the bus topology:\n1. Each node has its own dedicated cable to a central device.\n2. All nodes share a common backbone cable.\n3. Failure of the backbone cable can bring down the whole network.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Dedicated cables to a central device describe the star topology. Statement 1 is wrong."},

  {"type":"real","topic":"Network Types","q":"A bank connects its branches in different states through a network. This network is a","o":["WAN","LAN","PAN","MAN"],"a":0,"e":"A network spread over a large geographical area is a WAN."},

  {"type":"misc","topic":"Topologies","q":"Which of the following is NOT a network topology?","o":["Bus","Cubic","Star","Ring"],"a":1,"e":"Bus, star, ring, mesh and tree are network topologies. There is no cubic topology."},

  {"type":"match","topic":"Protocols","q":"Match the protocol (List I) with its use (List II):","l":["HTTP","SMTP","FTP","DNS"],"r":["Converting domain names to IP addresses","Transfer of web pages","File transfer","Sending e-mail"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":1,"e":"Application protocols: HTTP – Transfer of web pages; SMTP – Sending e-mail; FTP – File transfer; DNS – Converting domain names to IP addresses."},

  {"type":"stmt","topic":"Topologies","q":"Consider the following statements:\n1. In a full mesh topology every node is connected to every other node.\n2. A full mesh of 4 nodes needs 6 links.\n3. In a ring topology each node is connected to exactly two neighbours.\n4. A tree topology has no hierarchy.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"A full mesh needs n(n−1)/2 = 4×3/2 = 6 links. A tree topology is hierarchical. Statement 4 is wrong."},

  {"type":"match","topic":"Network Devices","q":"Match the device (List I) with its function (List II):","l":["Hub","Switch","Router","Gateway"],"r":["Connects networks that use different protocols","Sends incoming data to all ports","Connects different networks using IP addresses","Forwards data using MAC addresses"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":1,"e":"Network devices: Hub – Sends incoming data to all ports; Switch – Forwards data using MAC addresses; Router – Connects different networks using IP addresses; Gateway – Connects networks that use different protocols."},

  {"type":"stmt","topic":"OSI & TCP/IP","q":"Consider the following statements:\n1. The Network layer handles routing.\n2. The Data Link layer deals with frames.\n3. The Physical layer is responsible for routing of packets.\n4. The Transport layer provides end-to-end delivery.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"Routing is done by the Network layer; the Physical layer deals with raw bits. Statement 3 is wrong."},

  {"type":"match","topic":"Protocols","q":"Match the protocol (List I) with its use (List II):","l":["POP3","DHCP","ARP","ICMP"],"r":["Finds the MAC address for an IP address","Receiving e-mail","Error and test messages such as ping","Assigns IP addresses automatically"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Network protocols: POP3 – Receiving e-mail; DHCP – Assigns IP addresses automatically; ARP – Finds the MAC address for an IP address; ICMP – Error and test messages such as ping."},

  {"type":"stmt","topic":"OSI & TCP/IP","q":"Consider the following statements:\n1. The TCP/IP model is commonly described as having four layers.\n2. The OSI model has seven layers.\n3. Both models use a layered approach.\n4. The Internet layer of TCP/IP roughly corresponds to the Network layer of OSI.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"stmt","topic":"Protocols","q":"Consider the following statements:\n1. HTTP is used to transfer web pages.\n2. SMTP is used for sending e-mail.\n3. POP3 is used for sending e-mail.\n4. FTP is used for file transfer.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"POP3 is used for receiving e-mail. Only statement 3 is not correct."},

  {"type":"match","topic":"Protocols","q":"Match the protocol (List I) with its default port number (List II):","l":["HTTP","HTTPS","FTP","SMTP"],"r":["25","443","80","21"],"o":["A-3, B-2, C-4, D-1","A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":0,"e":"Well-known ports: HTTP – 80; HTTPS – 443; FTP – 21; SMTP – 25."},

  {"type":"real","topic":"Protocols","q":"When a user types a website name in the browser, which service converts the name into an IP address?","o":["DHCP","DNS","FTP","SMTP"],"a":1,"e":"The Domain Name System translates domain names into IP addresses."},

  {"type":"stmt","topic":"Addressing","q":"Consider the following statements:\n1. An IPv4 address is 32 bits long.\n2. An IPv4 address is written as four numbers separated by dots.\n3. Each number in an IPv4 address ranges from 0 to 255.\nWhich of the statements given above is/are correct?","o":["1, 2 and 3","1 and 2 only","2 and 3 only","1 and 3 only"],"a":0,"e":"All three statements are correct."},

  {"type":"stmt","topic":"Protocols","q":"Consider the following statements:\n1. DNS translates domain names into IP addresses.\n2. DHCP is used to convert an IP address into a MAC address.\n3. DHCP assigns IP addresses automatically.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":3,"e":"Converting an IP address into a MAC address is done by ARP. Statement 2 is wrong."},

  {"type":"match","topic":"Topologies","q":"Match the topology (List I) with its feature (List II):","l":["Bus","Star","Ring","Mesh"],"r":["Each node connected to two neighbours","Single common backbone cable","Every node connected to every other node","Central hub or switch"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"Network topologies: Bus – Single common backbone cable; Star – Central hub or switch; Ring – Each node connected to two neighbours; Mesh – Every node connected to every other node."},

  {"type":"pair","topic":"Addressing","q":"Choose the INCORRECTLY matched pair:","o":["IPv4 – 32 bits","IPv6 – 128 bits","Port number – 16 bits","MAC address – 128 bits"],"a":3,"e":"A MAC address is 48 bits long."},

  {"type":"pair","topic":"Protocols","q":"Choose the INCORRECTLY matched pair:","o":["POP3 – Sending e-mail","DNS – Domain name to IP address","ARP – IP address to MAC address","DHCP – Automatic IP assignment"],"a":0,"e":"POP3 is used to receive e-mail."},

  {"type":"stmt","topic":"Network Devices","q":"Consider the following statements:\n1. A router connects different networks.\n2. A router uses IP addresses to forward packets.\n3. A hub uses MAC addresses to choose the destination port.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":0,"e":"A hub simply broadcasts data to all ports. Statement 3 is wrong."},

  {"type":"pair","topic":"Protocols","q":"Choose the correctly matched pair:","o":["SMTP – Receiving e-mail","FTP – Assigning IP addresses","HTTP – Transfer of web pages","DNS – Sending e-mail"],"a":2,"e":"HTTP transfers web pages. SMTP sends mail, FTP transfers files, and DNS resolves domain names."},

  {"type":"misc","topic":"OSI & TCP/IP","q":"Arrange the following OSI layers from the top to the bottom:\nA. Transport\nB. Application\nC. Physical\nD. Network","o":["B, A, D, C","A, B, D, C","B, A, C, D","B, D, A, C"],"a":0,"e":"Application → Transport → Network → Physical."},

  {"type":"misc","topic":"Protocols","q":"Which of the following is NOT an application layer protocol?","o":["TCP","HTTP","FTP","SMTP"],"a":0,"e":"TCP works at the transport layer. HTTP, FTP and SMTP are application layer protocols."},

  {"type":"stmt","topic":"Network Types","q":"Consider the following statements:\n1. A network is a group of interconnected computers that share resources.\n2. A LAN covers a small area such as an office or a building.\n3. A WAN covers only a single room.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"A WAN covers a large geographical area. Statement 3 is wrong."}
  ]
};
