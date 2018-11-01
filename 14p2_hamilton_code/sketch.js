var prob = 50;
var button;
var started = false;

function setup(){
    noCanvas();
    button = select("#start");
    button.mousePressed(startLottery);
}

function startLottery(){
    started = true;
}

function draw(){
    if (started){
        var r = floor(random(prob));

        if (r == 1){
            console.log("Won lottery!!!!!");
        }else{
            console.log("Lost lottery");
        }    
    }
}