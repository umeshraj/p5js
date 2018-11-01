var prob = 500;
var button;
var started = false;
var total = 0;

function setup(){
    noCanvas();
    button = select("#start");
    button.mousePressed(startLottery);
    noLoop();
}

function startLottery(){
    started = true;
    total = 0;
    loop();
}

function draw(){
    var results = select("#results");    
    if (started){
        var r = floor(random(prob));

        if (r == 1){
            results.html("You won!!");
            noLoop();
            // console.log("Won lottery!!!!!");
        }else{
            // console.log("Lost lottery");
            results.html("Try again");
        } 
        total++;
        select("#total").html(total);
    }
}