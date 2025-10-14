const BASE_url = 'http://localhost:8000' //ต้องตรงกับ server

window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    //โหลดข้อมูล user ทั้งหมดมาแสดง
    const response = await axios.get(`${BASE_url}/users`)

    console.log('response', response.data)

    //นำ user ที่โหลดมาใส่กลับไปที่ html
    const userDOM = document.getElementById('user')
    let htmlData = '<div>'
    for (let index = 0; index < response.data.length; index++) {
        let user = response.data[index]
        htmlData += `<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <a href='index.html?id=${user.id}'><button>Edit</button></a>
        <button class='delete' data-id='${user.id}'>Delete</button>
        </div>`

    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //มีสิ่งนี้แล้ว button class='delete' 
    const deleteDom = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDom.length; i++) {
        deleteDom[i].addEventListener('click', async (event) => {
            // ดึง id  ออกมา
            const id = event.target.dataset.id
             try {
                await axios.delete(`${BASE_url}/users/${id}`)
                loadData()//โหลดข้อมูลใหม่ recursive function เรียกใช้ function ตัวเอง
            } catch (error) {
                console.log('error', error)
            }
        })
    }
}