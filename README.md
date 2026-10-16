# Express MVC Tugas

Project ini dibuat untuk memenuhi tugas Pemrograman Web menggunakan Express.js dan EJS dengan konsep MVC (Model-View-Controller).

## Teknologi yang Digunakan
- Node.js
- Express.js
- EJS
- HTML dan CSS

## Struktur Folder

```text
express-mvc-tugas/
├── controllers/
├── routes/
├── views/
│   ├── pages/
│   └── partials/
├── public/
│   └── css/
├── docs/
│   └── screenshots/
├── app.js
├── package.json
└── README.md
```

## Cara Menjalankan Project

1. Clone repository ini atau download project dari GitHub.
2. Buka folder project di VS Code.
3. Buka terminal, lalu jalankan:

```bash
npm install
```

4. Jalankan server dengan perintah:

```bash
npm run dev
```

5. Buka browser dan akses:

```text
http://localhost:3000
```

## Halaman yang Dibuat

- **Home:** halaman utama.
- **About:** halaman tentang kami.
- **Katalog:** menampilkan data dan menyediakan form untuk menambahkan data.

Form menggunakan metode POST untuk mengirim data ke server, kemudian pengguna diarahkan kembali ke halaman katalog.

## Dokumentasi

Screenshot hasil praktikum disimpan di folder `docs/screenshots/`.

## Penutup

Project ini dibuat sebagai latihan penggunaan Express.js, EJS, routing, controller, dan struktur MVC dalam pembuatan aplikasi web sederhana.
