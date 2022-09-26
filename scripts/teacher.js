const btn = document.querySelector('#btn')
const select = document.querySelector('select')
const API = 'https://crmgulistonacademy.herokuapp.com/api'

btn.onclick = async (e) => {
    e.preventDefault()
    const name = fname.value
    const surname = lname.value
    const te = tel.value

    const res =  await fetch(API + "/teachers", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name,surname,contact:te,})
    })
    fname.value = ""
    lname.value = ""
    tel.value = ""
    if(res.ok) {
        alert("Ma'lumot saqlandi!")
    }
}
