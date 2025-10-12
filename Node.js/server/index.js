// --------------------------------------------------------------
// เรียกใช้ library express ด้วยคำสั่ง require
const express = require('express')

// ประกาศเริ่มต้นการใช้ express
const app = express()
const port = 8000

// สร้าง API path '/' และคืนคำ Hello world ออกมาผ่าน API
//respond มีไว้ส่งข้อมูลกลับไปยัง clientที่ร้องขอผ่านทาง APIที่ชื่อ path '/'
// '/test' คือ path หลักของ server เช่น http://localhost:8000/test
// req = request คือข้อมูลที่ client ส่งมา
// res = response คือข้อมูลที่ server ส่งกลับไปยัง client
//send() คือ method ที่ใช้ส่งข้อมูลกลับไปยัง client เป็นข้อความธรรมดา
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// สร้าง API path '/test' และคืนคำเป็น JSON object ออกมาผ่าน API
//json() คือ method ที่ใช้ส่งข้อมูลกลับไปยัง client เป็น JSON object
app.get('/test', (req, res) => {
  let user = {
    firstname: 'ชื่อจริง',
    lastname: 'นามสกุล',
    age: 20
  };
  res.json(user)
})

// ประกาศ​gxbf http server ที่ port 8000 (ตามตัวแปร port)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// --------------------------------------------------------------
// ตัวอย่างการรับข้อมูลแบบ POST
// เพิ่มส่วนนี้เพื่อรองรับการรับข้อมูลแบบ POST เพื่อให้ดึงข้อมูลจาก body ได้
const bodyParser = require('body-parser')

//app.use(bodyParser.text()) use() คือ method ที่ใช้เพิ่ม middleware ให้กับ express
app.use(bodyParser.json())//รองรับการรับข้อมูลแบบ json
//app2.use(bodyParser.urlencoded({ extended: true }))รองรับการรับข้อมูลแบบ form-urlencoded
//middleware คือ function ที่ทำงานระหว่าง request กับ response

// เราสร้างตัวแปร users ขึ้นมาเป็น Array จำลองการเก็บข้อมูลใน Server (ซึ่งของจริงจะเป็น database)
let user = []

app.get('/user', (req, res) => {
  res.json(user)
})

//req.body คือข้อมูลที่ client ส่งมาในรูปแบบ json
//res.status(201) คือการส่งสถานะกลับไปยัง client ว่าสร้างข้อมูลสำเร็จ (201 Created)

app.post('/user', (req, res) => {
  const data = req.body

  const newUser = {
    firstname: data.firstname,
    lastname: data.lastname,
    age: data.age
  }

  //
  users.push(newUser)

  // Server ตอบกลับมาว่าเพิ่มแล้วเรียบร้อย
  res.status(201).json({ message: 'User created successfully', user: newUser })
})

app.listen(8000, () => {
  console.log('Server started on port 8000');
})

// --------------------------------------------------------------
// ตัวอย่างการรับข้อมูลแบบ PUT แก้ไขข้อมูล
// ใช้สำหรับแก้ไข


const bodyparser = require('body-parser')
app.use(bodyparser.json())


//path = GET /users
app.get('/users', (req, res) => {
  res.json(users)
})

// สำหรับเก็บ user
let users = []
let counter = 1 //เอาไว้นับ id เพื่อจิ้มลบหรือแก้ไข

// path  = POST /user
app.post('/user', (req, res) =>{
  let user = req.body

  // นับ id 
  user.id = counter 
  counter += 1
  
  //เอาข้อมูลไปเก็บใน array
  users.push(user)
  res.json({
    message: 'add ok',
    user: user
  })

  //output terminal
  res.send(req.body)
})

// path = PUT /user/:id (:id = parameter)
app.put('/user/:id', (req, res) => {
  let id = req.params.id
  let updateUser = req.body

  //หา user จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id)
  //res.send('index: ' + selectedIndex + '') //+ '' เพื่อให้ selectedIndex กลายเป็น string

  //เหลือบรรทัดเดียวได้แบบข้างบน
  /*let selectedIndex = users.findIndex(user => {
    if (user.id == id) {
      return true
    } else {
      return false
    }
  })*/

  //update ข้อมูล user (null || 'ค่าที่ update')
  users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname 
  users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname

  //ส่งข้อมูลที่ update เสร็จแล้วกลับไป
  res.json({
    message: 'update user complete!',
    data: {
      user: updateUser,
      indexUpdate: selectedIndex
    }
  }) 
})