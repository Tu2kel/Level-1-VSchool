//#region
// var spinach = document.createElement('li')
// spinach.textContent = 'Romaine Lettuce'
// list.append(spinach)

// var spinach = document.createElement('li')
// spinach.textContent = 'Radicchio Lettuce'
// list.append(spinach)

// var spinach = document.createElement('li')
// spinach.textContent = 'Green Leaf Lettuce'
// list.append(spinach)

// var spinach = document.createElement('li')
// spinach.textContent = 'Kale'
// list.append(spinach)

// var spinach = document.createElement('li')
// spinach.textContent = 'Spinach'
// list.append(spinach)

// var redCab = document.createElement('li')
// redCab.textContent = 'Red Cabbage'
// list.append(redCab)
//#endregion

/*EVENT LISTENER-----------------------------------------------------*/

//INPUT VALUE


// ADD ITEM

const addItem = document['addItem'] 

 function addItemClicked (e) {
    e.preventDefault()
    const shoplist = addItem.title.value
    addItem.title.value = ''

    const li = document.createElement('li')
    li.textContent = shoplist
    li.id = 'li-four'
    list.append(li)

    const edit = document.createElement('button')
    edit.textContent = ' edit'
    edit.id = 'edit-four'
    li.append(edit)

    const x = document.createElement('button')
    x.textContent = ' X'
    x.id = 'x-four'
    li.append(x)

        alert("this shit worked😲")

 }
    addItem.addEventListener('submit', addItemClicked)


        
// //EDIT 
    
// const editThis = document.getElementById('edit-one')

// function editThisClicked () {

//     alert("this sh😲t worked too")

// }
//     editThis.addEventListener('click', editThisClicked)



//DELETE
const deleteThis = document.getElementById('x-one')

function deleteClicked () {

    alert("😲 this shit worked ")

}
    deleteThis.addEventListener('click', deleteClicked)

 