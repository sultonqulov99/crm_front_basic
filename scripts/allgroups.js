const API = 'https://crmgulistonacademy.herokuapp.com/api'
async function renderGroups() {
    let response = await fetch(API + '/groups')
    let groups = await response.json()
    groups.map((el,i)=> {
        tbody.innerHTML += `
        <tr>
            <td>${++i}</td>
            <td>${el.group_name}</td>
            <td>${el.teacher_name}</td>
            <td>${el.day}</td>
            <td>${el.time}</td>
            <td>
                <a href="#" class="text-decoration-none text-success">
                    <i class="fa-solid fa-pen"></i>
                </a>
                <a onclick="deleteGroup(event, ${el.id})" href="#" class="text-decoration-none text-danger">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </td>
        </tr>
        `
    })
}

async function deleteGroup(event,id) {
    const res =  await fetch(API + `/groups/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-Type": "application/json"
        }
    })  
    event.target.parentNode.parentNode.parentNode.remove()
}

renderGroups()