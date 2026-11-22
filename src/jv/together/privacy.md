---
title: Kabijakan Privasi XMCL Together
description: Kados pundi XMCL Together ngolah informasi akun, tagihan, AI, lan layanan multiplayer selaras kaliyan UU PDP Indonesia (UU No. 27 Tahun 2022) lan hukum pelindungan data internasional.
---

# Kabijakan Privasi XMCL Together

**Tanggal Berlaku: 22 November 2026 · Versi: P4-2026-11-22**

Kabijakan punika nerangaken kados pundi **CI010**, ingkang makarya minangka operator pribadi lan **Pengendali Data Pribadi** (*Data Controller*) kanthi nami Voxelum lan XMCL ("XMCL Together", "kita"), mroses informasi nalika Panjenengan ngginakaken akun XMCL Together, layanan bayaran, utawi fitur online ingkang gegayutan wonten ing [xmcl.app](https://xmcl.app). Kabijakan punika boten ngatur layanan mandhiri ingkang Panjenengan sambungaken, kados ta Microsoft, Mojang, server autentikasi pihak katelu, Modrinth, utawi CurseForge.

---

## 1. Informasi ingkang Kita Proses

### Situs Web Together lan Telemetri Layanan
Kaca lan layanan Together ngginakaken Microsoft Azure Application Insights ingkang dipunkonfigurasi ing **mode tanpa kuki** (`disableCookiesUsage: true`), dipun-host wonten ing **Azure East Asia (Hong Kong)**, kanggé nyathet kunjungan kaca anonim, tumindak layanan, atribut jaringan/piranti kinten-kinten, lan kadadosan diagnostik. Situs web namung nyimpen satunggal kuki lokal ingkang sanget dipunbetahaken (`nf_lang`) kanggé pilihan basa Panjenengan. Telemetri saking launcher sumber terbuka gratis dipunatur kapisah wonten ing [Wara-Wara Privasi Proyek Sumber Terbuka XMCL](../privacy).

### Akun lan Autentikasi
Nalika Panjenengan ndamel utawi ngginakaken akun XMCL Together, kita mroses pengidentifikasi akun, pengidentifikasi panyedhiya autentikasi, metadata sesi lan *refresh-token*, *scope* ingkang dipunparingaken, cap wekdal (*timestamps*), lan telemetri keamanan kanggé nyegah *replay* utawi penyalahgunaan akun. Kita **boten nate** nampi utawi nyimpen sandhi akun Microsoft utawi pihak katelu Panjenengan.

### Tagihan lan Langganan
Kita mroses saldo akun, informasi mata uang lan kurs, pesenan, status langganan, periode kuota (*allowance*), total panggunaan, pambalekan arta (*refund*), sengketa, pengidentifikasi idempotensi, lan cathetan audit. **Waffo Pancake** mroses informasi kartu pembayaran lan *checkout* kanthi langsung. XMCL namung nampi referensi transaksi, status, jumlah, mata uang, lan *webhook* ingkang dipuntapakasmani, saha boten nate nampi utawi nyimpen nomer kartu lengkap utawi kode keamanan (CVC/CVV).

### Fitur AI
Menawi Panjenengan ngginakaken fitur AI, kita mroses *prompt*, isi pacelathon, model ingkang dipunpilih, lan konteks launcher ingkang Panjenengan paringaken (kados ta nami instansi, versi game lan loader, kaca ingkang dipunpilih, utawi jalur instansi lokal). Panyuwunan dipunkirimaken dhateng panyedhiya AI kita, inggih punika **Agnes** lan, nalika dipunbetahaken, **DeepSeek**. Kita ngukur cacahipun token lan panggunaan kuota kanggé tagihan lan pencegahan penyalahgunaan. Kita boten ngginakaken *prompt* utawi asil Panjenengan kanggé nglatih model XMCL.

> **Sangkalan AI Pihak Katelu:** Panyedhiya AI eksternal (Agnes, DeepSeek) mroses muatan panyuwunan miturut kabijakan privasi lan ketentuanipun piyambak-piyambak. Kita ngatur integrasi supados nyuwun mode "tanpa pelatihan" (*no-training*) ing pundi dipundhukung, nanging kita boten saged njamin praktik pangolahan data internal panyedhiya API eksternal. Sampun ngantos ngirimaken data pribadi sensitif, sandhi, utawi informasi rahasia wonten ing *prompt* AI.

### Multiplayer, Signaling, lan TURN (Konektivitas P2P)
Fitur Together lan RTC mroses pengidentifikasi akun lan sesi, metadata *routing* ruang/peer, alamat IP, cap wekdal, pengidentifikasi kredensial TURN, lan total panggunaan *ingress/egress*. **Cloudflare** nyedhiyakaken infrastruktur *edge*, signaling, TURN, lan analitik lalu lintas.

> **Persetujuan Pambukaan Alamat IP P2P:** Konektivitas *peer-to-peer* (P2P) kanthi alami mbikak alamat IP umum Panjenengan dhateng *peer* sanèsipun wonten ing sesi multiplayer. Kanthi ngginakaken fitur P2P, Panjenengan kanthi eksplisit mangertosi lan nyetujoni pambukaan data teknis punika ingkang dipunbetahaken kanggé mbangun sambungan langsung. Signaling XMCL namung ngarahaken metadata sambungan lan boten ngrekam swanten, video, utawi isi dolanan Minecraft.

### Dhukungan lan Komunikasi Komunitas
Menawi Panjenengan ngubungi kita, kita mroses rincian kontak, referensi akun utawi transaksi, diagnostik, lan isi pesen ingkang Panjenengan kirimaken. Sampun ngirimaken sandhi, token akses, data kartu pembayaran lengkap, utawi data pribadi sensitif ingkang boten gegayutan.

---

## 2. Tujuan lan Dasar Hukum Pemrosesan Data

Kita mroses informasi kanggé:
- nyedhiyakaken, ngautentikasi, ngamanaken, lan ndandani layanan XMCL Together;
- ngelola langganan, saldo, kuota, pembayaran, *refund*, lan dhukungan pelanggan;
- ngarahaken sambungan multiplayer lan ngukur panggunaan bandwidth TURN;
- ngasilaken wangsulan AI ingkang dipunsuwun lan ngukur kuota AI;
- nyegah penipuan, serangan *replay*, penyalahgunaan, lan insiden keamanan;
- netepi kewajiban akuntansi, pajak, jaringan pembayaran, hukum, lan penyelesaian sengketa.

**Dasar Pemrosesan Data (UU PDP Indonesia Pasal 20 / GDPR / UK GDPR / Internasional):**
- **Pemenuhan kewajiban perjanjian (Pasal 20(2)(b) UU PDP / Pasal 6(1)(b) GDPR):** nyedhiyakaken akun, langganan, AI, lan layanan multiplayer ingkang Panjenengan suwun;
- **Pemenuhan kewajiban hukum (Pasal 20(2)(c) UU PDP / Pasal 6(1)(c) GDPR):** nyimpen cathetan keuangan, pajak, lan audit pembayaran;
- **Pemenuhan kepentingan ingkang sah (Pasal 20(2)(f) UU PDP / Pasal 6(1)(f) GDPR):** ngamanaken infrastruktur, nyegah penipuan/penyalahgunaan, lan diagnostik operasional tanpa kuki;
- **Persetujuan ingkang sah kanthi eksplisit (Pasal 20(2)(a) UU PDP / Pasal 6(1)(a) GDPR):** *prompt* AI opsional, pambukaan alamat IP P2P, lan transfer lintas negara nalika persetujuan dipunwajibaken déning hukum.

---

## 3. Sub-prosesor lan Transfer Data Pribadi Lintas Wates Negara

Kita namung mbagi informasi sakperlunipun dhateng panyedhiya infrastruktur lan layanan ing ngandhap punika:

| Panampi | Tujuan lan Kategori Data | Wilayah Pemrosesan | Kabijakan Privasi |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | *Checkout* pembayaran, tinjauan penipuan, *refund*, *webhook* (metadata transaksi & pembayaran) | Global / Amérika Sarékat / Singapura | Dipunsedhiyakaken nalika *checkout* |
| **Cloudflare** | Workers, CDN, pelindungan DDoS, signaling WebRTC, relay TURN (metadata IP, sesi & lalu lintas) | Edge Global / Amérika Sarékat | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosting, panyimpenan basis data, Application Insights tanpa kuki (data akun, tagihan & diagnostik) | Hong Kong (Asia Wétan / East Asia), Amérika Sarékat, Uni Eropa (EU) | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Pangiriman situs web, rilis, dhukungan *issue*/keamanan | Amérika Sarékat / Edge Global | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Pangasilan wangsulan AI (*prompt*, konteks pacelathon, parameter model) | Global / Tiongkok (PRC) / Amérika Sarékat | Kabijakan panyedhiya |

- **Pangamanan Transfer Lintas Negara (Pasal 56 UU PDP & Internasional):** Transfer data pribadi dhateng njawi wilayah hukum Républik Indonésia, EEA, Inggris, utawi Swiss dipunlampahi kanthi njamin tingkat pelindungan data ingkang setara utawi langkung inggil, ngginakaken *Standard Contractual Clauses* (SCCs) Uni Eropa, UK IDTA/Addendum, persetujuan eksplisit nalika dipunbetahaken miturut UU PDP, enkripsi TLS nalika transmisi, lan minimalisasi data ingkang ketat.
- **Akibat Nolak Pemrosesan:** Nyedhiyakaken data akun, pembayaran, lan *routing* lintas negara sanget dipunbetahaken kanggé nglampahaken XMCL Together. Menawi Panjenengan nolak pemrosesan utawi transfer lintas negara punika, Panjenengan tetep saged ngginakaken launcher XMCL sumber terbuka/offline ingkang gratis, nanging fitur XMCL Together ingkang dipun-host boten saged dipunginakaken.
- **Boten Sade Data:** Kita **boten** nyadé informasi pribadi utawi mbagi kanggé iklan perilaku lintas konteks.

---

## 4. Watesan Wektu Panyimpenan Data (Retensi)

Kita ngetrapaken wekdal panyimpenan ingkang ketat:
- **Telemetri operasional, metrik panggunaan AI, lan pangukuran TURN:** dipunsimpen **maksimal 90 dinten**, lajeng dipunbusak kanthi permanen utawi dipunanonimaken saéngga boten saged dipunbalèkaken malih.
- **Data akun lan sesi:** dipunsimpen sadangunipun akun aktif, ditambah **30 dinten** sasampunipun pambusakan akun kanggé pamulihan lan penyelesaian sengketa.
- **Cathetan buku besar keuangan, kadadosan pembayaran, *refund*, lan cathetan audit:** dipunsimpen sadangunipun **5 ngantos 7 taun** kanggé netepi kewajiban hukum akuntansi, pajak, lan jaringan pembayaran, sanajan sasampunipun akun dipuntutup.
- Cadangan (*backup*) ingkang dipunenkripsi dipunbusak miturut jadwal rotasi rutin.

---

## 5. Pilihan lan Hak Hukum Panjenengan

### Hak Subjek Data Pribadi (UU PDP Indonesia, GDPR, UK GDPR & Internasional)
Miturut **UU No. 27 Tahun 2022 (UU PDP)**, GDPR, lan hukum internasional, Panjenengan gadhah hak kanggé:
- metu (*opt-out*) saking fitur online opsional utawi medhot sambungan layanan pihak katelu;
- ngatur kuki `nf_lang` lumantar browser Panjenengan;
- mbatalaken perpanjangan Together Home kapan kémawon lumantar antarmuka akun (berlaku ing pungkasan periode bayaran ingkang mlampah);
- nyuwun informasi, akses lan salinan data, pambeneran/panganyaran, pambusakan/pemusnahan ("hak kanggé dipunlalekaken"), penundaan utawi pambatesan pemrosesan, portabilitas data, utawi kabotan dhateng pemrosesan;
- narik malih persetujuan kapan kémawon tanpa mengaruhi keabsahan pemrosesan sadèrèngipun;
- ngajokaken pengaduan dhateng lembaga pelindungan data pribadi nasional (kados ta lembaga pengawas PDP ing Indonésia, EU DPA, UK ICO ing [ico.org.uk](https://ico.org.uk), utawi regulator lokal).

### Hak Privasi California & Negara Bagian AS (CCPA / CPRA)
XMCL **boten** nyadé data pribadi utawi mbagi kanggé iklan perilaku lintas konteks. Warga California lan negara bagian AS ingkang gadhah undang-undang privasi (VA, CO, CT, UT, TX, OR, lsp.) gadhah hak mangertosi, ngakses, mbusak, mbeneraken data ingkang lepat, lan ngginakaken hak punika tanpa diskriminasi.

---

## 6. Keamanan

Kita ngetrapaken sesi mawi watesan (*scoped sessions*), kontrol akses hak istimewa minimal, enkripsi TLS nalika transmisi, *webhook* pembayaran ingkang dipuntapakasmani, pelindungan *replay*, isolasi rahasia, lan pemantauan terus-terusan. Boten wonten sistem online ingkang 100% bebas risiko; Panjenengan tanggel jawab njagi piranti, sesi, lan kredensial pihak katelu Panjenengan.

---

## 7. Laré lan Syarat Umur

- **Layanan Bayaran lan Akun:** Akun XMCL Together lan fitur bayaran mbetahaken Panjenengan yuswa paling sekedhik **18 taun** (utawi umur dewasa miturut hukum ing negara Panjenengan), utawi gadhah **persetujuan saking tiyang sepuh utawi wali ingkang sah lan saged dipunverifikasi**.
- **Pelindungan Data Anak (UU PDP Pasal 25 & COPPA):** Kita boten kanthi sengaja ngempalaken informasi pribadi saking laré ing sangandhapipun umur **13 taun** (AS/Inggris) utawi ing sangandhapipun umur persetujuan digital lokal ingkang berlaku (14–16 taun ing EU/Ukraina/Koréa/Tiongkok, 18 taun miturut UU PDP Indonésia kanggé transaksi/persetujuan anak lan India DPDP Act) tanpa persetujuan tiyang sepuh ingkang saged dipunverifikasi. Tiyang sepuh utawi wali saged ngubungi [cijhn@hotmail.com](mailto:cijhn@hotmail.com) kanggé pambusakan kanthi rikat.

---

## 8. Owah-owahan, Basa ingkang Berlaku, lan Sangkalan

- **Owah-owahan:** Kita badhé nerbitaken panganyaran wonten ing mriki mawi tanggal berlaku lan versi énggal, saha maringi wara-wara sadèrèngipun kanggé owah-owahan material menawi dipunwajibaken déning hukum.
- **Basa ingkang Berlaku:** Menawi wonten bèntenipun antawisipun versi terjemahan lan versi basa Inggris, versi basa Inggris ingkang berlaku sak-inggilipun ingkang dipunkeparengaken déning hukum wajib lokal.
- **Sangkalan Minecraft:** XMCL punika proyek mandhiri lan boten kagandhèng, dipunsponsori, utawi dipundhukung déning Microsoft Corporation utawi Mojang Studios.

---

## 9. Kontak

**Operator / Pengendali Data Pribadi / Kontak Privasi (CI010):**
- Panyuwunan umum, tagihan, *refund*, hukum, lan hak privasi UU PDP: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Laporan keamanan: [Pelaporan kerentanan pribadi GitHub](https://github.com/voxelum/x-minecraft-launcher/security)
- Dhukungan komunitas: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Mangga lebetaken namung referensi akun utawi transaksi minimal ingkang dipunbetahaken kanggé manggihaken cathetan Panjenengan. Kita saged nyuwun verifikasi kepemilikan akun sadèrèngipun nyembadani panyuwunan.
