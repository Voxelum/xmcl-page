---
title: Chính sách Quyền riêng tư XMCL Together
description: Cách XMCL Together xử lý thông tin tài khoản, thanh toán, AI và dịch vụ nhiều người chơi theo Nghị định 13/2023/NĐ-CP của Việt Nam và luật bảo vệ dữ liệu quốc tế.
---

# Chính sách Quyền riêng tư XMCL Together

**Ngày có hiệu lực: 22 tháng 11 năm 2026 · Phiên bản: P4-2026-11-22**

Chính sách này giải thích cách **CI010**, hoạt động với tư cách nhà vận hành cá nhân dưới tên Voxelum và XMCL ("XMCL Together", "chúng tôi"), xử lý thông tin khi bạn sử dụng tài khoản XMCL Together, các dịch vụ trả phí hoặc các tính năng trực tuyến liên quan tại [xmcl.app](https://xmcl.app). Chính sách này không điều chỉnh các dịch vụ độc lập mà bạn chọn kết nối như Microsoft, Mojang, máy chủ xác thực bên thứ ba, Modrinth hoặc CurseForge.

---

## 1. Thông tin Chúng tôi Xử lý

### Trang web Together và Dữ liệu đo từ xa của Dịch vụ
Các trang và dịch vụ Together sử dụng Microsoft Azure Application Insights được cấu hình ở **chế độ không dùng cookie** (`disableCookiesUsage: true`), đặt tại **Azure Đông Á (Hồng Kông)**, để ghi nhận lượt xem trang ẩn danh, thao tác dịch vụ, thuộc tính mạng/thiết bị gần đúng và sự kiện chẩn đoán. Trang web chỉ lưu duy nhất một cookie cục bộ thực sự cần thiết (`nf_lang`) để ghi nhớ ngôn ngữ của bạn. Dữ liệu đo từ xa từ trình khởi chạy mã nguồn mở miễn phí được điều chỉnh riêng bởi [Thông báo Quyền riêng tư Dự án Mã nguồn mở XMCL](../privacy).

### Tài khoản và Xác thực
Khi bạn tạo hoặc sử dụng tài khoản XMCL Together, chúng tôi xử lý mã định danh tài khoản, mã định danh nhà cung cấp xác thực, siêu dữ liệu phiên và refresh-token, phạm vi quyền được cấp, dấu thời gian và dữ liệu đo từ xa về bảo mật nhằm ngăn chặn tấn công phát lại (replay) hoặc lạm dụng tài khoản. Chúng tôi **không bao giờ** tiếp nhận hoặc lưu trữ mật khẩu tài khoản Microsoft hay tài khoản bên thứ ba khác của bạn.

### Thanh toán và Gói đăng ký
Chúng tôi xử lý số dư tài khoản, thông tin tiền tệ và tỷ giá, đơn hàng, trạng thái gói đăng ký, chu kỳ hạn mức, tổng mức sử dụng, hoàn tiền, tranh chấp, mã định danh chống trùng lặp (idempotency) và nhật ký kiểm toán. **Waffo Pancake** trực tiếp xử lý thông tin thẻ thanh toán và quá trình thanh toán. XMCL chỉ nhận mã tham chiếu giao dịch, trạng thái, số tiền, đơn vị tiền tệ và sự kiện webhook đã ký số; chúng tôi không bao giờ nhận hoặc lưu trữ số thẻ đầy đủ hay mã bảo mật (CVC/CVV).

### Tính năng Trí tuệ Nhân tạo (AI)
Khi bạn sử dụng tính năng AI, chúng tôi xử lý nội dung câu lệnh (prompt), nội dung hội thoại, mô hình đã chọn và ngữ cảnh trình khởi chạy mà bạn chọn cung cấp (như tên phiên bản cài đặt, phiên bản trò chơi và loader, trang đang chọn hoặc đường dẫn thư mục cục bộ). Các yêu cầu được gửi tới các nhà cung cấp AI đã cấu hình của chúng tôi, hiện là **Agnes** và khi cần thiết là **DeepSeek**. Chúng tôi đo lường số lượng token và hạn mức sử dụng có trọng số để tính phí và ngăn chặn lạm dụng. Chúng tôi không sử dụng câu lệnh hoặc kết quả của bạn để huấn luyện mô hình AI của riêng XMCL.

> **Tuyên bố Miễn trừ về Nhà cung cấp AI Bên thứ ba:** Các nhà cung cấp AI bên ngoài (Agnes, DeepSeek) xử lý dữ liệu yêu cầu theo chính sách quyền riêng tư và điều khoản riêng của họ. Chúng tôi cấu hình tích hợp để yêu cầu chế độ "không huấn luyện" (no-training) ở nơi được hỗ trợ, nhưng không thể đảm bảo quy trình xử lý dữ liệu nội bộ của nhà cung cấp API bên ngoài. Vui lòng không nhập dữ liệu cá nhân nhạy cảm, mật khẩu hoặc thông tin mật vào câu lệnh AI.

### Chơi Nhiều người, Báo hiệu và TURN (Kết nối P2P)
Các tính năng Together và RTC xử lý mã định danh tài khoản và phiên, siêu dữ liệu định tuyến phòng/ngang hàng, địa chỉ IP, dấu thời gian, mã định danh chứng chỉ TURN và lưu lượng vào/ra tổng hợp. **Cloudflare** cung cấp hạ tầng mạng biên, báo hiệu, chuyển tiếp TURN và phân tích lưu lượng.

> **Sự đồng ý về Hiển thị Địa chỉ IP trong Kết nối P2P:** Kết nối ngang hàng (P2P) theo bản chất kỹ thuật sẽ hiển thị địa chỉ IP công khai của bạn cho người chơi khác trong phiên nhiều người chơi. Bằng việc sử dụng tính năng P2P, bạn hiểu rõ và đồng ý rõ ràng với việc tiết lộ dữ liệu kỹ thuật cần thiết này để thiết lập kết nối trực tiếp. Hệ thống báo hiệu của XMCL chỉ định tuyến siêu dữ liệu kết nối và không ghi âm giọng nói, video hay nội dung chơi Minecraft.

### Hỗ trợ và Liên lạc Cộng đồng
Khi bạn liên hệ với chúng tôi, chúng tôi xử lý thông tin liên hệ, mã tham chiếu tài khoản hoặc giao dịch, dữ liệu chẩn đoán và nội dung tin nhắn bạn gửi. Không gửi mật khẩu, mã thông báo truy cập, dữ liệu thẻ thanh toán đầy đủ hoặc dữ liệu cá nhân nhạy cảm không liên quan.

---

## 2. Mục đích và Cơ sở Pháp lý Xử lý Dữ liệu

Chúng tôi xử lý thông tin nhằm:
- cung cấp, xác thực, bảo mật và khắc phục sự cố cho dịch vụ XMCL Together;
- vận hành gói đăng ký, số dư, hạn mức, thanh toán, hoàn tiền và hỗ trợ khách hàng;
- định tuyến kết nối nhiều người chơi và đo lường băng thông TURN;
- tạo phản hồi AI theo yêu cầu và đo lường hạn mức AI;
- ngăn chặn gian lận, tấn công phát lại, lạm dụng và sự cố bảo mật;
- tuân thủ nghĩa vụ kế toán, thuế, quy định mạng lưới thanh toán, pháp luật và giải quyết tranh chấp.

**Cơ sở Pháp lý (Nghị định 13/2023/NĐ-CP của Việt Nam / GDPR / UK GDPR / Quốc tế):**
- **Thực hiện hợp đồng (Điều 17 Nghị định 13/2023/NĐ-CP / Điều 6(1)(b) GDPR):** cung cấp tài khoản, gói đăng ký, tính năng AI và chơi nhiều người mà bạn yêu cầu;
- **Nghĩa vụ pháp lý (Điều 6(1)(c) GDPR / pháp luật kế toán, thuế):** lưu trữ hồ sơ tài chính, thuế và kiểm toán thanh toán;
- **Lợi ích hợp pháp (Điều 6(1)(f) GDPR):** bảo mật hạ tầng, phòng chống gian lận/lạm dụng và chẩn đoán vận hành không dùng cookie;
- **Sự đồng ý rõ ràng (Điều 11 Nghị định 13/2023/NĐ-CP / Điều 6(1)(a) GDPR):** câu lệnh AI tùy chọn, hiển thị địa chỉ IP P2P và chuyển dữ liệu cá nhân ra nước ngoài khi pháp luật yêu cầu.

---

## 3. Bên Xử lý Dữ liệu Phụ & Chuyển Dữ liệu Cá nhân ra Nước ngoài

Chúng tôi chỉ chia sẻ thông tin ở mức hợp lý và cần thiết với các nhà cung cấp hạ tầng và dịch vụ sau:

| Bên nhận dữ liệu | Mục đích & Danh mục Dữ liệu | Khu vực Xử lý | Chính sách Quyền riêng tư |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Cổng thanh toán, rà soát gian lận, hoàn tiền, sự kiện webhook (siêu dữ liệu giao dịch & thanh toán) | Toàn cầu / Hoa Kỳ / Singapore | Cung cấp tại trang thanh toán |
| **Cloudflare** | Workers, CDN, bảo vệ DDoS, báo hiệu WebRTC, chuyển tiếp TURN (IP, phiên & siêu dữ liệu lưu lượng) | Mạng Biên Toàn cầu / Hoa Kỳ | [Quyền riêng tư Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Lưu trữ máy chủ, cơ sở dữ liệu, Application Insights không cookie (dữ liệu tài khoản, thanh toán & chẩn đoán) | Hồng Kông (Đông Á), Hoa Kỳ, Liên minh Châu Âu (EU) | [Quyền riêng tư Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Phân phối trang web, bản phát hành, hỗ trợ sự cố & bảo mật | Hoa Kỳ / Mạng Biên Toàn cầu | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Tạo phản hồi AI (câu lệnh, ngữ cảnh hội thoại, tham số mô hình) | Toàn cầu / Trung Quốc (CHNDTH) / Hoa Kỳ | Chính sách của nhà cung cấp |

- **Thông báo Chuyển Dữ liệu Cá nhân ra Nước ngoài (Điều 25 Nghị định 13/2023/NĐ-CP & GDPR):** Vì XMCL Together vận hành trên hạ tầng đám mây toàn cầu, dữ liệu cá nhân của bạn sẽ được chuyển ra ngoài lãnh thổ Việt Nam (đến Hồng Kông, Hoa Kỳ, Singapore, EU hoặc Trung Quốc tùy theo tính năng sử dụng). Các hoạt động chuyển dữ liệu này áp dụng mã hóa TLS khi truyền tải, Điều khoản Hợp đồng Tiêu chuẩn của EU (SCCs), IDTA của Vương quốc Anh và nguyên tắc tối thiểu hóa dữ liệu nghiêm ngặt.
- **Hậu quả của việc Từ chối:** Việc cung cấp dữ liệu tài khoản, thanh toán và định tuyến xuyên biên giới là điều kiện cần thiết để vận hành XMCL Together. Nếu bạn từ chối việc xử lý hoặc chuyển dữ liệu ra nước ngoài này, bạn vẫn có thể sử dụng trình khởi chạy XMCL mã nguồn mở miễn phí ở chế độ ngoại tuyến, nhưng các tính năng trực tuyến của XMCL Together sẽ không khả dụng.
- **Không Bán Dữ liệu:** Chúng tôi **không** bán thông tin cá nhân hoặc chia sẻ dữ liệu cho mục đích quảng cáo hành vi liên ngữ cảnh.

---

## 4. Thời hạn Lưu trữ Dữ liệu

Chúng tôi áp dụng thời hạn lưu trữ nghiêm ngặt:
- **Dữ liệu đo từ xa vận hành, chỉ số sử dụng AI và đo lường TURN:** lưu trữ **tối đa 90 ngày**, sau đó bị xóa vĩnh viễn hoặc ẩn danh không thể đảo ngược.
- **Dữ liệu tài khoản và phiên đăng nhập:** lưu trữ trong thời gian tài khoản còn hoạt động, cộng thêm **30 ngày** sau khi xóa tài khoản để phục vụ khôi phục và giải quyết tranh chấp.
- **Bút toán tài chính, sự kiện thanh toán, hoàn tiền và hồ sơ kiểm toán:** lưu trữ từ **5 đến 7 năm** để tuân thủ nghĩa vụ luật định về kế toán, thuế và mạng lưới thanh toán, kể cả sau khi đóng tài khoản.
- Các bản sao lưu mã hóa được xóa theo chu kỳ luân chuyển định kỳ.

---

## 5. Quyền, Nghĩa vụ và Lựa chọn của Bạn

### Việt Nam (Nghị định số 13/2023/NĐ-CP — Điều 9 & Điều 10) và Quyền Quốc tế
Bạn có quyền:
- tắt các tính năng trực tuyến tùy chọn hoặc ngắt kết nối dịch vụ bên thứ ba;
- quản lý cookie `nf_lang` thông qua trình duyệt của bạn;
- hủy gia hạn gói Together Home bất kỳ lúc nào trong giao diện tài khoản (có hiệu lực vào cuối kỳ thanh toán hiện tại);
- thực hiện đầy đủ các **quyền của chủ thể dữ liệu theo Điều 9 Nghị định 13/2023/NĐ-CP** (và Điều 15–22 GDPR): quyền được biết, quyền đồng ý, quyền truy cập, chỉnh sửa, yêu cầu xóa dữ liệu ("quyền được lãng quên"), hạn chế xử lý, cung cấp dữ liệu, phản đối xử lý và rút lại sự đồng ý bất kỳ lúc nào mà không ảnh hưởng đến tính hợp pháp của việc xử lý trước đó;
- thực hiện quyền khiếu nại, tố cáo, khởi kiện tới cơ quan nhà nước có thẩm quyền (tại Việt Nam: Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao — Bộ Công an; tại EU/Anh: cơ quan bảo vệ dữ liệu quốc gia hoặc ICO tại [ico.org.uk](https://ico.org.uk)).

Đồng thời, theo **Điều 10 Nghị định 13/2023/NĐ-CP**, bạn có nghĩa vụ tự bảo vệ dữ liệu cá nhân của mình, tôn trọng và bảo vệ dữ liệu cá nhân của người khác, cung cấp thông tin chính xác khi đồng ý xử lý dữ liệu và tuân thủ quy định pháp luật hiện hành.

### Quyền Quyền riêng tư tại California & các Bang Hoa Kỳ (CCPA / CPRA)
XMCL không bán thông tin cá nhân hay chia sẻ cho mục đích quảng cáo hành vi và tôn trọng các quyền được biết, truy cập, xóa, chỉnh sửa và không bị phân biệt đối xử theo luật liên quan.

---

## 6. Bảo mật Dữ liệu

Chúng tôi triển khai phiên giới hạn phạm vi, kiểm soát truy cập đặc quyền tối thiểu, mã hóa TLS khi truyền tải, webhook thanh toán có chữ ký số, chống tấn công phát lại, cô lập khóa bí mật và giám sát liên tục. Không hệ thống trực tuyến nào an toàn tuyệt đối 100%; bạn có trách nhiệm bảo vệ thiết bị, phiên đăng nhập và thông tin xác thực bên thứ ba của mình.

---

## 7. Trẻ em và Yêu cầu về Độ tuổi

- **Dịch vụ Trả phí & Tài khoản:** Để tạo tài khoản XMCL Together hoặc sử dụng tính năng trả phí, bạn phải đủ **18 tuổi trở lên** (hoặc độ tuổi thành niên theo pháp luật tại nơi cư trú), hoặc có **sự đồng ý có thể xác minh của cha mẹ hoặc người giám hộ hợp pháp**.
- **Bảo vệ Dữ liệu Trẻ em (Nghị định 13/2023/NĐ-CP & COPPA):** Chúng tôi không cố ý thu thập dữ liệu cá nhân của trẻ em dưới độ tuổi quy định mà không có sự đồng ý hợp lệ của cha mẹ hoặc người giám hộ (và của trẻ em từ đủ 7 tuổi trở lên theo Điều 20 Nghị định 13/2023/NĐ-CP). Cha mẹ hoặc người giám hộ có thể liên hệ [cijhn@hotmail.com](mailto:cijhn@hotmail.com) để yêu cầu xóa ngay lập tức.

---

## 8. Thay đổi Chính sách, Ngôn ngữ Áp dụng & Tuyên bố Miễn trừ

- **Thay đổi:** Chúng tôi sẽ đăng tải các bản cập nhật tại đây kèm ngày có hiệu lực và số phiên bản mới, đồng thời thông báo trước đối với các thay đổi trọng yếu theo quy định pháp luật.
- **Ngôn ngữ Áp dụng:** Trong trường hợp có sự khác biệt giữa bản dịch và bản tiếng Anh, bản tiếng Anh sẽ được ưu tiên áp dụng trong phạm vi pháp luật bắt buộc tại địa phương cho phép.
- **Tuyên bố Miễn trừ về Minecraft:** XMCL là dự án độc lập và không liên kết, không được tài trợ hay chứng thực bởi Microsoft Corporation hoặc Mojang Studios.

---

## 9. Thông tin Liên hệ

**Nhà vận hành / Đầu mối Liên hệ Quyền riêng tư (CI010):**
- Yêu cầu chung, thanh toán, hoàn tiền, pháp lý và quyền riêng tư: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Báo cáo bảo mật: [Báo cáo lỗ hổng riêng tư trên GitHub](https://github.com/voxelum/x-minecraft-launcher/security)
- Hỗ trợ cộng đồng: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Chỉ cung cấp thông tin tham chiếu tài khoản hoặc giao dịch tối thiểu cần thiết để tra cứu hồ sơ của bạn. Chúng tôi có thể yêu cầu xác minh quyền sở hữu tài khoản trước khi xử lý yêu cầu.
