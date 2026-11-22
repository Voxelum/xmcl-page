---
title: XMCL Açık Kaynak Projesi Kişisel Verilerin Korunması Aydınlatma Metni
description: XMCL web sitesi ve açık kaynaklı başlatıcı için 6698 sayılı KVKK, AB GDPR ve uluslararası veri koruma standartlarına uyumlu gizlilik ve aydınlatma metni.
---

# XMCL Açık Kaynak Projesi Kişisel Verilerin Korunması Aydınlatma Metni

**Yürürlük tarihi: 22 Kasım 2026 · Sürüm: OP3-2026-11-22**

Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") Madde 10 ve ilgili uluslararası veri koruma mevzuatı uyarınca, herkese açık XMCL web sitesini ([xmcl.app](https://xmcl.app)) ve ücretsiz, açık kaynaklı XMCL başlatıcısını kapsar. XMCL Together tarafından sunulan ücretli özellikler, hesaplar, faturalandırma, yapay zeka (AI) veya çok oyunculu sinyalleşme/TURN hizmetleri bu metnin kapsamı dışındadır ve ayrı olarak [XMCL Together Gizlilik Politikası ve Aydınlatma Metni](./together/privacy) ile düzenlenir.

---

## 1. Veri Sorumlusu ve İletişim

XMCL, **CI010** ve Voxelum katkıda bulunanlar topluluğu tarafından işletilen bağımsız bir açık kaynak projesidir. KVKK kapsamında veri sorumlusu iletişim bilgileri aşağıdadır:
- **Gizlilik, KVKK ve Hukuki Başvurular:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Kaynak Kod Deposu:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Güvenlik Açığı Bildirimi:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Topluluk Desteği:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. İşlenen Kişisel Veriler ve Veri Minimizasyonu

XMCL, sıkı veri minimizasyonu ilkelerini uygular:

### Herkese Açık Web Sitesi (xmcl.app)
- **Çerezsiz Toplu Analitik:** Anonim sayfa görüntülemelerini, indirme seçimlerini, genel ağ/cihaz niteliklerini ve tarayıcı kullanıcı aracılarını (user-agent) kaydetmek amacıyla **çerezsiz modda** (`disableCookiesUsage: true`) yapılandırılmış ve veri alımı **Microsoft Azure Doğu Asya (Hong Kong)** bölgesinde barındırılan Microsoft Azure Application Insights hizmetini kullanıyoruz. Cihazınıza hiçbir analitik veya siteler arası izleme çerezi yerleştirilmez.
- **Zorunlu İşlevsel Çerez:** Arayüz dil tercihinizi hatırlamak için yalnızca kesinlikle gerekli tek bir yerel işlevsel çerez (`nf_lang`) saklıyoruz. Üçüncü taraf pazarlama, reklam veya davranışsal izleme çerezleri kullanmıyoruz.

### Açık Kaynaklı Başlatıcı
- **İsteğe Bağlı Telemetri ve Tanılama (Açık Rıza / Opt-in):** Tanılama telemetrisi **varsayılan olarak devre dışıdır**. Yalnızca başlatıcı ayarlarından telemetriyi açıkça etkinleştirmeniz (açık rıza vermeniz) hâlinde başlatıcı şu verileri işleyebilir:
  - Rastgele oluşturulmuş, takma adlı (pseudonymous) kurulum/cihaz tanımlayıcısı;
  - Uygulama yaşam döngüsü olayları (oyun başlatma, normal/hata çıkış kodları, uygulama sürümü);
  - Kimlik doğrulama sağlayıcı türü (ör. Microsoft veya çevrimdışı kimlik doğrulama tanımlayıcısı);
  - Temel çalışma ortamı özellikleri (işletim sistemi, Java çalışma zamanı sürümü, CPU mimarisi);
  - Hata çökme günlükleri (crash logs) ve yığın izleri (stack traces).
- **Hassas Verilerin Temizlenmesi ve Kimlik Bilgileri:** Çökme günlükleri, teknik olarak mümkün olan ölçüde hassas dosya yollarından, kullanıcı adlarından ve sistem belirteçlerinden (token) arındırılır. Microsoft/Mojang hesap şifrelerinizi, kimlik bilgilerinizi veya oturum belirteçlerinizi **asla** işlemiyor ve saklamıyoruz.

---

## 3. Veri Saklama Süreleri

Süresiz veri saklama uygulamalarından kaçınıyoruz:
- Tüm telemetri günlükleri, tanılama hata kayıtları ve performans ölçümleri **en fazla 90 gün** süreyle saklanır; bu sürenin sonunda kalıcı olarak silinir veya geri döndürülemez biçimde anonim hâle getirilir.
- GitHub üzerindeki herkese açık sorun bildirimleri, çözülene veya silinene kadar GitHub platform politikalarına ve depo yönetişimine tabi olarak erişilebilir kalır.

---

## 4. Alt İşleyenler ve Yurt Dışına Veri Aktarımı

