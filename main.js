Status= "";

function preload(){
    loadImage('image1.jpeg');
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();

    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
    objectDetector.detect(img. gotResult);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}