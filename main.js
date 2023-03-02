leftWristX=0;
rightWristx=0;
difference=0;
nosex=0;
nosey=0;
function setup() {
video=createCapture(VIDEO);
video.size(500,500);
video.position(100,150);
canvas=createCanvas(500,500);
canvas.position(650,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes)
}
function modelLoaded() {
    console.log("Posenet initialized")
}
function draw() {
    background("#D3D3D3");
    textSize(difference);
    fill("#A020F0");
    text("Vidyut is the best",nosex,nosey);
    document.getElementById("span1").innerHTML="Text size = "+difference+"px";
}
function gotposes(results) {
    if(results.length>0) {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        difference=floor(leftWristX-rightWristX);
    }
}