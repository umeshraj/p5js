var prob = 50;

function setup(){

}

function draw(){
    var r = floor(random(prob));

    if (r == 1){
        console.log("Won lottery!!!!!");
    }else{
        console.log("Lost lottery");
    }
}