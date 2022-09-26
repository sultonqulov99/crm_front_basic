api = 'https://crmgulistonacademy.herokuapp.com/api'

async function renderStudents() {
    let response = await fetch(api + '/groups')
    let groups = await response.json()
    groups.map((el,i)=> {
        guruh.innerHTML += `
        <a onclick="renderGuruh(${el.id})" class="list-group-item list-group-item-action">${el.group_name} (${el.time})</a>
        `
    })
}
renderStudents()

async function renderGuruh(id) {
    let response = await fetch(API + `/groupStudent/${id}`)
    let groups = await response.json()
    let group = groups[0][0].group_name
    groupName.innerHTML = ''
    groupName.innerHTML +=`
    <h2 class="elements-card-title text-center text-white m-0">${group} (${groups[0][0].time}) - ${groups[0][0].teacher_name}</h2>
    `
    let respons = await fetch(API + `/students`)
    let students = await respons.json()
    let student = students.filter(el => el.group_name == group)
    thead.innerHTML = ""
    thead.innerHTML += `
    <thead>
       <tr>
          <th scope="col">#</th>
          <th scope="col">Talaba FISH</th>
          <th scope="col">To'lov</th>
          <th scope="col">Amallar</th>
       </tr>
    </thead>`
    student.map((el,i)=> {
        thead.innerHTML += `
        <tbody>
            <tr>
                <td>${++i}</td>
                <td>${el.name} ${el.surname}</td>
                <td>
                    <input disabled checked  type="checkbox">
                </td>
                <td>
                    <a href="#" class="text-decoration-none text-success">
                        <i class="fa-solid fa-pen"></i>
                    </a>
                    <a href="#" class="text-decoration-none text-danger">
                        <i class="fa-solid fa-trash-can"></i>
                    </a>
                </td>
            </tr>
        </tbody>
        `
    })
}
