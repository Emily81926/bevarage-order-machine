
function Drink(name,ice,sugar){
  this.name = name
  this.ice = ice
  this.sugar = sugar
}

Drink.prototype.price = function(){
  switch(this.name){
    case 'Black Tea':
    case 'Oolong Tea':
    case 'Baozong Tea':
    case 'Green Tea':
      return 30
    case 'Bubble Milk Tea':
    case 'Lemon Green Tea':
      return 50
    case 'Black Tea Latte':
    case 'Matcha Latte':
      return 55
    default:
      alert('No this drink')
  }
}

const alphaPos = new AlphaPos()

const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click',function(){
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')

  if(!drinkName){
    alert('Please choose at least one item.')
    return
  }

  const drink = new Drink(drinkName,ice, sugar)
  console.log(drink)
  console.log(drink.price())

  alphaPos.addDrink(drink)
})


function AlphaPos(){ }

AlphaPos.prototype.getCheckedValue = function (inputName){
  let selectedOption = ''
  document.querySelectorAll(`[name = ${inputName}]`).forEach(function(item){
    if(item.checked){
     selectedOption = item.value
    }
  })
  return selectedOption
}


const orderLists = document.querySelector('[data-order-lists]')
AlphaPos.prototype.addDrink = function (drink){
  let orderListsCard = `
       <div class="card mb-3">
          <div class="card-body pt-3 pr-3">
            <div class="text-right">
              <span data-alpha-pos="delete-drink">x</span>
            </div>
            <h6 class="card-title mb-1">${drink.name}</h6>
            <div class="card-text">${drink.ice}</div>
            <div class="card-text">${drink.sugar}</div>
          </div>
          <div class="card-footer text-right py-2">
            <div class="card-text text-muted">
              $ <span data-drink-price>${drink.price()}</span>
            </div>
          </div>
        </div>
`
  orderLists.insertAdjacentHTML('afterbegin', orderListsCard)
}


