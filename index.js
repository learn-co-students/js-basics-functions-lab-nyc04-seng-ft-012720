// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber < 42){
        return 42 - blockNumber;
    } else {
        return blockNumber - 42;
    }
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(pointA, pointB) {
    if (pointA < pointB) {
        return (pointB - pointA) * 264;
    } else {
        return (pointA - pointB) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    } else if (400 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (2000 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}