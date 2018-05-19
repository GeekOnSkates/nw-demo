; Get the command-line parameter, should be the user's name
text = %1%

; And show a message box based on whether or not a name was passed
if (text == "")
    FileAppend, Yo whazzup?!  AutoHotKey rocks!, *
else
    FileAppend, Hey %text%!  This is an AutoHotKey script compiled to an EXE.  AutoHotKey is a pretty awesome little scripting language`, so I just had to include it., *