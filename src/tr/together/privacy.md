---
title: XMCL Together Gizlilik Politikası ve KVKK Aydınlatma Metni
description: XMCL Together hizmetlerinin hesap, faturalandırma, yapay zeka ve çok oyunculu verilerini 6698 sayılı KVKK ve uluslararası veri koruma mevzuatına uygun olarak nasıl işlediğine dair aydınlatma metni.
---

# XMCL Together Gizlilik Politikası ve KVKK Aydınlatma Metni

**Yürürlük tarihi: 22 Kasım 2026 · Sürüm: P4-2026-11-22**

Bu Aydınlatma Metni ve Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") Madde 10 ve uluslararası veri koruma mevzuatı uyarınca, Voxelum ve XMCL adları altında bireysel işletmeci olarak faaliyet gösteren **CI010** ("XMCL Together", "biz") tarafından, [xmcl.app](https://xmcl.app) üzerinden XMCL Together hesabı, ücretli hizmetler veya ilgili çevrimiçi özellikleri kullandığınızda kişisel verilerinizin nasıl işlendiğini açıklar. Bağlamayı seçtiğiniz Microsoft, Mojang, üçüncü taraf kimlik doğrulama sunucuları, Modrinth veya CurseForge gibi bağımsız hizmetleri kapsamaz.

---

## 1. İşlediğimiz Kişisel Veriler

### Together Web Sitesi ve Hizmet Telemetrisi
Together sayfaları ve hizmetleri; anonim sayfa görüntülemelerini, hizmet işlemlerini, yaklaşık ağ/cihaz niteliklerini ve tanılama olaylarını kaydetmek için **çerezsiz modda** (`disableCookiesUsage: true`) yapılandırılmış ve **Azure Doğu Asya (Hong Kong)** bölgesinde barındırılan Microsoft Azure Application Insights'ı kullanır. Web sitesi, dil tercihiniz için yalnızca kesinlikle gerekli tek bir yerel çerez (`nf_lang`) saklar. Ücretsiz açık kaynaklı başlatıcı telemetrisi ayrı olarak [XMCL Açık Kaynak Projesi Aydınlatma Metni](../privacy) ile düzenlenir.

### Hesaplar ve Kimlik Doğrulama
Bir XMCL Together hesabı oluşturduğunuzda veya kullandığınızda; hesap tanımlayıcılarını, kimlik doğrulama sağlayıcı tanımlayıcılarını, oturum ve yenileme belirteci (refresh-token) üst verilerini, verilen izin kapsamlarını, zaman damgalarını ve tekrar saldırılarını (replay) veya hesap kötüye kullanımını önlemek için kullanılan güvenlik telemetrisini işleriz. Microsoft veya diğer üçüncü taraf hesap şifrelerinizi **asla** almaz ve saklamayız.

### Faturalandırma ve Abonelikler
Hesap bakiyelerini, para birimi ve kur bilgilerini, siparişleri, abonelik durumunu, kullanım kotası dönemlerini, kullanım toplamlarını, iadeleri, itirazları, idempotency tanımlayıcılarını ve denetim kayıtlarını işleriz. Ödeme kartı ve ödeme sayfası bilgileri doğrudan **Waffo Pancake** tarafından işlenir. XMCL yalnızca işlem referanslarını, durumu, tutarı, para birimini ve imzalı webhook bildirimlerini alır; tam kart numaralarını veya güvenlik kodlarını (CVC/CVV) asla almaz ve saklamaz.

### Yapay Zeka (AI) Özellikleri
Bir yapay zeka özelliğini kullandığınızda; isteminizi (prompt), sohbet içeriğini, seçilen modeli ve paylaşmayı seçtiğiniz başlatıcı bağlamını (ör. örnek adı, oyun ve yükleyici sürümleri, seçili sayfa veya yerel örnek yolu) işleriz. Talepler yapılandırılmış yapay zeka sağlayıcılarımıza — şu anda **Agnes** ve gerektiğinde **DeepSeek** — iletilir. Faturalandırma ve kötüye kullanımı önleme amacıyla token sayılarını ve ağırlıklı kota kullanımını ölçeriz. İstemlerinizi veya çıktılarınızı kendi XMCL modelimizi eğitmek için kullanmayız.

