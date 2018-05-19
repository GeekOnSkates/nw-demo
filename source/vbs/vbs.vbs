' This does pretty much the same thing as all the other programs/scripts.
Set args = Wscript.Arguments
If args.Length = 1 and Len(args.Item(0)) > 0 Then
    Wscript.Echo "Hey " & args.Item(0) & "!  This script was written in VBScript."
Else
    Wscript.Echo "Yo, whazzup?  VBScript is ancient, but still usable."
End If