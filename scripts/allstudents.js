

const API = 'https://crmgulistonacademy.herokuapp.com/api'
// http://localhost:4500/api

async function renderStudents() {
    let response = await fetch(API + '/students')
    let students = await response.json()
    students.map((el,i)=> {
        tbody.innerHTML += `
        <tr>
            <td>${++i}</td>
            <td>${el.name}</td>
            <td>${el.surname}</td>
            <td>${el.contact}</td>
            <td>${el.address}</td>
            <td>${el.course}</td>
            <td>
                <input type="checkbox">
            </td>
            <td>
                <a href="#" class="text-decoration-none text-success">
                    <i class="fa-solid fa-pen"></i>
                </a>
                <a onclick="deleteStudent(event,${el.id})" href="#" class="text-decoration-none text-danger">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </td>
        </tr> 
        `
    })
}

btn.innerHTML += `
    <button onclick="rendrStudent()" class="accor-btn qw active">
    O'quvchilar(Jami)
    </button>
`

async function rendrStudent() {
    groupName.innerHTML = ''
    thead.innerHTML = ""
    let response1 = await fetch(API + '/students')
    let students1 = await response1.json()
    thead.innerHTML += `
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Ismi</th>
            <th scope="col">Familiya</th>
            <th scope="col">Telefon</th>
            <th scope="col">Manzil</th>
            <th scope="col">Kurs</th>
            <th scope="col">To'lov</th>
            <th scope="col">Amallar</th>
        </tr>
    </thead>`
    students1.map((el,i)=> {
        thead.innerHTML += `
        <tbody>
        <tr>
            <td>${++i}</td>
            <td>${el.name}</td>
            <td>${el.surname}</td>
            <td>${el.contact}</td>
            <td>${el.address}</td>
            <td>${el.course}</td>
            <td>
                <input type="checkbox">
            </td>
            <td>
                <a href="#" class="text-decoration-none text-success">
                    <i class="fa-solid fa-pen"></i>
                </a>
                <a onclick="deleteStudent(event,${el.id})" href="#" class="text-decoration-none text-danger">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </td>
        </tr> 
        </tbody>`
    })
}

async function deleteStudent(event,id) {
    const res =  await fetch(API + `/students/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-Type": "application/json"
        }
    })  
    event.target.parentNode.parentNode.parentNode.remove()
}

renderStudents()