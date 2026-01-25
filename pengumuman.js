const pengumuman = [
  {
    judul: "Isra Miraj 1447 H",
    tanggal: "28 Januari 2026",
    isi: "Kegiatan peringatan Isra Miraj 1447 H, di kampus SDN Sindang II."
  },
  {
    judul: "Sosialisasi TKA",
    tanggal: "27 Januari 2026",
    isi: "Rapat bersama orang tua / wali asuh membahas informasi dan teknis mengenai TKA (Tes Kemampuan Akademik) Pukul 09.00 WIB bertempat di ruang kelas 2."
  },
  {
    judul: "Lini Masa Pelaksanaan TKA SD/MI/SDLB/Paket A/sederajat",
    tanggal: "19 Januari - 24 Mei 2026",
    isi: " <ol>
      <li>Pendaftaran 19 Januari - 28 Februari</li>
      <li>Simulasi 2 - 8 Maret</li>
      <li>Gladi Bersih 9 - 17 Maret</li>
      <li>Pelaksanaan Utama 20 - 30 April</li>
      <li>Pelaksanaan Susulan 11 - 17 Mei</li>
      <li>Pengolahan Hasil 18 - 23 Mei</li>
      <li>Pengumuman Hasil 24 Mei</li>
    </ol>"
  }
];

const container = document.getElementById("pengumuman-list");

pengumuman.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  
  // Cek jika judul mengandung "Lini Masa" untuk format khusus
  let isiHTML = item.isi;
  if (item.judul.includes("Lini Masa")) {
    // Pisahkan dengan regex untuk pola angka diikuti titik atau tanpa spasi setelah angka
    // Contoh: "1. ... 2.Simulasi" akan dipisah jadi ["1. Pendaftaran...", "2.Simulasi...", ...]
    const poinPoin = item.isi.split(/(?=\d+\.|\d+\.\S)/);
    
    // Jika ada poin yang terpisah
    if (poinPoin.length > 1) {
      isiHTML = '<ol>';
      poinPoin.forEach(poin => {
        // Bersihkan spasi di awal dan koma di akhir
        let cleanPoin = poin.trim();
        if (cleanPoin.endsWith(',')) {
          cleanPoin = cleanPoin.slice(0, -1);
        }
        // Pastikan format angka dengan titik dan spasi
        cleanPoin = cleanPoin.replace(/(\d+)\.(\S)/, '$1. $2');
        if (cleanPoin) {
          isiHTML += `<li>${cleanPoin}</li>`;
        }
      });
      isiHTML += '</ol>';
    }
  }
  
  div.innerHTML = `
    <h3>${item.judul}</h3>
    <div class="date">${item.tanggal}</div>
    <p>${isiHTML}</p>
  `;
  container.appendChild(div);
});
