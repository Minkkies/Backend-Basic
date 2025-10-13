//import library
const express = require('express')
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.json())

const port = 8000

/*
✅GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
✅POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
✅GET /users/:id สำหรับการดึง users รายคนออกมา
✅PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
✅DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
*/

// สำหรับเก็บ user
let users = []
let counter = 1

//path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', (req, res) => {
  const filterUsers = users.map(user => {
    let id=req.params.id
    return { 
      id: user.id,
      firstname: user.firstname, 
      lastname: user.lastname ,
      fullname: user.firstname + ' ' + user.lastname
    }
  })
  res.json(filterUsers)
})

// path  = POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', (req, res) =>{
  let user = req.body
  user.id = counter 

  counter += 1 
  console.log('user', user)

  //เอาข้อมูลไปเก็บใน array
  users.push(user)
  res.json({
    message: 'add ok',
    user: user //show json ที่ส่งเข้ามา
  })

  
})

// path = PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.patch('/user/:id', (req, res) => {
  let id = req.params.id //params ใช้ได้กับทุก method
  let updateUser = req.body//อ่านค่าที่จะ update

  //หา user จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id)
 
   
  //update ข้อมูล user 
  //if มีข้อมูลupdate อันไหน ค่อยupdate อันนั้น 
  if (updateUser.firstname) {
    users[selectedIndex].firstname = updateUser.firstname
  }
  
  if (updateUser.lastname) {
    users[selectedIndex].lastname = updateUser.lastname 
  }
   
  //ส่งข้อมูลที่ update เสร็จแล้วกลับไป
  res.json({
    message: 'update user complete!',
    data: {
      user: updateUser,
      indexUpdate: selectedIndex
    }
  })
})

// path = DELETE /user/:id
app.delete('/user/:id', (req, res) => {
  let id = req.params.id

  //หา user จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id)

  //ลบ
  //delete users[selectedIndex] ลบแบบนี้จะหายไปเลยกลายเป็น NUll ไม่สวย ทำแบบล่างแทน

  //(indexที่จะลบ, จำนวนที่จะลบ)
  // จะเรียง index ใหม่ให้เลย
  users.splice(selectedIndex, 1)

  res.json({
    message: 'delete complete!',
    indexDelete: selectedIndex
  })
})


//output terminal
app.listen(port, (req, res) => {
  console.log('http server run at ' + port)
})