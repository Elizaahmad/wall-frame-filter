function preload(){
ClownFilter=loadImage('https://i.postimg.cc/brBzJjdD/thoranam-pictures-46296.png');
} 

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}

function draw(){
image(video,0,0,300,300);
image(ClownFilter,noseX,noseY,200,250);

}

function modelloaded(){
    console.log('modelloaded');
}
noseX=0;
noseY=0;
function gotposes(results){
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x- 80;
        noseY=results[0].pose.nose.y- 120;
    }
}
function Take_Snapshot(){
    save('Selfie.png');
}