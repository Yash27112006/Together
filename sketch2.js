var email;

function preload(){
    backImg = loadImage("design_files/images/backImg2.PNG");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    email = new Mail();
    email.sendMail();
}
function draw(){
    background(backImg);

}