let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingArray){

  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  
  for(row of parkingArray){
    for(space of row){
      if(space === 1){
        state.totalSlots += 1
        state.occupiedSlots += 1
      }
      else if(space ===2){
        state.totalSlots += 1
        state.availableSlots += 1
      }
    }
  }
  return state
}

console.log(getParkingLotState(parkingState))
