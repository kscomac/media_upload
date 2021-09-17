'use stritct';


$(function () {
  $("#api-tweet").click(function () {
    console.log('node media_tweet.js');

    function run(command){
      var shell = WScript.CreateObject('WScript.Shell')
      shell.Run(command, 1, true)
    }
  })

})
