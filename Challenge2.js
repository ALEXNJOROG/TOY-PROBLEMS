function demeritPointsCalculator(speed) {
  const speedLimit = 70;
  const pointsThresholdForSuspension = 12;


  
  const demeritPoints = Math.floor((speed - speedLimit) / 5);

  
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints > pointsThresholdForSuspension) {
      console.log("License suspended");
    }
  }
}
