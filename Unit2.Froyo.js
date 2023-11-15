
function promptForFlavors() {
    return prompt("type strawberry, vanilla, or coffee to see how many were purchased today!");
}
const froyo = [
    {
      flavor: "strawberry",
      qty: "1"
    },
    {
      flavor: "vanilla",
      qty: "3"
    },
    {
      flavor: "coffee",
      qty: "2"
    }
  ]

function displayFlavorQty(flavor) {
    const foundFlavor = froyo.find(item => item.flavor.toLowerCase() === flavor.toLowerCase());

    if (foundFlavor) {
        alert(`Today, ${foundFlavor.qty} ${foundFlavor.flavor} froyo(s) were purchased.`);
    } else {
        alert(`No information available for ${flavor} flavor.`);
    }
}


const userFlavorInput = promptForFlavors();


displayFlavorQty(userFlavorInput);

  