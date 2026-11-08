/* TEST 10 — Microsoft Windows (50 MCQs, basics)
   Sub-topics: Windows Basics, Desktop & Taskbar, Files & Folders, Windows Tools, Shortcut Keys, Power Options
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Microsoft Windows",
  questions: [
  {"type":"match","topic":"Desktop & Taskbar","q":"Match the Windows element (List I) with its function (List II):","l":["Desktop","Taskbar","Recycle Bin","Start button"],"r":["Temporary storage for deleted files","Main screen area where icons are placed","Opens the Start menu","Bar showing the open programs"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Windows elements: Desktop – Main screen area where icons are placed; Taskbar – Bar showing the open programs; Recycle Bin – Temporary storage for deleted files; Start button – Opens the Start menu."},

  {"type":"real","topic":"Windows Tools","q":"A program has stopped responding and the screen is stuck. Which tool can be used to close it?","o":["Task Manager","Notepad","Paint","Recycle Bin"],"a":0,"e":"Task Manager lets the user select the program and choose End task."},

  {"type":"pair","topic":"Windows Tools","q":"Choose the INCORRECTLY matched pair:","o":["Notepad – Text editor","Paint – Drawing program","File Explorer – Browse files and folders","Calculator – Web browser"],"a":3,"e":"Calculator performs calculations. Web browsers are programs such as Edge or Chrome."},

  {"type":"stmt","topic":"Desktop & Taskbar","q":"Consider the following statements about the Start menu:\n1. It can be opened by clicking the Start button or by pressing the Windows key.\n2. It lists the installed programs.\n3. It can be used to search for apps and files.\nWhich of the statements given above is/are correct?","o":["1, 2 and 3","1 and 2 only","2 and 3 only","1 and 3 only"],"a":0,"e":"All three statements are correct."},

  {"type":"real","topic":"Power Options","q":"Meena leaves her desk for a few minutes and wants to protect her screen without closing her programs. What should she do?","o":["Shut down the computer","Restart the computer","Delete the desktop","Lock the computer"],"a":3,"e":"Locking (Windows + L) hides the screen until the password is entered; programs stay open."},

  {"type":"real","topic":"Files & Folders","q":"A student wants to put a file in another folder and also keep the original where it is. Which action should be used?","o":["Cut and Paste","Copy and Paste","Rename","Delete"],"a":1,"e":"Copy leaves the original in place. Cut and Paste moves the file."},

  {"type":"pair","topic":"Power Options","q":"Choose the INCORRECTLY matched pair:","o":["Shut down – Keeps all programs running in memory","Sleep – Low-power state","Restart – Shut down and start again","Lock – Secures the screen without closing programs"],"a":0,"e":"Shut down closes all programs and turns the computer off."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the shortcut (List I) with its use (List II):","l":["Alt + Tab","Windows + D","Ctrl + Shift + Esc","Windows + L"],"r":["Open Task Manager","Lock the computer","Switch between open windows","Show the desktop"],"o":["A-4, B-3, C-1, D-2","A-3, B-4, C-2, D-1","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":3,"e":"Windows shortcuts: Alt + Tab – Switch between open windows; Windows + D – Show the desktop; Ctrl + Shift + Esc – Open Task Manager; Windows + L – Lock the computer."},

  {"type":"stmt","topic":"Files & Folders","q":"Consider the following statements:\n1. .exe is an executable program file.\n2. .mp3 is an audio file.\n3. .jpg is a video file.\n4. .docx is a spreadsheet file.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":".jpg is an image file and .docx is a Word document file. Statements 1 and 2 are correct."},

  {"type":"stmt","topic":"Desktop & Taskbar","q":"Consider the following statements:\n1. The Taskbar shows buttons for open programs.\n2. The notification area shows the clock and system icons.\n3. The Start button is located in the title bar of every window.\n4. Programs can be pinned to the Taskbar for quick access.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"The Start button is on the Taskbar, not in each window's title bar. Statement 3 is wrong."},

  {"type":"match","topic":"Files & Folders","q":"Match the file extension (List I) with its type (List II):","l":[".txt",".exe",".jpg",".mp3"],"r":["Audio file","Executable program file","Plain text file","Image file"],"o":["A-3, B-2, C-4, D-1","A-2, B-3, C-4, D-1","A-3, B-2, C-1, D-4","A-3, B-4, C-2, D-1"],"a":0,"e":"File extensions: .txt – Plain text file; .exe – Executable program file; .jpg – Image file; .mp3 – Audio file."},

  {"type":"misc","topic":"Files & Folders","q":"Arrange the steps to copy a file to another folder in the correct order:\nA. Open the destination folder\nB. Select the file\nC. Press Ctrl + V\nD. Press Ctrl + C","o":["B, D, A, C","B, A, D, C","D, B, A, C","B, D, C, A"],"a":0,"e":"Select the file, copy it, open the destination folder, then paste."},

  {"type":"stmt","topic":"Files & Folders","q":"Consider the following statements:\n1. A folder can contain files.\n2. File Explorer is used to manage files and folders.\n3. A file name in Windows can contain the character '/'.\n4. A file extension appears after a dot in the file name.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"Windows file names cannot contain \\ / : * ? \" < > |. Only statement 3 is not correct."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. F2 refreshes the window.\n2. F5 renames the selected file.\n3. Alt + F4 closes the active window.\n4. Ctrl + Z redoes the last action.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"F2 renames, F5 refreshes, and Ctrl + Z undoes the last action. Only statement 3 is correct."},

  {"type":"stmt","topic":"Windows Basics","q":"Consider the following statements:\n1. Windows is an operating system.\n2. Windows is developed by Apple.\n3. Windows has a graphical user interface.\n4. Windows is an application software like Paint.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Windows is an operating system by Microsoft with a GUI. Paint is application software, but Windows is system software. Statements 1 and 3 are correct."},

  {"type":"match","topic":"Power Options","q":"Match the power option (List I) with its meaning (List II):","l":["Shut down","Restart","Sleep","Lock"],"r":["Shuts down and starts the computer again","Low-power state that keeps work in memory","Protects the screen while programs stay open","Turns the computer off"],"o":["A-1, B-4, C-2, D-3","A-4, B-1, C-3, D-2","A-4, B-1, C-2, D-3","A-4, B-2, C-1, D-3"],"a":2,"e":"Power options: Shut down – Turns the computer off; Restart – Shuts down and starts the computer again; Sleep – Low-power state that keeps work in memory; Lock – Protects the screen while programs stay open."},

  {"type":"real","topic":"Shortcut Keys","q":"Many windows are open and a user wants to see the desktop quickly. Which shortcut helps?","o":["Alt + F4","Ctrl + P","Windows + D","Windows + L"],"a":2,"e":"Windows + D shows the desktop. Alt + F4 would close the active window."},

  {"type":"match","topic":"Windows Tools","q":"Match the Windows tool (List I) with its use (List II):","l":["Task Manager","File Explorer","Settings","Disk Cleanup"],"r":["Remove unnecessary files","View and end running programs","Change system settings","Browse files and folders"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1","A-2, B-4, C-3, D-1"],"a":3,"e":"Windows tools: Task Manager – View and end running programs; File Explorer – Browse files and folders; Settings – Change system settings; Disk Cleanup – Remove unnecessary files."},

  {"type":"pair","topic":"Windows Basics","q":"Choose the correctly matched pair:","o":["Title bar – Moves view up and down","Maximize button – Enlarges window to full screen","Minimize button – Closes the program","Recycle Bin – Plays music"],"a":1,"e":"The Maximize button enlarges a window. The other pairs are mismatched."},

  {"type":"misc","topic":"Windows Basics","q":"Which of the following is NOT a standard button at the top-right corner of a window?","o":["Minimize","Maximize","Close","Rename"],"a":3,"e":"Windows have Minimize, Maximize (or Restore) and Close buttons. There is no Rename button."},

  {"type":"stmt","topic":"Windows Basics","q":"Consider the following statements about windows:\n1. Minimizing a window hides it from the screen, but the program keeps running.\n2. Clicking the Close button minimizes the window to the taskbar.\n3. The Maximize button enlarges the window to fill the screen.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"The Close button exits the window or program. Minimizing sends it to the taskbar. Statement 2 is wrong."},

  {"type":"stmt","topic":"Power Options","q":"Consider the following statements:\n1. Restart shuts down and starts the computer again.\n2. Sleep mode switches the computer off completely.\n3. A shortcut is a copy of the original program.\n4. Safe Mode helps in troubleshooting problems.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Sleep keeps the work in memory in a low-power state. A shortcut is only a link to the original. Statements 2 and 3 are not correct."},

  {"type":"stmt","topic":"Windows Tools","q":"Consider the following statements about Notepad:\n1. Notepad is a basic text editor.\n2. Files saved in Notepad have the .txt extension by default.\n3. Notepad is used for advanced image editing.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"Notepad is a simple text editor. Image editing is not its purpose (Paint is used for simple pictures). Statement 3 is wrong."},

  {"type":"stmt","topic":"Desktop & Taskbar","q":"Consider the following statements about the desktop:\n1. Deleting a shortcut icon deletes the original program.\n2. The desktop is the main screen shown after logging in.\n3. A shortcut icon gives quick access to a program or file.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"A shortcut is only a link; deleting it does not delete the original program. Statement 1 is wrong."},

  {"type":"stmt","topic":"Files & Folders","q":"Consider the following statements about the Recycle Bin:\n1. Files deleted with the Delete key normally go to the Recycle Bin.\n2. Files in the Recycle Bin can be restored.\n3. Files deleted with Shift + Delete skip the Recycle Bin and are deleted permanently.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"misc","topic":"Windows Tools","q":"Which of the following is NOT a built-in Windows program?","o":["Notepad","Microsoft Word","Paint","Calculator"],"a":1,"e":"Notepad, Paint and Calculator come with Windows. Microsoft Word is part of Microsoft Office, which is installed separately."},

  {"type":"match","topic":"Windows Tools","q":"Match the Windows program (List I) with its use (List II):","l":["Notepad","Paint","Calculator","Snipping Tool"],"r":["Drawing and editing simple pictures","Capturing screenshots","Simple text editor","Arithmetic calculations"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Built-in Windows programs: Notepad – Simple text editor; Paint – Drawing and editing simple pictures; Calculator – Arithmetic calculations; Snipping Tool – Capturing screenshots."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the shortcut key (List I) with its action (List II):","l":["Ctrl + C","Ctrl + X","Ctrl + V","Ctrl + Z"],"r":["Cut","Undo","Copy","Paste"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":1,"e":"Common shortcut keys: Ctrl + C – Copy; Ctrl + X – Cut; Ctrl + V – Paste; Ctrl + Z – Undo."},

  {"type":"stmt","topic":"Desktop & Taskbar","q":"Consider the following statements about the Taskbar:\n1. It shows buttons of the open programs.\n2. It is the place where deleted files are stored.\n3. The Start button is located on the Taskbar.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Deleted files are stored in the Recycle Bin, not the Taskbar, so statement 2 is wrong."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the correctly matched pair:","o":["Windows + L – Show desktop","Alt + Tab – Close window","F2 – Refresh","Ctrl + Shift + Esc – Task Manager"],"a":3,"e":"Ctrl + Shift + Esc opens Task Manager. Windows + L locks the computer, Alt + Tab switches windows, and F2 renames."},

  {"type":"stmt","topic":"Windows Tools","q":"Consider the following statements about Task Manager:\n1. Task Manager is used to write documents.\n2. It shows the programs and processes that are running.\n3. It shows the CPU and memory usage.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Task Manager monitors running programs and resource use; it is not used to write documents. Statement 1 is wrong."},

  {"type":"match","topic":"Windows Basics","q":"Match the mouse action (List I) with its result (List II):","l":["Single click","Double click","Right click","Drag and drop"],"r":["Shows the context menu","Moves an item by dragging it","Opens an item","Selects an item"],"o":["A-3, B-4, C-1, D-2","A-4, B-3, C-2, D-1","A-4, B-3, C-1, D-2","A-4, B-1, C-3, D-2"],"a":2,"e":"Mouse actions: Single click – Selects an item; Double click – Opens an item; Right click – Shows the context menu; Drag and drop – Moves an item by dragging it."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. Ctrl + A selects all items.\n2. Ctrl + P opens the Properties of a file.\n3. Ctrl + S opens a saved file.\n4. Ctrl + N closes the current window.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"Ctrl + P prints, Ctrl + S saves, and Ctrl + N opens a new window or file. Only statement 1 is correct."},

  {"type":"direct","topic":"Windows Basics","q":"Windows is an operating system developed by","o":["Microsoft","Apple","IBM","Google"],"a":0,"e":"Windows is the family of operating systems developed by Microsoft."},

  {"type":"pair","topic":"Files & Folders","q":"Choose the correctly matched pair:","o":[".txt – Image file",".mp3 – Video file",".exe – Executable file",".bmp – Text file"],"a":2,"e":".exe is an executable file. .txt is plain text, .mp3 is audio and .bmp is an image."},

  {"type":"stmt","topic":"Files & Folders","q":"Consider the following statements about the Recycle Bin:\n1. It stores deleted files temporarily.\n2. Files in it can be restored.\n3. Emptying it permanently removes the files.\n4. Files in it take no space on the hard disk.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"Files in the Recycle Bin still occupy disk space until it is emptied. Statement 4 is wrong."},

  {"type":"real","topic":"Files & Folders","q":"Ravi deleted a file from the desktop with the Delete key by mistake and wants it back. Where should he look first?","o":["Task Manager","Recycle Bin","Notepad","Taskbar"],"a":1,"e":"Deleted files go to the Recycle Bin, from where they can be restored."},

  {"type":"direct","topic":"Desktop & Taskbar","q":"The main screen that appears after Windows starts and the user logs in is called the","o":["Taskbar","Desktop","Title bar","Status bar"],"a":1,"e":"The desktop is the main working screen where icons, shortcuts and the Taskbar are shown."},

  {"type":"direct","topic":"Shortcut Keys","q":"Which key is used to rename a selected file or folder?","o":["F2","F1","F5","F12"],"a":0,"e":"F2 renames the selected item. F1 opens Help and F5 refreshes."},

  {"type":"real","topic":"Windows Tools","q":"A student wants to type a quick note without any formatting. Which program is the simplest choice?","o":["Paint","Calculator","Task Manager","Notepad"],"a":3,"e":"Notepad is a basic plain-text editor."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the key (List I) with its function (List II):","l":["F1","F2","F5","Alt + F4"],"r":["Close the active window","Help","Refresh","Rename the selected item"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-3, C-4, D-1"],"a":2,"e":"Function keys: F1 – Help; F2 – Rename the selected item; F5 – Refresh; Alt + F4 – Close the active window."},

  {"type":"misc","topic":"Files & Folders","q":"Which of the following is NOT a valid file name in Windows?","o":["report/2024.txt","report_2024.txt","report 2024.txt","report-2024.txt"],"a":0,"e":"A file name cannot contain the character '/'."},

  {"type":"stmt","topic":"Windows Basics","q":"Consider the following statements:\n1. Windows is a graphical user interface (GUI) based operating system.\n2. Windows is developed by Microsoft.\n3. Windows is a command-line only operating system.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Windows is a GUI operating system from Microsoft. It is not command-line only, so statement 3 is wrong."},

  {"type":"misc","topic":"Windows Basics","q":"Which one of the following is different from the others?","o":["Windows","Notepad","Linux","macOS"],"a":1,"e":"Windows, Linux and macOS are operating systems. Notepad is an application program."},

  {"type":"stmt","topic":"Windows Basics","q":"Consider the following statements:\n1. Windows allows more than one program to run at the same time.\n2. Alt + Tab closes all the open programs.\n3. Task Manager can be used to end a program that is not responding.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Alt + Tab only switches between open windows. Statement 2 is wrong."},

  {"type":"stmt","topic":"Files & Folders","q":"Consider the following statements:\n1. Two files with the same name and the same extension can exist in the same folder.\n2. A folder can contain other folders (subfolders).\n3. A file extension indicates the type of the file.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"A folder cannot have two files with exactly the same name and extension, so statement 1 is wrong."},

  {"type":"match","topic":"Windows Basics","q":"Match the window button (List I) with its action (List II):","l":["Title bar","Minimize button","Maximize button","Close button"],"r":["Exits the window or program","Shows the name of the window","Enlarges the window to fill the screen","Hides the window on the taskbar"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Parts of a window: Title bar – Shows the name of the window; Minimize button – Hides the window on the taskbar; Maximize button – Enlarges the window to fill the screen; Close button – Exits the window or program."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the INCORRECTLY matched pair:","o":["F5 – Rename","Alt + F4 – Close the active window","Windows + D – Show desktop","Ctrl + A – Select all"],"a":0,"e":"F5 refreshes. F2 is used to rename."},

  {"type":"real","topic":"Windows Tools","q":"To see all the files and folders saved on the D: drive, which Windows tool is used?","o":["Calculator","Paint","Notepad","File Explorer"],"a":3,"e":"File Explorer is used to browse drives, folders and files."},

  {"type":"real","topic":"Desktop & Taskbar","q":"A user opens a particular program every day and wants its icon always available on the Taskbar. What should she do?","o":["Rename the program","Pin it to the Taskbar","Put the computer to sleep","Empty the Recycle Bin"],"a":1,"e":"Pinning a program keeps its icon on the Taskbar for quick access."}
  ]
};
