# Rumah Mobil Jogja - Aplikasi Rental Mobil 🚗

## Deskripsi 📜
Aplikasi Rental Mobil "Rumah Mobil Jogja" menyediakan platform penyewaan mobil dengan API untuk mengelola mobil, rental, dan data pengguna. Berikut adalah dokumentasi API untuk membantu pengembangan lebih lanjut.

### Link Deploy 🌐
- **Backend**: [Link Backend](https://rmjrentcar-86067911510.asia-southeast2.run.app/)
- **Frontend**: [Link Frontend](https://frontend-86067911510.asia-southeast2.run.app/)

---

## 1. Tabel **Cars** 🚘

| Endpoint               | Metode | Deskripsi                              | Handler       |
|------------------------|--------|----------------------------------------|---------------|
| `/cars`                | GET    | Mengambil semua data mobil             | `getCars`     |
| `/cars/create`         | POST   | Menambahkan data mobil baru            | `createCar`   |
| `/cars/detail/:car_id` | GET    | Mengambil data mobil berdasarkan ID     | `getCarById`  |
| `/cars/update/:car_id` | PUT    | Mengupdate data mobil berdasarkan ID    | `updateCar`   |
| `/cars/delete/:car_id` | DELETE | Menghapus data mobil berdasarkan ID     | `deleteCar`   |

---

## 2. Tabel **Rentals** 🏠

| Endpoint                | Metode | Deskripsi                               | Handler       |
|-------------------------|--------|-----------------------------------------|---------------|
| `/rentals`              | GET    | Mengambil semua data rental             | `getRentals`  |
| `/rentals/create`       | POST   | Menambahkan data rental baru            | `createRental`|
| `/rentals/detail/:rental_id` | GET    | Mengambil data rental berdasarkan ID      | `getRentalById` |
| `/rentals/update/:rental_id` | PUT    | Mengupdate data rental berdasarkan ID     | `updateRental` |
| `/rentals/delete/:rental_id` | DELETE | Menghapus data rental berdasarkan ID      | `deleteRental` |

---

## 3. Tabel **User** 👤

| Endpoint                        | Metode | Deskripsi                                | Handler           |
|----------------------------------|--------|------------------------------------------|-------------------|
| `/login`                        | POST   | Login user                              | `loginHandler`    |
| `/register`                     | POST   | Registrasi user baru                    | `register`        |
| `/profile/:username`            | GET    | Mendapatkan data user berdasarkan username | `getUserByUsername` |
| `/profile/update/:username`     | PUT    | Update data user berdasarkan username    | `updateUser`      |
| `/profile/delete/:username`     | DELETE | Hapus user berdasarkan username         | `deleteUser`      |
| `/logout`                       | DELETE | Logout user                             | `logout`          |

---

## 4. Token 🔑

| Endpoint        | Metode | Deskripsi           | Handler      |
|-----------------|--------|---------------------|--------------|
| `/token`        | GET    | Menghasilkan token baru | `refreshToken` |

---

## Setup & Instalasi ⚙️

1. Clone repository:
   ```bash
   git clone http://github.com/mad-sm/rmjrentcar
