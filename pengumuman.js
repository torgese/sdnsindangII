const pengumuman = [
  {
    judul: "Masuk Sekolah Setelah Libur",
    tanggal: "8 Januari 2026",
    isi: "Siswa kelas VI masuk kembali seperti biasa setelah libur semester."
  },
  {
    judul: "Kegiatan Jumat Bersih",
    tanggal: "10 Januari 2026",
    isi: "Siswa diminta membawa alat kebersihan untuk kegiatan Jumat Bersih."
  }
];

const container = document.getElementById("pengumuman-list");

pengumuman.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${item.judul}</h3>
    <div class="date">${item.tanggal}</div>
    <p>${item.isi}</p>
  `;
  container.appendChild(div);
});
