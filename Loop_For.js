function setup() {
    createCanvas(700, 200);
    background(255);
    textSize(70);          // Ukuran teks untuk ikon
    textAlign(CENTER, CENTER);
  }

  function draw() {
    background(255);       // Menghapus frame sebelumnya
    let numberOfIcons = 5;  // Jumlah ikon
    let x = 50;             // Posisi x awal
    let y = height / 2;     // Menempatkan ikon di tengah secara vertikal

    // Menggunakan for loop untuk menampilkan ikon secara horizontal
    for (let i = 0; i < numberOfIcons; i++) {
      text('🤓', x, y);     // Menampilkan ikon 
      x += 100;              // Menambahkan jarak antar ikon
    }

    noLoop(); // Menghentikan draw agar tidak berulang terus menerus
  }
