var prob = 500;
var button;
var started = false;
var total = 0;
var entrants;

function setup(){
    noCanvas();
    button = select("#start");
    button.mousePressed(startLottery);

    entrants = select("#entrants");
    entrants.input(updateProbability); 
    noLoop();
}

function updateProbability(){
    prob = entrants.html()/10;
    select("#chance").html(prob);

    var notwinning = (prob-1)/prob;
    var num =  log(0.01)/log(notwinning);
    select("#99percent").html('~' + floor(num));
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