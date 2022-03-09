function startclassification()
{
navigator.mediaDevices.getUserMedia({
audio:true
});
classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jsUbZXHIv/model.json', modelReady); 
}

function modelReady() 
{
classifier.classify(gotResults);
}

function gotResults(error, results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);

randomnumber_r = Math.floor(Math.random() * 255) + 1;
randomnumber_g = Math.floor(Math.random() * 255) + 1;
randomnumber_b = Math.floor(Math.random() * 255) + 1;
document.getElementById("sound_result").innerHTML = 'I can hear:' + results[0].label;
document.getElementById('result_confidence').innerHTML = 'Accuracy:' + (results[0].confidence * 100).toFixed(2) + "%"; 
document.getElementById("sound_result").style.color="rgb(" +randomnumber_r+ "," + randomnumber_g + "," +  randomnumber_b +")";
document.getElementById("result_confidence").style.color="rgb(" +randomnumber_r+ "," + randomnumber_g + "," +  randomnumber_b +")";

img = document.getElementById('alien_1');
img1 = document.getElementById('alien_2');
img2 = document.getElementById('alien_3');
img3 = document.getElementById('alien_4');

if(results[0].label == "Clap")
{
img.src = 'alien-01.gif';
img1.src = 'alien-02.png';
img2.src = 'alien-03.png';
img3.src = 'alien-04.png';
}
else if(results[0].label == "Water Bottle")
{
    img1.src = 'alien-02.gif';
    img.src = 'alien-01.png';
    img2.src = 'alien-03.png';
    img3.src = 'alien-04.png';

}
else if(results[0].label == "Background Noise")
{
    img2.src = 'alien-03.gif';
    img.src = 'alien-01.png';
    img1.src = 'alien-02.png';
    img3.src = 'alien-04.png';
}
else
{
    img.src = 'alien-01.png';
    img1.src = 'alien-02.png';
    img2.src = 'alien-03.png';
    img3.src = 'alien-04.png';

}
}

}
