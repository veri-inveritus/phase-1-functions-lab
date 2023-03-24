// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42;
    } else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(point1, point2) {
    if (point1 > point2) {
        return (point1 - point2) * 264;
    } else {
        return (point2 - point1) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02;
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25;
    } else if (totalDistance > 2500) {
        return 'cannot travel that far';
    }
}