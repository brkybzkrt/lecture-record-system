# Okul Ders Kayıt Sistemi

## Tanıtım

Okul kayıt sistemi ile öğrencilerin dönem başı alacağı dersleri seçebilmesi ve Uzman kullanıcılar tarafından ise 
- Ders Ekle / Sil / Güncelle
- Öğretim Görevlisi Ekle / Sil / Güncelle
- Sınıf Ekle / Sil / Güncelle
- Öğrenci Ekle / Sil / Güncelle

gibi işlemlerin yapabilmesi gerekmektedir ayrıca iki tip kullanıcı da sisteme login olmalıdır. Öğrenciler uzman kullanıcılar tarafından sisteme eklenerek verilen şifre ile işlemlerini tamamlamalıdır.

Öğrenciler 3 adet zorunlu 2 adet de seçmeli ders seçmek üzere toplam 5 adet ders almak zorundadır ve öğrenciler aynı dersi iki defa seçememektedir. 



## Kullanılan Teknolojiler

- NodeJS (REST API)
- Mongoose (MongoDB)-(Veritabanı)
- Jsonwebtoken (Şifreleme için)
- ReactJS (Client)

## Başlangıç

- Başlatma

```Bash
# server
npm i && npm start
# client
npm i && npm start
```


- Admin login sayfası

  <img src="./img/admin-login.png" alt="admin-login" width="100%" height="50%"  style="margin:10px">

```Bash
# admin login için 
Email => admin1@gmail.com
Password => admin123
```

- Student login sayfası

  <img src="./img/student-login.png" alt="admin-login" width="100%" height="50%"  style="margin:10px">

```Bash
# student login için 
Student Code => 2021000030 (veya admin olarak giriş yaptıktan sonra bir öğrenci ekleyerek login olabilirsiniz)
Password => 12345678
```


- Öğrenci ana sayfası

  <img src="./img/student-main.png" alt="student-main" width="100%" height="50%"  style="margin:10px">


- Öğrenci 5 ders seçimi sonrası

  <img src="./img/student-main1.png" alt="student-main1" width="100%" height="50%"  style="margin:10px">


- Öğrenci aynı dersi almaya çalıştığında ki hata ekranı

  <img src="./img/student-error.png" alt="student-error" width="100%" height="50%"  style="margin:10px">


- Öğrenci zorunlu derslerden 3 taneden fazla almaya çalıştığında ki hata ekranı

  <img src="./img/student-error1.png" alt="student-error1" width="100%" height="50%"  style="margin:10px">



- Öğrenci seçmeli derslerden 2 taneden fazla almaya çalıştığında ki hata ekranı

  <img src="./img/student-error2.png" alt="student-error2" width="100%" height="50%"  style="margin:10px">



- Admin ana sayfa

  <img src="./img/admin-main.png" alt="admin-main" width="100%" height="50%"  style="margin:10px">


- Admin ders sayfası

  <img src="./img/admin-lecture.png" alt="admin-lecture" width="100%" height="50%"  style="margin:10px">

- Admin öğretim görevlisi sayfası

  <img src="./img/admin-facultyMember.png" alt="admin-facultyMember" width="100%" height="50%"  style="margin:10px">


- Admin sınıf sayfası

  <img src="./img/admin-classroom.png" alt="admin-classroom" width="100%" height="50%"  style="margin:10px">


- Admin öğrenci sayfası

  <img src="./img/admin-student.png" alt="admin-student" width="100%" height="50%"  style="margin:10px">

- Admin öğrenci ekleme hata ekranı

  <img src="./img/admin-student-add-error.png" alt="admin-student" width="100%" height="50%"  style="margin:10px">