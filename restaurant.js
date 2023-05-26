//We need to display/see the new menu option for the restaurant ( the purchases made by the monger that he will sell to the restaurant)
const { restInventory } = require("./fishMonger.js")

//declare new function
//parameter will be the MAX PRICE that CHEF will pay for individual fish
const fishMenu = (mongerInventory, dailyPriceLimit) => {
    let fishMenu = []
    for (let food of mongerInventory) {
        //if statement  if the price is <= to the parameter, they will buy half of the inventory for EACH fish
        if (food.price <= dailyPriceLimit) {
            fishMenu.push(food)
        }
        food.amount *= .5

    }
    return fishMenu
}

const updatedFishMenu = (fishMenu(restInventory, 7.49))
// console.log(fishMenu(restInventory, 5))

const finalMenu = (fishMenu) => {
    let message = ""
    const h1 = "<h1>fishMenu</h1>"
    const beginArticle = '<article class=/"menu/">'
    const endArticle = "</article>"
        let fishNames = []

    for (const menu of fishMenu) {
        fishNames.push(menu.species)
    }

    for (i = 0; i < fishNames.length; i++) {
        message +=
            `<h2>${fishNames[i]}</h2>\n
            < section class="menu__item" > ${fishNames[i]} Soup</ >\n
            < section class="menu__item" > ${fishNames[i]} Sandwich</ >\n
            < section class="menu__item" > Grilled ${fishNames[i]}</ >\n`
    };

    return `${h1} \n\n${beginArticle}\n${message}\n${endArticle} `
}
console.log(finalMenu(updatedFishMenu))


//final output will be restaraunt menu (converted to HTML)

// `<h1>fishMenu</h1>
// <article class="fishMenu">
//     <h2>${fishArr}</h2>
//     <section class="menu__item">Tuna Soup</section>
//     <section class="menu__item">Tuna Sandwich</section>
//     <section class="menu__item">Grilled Tuna</section>
// </article>`
// `<h1>fishMenu</h1>
// <article class="fishMenu">
//     <h2>${fishArr}</h2>
//     <section class="menu__item">Tuna Soup</section>
//     <section class="menu__item">Tuna Sandwich</section>
//     <section class="menu__item">Grilled Tuna</section>
// </article>`