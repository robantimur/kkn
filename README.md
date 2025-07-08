# AR Video Player

Aplikasi Augmented Reality untuk menampilkan video menggunakan marker pattern custom.

## 🚀 Fitur

- **Custom Marker Pattern**: Menggunakan pattern custom untuk tracking yang lebih akurat
- **Video Playback**: Memutar video dengan kontrol otomatis saat marker terdeteksi
- **Smooth Animation**: Animasi yang halus dengan easing function
- **Error Handling**: Penanganan error yang komprehensif
- **Performance Monitoring**: Monitoring FPS dan performa real-time
- **Touch/Click Interaction**: Kontrol video dengan sentuhan atau klik
- **Keyboard Controls**: Kontrol keyboard untuk testing
- **Responsive UI**: Interface yang responsif dengan status indicator

## 📱 Kontrol

- **Spacebar**: Play/Pause video
- **R**: Reset posisi video
- **Click/Touch**: Play/Pause video pada mobile

## 🛠️ Teknologi

- **A-Frame 1.4.0**: Framework WebVR/AR
- **AR.js 3.4.5**: Library AR untuk web
- **Custom Pattern**: Marker tracking berbasis pattern

## 📁 Struktur File

```
.
├── index.html              # File utama aplikasi
├── gigi.mp4               # Video yang akan ditampilkan
├── pattern-custom.patt    # Pattern marker custom
├── pattern-hiro.patt      # Pattern marker default (backup)
├── pattern-hiro.png       # Gambar pattern default
└── README.md              # Dokumentasi
```

## 🚀 Cara Menggunakan

1. Buka `index.html` di browser yang support WebRTC
2. Izinkan akses kamera
3. Arahkan kamera ke marker pattern
4. Video akan muncul dan mulai diputar otomatis
5. Gunakan kontrol keyboard atau touch untuk interaksi

## 🔧 Konfigurasi

### Mengganti Video

Ganti file `gigi.mp4` dengan video baru, atau edit `src` di HTML:

```html
<video id="videoAsset" src="video-baru.mp4" ...></video>
```

### Mengganti Pattern

Ganti file `pattern-custom.patt` dengan pattern baru, atau edit `url` di HTML:

```html
<a-marker url="pattern-baru.patt" ...></a-marker>
```

### Menyesuaikan Ukuran Video

Edit properti `width` dan `height` pada `a-video`:

```html
<a-video width="4" height="2.25" ...></a-video>
```

## 🔍 Troubleshooting

### Video Tidak Muncul

- Periksa apakah file video dapat diakses
- Pastikan browser mendukung format video
- Periksa console untuk error

### Marker Tidak Terdeteksi

- Pastikan lighting yang cukup
- Periksa kualitas cetak marker
- Jaga jarak yang tepat dengan kamera

### Performance Issues

- Gunakan video dengan resolusi yang lebih rendah
- Pastikan browser yang digunakan adalah versi terbaru
- Periksa performa device yang digunakan

## 🎯 Optimasi yang Diterapkan

1. **CDN Terbaru**: Menggunakan A-Frame 1.4.0 dan AR.js 3.4.5
2. **Asset Management**: Video dimuat sebagai asset untuk performa lebih baik
3. **Error Handling**: Penanganan error yang komprehensif
4. **Smooth Animation**: Animasi dengan easing function
5. **Performance Monitoring**: Monitoring FPS real-time
6. **Mobile Optimization**: Optimasi untuk perangkat mobile
7. **User Interface**: Status indicator dan loading state
8. **Keyboard Controls**: Kontrol keyboard untuk testing
9. **Memory Management**: Cleanup pada page unload

## 🌐 Browser Support

- Chrome 58+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📄 License

MIT License - Bebas digunakan untuk proyek pribadi dan komersial.
