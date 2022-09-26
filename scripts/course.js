const btn = document.querySelector('#btn')
const select = document.querySelector('select')
const API = 'https://crmgulistonacademy.herokuapp.com/api'

async function renderStudents() {
    let response = await fetch(API + '/teachers')
    let teachers = await response.json()
    teachers.map((el,i)=> {
        option.innerHTML += `
           <option value=${el.name}>${el.name} ${el.surname}</option>
        `
    })
}
renderStudents()

async function renderCourse() {
    let response = await fetch(API + '/courses')
    let courses = await response.json()
    courses.map((el,i)=> {
        tbody.innerHTML += `
        <tr>
            <td>${++i}</td>
            <td>${el.group_name}</td>
            <td>${el.teacher}</td>
            <td>
                <a href="#" class="text-decoration-none text-success">
                    <i class="fa-solid fa-pen"></i>
                </a>
                <a onclick="deleteCourse(event, ${el.id})" href="#" class="text-decoration-none text-danger">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </td>
        </tr>
        `
    })
}
renderCourse()

btn.onclick = async (e) => {
    e.preventDefault()
    const name = fname.value
    let se = select.value

    const res =  await fetch(API + "/courses", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({group_name:name,teacher:se})
    })
    fname.value = ""
    select.value = ""

    if(res.ok) {
        alert("Ma'lumot saqlandi!")
    }
}

async function deleteCourse(event,id) {
    const res =  await fetch(API + `/courses/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-Type": "application/json"
        }
    })  
    event.target.parentNode.parentNode.parentNode.remove()
}
