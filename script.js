// JavaScript for alarm functionality
function setAlarm() {
  var alarmInput = document.getElementById("alarmTime");
  var alarmTime = alarmInput.value;
  
  var currentDateTime = new Date();
  var alarmDateTime = new Date(alarmTime);
  
  var timeDiff = alarmDateTime - currentDateTime;
  if (timeDiff < 0) {
    alert("Invalid time! Please choose a time in the future.");
    return;
  }
  
  setTimeout(function() {
    alert("Alarm! Wake up!");
  }, timeDiff);
}