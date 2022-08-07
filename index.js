function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42
     } else if ( blockNumber < 42 ) {
        return 42 - blockNumber
    }
}
function distanceFromHqInFeet(blockNumber) {
   return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
  if(start > destination) {
    return (start - destination) * 264
  }
  else {
    return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start, destination) * 264 <= 400) {
        return 0
    }
    else if (400 < distanceTravelledInFeet((start, destination) * 264) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
}