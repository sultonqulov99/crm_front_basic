const btn = document.querySelector('#btn')
const API = 'https://crmgulistonacademy.herokuapp.com/api'
btn.onclick = async (e) => {
    e.preventDefault()
    const log = login.value
    const password = pass.value

    const res =  await fetch(API + "/admins", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({login:log,password})
    })
    login.value = ""
    pass.value = ""
    if(res.ok) {
        alert("Ma'lumot saqlandi!")
    }
}
