const btn = document.querySelector('#btn')
const select = document.querySelector('select')
const API = 'https://crmgulistonacademy.herokuapp.com/api'

async function renderTeachers() {
    let response = await fetch(API + '/courses')
    let courses = await response.json()
    courses.map((el,i)=> {
        option.innerHTML += `
           <option value=${el.teacher}>${el.teacher}</option>
        `
    })
}
renderTeachers()

async function renderCourse() {
    let response = await fetch(API + '/courses')
    let courses = await response.json()
    courses.map((el,i)=> {
        option1.innerHTML += `
           <option value=${el.group_name}>${el.group_name}</option>
        `
    })
}
renderCourse()

btn.onclick = async (e) => {
    e.preventDefault()
    let fnamee = fname.value
    let teacherSelect = option.value
    let CourseSelect = option1.value
    let day = option2.value
    let time1 = time.value

    const res =  await fetch(API + "/groups", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({group_name:fnamee,teacher_name:teacherSelect,course:CourseSelect, day, time:time1})
    })
    fname.value = ""
    option.value = ""
    option1.value = ""
    option2.value = ""
    time.value = ""

    if(res.ok) {
        alert("Ma'lumot saqlandi!")
    }
}


