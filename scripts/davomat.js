let api = 'https://crmgulistonacademy.herokuapp.com/api'

async function renderStudents() {
    let response = await fetch(api + '/groups')
    let groups = await response.json()

    groups.map((el,i)=> {
        group.innerHTML += `
        <a onclick="renderStudent(${el.id})" class="list-group-item list-group-item-action">${el.group_name}</a>
        `
    })
}
renderStudents()

async function renderStudent(id) {
    let response = await fetch(api + `/groupStudent/${id}`)
    let groups = await response.json()
    let group = groups[0][0].group_name
    groupName.innerHTML = ''
    groupName.innerHTML += `
    <h2 class="elements-card-title text-center text-white m-0 mx-auto">${group}</h2>
    `
    let respons = await fetch(api + '/students')
    let students = await respons.json()
    let student = students.filter(el => el.group_name == group)
    thead.innerHTML = ""
    thead.innerHTML += `
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">FISH</th>
            <th scope="col">Telefon</th>
            <th scope="col">Davomat</th>
        </tr>
    </thead>`
    student.map((el,i)=> {
        thead.innerHTML += `
    <tbody>
        <tr>
            <td>${++i}</td>
            <td>${el.name} ${el.surname}</td>
            <td>${el.contact}</td>
            <td>
                <input type="checkbox" ${el.token_id == 'true' ? "checked" : ""}>
            </td>
        </tr> 
    </tbody>
        `
    })
}
