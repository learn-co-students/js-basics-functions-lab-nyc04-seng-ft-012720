// Code your solution in this file!

function distanceFromHqInBlocks(currentblock){
    if (currentblock > 42){
        return currentblock - 42;
    } else {
        return 42 - currentblock;
    }
}

function distanceFromHqInFeet (currentblock) {
    return distanceFromHqInBlocks(currentblock) * 264;
}

function distanceTravelledInFeet(block1,block2){
    if (block1 > block2){
       return (block1 - block2) * 264;
    }else{
        return (block2 - block1) * 264;
    }
}

function calculatesFarePrice(start,destination){
    const length = distanceTravelledInFeet(start,destination);

    if (length <= 400){
        return 0;
    }else if(length > 400 && length <= 2000){
        return (length - 400) * .02;
    }else if(length > 2000 && length <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }


}