 Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'">'
    })
}

console.log("ml5 version", ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ylF8LNPCV/model.json", modelLoaded)

function modelLoaded(){
    console.log("The Model Has Been Loaded")
}