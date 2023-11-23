
function promptForFlavors() {
    const userInputString = prompt("type a flavor of ice cream to see how many were purchased today!", "strawberry,strawberry,vanilla,vanilla,coffee");
    const stringArray = userInputString.split(",");
    return stringArray
}

const froyoObj = {
  vanilla:0, 
  strawberry:0,
  coffee:0
}

function displayFlavorQty(flavors) {
  for(let i=0; i<flavors.length; i++)

  { froyoObj[flavors[i]] = froyoObj[flavors[i]] + 1
  }
  console.log (froyoObj)
}

const userFlavorInput = promptForFlavors();

displayFlavorQty(userFlavorInput);

  