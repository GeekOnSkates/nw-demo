// This script just defines all the UI event handlers.
// Nothing super-special here, apart from maybe an example of the callbacks.

function RunMyProgram(exe)
{
    // Declare variables
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    // Clear out any text that might be in the output DIV
    output.innerHTML = "";

    // And call my "run" function
    run("source/bin/" + exe + ".exe", [input.value], function(txt){
        output.innerHTML = txt;
    });
}

// For running VBScript, the syntax is a bit different, because we're passing a script path to another EXE.
// It does assume you have Python 3 installed, so if you don't you'll probably see an error in the JavaScript console.
function py()
{
    run("cscript.exe", ["/nologo", "source/vbs/vbs.vbs", input.value], function(txt){
        output.innerHTML = txt;
    });
}

// Python, like VBScript (and also AutoHotKey if not compiling), calls an interpreter EXE and passing it the path to our script.
function py()
{
    run("python.exe", ["source/py/py.py", input.value], function(txt){
        output.innerHTML = txt;
    });
}