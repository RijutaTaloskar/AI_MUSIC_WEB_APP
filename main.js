var ruth = '';
var adele = '';

function preload()
{
    ruth = loadSound("Dandelions.mp3")
    adele = loadSound("Adele-RITD.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    Image(video, 0, 0, 600, 500);
}