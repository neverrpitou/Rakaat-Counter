// Mengambil elemen yang dibutuhkan
const counterElement = document.getElementById('counter');
const button = document.getElementById('counterButton');

// Inisialisasi counter
let counter = 0;

// Menambahkan event listener untuk klik tombol
button.addEventListener('click', function() {
    // Menambah nilai counter setiap kali tombol diklik
    counter++;
    
    // Menampilkan hasil counter pada elemen p
    counterElement.textContent = counter;
});
