exports.getBeranda = (req, res) => {
  res.render('pages/home', {
    title: 'Beranda',
    userName: 'Mahasiswa Teknologi Informasi',
    fiturList: ['Arsitektur MVC', 'Template EJS', 'Express.js']
  });
};

exports.getTentang = (req, res) => {
  res.render('pages/about', { title: 'Tentang Kami' });
};

exports.getKatalog = (req, res) => {
  const produk = [
    { nama: 'Laptop', harga: 7500000, kategori: 'Elektronik' },
    { nama: 'Buku Pemrograman', harga: 150000, kategori: 'Buku' },
    { nama: 'Keyboard', harga: 350000, kategori: 'Aksesori' }
  ];

  res.render('pages/katalog', {
    title: 'Katalog Data',
    produk
  });
};

exports.postTambahData = (req, res) => {
  console.log('\n[BACK-END] Data formulir diterima:');
  console.log(req.body);
  res.redirect('/katalog');
};
