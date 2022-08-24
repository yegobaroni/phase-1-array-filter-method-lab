// Code your solution here


function findMatching(drivers, string) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase() })
    }
  you
  swim
  tomorrow
  
  function fuzzyMatch(drivers, string) {
      return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
    }

  function matchName(drivers, abdul) {
      return drivers.filter(function (driver) { return driver.name === abdul })
    }