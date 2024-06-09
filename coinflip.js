// Simulating a Coin Flip: Write a function flipCoin(callback) that simulates a coin flip using a callback function. The callback should be called with either "heads" or "tails" depending on the random outcome

function coins(){
    let x = Math.floor(Math.random() * 2);
    console.log(x);
if(x==5){
    console.log("head")
}
else{
    console.log("tail")
}
}

    function coin(flip,callback){

        console.log(flip);
        setTimeout(callback,1000);
    }

    coin("flip",coins);