# NOTE: For this to work, you'll need to have Python 3, and have python.exe or its folder
# in your "PATH" environment variable.  If not, this script probably won't work.  To avoid
# this, you could package the app to include a copy of Python and all its dependencies, or
# use something like py2exe or cx_freeze to compile the script.  Bhat's a bit outside the
# scope of this project, so for now I'll assume you have Python 3.x installed on your PC.

import sys
try:
    if len(sys.argv) == 2 and not sys.argv[1] == "":
        print("Hey there, " + sys.argv[1] + "!  Python is one of my favorite scripting languages, but can sometimes be a pain on Windows.")
    else:
        print("Yo whazzup?!  We're gettin' all Pythonic up in here!")
except:
    print("If you are seeing this error, odds are you have the wrong version of Python installed.  Sorry about that.")