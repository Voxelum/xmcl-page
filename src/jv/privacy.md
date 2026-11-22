---
title: Wara-Wara Privasi Proyek Sumber Terbuka XMCL
description: Wara-wara privasi kanggé situs web lan launcher sumber terbuka XMCL, ingkang trep kaliyan UU PDP Indonesia (UU No. 27 Tahun 2022), EU GDPR, UK GDPR, US COPPA/CCPA, lan standar pelindungan data internasional.
---

# Wara-Wara Privasi Proyek Sumber Terbuka XMCL

**Tanggal Berlaku: 22 November 2026 · Versi: OP3-2026-11-22**

Wara-wara punika nyakup situs web umum XMCL ([xmcl.app](https://xmcl.app)) lan launcher XMCL sumber terbuka ingkang gratis. Wara-wara punika boten nyakup fitur bayaran, akun, tagihan, AI, utawi layanan signaling/TURN multiplayer ingkang dipunsedhiyakaken déning XMCL Together, ingkang dipunatur kanthi kapisah wonten ing [Kabijakan Privasi XMCL Together](./together/privacy).

---

## 1. Pengendali Data Pribadi lan Kontak

XMCL punika proyek sumber terbuka mandhiri ingkang dipunkelula déning **CI010** (minangka **Pengendali Data Pribadi** / *Data Controller*) sesarengan kaliyan komunitas kontributor Voxelum.
- **Pitakenan Privasi, Hukum, lan Hak Subjek Data:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repositori Kode Sumber:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Pelaporan Kerentanan Keamanan:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Dhukungan Komunitas:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Informasi ingkang Dipunproses lan Minimalisasi Data

XMCL ngetrapaken prinsip minimalisasi data ingkang ketat:

### Situs Web Umum (xmcl.app)
- **Analitik Agregat Tanpa Kuki (Cookieless Aggregated Analytics):** Kula lan tim ngginakaken Microsoft Azure Application Insights ingkang dipunkonfigurasi ing **mode tanpa kuki** (`disableCookiesUsage: true`) kanthi server pangolahan ing **Microsoft Azure East Asia (Hong Kong)** kanggé nyathet kunjungan kaca anonim, pilihan undhuhan, atribut jaringan/piranti umum, lan *user-agent* browser. Boten wonten kuki analitik utawi kuki pelacakan lintas-situs ingkang dipunsimpen ing piranti Panjenengan.
- **Kuki Fungsional ingkang Sanget Dipunbetahaken:** Kita namung nyimpen satunggal kuki fungsional lokal (`nf_lang`) ingkang sanget dipunbetahaken kanggé ngémut pilihan basa antarmuka Panjenengan. Kita boten ngginakaken kuki pamasaran, iklan, utawi pelacakan perilaku pihak katelu.

### Launcher Sumber Terbuka
- **Telemetri lan Diagnostik Opsional (Opt-in):** Telemetri diagnostik **dipunpatèni kanthi gawan (disabled by default)**. Namung menawi Panjenengan kanthi eksplisit ngaktifaken telemetri wonten ing setelan launcher (Opt-in), launcher saged mroses:
  - Pengidentifikasi instalasi/piranti samaran (*pseudonymous*) ingkang dipundamel kanthi acak;
  - Kadadosan siklus urip aplikasi (miwiti game, kode metu normal/kalepatan, versi aplikasi);
  - Jinis panyedhiya autentikasi (upaminipun Microsoft utawi pengidentifikasi autentikasi offline);
  - Spesifikasi lingkungan runtime dhasar (sistem operasi, versi Java runtime, arsitektur CPU);
  - Log *crash* lan *stack trace* kalepatan.
- **Pembersihan Data lan Kredensial:** Diagnostik *crash* dipunresiki saking jalur berkas sensitif, jeneng panganggo, lan token sistem sak-sagedipun. Kita **boten nate** mroses utawi nyimpen sandhi, kredensial, utawi token sesi akun Microsoft/Mojang Panjenengan.

---

## 3. Watesan Wektu Panyimpenan Data (Retensi)

Kita nggadhahi jadwal panyimpenan ingkang cetha lan boten nyimpen data tanpa wates:
- Sedaya log telemetri, cathetan kalepatan diagnostik, lan metrik kinerja dipunsimpen **maksimal 90 dinten**, lajeng dipunbusak kanthi permanen utawi dipunanonimaken saéngga boten saged dipunbalèkaken malih.
- Laporan *issue tracker* umum ing GitHub tetep kasedhiya miturut kabijakan platform GitHub lan tata kelola repositori ngantos dipunrampungaken utawi dipunbusak.

---

## 4. Sub-prosesor lan Transfer Data Pribadi Lintas Wates Negara

XMCL ngginakaken panyedhiya infrastruktur global kanggé nyedhiyakaken undhuhan, kaca web, lan diagnostik opsional:

| Panyedhiya | Peran lan Data ingkang Dipunproses | Wilayah Pemrosesan | Kabijakan Privasi |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Analitik web tanpa kuki, diagnostik launcher opsional | Hong Kong (Asia Wétan / East Asia), Amérika Sarékat, Uni Eropa (EU) | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, *edge routing*, pelindungan DDoS | Jaringan Edge Global / Amérika Sarékat | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Hosting kode sumber, rilis, *issue tracker* | Amérika Sarékat | [GitHub Privacy](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hosting lan pangiriman situs web | Amérika Sarékat / Edge Global | [Vercel Privacy](https://vercel.com/legal/privacy-policy) |

- **Pangamanan Transfer Lintas Negara:** Nalika data teknis dipuntransfer dhateng njawi wilayah hukum Républik Indonésia, EEA, Inggris, utawi Swiss, kita nyandharaken dhateng perlindungan hukum ingkang setara utawi langkung inggil, *Standard Contractual Clauses* (SCCs) Uni Eropa, UK IDTA / Addendum, lan syarat transfer data pribadi lintas negara miturut **Pasal 56 UU No. 27 Tahun 2022 (UU PDP)**, kalebet enkripsi TLS nalika transmisi.
- **Hak Nolak Transfer:** Panjenengan saged nolak transfer lintas negara kanggé diagnostik launcher kanthi tetep matèni telemetri (kahanan gawanipun).
- **Boten Sade Data:** Kita boten nate nyadé data pribadi utawi mbagi data kanggé iklan perilaku lintas konteks.

---

## 5. Ketentuan Wilayah lan Hak Hukum Subjek Data

### Républik Indonésia (UU No. 27 Tahun 2022 babagan Pelindungan Data Pribadi — UU PDP)
- **Dasar Pemrosesan Data (Pasal 20 UU PDP):** Persetujuan ingkang sah kanthi eksplisit kanggé telemetri diagnostik opsional; lan pemenuhan kepentingan ingkang sah (*legitimate interests*) kanggé keamanan infrastruktur, kasedhiyan layanan, saha analitik agregat tanpa kuki.
- **Pelindungan Data Anak (Pasal 25 UU PDP) lan Umur Dewasa:** Kanggé panganggo ing Indonésia, pemrosesan data pribadi anak (ing sangandhapipun umur **18 taun**) kedah pikantuk persetujuan saking tiyang sepuh utawi wali anak ingkang sah. Tiyang sepuh utawi wali saged ngubungi [cijhn@hotmail.com](mailto:cijhn@hotmail.com) kanggé pambusakan data kanthi rikat.
- **Hak Subjek Data Pribadi (Pasal 5–13 UU PDP):** Panjenengan gadhah hak kanggé:
  - Pikantuk informasi babagan kajelasan identitas, dhasar kepentingan hukum, lan tujuan panggunaan data pribadi;
  - Njangkepi, nganyari, lan/utawi ndandani kalepatan utawi boten cocogipun data pribadi;
  - Pikantuk akses lan pikantuk salinan data pribadi;
  - Mungkasi pemrosesan, mbusak, lan/utawi musnahaken data pribadi;
  - Narik malih persetujuan pemrosesan data pribadi ingkang sampun dipunparingaken;
  - Nolak tindakan pangambilan keputusan otomatis;
  - Nundha utawi mbatesi pemrosesan data pribadi kanthi proporsional;
  - Ngajokaken pengaduan dhateng lembaga pelindungan data pribadi ing Indonésia.

### Uni Eropa & EEA (GDPR)
- **Dasar Hukum:** Persetujuan (Pasal 6(1)(a) GDPR) kanggé telemetri diagnostik opsional; Kepentingan ingkang Sah (Pasal 6(1)(f) GDPR) kanggé keamanan infrastruktur, kasedhiyan, lan analitik agregat tanpa kuki.
- **Umur Persetujuan:** 16 taun (utawi umur persetujuan digital Negara Anggota ingkang berlaku, 13–15 taun).
- **Hak Panjenengan:** Miturut Pasal 15–22 GDPR, Panjenengan gadhah hak akses, pambeneran, pambusakan ("hak kanggé dipunlalekaken"), pambatesan pemrosesan, portabilitas data, kabotan, narik persetujuan kapan kémawon, lan ngajokaken keluhan dhateng Otoritas Pengawas Pelindungan Data nasional.

### Inggris (UK GDPR & DPA 2018)
- Dipunatur miturut UK GDPR lan Data Protection Act 2018. Umur persetujuan digital: **13 taun**. Otoritas pengawas: UK Information Commissioner’s Office (ICO) ing [ico.org.uk](https://ico.org.uk).

### Amérika Sarékat (COPPA, CCPA / CPRA & Hukum Negara Bagian)
- **COPPA:** XMCL boten dipuntujukaken kanggé laré ing sangandhapipun umur 13 taun. Kita boten kanthi sengaja ngempalaken informasi pribadi saking laré ing sangandhapipun 13 taun. Tiyang sepuh utawi wali saged ngubungi [cijhn@hotmail.com](mailto:cijhn@hotmail.com) kanggé pambusakan rikat.
- **CCPA / CPRA:** XMCL **boten** nyadé utawi mbagi data pribadi kanggé iklan perilaku lintas konteks. Warga California lan negara bagian AS ingkang gadhah undang-undang privasi gadhah hak mangertosi, ngakses, mbeneraken, mbusak, lan ngginakaken hak punika tanpa diskriminasi.

### Wilayah Hukum Sanèsipun
- Kita ngurmati hak subjek data ingkang setara miturut hukum lokal ing saindenging donya (kalebet Brasil LGPD, Jepang APPI, Koréa Kidul PIPA, Tiongkok PIPL, Taiwan PDPA, Turki KVKK, India DPDP Act, Vietnam Decree 13, Ukraina, Arab Saudi/UEA PDPL).

---

## 6. Cara Ngginakaken Hak Panjenengan

Kanggé ngginakaken hak akses, pambeneran, pambusakan, utawi panarikan persetujuan, mangga ngubungi Pengendali Data Pribadi **CI010** wonten ing **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Basa ingkang Berlaku lan Sangkalan

- **Basa ingkang Berlaku (Governing Language):** Terjemahan wara-wara punika dipunsedhiyakaken kanggé gampilaken pamahaman. Menawi wonten bèntenipun antawisipun versi terjemahan lan versi basa Inggris, versi basa Inggris ingkang berlaku sak-inggilipun ingkang dipunkeparengaken déning hukum wajib lokal.
- **Sangkalan Minecraft & Mojang:** XMCL punika proyek piranti lunak sumber terbuka mandhiri lan boten kagandhèng, dipunwenangaken, dipunsponsori, utawi dipundhukung déning Microsoft Corporation utawi Mojang Studios.
