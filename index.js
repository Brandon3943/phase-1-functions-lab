// Code your solution in this file!
function distanceFromHqInBlocks(customer) {
  let hqLocation = 42;
  let streetOfCustomer = customer;
  let distance = streetOfCustomer - hqLocation;

  if (distance < 0) {
    return distance *= -1;
  }

  return distance;
};

//HQ in feet

function distanceFromHqInFeet(customer) {
  let hqLocation = 42;
  let streetOfCustomer = customer;
  let distance = streetOfCustomer - hqLocation;
  let distanceInFeet = distance * 264;

  if (distanceInFeet < 0) {
    return distanceInFeet *= -1;
  }

  return distanceInFeet;
}

// traveled in feet

function distanceTravelledInFeet(start, distance) {
  let distance1 = Math.abs(start - distance) * 264;

  return distance1;
 
}




//ride fare


function calculatesFarePrice(start, end) {
    let calculateFeet = distanceTravelledInFeet(start, end);
    console.log(calculateFeet);
    if (calculateFeet <= 400) {
      return 0;
    }  else if (calculateFeet > 400 && calculateFeet < 2000) {
      return (calculateFeet - 400) * .02;
    } else if (calculateFeet >= 2000 && calculateFeet < 2500) {
      return 25;
    } else if (calculateFeet >= 2500) {
      return 'cannot travel that far';
    }
  }

  calculatesFarePrice(42, 40);
  
