/**
 * Runs a program
 * @param {string} exe - The program's name/path
 * @param {array} args - Command-line arguments to pass the program
 * @param {function} callback - The code to run when it finishes (should take 1 parameter)
 * @remarks This is really just for convenience; it abstracts away some of the Node stuff
 * and saves a bit of code-rewriting (error handling) but as you can see the code is not
 * all that complicated.
 */
function run(exe, args, callback)
{
    var cp = require('child_process');
    cp.execFile(exe, args, function(error, stdout, stderr){
        if (error) console.log(error);
        if (stderr) console.log(stderr);
        if (callback) callback(stdout);
    });
}