prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models.json',modelLoaded);
function modelLoaded() {
console.log('Model loaded!');

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "La primera prediccion es " + prediction_1
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
}

//Crea tu modelo y almacénalo en una variable classifier

//Define la función modelLoaded

//Define la función check() 


//Define la función gotResult(error, results)

function modelLoaded() {
    console.log('Model loaded!');
    }
    
    function check()
    {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error, results) {
    if(error) {
      console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if(results[0].label == "emogi con cubrebocas")
        {
                document.getElementById("update_emoji1").innerHTML = "&#x1F637";
        }
        if(results[0].label == "emoji entrada denegada")
        {
                document.getElementById("update_emoji1").innerHTML = "&#x26d4";
        }
    }
    }