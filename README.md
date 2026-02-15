# 🚀 Reconcile Technologies: Economic Intelligence Infrastructure

![Status](https://img.shields.io/badge/Status-Incubation_Prototype_V1.0-blue?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-MERN_Stack-green?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-OCR_Engine-orange?style=for-the-badge)

**Reconcile** adalah infrastruktur kecerdasan ekonomi yang dirancang untuk membantu UMKM dan bisnis menengah melakukan rekonsiliasi pengadaan barang secara otomatis. Proyek ini merupakan prototipe untuk program **Launchpad FILKOM 2026**.

---

## 🎯 Value Proposition (Sesuai Proposal)

Aplikasi ini memecahkan 3 masalah utama yang tertuang dalam proposal:
1. **Inefisiensi Input Data**: Mengganti input manual dengan **AI OCR** (Kecepatan ↑70%).
2. **Human Bias**: Menghilangkan kesalahan manusia dalam pengecekan harga melalui **Early Warning System**.
3. **Data Agregat**: Mengumpulkan data transaksi menjadi aset informasi yang berharga untuk prediksi ekonomi.

---

## 🛠️ Fitur Utama

### 1. Autonomous Invoice Capture (AI OCR)
Menggunakan engine **Tesseract.js** untuk mengekstraksi data nominal dari foto nota fisik secara real-time.

### 2. Early Warning System (EWS)
Algoritma cerdas yang membandingkan harga beli internal dengan rata-rata harga pasar. Memberikan label **"Warning"** jika terdeteksi harga tidak wajar.

### 3. Predictive What-If Simulator
Fitur simulasi untuk memproyeksikan dampak variabel makro (seperti kenaikan inflasi/BBM) terhadap margin profit operasional.

### 4. Offline-Sync Foundation
Dukungan penyimpanan lokal menggunakan `LocalStorage` dan deteksi status jaringan agar aplikasi tetap dapat digunakan di area dengan sinyal rendah (seperti gudang).

### 5. Data Aggregation & Export
Fitur untuk mengekspor data transaksi ke format **CSV** guna keperluan riset pasar atau laporan ke prinsipal barang.

---

## 📂 Struktur Proyek

```text
reconcile-project/
├── server/                 # Backend (Node.js & AI Engine)
│   ├── index.js            # Entry point & Logic OCR
│   └── package.json        # Dependencies (Express, Tesseract, Cors)
└── client/                 # Frontend (React.js + Vite)
    ├── src/
    │   ├── App.jsx         # Dashboard Utama & UI Logic
    │   └── main.jsx        # React DOM Render
    ├── vite.config.js      # PWA Configuration
    └── package.json        # Dependencies (Recharts, Axios, Lucide)

🚀 Panduan Instalasi & Menjalankan
1. Persiapan Backend
Bash

cd server
npm install
node index.js

Server akan berjalan di http://localhost:3001
2. Persiapan Frontend
Bash

cd client
npm install
npm run dev

Aplikasi web akan berjalan di http://localhost:5173
📈 Roadmap Pengembangan (Bulan 1 - 6)
Fase	Deskripsi	Status
Bulan 1-2	Pengembangan PWA & Core OCR Engine	✅ Completed
Bulan 3-4	Integrasi API Makro & Offline-Sync	✅ Completed
Bulan 5-6	Finalisasi Fitur Prediksi & Uji Coba Lapangan	🚧 In Progress
💡 Teknologi yang Digunakan

    Frontend: React.js, Tailwind CSS (Design System), Recharts (Data Visualization).

    Backend: Node.js, Express.js.

    AI/ML: Tesseract.js (Optical Character Recognition).

    Tools: Lucide Icons, Axios.

Reconcile Technologies - Empowering Business with Intelligent Data.
Dibuat untuk Launchpad Universitas Brawijaya 2026.
