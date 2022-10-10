let form = document.forms.addForm
const url = "http://localhost:3001/users"
const row1 = document.querySelector('.row1')
const row2 = document.querySelector('.row2')
const row3 = document.querySelector('.row3')

const postUser = (data) => {
    axios.post(url, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

form.onsubmit = event => {
    event.preventDefault()

    let user = {
        id: Math.random(),
        image: "https://robohash.org/aliquamcumqueiure.png",
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    postUser(user)
}


axios.get(url)
    .then(res => {
        reload(res.data)
        console.log(res.data);
    })


const createItem = (item) => {
    return (` 
     <div class="block">
        <p class="name">${item.name}</p>
        <img src="${item.image}" alt="">
        <p class="name">${item.age}</p>
     </div>
    `)
}



const reload = (arr) => {
    for(let item of arr){
        if(item.age < 25) {
            row1.innerHTML += createItem(item)
        } else if(item.age < 50){
            row2.innerHTML += createItem(item)
        } else {
            row3.innerHTML += createItem(item)
        }
    }
}

let enchponchmak = document.querySelector('.enchponchmak')
let body = document.querySelector('body')

enchponchmak.onclick = () => {
    body.style.background = 'white'
}