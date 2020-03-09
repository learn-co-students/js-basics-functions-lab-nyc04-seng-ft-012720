function distanceFromHqInBlocks (num) {
    return Math.abs(42 - num)
  }
   
  function distanceFromHqInFeet (num) {
    return distanceFromHqInBlocks(num) * 264
  }

  function distanceTravelledInFeet (block1, block2) {
    return Math.abs(block1 - block2) * 264
  }

  function calculatesFarePrice (block1, block2) {
      let distance = distanceTravelledInFeet(block1, block2)
      switch (true) {
        case (distance <= 400):
            return 0
            break
        case (distance <= 2000):
            return (distance - 400) * 0.02
            break
        case (distance <= 2500):
            return 25
            break
        case (distance > 2500):
            return 'cannot travel that far'
            break

      }
  }