> **Üçüncü Taraf Yapay Zeka Sağlayıcıları Uyarısı:** Harici yapay zeka sağlayıcıları (Agnes, DeepSeek) talep içeriklerini kendi gizlilik politikaları ve şartları uyarınca işler. Desteklenen durumlarda entegrasyonları "eğitim yapma" (no-training) modunu talep edecek şekilde yapılandırıyoruz; ancak harici API sağlayıcılarının dahili veri işleme uygulamalarını garanti edemeyiz. Lütfen yapay zeka istemlerine hassas kişisel veriler, şifreler veya gizli bilgiler girmeyin.

### Çok Oyunculu, Sinyalleşme ve TURN (P2P Bağlantı)
Together ve RTC özellikleri; hesap ve oturum tanımlayıcılarını, oda/eş yönlendirme üst verilerini, IP adreslerini, zaman damgalarını, TURN kimlik tanımlayıcılarını ve toplam gelen/giden veri kullanımını işler. **Cloudflare**, uç ağı, sinyalleşme, TURN ve trafik analitiği altyapısını sağlar.

> **P2P IP Adresi Paylaşımına Açık Rıza:** Eşler arası (P2P) bağlantı doğası gereği genel IP adresinizi çok oyunculu oturumdaki diğer eşe gösterir. P2P özelliklerini kullanarak, doğrudan bağlantı kurmak için gerekli olan bu teknik veri paylaşımını bildiğinizi ve buna açıkça rıza gösterdiğinizi kabul edersiniz. XMCL sinyalleşmesi yalnızca bağlantı üst verilerini yönlendirir; Minecraft ses, video veya oyun içi içerikleri kaydetmez.

### Destek ve Topluluk İletişimleri
Bizimle iletişime geçtiğinizde ilettiğiniz iletişim bilgilerini, hesap veya işlem referanslarını, tanılama kayıtlarını ve mesaj içeriğini işleriz. Lütfen şifre, erişim belirteci, tam ödeme kartı bilgisi veya ilgisiz özel nitelikli kişisel veri göndermeyin.

---

## 2. İşleme Amaçları ve Hukuki Sebepler

Kişisel verilerinizi aşağıdaki amaçlarla işliyoruz:
- XMCL Together hizmetlerini sunmak, kimlik doğrulamak, güvenliğini sağlamak ve sorunlarını gidermek;
- abonelikleri, bakiyeleri, kotaları, ödemeleri, iadeleri ve müşteri desteğini yürütmek;
- çok oyunculu bağlantıları yönlendirmek ve TURN bant genişliği kullanımını ölçmek;
- talep edilen yapay zeka yanıtlarını üretmek ve yapay zeka kotalarını ölçmek;
- dolandırıcılığı, tekrar saldırılarını, kötüye kullanımı ve güvenlik olaylarını önlemek;
- muhasebe, vergi, ödeme ağı, yasal yükümlülükler ve uyuşmazlık süreçlerine uymak.

**Hukuki Sebepler (KVKK Madde 5 / GDPR Madde 6 / Uluslararası Standartlar):**
- **Sözleşmenin kurulması veya ifası (KVKK m. 5/2-c / GDPR m. 6(1)(b)):** talep ettiğiniz hesap, abonelik, yapay zeka ve çok oyunculu hizmetlerin sunulması;
- **Hukuki yükümlülüğün yerine getirilmesi (KVKK m. 5/2-ç / GDPR m. 6(1)(c)):** finansal, vergisel ve ödeme denetim kayıtlarının saklanması;
- **Meşru menfaat (KVKK m. 5/2-f / GDPR m. 6(1)(f)):** altyapı güvenliğinin sağlanması, dolandırıcılık/kötüye kullanımın önlenmesi ve çerezsiz operasyonel tanılama;
- **Açık rıza (KVKK m. 5/1 ve m. 9 / GDPR m. 6(1)(a)):** isteğe bağlı yapay zeka istemleri, P2P IP adresi paylaşımı ve kanunen açık rıza gerektiren yurt dışı veri aktarımları.

