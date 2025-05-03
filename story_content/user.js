window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var audio = document.getElementById("game-audio");
if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.remove();
}
}

window.Script2 = function()
{
  var player = GetPlayer();

if (!document.getElementById("game-audio")) {
    var audio = document.createElement("audio");
    audio.id = "game-audio";
    audio.src = "MCGG.mp3";
    audio.autoplay = true;
    audio.hidden = true;
    audio.loop = true;
    document.body.appendChild(audio);

    var playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log("Autoplay diblokir: " + error);
        });
    }
}
}

window.Script3 = function()
{
  var audio = document.getElementById("game-audio");

if (audio) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
}

};
