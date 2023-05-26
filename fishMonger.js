//import fishingBoat inventory function
const { displayBoatInventory } = require("./fishingBoat.js")



const mongerInventory = (boatInventory) => {

    let mongerInventory = []

    for (const boat of boatInventory) {
        if (boat.price <= 7.50 && boat.amount >= 10) {
            boat.amount = 10
            mongerInventory.push(boat)
        }
    }

    return mongerInventory
}
//final monger inventory for the restaurant
const restInventory = (mongerInventory(displayBoatInventory))









//export function
module.exports = { restInventory }
