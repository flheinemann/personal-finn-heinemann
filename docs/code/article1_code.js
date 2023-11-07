function myLoop(value, test, update, body){
    for(let i = value; test(i); i=update(i)) {
        body(i);
    }

}

myLoop(3, n => n > 0, n => n - 1, console.log);

// Try it with my own function in addition to the example from the textbook

function timesTen(x){
   console.log (x*10);
}

myLoop(0, n => n <= 5, n => n+1, timesTen);