---

## 3. Alt İşleyenler ve Yurt Dışına Veri Aktarımı

Yalnızca makul ölçüde gerekli olan verileri aşağıdaki altyapı ve hizmet sağlayıcılarıyla paylaşıyoruz:

| Alıcı | Amaç ve Veri Kategorileri | İşleme Bölgeleri | Gizlilik Politikası |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Ödeme sayfası, dolandırıcılık incelemesi, iadeler, webhook olayları (işlem ve ödeme üst verileri) | Küresel / Amerika Birleşik Devletleri / Singapur | Ödeme ekranında sunulur |
| **Cloudflare** | Workers, CDN, DDoS koruması, WebRTC sinyalleşmesi, TURN aktarımı (IP, oturum ve trafik üst verileri) | Küresel Uç Ağı / Amerika Birleşik Devletleri | [Cloudflare Gizlilik](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Barındırma, veritabanı, çerezsiz Application Insights (hesap, faturalandırma ve tanılama verileri) | Hong Kong (Doğu Asya), Amerika Birleşik Devletleri, AB | [Microsoft Gizlilik](https://privacy.microsoft.com/privacystatement) |
| **Vercel ve GitHub** | Web sitesi dağıtımı, sürümler, sorun ve güvenlik desteği | Amerika Birleşik Devletleri / Küresel Uç Ağı | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes ve DeepSeek** | Yapay zeka yanıt üretimi (istemler, sohbet bağlamı, model parametreleri) | Küresel / Çin (ÇHC) / Amerika Birleşik Devletleri | Sağlayıcı politikaları |

- **Yurt Dışına Aktarım Güvenceleri:** Türkiye, AEA, Birleşik Krallık veya İsviçre dışına yapılan aktarımlarda KVKK Madde 9 güvenceleri, AB Standart Sözleşme Maddeleri (SCC), Birleşik Krallık IDTA, aktarım sırasında TLS şifreleme ve sıkı veri minimizasyonu uygulanır.
- **Reddetmenin Sonuçları:** Hesap, ödeme ve sınır ötesi yönlendirme verilerinin sağlanması XMCL Together'ın çalışması için gereklidir. Bu işlemeyi veya yurt dışı aktarımı reddederseniz, ücretsiz çevrimdışı/açık kaynaklı XMCL başlatıcısını kullanmaya devam edebilirsiniz; ancak barındırılan XMCL Together özellikleri kullanılamaz.
- **Veri Satışı Yoktur:** Kişisel verilerinizi **satmıyor** ve davranışsal reklamcılık için paylaşmıyoruz.

---

## 4. Veri Saklama Süreleri

Sıkı saklama süreleri uyguluyoruz:
- **Operasyonel telemetri, yapay zeka kullanım ölçümleri ve TURN kayıtları:** **en fazla 90 gün** saklanır, ardından kalıcı olarak silinir veya geri döndürülemez biçimde anonimleştirilir.
- **Hesap ve oturum verileri:** hesap aktif olduğu sürece ve hesap silindikten sonra kurtarma ve uyuşmazlık çözümü amacıyla **30 gün** süreyle saklanır.
- **Finansal defter kayıtları, ödeme olayları, iadeler ve denetim kayıtları:** hesap kapatılsa dahi yasal muhasebe, vergi ve ödeme ağı yükümlülüklerine uymak amacıyla **5 ila 7 yıl** süreyle saklanır.
- Şifrelenmiş yedekler olağan döngü takvimine göre temizlenir.

---

## 5. Seçenekleriniz ve KVKK Madde 11 Kapsamındaki Haklarınız

### Türkiye (6698 Sayılı KVKK Madde 11) ve Uluslararası Haklar
Aşağıdaki haklara sahipsiniz:
- isteğe bağlı çevrimiçi özellikleri kapatmak veya üçüncü taraf hizmetlerin bağlantısını kesmek;
- tarayıcınız üzerinden `nf_lang` çerezini yönetmek;
- hesap arayüzünden Together Home yenilemesini istediğiniz zaman iptal etmek (mevcut ödeme döneminin sonunda geçerli olur);
- KVKK Madde 11 (ve GDPR Madde 15–22) uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, işlenme amacını ve yurt içi/yurt dışı aktarım yapılan üçüncü kişileri öğrenme, eksik/yanlış verilerin düzeltilmesini isteme, silinmesini/yok edilmesini ("unutulma hakkı") ve bu işlemlerin üçüncü kişilere bildirilmesini talep etme, işlemeyi kısıtlama, veri taşınabilirliği, itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme;
- önceki hukuka uygun işlemeleri etkilemeksizin açık rızanızı istediğiniz zaman geri çekme;
- **Yetkili Kuruma Şikâyet Hakkı:** Türkiye'de **Kişisel Verileri Koruma Kurumu'na (KVKK)** ([kvkk.gov.tr](https://www.kvkk.gov.tr)), AB'de ilgili ulusal veri koruma otoritesine veya Birleşik Krallık'ta **ICO**'ya ([ico.org.uk](https://ico.org.uk)) şikâyette bulunma.

### Kaliforniya ve ABD Eyalet Gizlilik Hakları (CCPA / CPRA)
XMCL kişisel verileri satmaz veya davranışsal reklamcılık için paylaşmaz; ilgili ABD eyalet yasaları kapsamındaki erişim, düzeltme, silme ve ayrımcılığa uğramama haklarına saygı duyar.

---

## 6. Veri Güvenliği

Kapsamlı oturum denetimleri, en az yetki ilkesi, aktarım sırasında TLS şifreleme, imzalı ödeme webhook'ları, tekrar saldırısı koruması, gizli anahtar izolasyonu ve sürekli izleme uyguluyoruz. Hiçbir çevrimiçi sistem %100 riskten muaf değildir; cihazınızı, oturumlarınızı ve üçüncü taraf kimlik bilgilerinizi korumak sizin sorumluluğunuzdadır.

---

## 7. Çocuklar ve Yaş Gereksinimleri

- **Ücretli Hizmetler ve Hesaplar:** XMCL Together hesapları ve ücretli özellikleri kullanabilmek için en az **18 yaşında** (veya yargı bölgenizdeki yasal reşit olma yaşında) olmanız ya da **veli veya yasal vasinizin doğrulanabilir onayına** sahip olmanız gerekir.
- **Dijital Rıza ve COPPA:** Doğrulanabilir ebeveyn/veli onayı olmaksızın **13 yaşından** (ABD/BK) veya yerel dijital rıza yaşından küçük çocuklardan bilerek kişisel veri toplamıyoruz. Ebeveynler veya veliler derhâl silme talebi için [cijhn@hotmail.com](mailto:cijhn@hotmail.com) adresinden bize ulaşabilir.

---

## 8. Değişiklikler, Geçerli Dil ve Sorumluluk Reddi

- **Değişiklikler:** Güncellemeleri yeni yürürlük tarihi ve sürüm numarasıyla burada yayımlarız ve kanunen gerekli hâllerde esaslı değişiklikler için önceden bildirimde bulunuruz.
- **Geçerli Dil:** Çeviri ile İngilizce sürüm arasında herhangi bir çelişki bulunması hâlinde, emredici yerel mevzuatın izin verdiği ölçüde İngilizce sürüm geçerli olur.
- **Minecraft Sorumluluk Reddi:** XMCL bağımsız bir projedir; Microsoft Corporation veya Mojang Studios ile bağlantılı değildir, bunlar tarafından desteklenmez veya onaylanmaz.

---

## 9. İletişim (Veri Sorumlusuna Başvuru)

**İşletmeci / Veri Sorumlusu İletişim (CI010):**
- Genel, faturalandırma, iade, hukuki talepler ve KVKK başvuruları: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Güvenlik bildirimleri: [GitHub özel güvenlik açığı bildirimi](https://github.com/voxelum/x-minecraft-launcher/security)
- Topluluk desteği: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Kaydınızı bulabilmemiz için yalnızca gerekli en az hesap veya işlem referansını paylaşın. Talebinizi yerine getirmeden önce hesap sahipliğinizi doğrulamanızı isteyebiliriz.