XMCL; indirmeleri, web sayfalarını ve isteğe bağlı tanılamaları sunmak için küresel altyapı sağlayıcıları kullanır:

| Sağlayıcı | Rol ve İşlenen Veriler | İşleme Bölgeleri | Gizlilik Politikası |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Çerezsiz web analitiği, isteğe bağlı başlatıcı tanılamaları | Hong Kong (Doğu Asya), Amerika Birleşik Devletleri, AB | [Microsoft Gizlilik](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, uç yönlendirme, DDoS koruması | Küresel Uç Ağı / Amerika Birleşik Devletleri | [Cloudflare Gizlilik](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Kaynak kod barındırma, sürümler, sorun takipçisi | Amerika Birleşik Devletleri | [GitHub Gizlilik](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Web sitesi barındırma ve dağıtımı | Amerika Birleşik Devletleri / Küresel Uç Ağı | [Vercel Gizlilik](https://vercel.com/legal/privacy-policy) |

- **Yurt Dışına Aktarım Güvenceleri (KVKK Madde 9 & GDPR):** Teknik veriler Türkiye, AEA, Birleşik Krallık veya İsviçre dışına aktarıldığında; Avrupa Komisyonu onaylı Standart Sözleşme Maddeleri (SCC), Birleşik Krallık IDTA, KVKK Madde 9 kapsamında öngörülen güvenceler ve aktarım sırasında şifreleme uygulanır.
- **Reddetme Hakkı:** Başlatıcı tanılamalarının yurt dışına aktarılmasını, telemetriyi kapalı tutarak (varsayılan durum) kolayca reddedebilirsiniz.
- **Veri Satışı Yoktur:** Kişisel verilerinizi asla satmıyor ve bağlamlar arası davranışsal reklamcılık amacıyla paylaşmıyoruz.

---

## 5. Bölgesel Düzenlemeler ve İlgili Kişinin Hakları

### Türkiye (6698 Sayılı KVKK)
- **Hukuki Sebepler (KVKK Madde 5):** İsteğe bağlı tanılama telemetrisi için **açık rıza** (Madde 5/1); altyapı güvenliği, süreklilik ve çerezsiz toplu analitik için **veri sorumlusunun meşru menfaati** (Madde 5/2-f).
- **KVKK Madde 11 Kapsamındaki Haklarınız:** Veri sorumlusuna başvurarak;
  - Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme,
  - İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
  - Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,
  - Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,
  - KVKK Madde 7 çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini talep etme,
  - İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
  - Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.
- **Kuruma Şikâyet Hakkı:** Başvurunuzun reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde cevap verilmemesi hâlinde **Kişisel Verileri Koruma Kurumu'na (KVKK)** ([kvkk.gov.tr](https://www.kvkk.gov.tr)) şikâyette bulunma hakkınız saklıdır.

### Avrupa Birliği / AEA (GDPR), Birleşik Krallık (UK GDPR) ve ABD (COPPA, CCPA/CPRA)
- **AB/AEA ve Birleşik Krallık:** GDPR Madde 15–22 kapsamındaki erişim, düzeltme, silme, kısıtlama, veri taşınabilirliği, itiraz ve yetkili denetim makamına (ör. Birleşik Krallık ICO: [ico.org.uk](https://ico.org.uk)) şikâyet hakları geçerlidir. Dijital rıza yaşı AB'de 13–16, Birleşik Krallık'ta 13'tür.
- **ABD (COPPA, CCPA/CPRA):** XMCL, 13 yaşından küçük çocuklara yönelik değildir ve kişisel verileri satmaz veya davranışsal reklamcılık için paylaşmaz. Ebeveynler veya veliler derhâl silme talebi için [cijhn@hotmail.com](mailto:cijhn@hotmail.com) adresinden bize ulaşabilir.

### Diğer Yargı Bölgeleri
- Dünya genelinde yürürlükteki yerel veri koruma mevzuatları kapsamındaki eşdeğer haklara saygı gösteriyoruz.

---

## 6. Haklarınızı Kullanma Yöntemi

KVKK Madde 11 ve ilgili diğer mevzuat kapsamındaki taleplerinizi, veri sorumlusu **CI010** ile **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)** adresi üzerinden iletişime geçerek iletebilirsiniz. Başvurularınız mevzuatta öngörülen süre içinde (KVKK uyarınca en geç 30 gün içinde) yanıtlanacaktır.

---

## 7. Geçerli Dil ve Sorumluluk Reddi

- **Geçerli Dil:** Bu metnin çevirileri kolaylık sağlamak amacıyla sunulmuştur. Çeviri ile İngilizce sürüm arasında herhangi bir çelişki bulunması hâlinde, emredici yerel mevzuatın izin verdiği ölçüde İngilizce sürüm geçerli olur.
- **Minecraft ve Mojang Sorumluluk Reddi:** XMCL bağımsız bir açık kaynak yazılım projesidir; Microsoft Corporation veya Mojang Studios ile bağlantılı değildir ve bunlar tarafından yetkilendirilmemiş, desteklenmemiş veya onaylanmamıştır.
