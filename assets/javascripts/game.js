(function(){

  // Buttons we need from the DOM
  let resetButton = document.querySelector("#reset");
  let teamoneShootButton = document.querySelector("#teamone-shoot");
  let teamtwoShootButton = document.querySelector("#teamtwo-shoot");

  let shotSound = new Audio("assets/images/Hockey_Shot.wav");
  let cheeringSound = new Audio("assets/images/Cheering.wav");
  let booSound = new Audio("assets/images/Boo.wav");

  //  Counters we need from the DOM
  let resetCounter = document.querySelector("#num-resets");
  let teamoneShotCounter = document.querySelector("#teamone-numshots");
  let teamoneHitCounter = document.querySelector("#teamone-numhits");
  let teamtwoShotCounter = document.querySelector("#teamtwo-numshots");
  let teamtwoHitCounter = document.querySelector("#teamtwo-numhits");


  // When reset button is clicked we need to increment the reset counter and zero out all other Counters
  resetButton.addEventListener("click", function(){

    // Increment reset counter
    resetCounter.innerHTML = parseInt(resetCounter.innerHTML) + 1;

    // Set all other counters to zero
    teamoneShotCounter.innerHTML = 0;
    teamoneHitCounter.innerHTML = 0;
    teamtwoShotCounter.innerHTML = 0;
    teamtwoHitCounter.innerHTML = 0;

  })

  // When team One shoot button is clicked increment shot counter and maybe the hit counter
  teamoneShootButton.addEventListener("click", function(){

    shotSound.play();
    // Increment shot counter
    teamoneShotCounter.innerHTML = parseInt(teamoneShotCounter.innerHTML) + 1;

    // Timer delay of 1.2 seconds between shot and crowd reaction
    setTimeout(function(){
      // Use Math.random to generate shot success value between 1 and 100
      let shotSuccess = Math.random() * 100;
      console.log(shotSuccess);

      // Increment hit counter if shotSuccess is greater than 50
      if(shotSuccess >= 60) {
        cheeringSound.play();
        teamoneHitCounter.innerHTML = parseInt(teamoneHitCounter.innerHTML) + 1;
      } else {
        booSound.play();
      }
    }, 1200);

  })

  // When team Two shoot button is clicked increment shot counter and maybe the hit counter
  teamtwoShootButton.addEventListener("click", function(){

    shotSound.play();
    // Increment shot counter
    teamtwoShotCounter.innerHTML = parseInt(teamtwoShotCounter.innerHTML) + 1;

    // Timer delay of 1.2 seconds between shot and crowd reaction
    setTimeout(function(){
      // Use Math.random to generate shot success value between 1 and 100
      let shotSuccess = Math.random() * 100;
      console.log(shotSuccess);

      // Increment hit counter if shotSuccess is greater than 50
      if(shotSuccess >= 60) {
        cheeringSound.play();
        teamtwoHitCounter.innerHTML = parseInt(teamtwoHitCounter.innerHTML) + 1;
      } else {
        booSound.play();
      }
    }, 1200);

  })

})()
