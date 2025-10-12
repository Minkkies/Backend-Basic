## อย่างแรกที่เราต้องทำก่อนจะพยายามเรียน node.js
1. วิธี Install Node.js  [Download](https://nodejs.org/en/download) ถ้าหากคุณต้องการทดสอบว่าเราโหลดได้ถูกต้องหรือไม่ เช็คได้ที่ [Doc Mikelopster](https://docs.mikelopster.dev/c/web101/chapter-7/intro)
 - ถ้าดูคลิปพี่ไมค์หรือพยายามโหลดแล้วใช้ไม่ได้ใช้ดูตาม คลิปนี้ [Download Tutorial](https://www.youtube.com/watch?v=R2AZr9A2hsQ)
 - หรือลองเปลี่ยน Terminal จาก Powershell เป็น CMD

2. วิธี Installer MEMP [Download](https://www.mamp.info/en/downloads/) ถ้าหากคุณต้องการทดสอบว่าเราโหลดได้ถูกต้องหรือไม่ เช็คได้ที่ [Doc Mikelopster](https://docs.mikelopster.dev/c/web101/chapter-8/setup) 
- หากพยายามกด Start แล้วกดไม่ติด ไปเช็คที่ Port กด MEMP กด Preferences กด Port แล้วตั้งใช้เป็น Default หรือตามที่ต้องการ แต่!! ห้ามซ้ำกับแอปอื่นเด็ดขาด
- ถ้าเพิ่มตารางแล้วมันแจ้งเตือนขึ้นมาเยอะแสดงว่า MEMP เราใหม่มากแต่ phpMyAdmin เราเก่าไปให้ทำ การอัปเดต [Download phpMyAdmin](https://www.phpmyadmin.net/downloads/) ไปหาโฟลเดอร์เก่าใน MEMP/bin ที่ชื่อ phpMyAdmin หรือ phpMyAdmin...เวอร์ชั่น แล้วลบทิ้ง ถ้ามีไฟล์ก็Backup ไว้ เราเอาไฟล์ซิปที่โหลดมาไปแตก และเปลี่ยนชื่อเป็น phpMyAdmin แทน แล้ว restart MEMP

### ในไฟล์ MD ไม้ได้บอกไว้แต่
nodemon คือ เครื่องมือช่วยพัฒนา (developer tool) สำหรับ Node.js
มันทำหน้าที่ “รีสตาร์ทเซิร์ฟเวอร์อัตโนมัติทุกครั้งที่ไฟล์มีการแก้ไข”

💡 อธิบายง่าย ๆ

เวลาคุณเขียนโค้ด Node.js ปกติ
ต้องรันแบบนี้ทุกครั้ง:
```
node index.js 
```
ถ้าแก้โค้ดอะไรนิดหน่อย เช่น แก้ข้อความใน res.send()
ต้อง กด Ctrl+C ปิด แล้ว พิมพ์ node index.js ใหม่ทุกครั้ง 😩

แต่ถ้าใช้ nodemon 👉 มันจะคอย “เฝ้า” ไฟล์ให้คุณ
ทุกครั้งที่มีการแก้ไข .js มันจะ รีสตาร์ทอัตโนมัติ

ถ้าใช้คำสั่งบนไม่ใช่ให้ใช้อันนี้แทน เพราะว่ามันจะทำการเฝ้าไฟล์ในเครื่องโดยเฉพาะเมื่อใช้คำสั่งนี้ แต่ถ้า เมื่อไหร่มีการ เพิ่ม Library ให้ป้อนคำสั่งใหม่ทุกครั้งไม่งั้น nodemon จะมองไม่เห็น
```
npx nodemon index.js
```

# วิธีรัน File ใน Node.js Floder
1. เปิด MAMP หรือ  ที่นี่
2. จะเด้งเข้าหน้า http://localhost:8888/MAMP/
3. เข้า URL http://localhost:8888/phpMyAdmin5/
4. cd server แล้ว npx nodemon index.js
5. ทดลองยิง GET ที่ postman ถ้าได้ข้อมูลใน Database คือถูกต้อง
6. เปิดหน้า index.html จะเจอฟรอมที่ทำเอาไว้

สามารถดูเพิ่มเติมได้ที่ [mikelopster](https://www.youtube.com/watch?v=LSzYxSiZxNs&list=PLwZ0y9k-cYXCSSU3ujBqBWMbtZcW2OGkA) 🧑‍💻

## note
* ```npm init``` ใช้ตรง cmd แล้ว enter จนจบ จะได้ไฟล์ ```package.json```

* ```npm install express``` ใช้ที่ cmd จะได้ไฟล์ ```package-lock.json```

* ลง Library ชื่อ express สำเร็จจะมีตรงนี้เพิ่มมาที่ไฟล์ ```package.json```
```json
"dependencies": { 
    "express": "^5.1.0" 
  }
```

* อะไรที่รัน powershell ไม่ได้ ให้ลองรันที่ cmd

* ```cd ..``` ย้อน path กลับไป

* ```node index.js``` เพื่อ run หลังจากนั้น ```Ctrl + c ``` เพื่อ ออก

* ```npm install nodemon --server-dev``` โหลด nodemon มาไว้ที่ไฟล์ 

* ลง nodemon สำเร็จจะมีตรงนี้เพิ่มมาที่ไฟล์ ```package.json```
```json
"devDependencies": {
    "nodemon": "^3.1.10"
  }
```