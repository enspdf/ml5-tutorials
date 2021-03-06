let mobilenet;
let puffin;

function modelReady() {
    console.log("Model is ready");
}

function imageReady() {
    image(puffin, 0, 0, width, height);
    mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].className;
        let prob = results[0].probability;
        fill(0);
        textSize(40);
        createP(label);
        createP(prob);
    }
}

function setup() {
    createCanvas(640, 480);
    puffin = createImg("images/puffin.jpg", imageReady);
    puffin.hide();
    background(0);
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}