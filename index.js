const returnFirstTwoDrivers = (drivers) => {
 return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) =>{
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
 return function(fare) {
     return fare * x
}
}     
const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driverFunction) => {
      return driverFunction(drivers);
}
