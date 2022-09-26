const API = 'https://crmgulistonacademy.herokuapp.com/api'
const btn = document.querySelector('#btn')
const select = document.querySelector('select')

async function renderGroups() {
    let response = await fetch(API + '/groups')
    let groups = await response.json()
    groups.map((el,i)=> {
        guruhOption.innerHTML += `
           <option value=${el.group_name}>${el.group_name}</option>
        `
    })
}
renderGroups()

async function renderCourse() {
    let response = await fetch(API + '/courses')
    let groups = await response.json()
    groups.map((el,i)=> {
        courseOption.innerHTML += `
           <option value=${el.group_name}>${el.group_name}</option>
        `
    })
}
renderCourse()
btn.onclick = async (e) => {
    e.preventDefault()
const name = fname.value
const l = lname.value
const te = tel.value
const addres = address.value
let courseOption1 = courseOption.value
let group_name = guruhOption.value

const res =  await fetch(API + "/students", {
    method: 'POST',
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name, surname:l, contact:te, address:addres, course:courseOption1, group_name, token_id :false})
})
fname.value = ""
lname.value = ""
tel.value = ""
address.value = ""
courseOption.value = ""
guruhOption.value = ""
if(res.ok) {
    alert("Ma'lumot saqlandi!")
}

}
