/* TEST 13 — Microsoft PowerPoint (50 MCQs)
   Sub-topics: PowerPoint Basics, Views, Slides & Layouts, Animations & Transitions, Slide Show, Insert & Design, Shortcut Keys
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Microsoft PowerPoint",
  questions: [
  {"type":"stmt","topic":"Animations & Transitions","q":"Consider the following statements:\n1. Transitions are the effects shown while moving from one slide to the next.\n2. Transitions are applied to individual text boxes.\n3. Animations are applied to objects such as text and pictures on a slide.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"Transitions apply to slides, while animations apply to objects. Statement 2 is wrong."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. F5 starts the show from the current slide.\n2. Shift + F5 starts the show from the current slide.\n3. Esc ends the slide show.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"F5 starts the show from the first slide. Statement 1 is wrong."},

  {"type":"stmt","topic":"Insert & Design","q":"Consider the following statements about themes:\n1. A theme gives a presentation consistent colours, fonts and effects.\n2. A theme can be applied only before any slide is added.\n3. Themes are found in the Design tab.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"A theme can be applied or changed at any time. Statement 2 is wrong."},

  {"type":"stmt","topic":"Slides & Layouts","q":"Consider the following statements:\n1. A slide is a single page of a presentation.\n2. A layout arranges the placeholders on a slide.\n3. A placeholder is a box that holds text or objects.\n4. A theme is a type of animation.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"A theme is a set of colours, fonts and effects, not an animation. Statement 4 is wrong."},

  {"type":"real","topic":"Animations & Transitions","q":"A student wants the title text to fly in when the slide appears. What should he apply?","o":["Slide Master","Hide Slide","An Entrance animation","Handouts"],"a":2,"e":"Entrance animations such as Fly In bring an object onto the slide."},

  {"type":"real","topic":"Shortcut Keys","q":"While editing slide 7, a user wants to start the slide show from that slide. Which key combination should she press?","o":["F5","Esc","Shift + F5","Ctrl + M"],"a":2,"e":"Shift + F5 starts the show from the current slide. F5 starts from slide 1."},

  {"type":"stmt","topic":"Views","q":"Consider the following statements about notes:\n1. Speaker notes can be added in the Notes pane.\n2. Speaker notes are not shown to the audience on the slide during a normal slide show.\n3. Notes can be printed as Notes Pages.\nWhich of the statements given above is/are correct?","o":["1, 2 and 3","1 and 2 only","2 and 3 only","1 and 3 only"],"a":0,"e":"All three statements are correct."},

  {"type":"stmt","topic":"Animations & Transitions","q":"Consider the following statements:\n1. The Slide Show tab contains Rehearse Timings.\n2. The Transitions tab contains the animation effects for objects.\n3. The Animations tab contains the effects for moving between slides.\n4. The Design tab contains the Hide Slide command.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"Transitions apply between slides, animations apply to objects, and Hide Slide is in the Slide Show tab. Only statement 1 is correct."},

  {"type":"direct","topic":"PowerPoint Basics","q":"MS PowerPoint is a type of","o":["Presentation software","Word processor","Spreadsheet software","Database software"],"a":0,"e":"PowerPoint is used to create presentations made of slides."},

  {"type":"real","topic":"Animations & Transitions","q":"A teacher wants each slide to fade in smoothly while moving from one slide to the next. Which tab should she use?","o":["Animations","Design","Transitions","Review"],"a":2,"e":"Transitions control the effect shown between slides."},

  {"type":"match","topic":"Slides & Layouts","q":"Match the slide layout (List I) with its description (List II):","l":["Title Slide","Blank","Two Content","Section Header"],"r":["Two content areas side by side","Title and subtitle","Introduces a new section","No placeholders"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":1,"e":"Slide layouts: Title Slide – Title and subtitle; Blank – No placeholders; Two Content – Two content areas side by side; Section Header – Introduces a new section."},

  {"type":"match","topic":"Views","q":"Match the view (List I) with its feature (List II):","l":["Normal view","Slide Sorter view","Reading View","Outline view"],"r":["Thumbnails used to rearrange slides","Shows only the text of the slides","Main editing view with slide pane and thumbnails","Shows the presentation in a window without full screen"],"o":["A-3, B-1, C-4, D-2","A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":0,"e":"PowerPoint views: Normal view – Main editing view with slide pane and thumbnails; Slide Sorter view – Thumbnails used to rearrange slides; Reading View – Shows the presentation in a window without full screen; Outline view – Shows only the text of the slides."},

  {"type":"direct","topic":"Shortcut Keys","q":"Which key starts a slide show from the first slide in PowerPoint?","o":["F1","F7","F11","F5"],"a":3,"e":"F5 starts the slide show from the beginning."},

  {"type":"stmt","topic":"PowerPoint Basics","q":"Consider the following statements:\n1. A PowerPoint file is called a presentation.\n2. A presentation is a collection of slides.\n3. PowerPoint is a word processing program.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"PowerPoint is presentation software. Statement 3 is wrong."},

  {"type":"direct","topic":"Views","q":"The view in which a presentation normally opens for editing is","o":["Normal view","Slide Sorter view","Reading View","Outline view"],"a":0,"e":"Normal view is the default view for creating and editing slides."},

  {"type":"misc","topic":"Animations & Transitions","q":"Which one is different from the others?","o":["Fly In","Mail Merge","Fade","Wipe"],"a":1,"e":"Fly In, Fade and Wipe are animation or transition effects. Mail Merge is a Word feature."},

  {"type":"stmt","topic":"Slides & Layouts","q":"Consider the following statements about printing:\n1. Handouts can print several slides on one page.\n2. Handouts can print up to nine slides on a page.\n3. Notes Pages print only the slides without any notes.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"Notes Pages print one slide along with its speaker notes. Statement 3 is wrong."},

  {"type":"real","topic":"Slides & Layouts","q":"A teacher wants printed copies for the audience with six slides on each page. What should she print?","o":["Notes Pages","Handouts","Outline","Slide show"],"a":1,"e":"Handouts print several slides on one page; Notes Pages print one slide with its notes."},

  {"type":"stmt","topic":"Views","q":"Consider the following statements:\n1. Normal view is the default editing view.\n2. Slide Sorter view shows thumbnails of the slides.\n3. Outline view shows the pictures and charts clearly.\n4. Reading View is the only view in which slides can be edited.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Outline view shows only the text, and slides can be edited in other views too. Statements 1 and 2 are correct."},

  {"type":"stmt","topic":"PowerPoint Basics","q":"Consider the following statements:\n1. .ppt is the 2007 format.\n2. .pptx is the 97–2003 format.\n3. .ppsx opens directly in slide show mode.\n4. .potx is a picture file.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":".ppt is the older format, .pptx is the newer format, and .potx is a template. Only statement 3 is correct."},

  {"type":"pair","topic":"Animations & Transitions","q":"Choose the INCORRECTLY matched pair:","o":["Slide Sorter – Rearranging slides","Notes pane – Speaker notes","Transitions – Effects between slides","Animations – Effects between slides"],"a":3,"e":"Animations apply to objects on a slide. Effects between slides are transitions."},

  {"type":"match","topic":"Slide Show","q":"Match the key pressed during a slide show (List I) with its result (List II):","l":["B","W","N","P"],"r":["Next slide","Black screen","Previous slide","White screen"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3","A-2, B-4, C-1, D-3"],"a":3,"e":"Slide show keys: B – Black screen; W – White screen; N – Next slide; P – Previous slide."},

  {"type":"match","topic":"Shortcut Keys","q":"Match the key (List I) with its action in PowerPoint (List II):","l":["F5","Shift + F5","Ctrl + M","Esc"],"r":["End the slide show","Start the show from the beginning","Insert a new slide","Start the show from the current slide"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":1,"e":"PowerPoint keys: F5 – Start the show from the beginning; Shift + F5 – Start the show from the current slide; Ctrl + M – Insert a new slide; Esc – End the slide show."},

  {"type":"match","topic":"Insert & Design","q":"Match the Insert option (List I) with its use (List II):","l":["SmartArt","Action button","Hyperlink","Text Box"],"r":["Link to a slide, file or web page","Graphical diagrams such as process lists","Text placed anywhere on the slide","Button with a built-in link action"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Insert options: SmartArt – Graphical diagrams such as process lists; Action button – Button with a built-in link action; Hyperlink – Link to a slide, file or web page; Text Box – Text placed anywhere on the slide."},

  {"type":"misc","topic":"Animations & Transitions","q":"Which of the following is NOT a category of animation in PowerPoint?","o":["Printing","Entrance","Emphasis","Exit"],"a":0,"e":"Animation categories are Entrance, Emphasis, Exit and Motion Paths."},

  {"type":"pair","topic":"Shortcut Keys","q":"Choose the correctly matched pair:","o":["F5 – Start from the current slide","Shift + F5 – Start from the beginning","Esc – Insert a new slide","Ctrl + M – New slide"],"a":3,"e":"Ctrl + M inserts a new slide. F5 starts from the beginning, Shift + F5 from the current slide, and Esc ends the show."},

  {"type":"match","topic":"PowerPoint Basics","q":"Match the file extension (List I) with its meaning (List II):","l":[".pptx",".ppt",".ppsx",".potx"],"r":["Slide show that opens directly in show mode","PowerPoint presentation (2007 onwards)","PowerPoint template","PowerPoint 97–2003 presentation"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"PowerPoint file types: .pptx – PowerPoint presentation (2007 onwards); .ppt – PowerPoint 97–2003 presentation; .ppsx – Slide show that opens directly in show mode; .potx – PowerPoint template."},

  {"type":"pair","topic":"PowerPoint Basics","q":"Choose the correctly matched pair:","o":[".potx – Slide show file",".ppsx – Slide show file",".pptx – Template",".ppt – 2007 format"],"a":1,"e":".ppsx opens directly as a slide show. .potx is a template, .pptx is the 2007 format and .ppt is the older format."},

  {"type":"pair","topic":"Slides & Layouts","q":"Choose the INCORRECTLY matched pair:","o":["Title Slide – Title and subtitle","Title Only – Title and two content boxes","Blank – No placeholders","Two Content – Two content areas"],"a":1,"e":"Title Only has only a title placeholder."},

  {"type":"stmt","topic":"Insert & Design","q":"Consider the following statements:\n1. Pictures, tables and charts can be inserted into slides.\n2. Audio and video can be inserted into slides.\n3. Hyperlinks can be added to text or objects on a slide.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1, 2 and 3","2 and 3 only","1 and 3 only"],"a":1,"e":"All three statements are correct."},

  {"type":"real","topic":"Views","q":"A trainer wants to change the order of 30 slides quickly by dragging them. Which view is the most convenient?","o":["Notes Page view","Reading View","Slide Master view","Slide Sorter view"],"a":3,"e":"Slide Sorter shows thumbnails that can be dragged into a new order."},

  {"type":"match","topic":"Animations & Transitions","q":"Match the animation type (List I) with its effect (List II):","l":["Entrance","Emphasis","Exit","Motion Path"],"r":["Object moves along a drawn path","Object appears on the slide","Object leaves the slide","Draws attention to an object already on the slide"],"o":["A-2, B-4, C-3, D-1","A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":0,"e":"Animation effect types: Entrance – Object appears on the slide; Emphasis – Draws attention to an object already on the slide; Exit – Object leaves the slide; Motion Path – Object moves along a drawn path."},

  {"type":"real","topic":"Views","q":"A speaker wants reminders that only she can see while presenting. Where should she type them?","o":["Notes pane","Title placeholder","Footer","Text box on the slide"],"a":0,"e":"Speaker notes are written in the Notes pane and are not shown to the audience on the slide."},

  {"type":"stmt","topic":"Slides & Layouts","q":"Consider the following statements about Slide Master:\n1. A change in Slide Master affects only the first slide.\n2. Slide Master controls the fonts, background and layouts of the slides.\n3. Slide Master is opened from the View tab.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"Changes in Slide Master apply to all slides that use its layouts. Statement 1 is wrong."},

  {"type":"misc","topic":"PowerPoint Basics","q":"Which of the following is NOT a PowerPoint file extension?","o":[".docx",".pptx",".ppt",".ppsx"],"a":0,"e":".docx is a Word document. .pptx, .ppt and .ppsx are PowerPoint formats."},

  {"type":"real","topic":"Slide Show","q":"While presenting, a speaker wants to skip one slide without deleting it. What should be used?","o":["Slide Master","Animation Pane","Format Painter","Hide Slide"],"a":3,"e":"A hidden slide stays in the file but is skipped during the slide show."},

  {"type":"misc","topic":"Views","q":"Which of the following is NOT a view in MS PowerPoint?","o":["Normal","Print Layout","Slide Sorter","Reading View"],"a":1,"e":"Print Layout is a Word view. PowerPoint has Normal, Outline, Slide Sorter, Notes Page and Reading views."},

  {"type":"match","topic":"Views","q":"Match the part of the Normal view (List I) with its position or use (List II):","l":["Left pane","Centre pane","Notes pane","Status bar"],"r":["Speaker notes below the slide","Thumbnails of the slides","Slide number and view buttons at the bottom","Main editing area"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"Normal view parts: Left pane – Thumbnails of the slides; Centre pane – Main editing area; Notes pane – Speaker notes below the slide; Status bar – Slide number and view buttons at the bottom."},

  {"type":"match","topic":"PowerPoint Basics","q":"Match the ribbon tab (List I) with its main purpose (List II):","l":["Design","Transitions","Animations","Slide Show"],"r":["Effects when moving from one slide to the next","Rehearse timings and set up the show","Themes and slide background","Effects on objects within a slide"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":3,"e":"PowerPoint tabs: Design – Themes and slide background; Transitions – Effects when moving from one slide to the next; Animations – Effects on objects within a slide; Slide Show – Rehearse timings and set up the show."},

  {"type":"pair","topic":"Animations & Transitions","q":"Choose the INCORRECTLY matched pair:","o":["Entrance – Object appears","Exit – Object leaves the slide","Motion Path – Moves an object along a path","Emphasis – Removes an object from the slide"],"a":3,"e":"Emphasis draws attention to an object; Exit removes it."},

  {"type":"pair","topic":"Slide Show","q":"Choose the correctly matched pair:","o":["Delete Slide – Slide is hidden but kept","Hide Slide – Slide is skipped in the show","Duplicate Slide – Removes the slide","Slide Master – Ends the show"],"a":1,"e":"Hide Slide skips the slide during the show without deleting it."},

  {"type":"misc","topic":"Animations & Transitions","q":"Arrange these animation types in the order in which they normally occur for an object on a slide:\nA. Exit effect\nB. Entrance effect\nC. Emphasis effect","o":["B, A, C","C, B, A","B, C, A","A, B, C"],"a":2,"e":"An object first enters, may then be emphasised while on the slide, and finally exits."},

  {"type":"match","topic":"Animations & Transitions","q":"Match the animation start option (List I) with its meaning (List II):","l":["On Click","With Previous","After Previous","Delay"],"r":["Starts together with the previous animation","Waits for a set time before starting","Starts when the mouse is clicked","Starts when the previous animation finishes"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2","A-3, B-1, C-4, D-2"],"a":3,"e":"Animation timing: On Click – Starts when the mouse is clicked; With Previous – Starts together with the previous animation; After Previous – Starts when the previous animation finishes; Delay – Waits for a set time before starting."},

  {"type":"stmt","topic":"Animations & Transitions","q":"Consider the following statements:\n1. Entrance effects bring objects onto the slide.\n2. Exit effects remove objects from the slide.\n3. Emphasis effects change an object already on the slide.\n4. Motion path effects change the slide background.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"Motion paths move an object along a path. Statement 4 is wrong."},

  {"type":"stmt","topic":"Shortcut Keys","q":"Consider the following statements:\n1. Ctrl + M inserts a new slide.\n2. F5 starts the show from the beginning.\n3. Shift + F5 starts the show from the beginning.\n4. Esc ends the slide show.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"Shift + F5 starts the show from the current slide. Only statement 3 is not correct."},

  {"type":"stmt","topic":"Slide Show","q":"Consider the following statements about hidden slides:\n1. A hidden slide stays in the file but is not shown during the slide show.\n2. The Hide Slide command is in the Slide Show tab.\n3. A hidden slide is deleted from the file.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1 and 2 only","1, 2 and 3"],"a":2,"e":"A hidden slide is not deleted; it is only skipped in the show. Statement 3 is wrong."},

  {"type":"real","topic":"Slides & Layouts","q":"A school logo must appear in the same place on every slide. Where should it be inserted?","o":["Transitions","Slide Sorter","Slide Master","Animations"],"a":2,"e":"Objects placed on the Slide Master appear on all slides that use it."},

  {"type":"stmt","topic":"Views","q":"Consider the following statements about Slide Sorter view:\n1. It shows thumbnails of all the slides.\n2. The text of a slide can be edited directly in this view.\n3. Slides can be rearranged by dragging them.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"Slide Sorter is used to arrange slides, not to edit their text. Statement 2 is wrong."},

  {"type":"stmt","topic":"Slides & Layouts","q":"Consider the following statements:\n1. Slide Master holds the layouts, fonts and background of the presentation.\n2. Handout Master controls the look of printed handouts.\n3. Notes Master controls how the slides look on screen.\n4. A change in Slide Master affects only the selected slide.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Notes Master controls notes pages, and Slide Master changes apply to all matching slides. Statements 3 and 4 are not correct."},

  {"type":"stmt","topic":"Slide Show","q":"Consider the following statements about a running slide show:\n1. N, Enter or Space moves to the next slide.\n2. P or Backspace moves to the previous slide.\n3. B shows a black screen.\n4. W shows a white screen.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."}
  ]
};
