---
title: Thông báo Quyền riêng tư của Dự án Mã nguồn mở XMCL
description: Thông báo quyền riêng tư cho trang web XMCL và trình khởi chạy mã nguồn mở, tuân thủ Nghị định 13/2023/NĐ-CP của Việt Nam, EU GDPR, UK GDPR và các tiêu chuẩn bảo vệ dữ liệu quốc tế.
---

# Thông báo Quyền riêng tư của Dự án Mã nguồn mở XMCL

**Ngày có hiệu lực: 22 tháng 11 năm 2026 · Phiên bản: OP3-2026-11-22**

Thông báo này áp dụng cho trang web công khai của XMCL ([xmcl.app](https://xmcl.app)) và trình khởi chạy XMCL miễn phí, mã nguồn mở. Thông báo không áp dụng cho các tính năng trả phí, tài khoản, thanh toán, AI hoặc dịch vụ báo hiệu/TURN nhiều người chơi do XMCL Together cung cấp; các dịch vụ đó được điều chỉnh riêng bởi [Chính sách Quyền riêng tư XMCL Together](./together/privacy).

---

## 1. Bên Kiểm soát Dữ liệu và Liên hệ

XMCL là dự án mã nguồn mở độc lập do **CI010** và cộng đồng đóng góp Voxelum vận hành.
- **Yêu cầu về Quyền riêng tư & Pháp lý:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Kho Mã nguồn:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Báo cáo Lỗ hổng Bảo mật:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Hỗ trợ Cộng đồng:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Thông tin được Xử lý và Nguyên tắc Tối thiểu hóa Dữ liệu

XMCL tuân thủ nghiêm ngặt nguyên tắc tối thiểu hóa dữ liệu:

### Trang web Công khai (xmcl.app)
- **Phân tích Tổng hợp Không dùng Cookie:** Chúng tôi sử dụng Microsoft Azure Application Insights được cấu hình ở **chế độ không dùng cookie** (`disableCookiesUsage: true`) với máy chủ tiếp nhận đặt tại **Microsoft Azure Đông Á (Hồng Kông)** để ghi nhận lượt xem trang ẩn danh, lựa chọn tải xuống, thuộc tính mạng/thiết bị chung và user-agent của trình duyệt. Không có cookie phân tích hoặc theo dõi liên trang nào được lưu trên thiết bị của bạn.
- **Cookie Thực sự Cần thiết:** Chúng tôi chỉ lưu duy nhất một cookie chức năng cục bộ (`nf_lang`) thực sự cần thiết để ghi nhớ ngôn ngữ giao diện ưa thích của bạn. Chúng tôi không sử dụng cookie tiếp thị, quảng cáo hay theo dõi hành vi của bên thứ ba.

### Trình khởi chạy Mã nguồn mở
- **Dữ liệu đo từ xa & Chẩn đoán Tự nguyện (Opt-in):** Dữ liệu đo từ xa phục vụ chẩn đoán được **tắt theo mặc định**. Chỉ khi bạn chủ động bật tính năng đo từ xa trong cài đặt trình khởi chạy (đồng ý rõ ràng), trình khởi chạy mới có thể xử lý:
  - Mã định danh cài đặt/thiết bị giả danh được tạo ngẫu nhiên;
  - Các sự kiện vòng đời ứng dụng (khởi chạy trò chơi, mã thoát bình thường/lỗi, phiên bản ứng dụng);
  - Loại nhà cung cấp xác thực (ví dụ: Microsoft hoặc mã định danh xác thực ngoại tuyến);
  - Thông số cơ bản của môi trường chạy (hệ điều hành, phiên bản môi trường Java, kiến trúc CPU);
  - Nhật ký lỗi sự cố (crash logs) và dấu vết ngăn xếp (stack traces).
- **Làm sạch Dữ liệu & Thông tin Đăng nhập:** Nhật ký sự cố được lọc bỏ đường dẫn tệp nhạy cảm, tên người dùng và mã thông báo hệ thống ở mức khả thi. Chúng tôi **không bao giờ** xử lý hoặc lưu trữ mật khẩu, thông tin xác thực hay mã thông báo phiên tài khoản Microsoft/Mojang của bạn.

---

## 3. Thời hạn Lưu trữ Dữ liệu

Chúng tôi tránh việc lưu trữ vô thời hạn:
- Tất cả nhật ký đo từ xa, bản ghi lỗi chẩn đoán và chỉ số hiệu suất được lưu trữ **tối đa 90 ngày**, sau đó sẽ bị xóa vĩnh viễn hoặc ẩn danh không thể đảo ngược.
- Các báo cáo sự cố công khai trên GitHub vẫn tồn tại theo chính sách nền tảng GitHub và quy chế quản trị kho lưu trữ cho đến khi được giải quyết hoặc xóa.

---

## 4. Bên Xử lý Dữ liệu Phụ & Chuyển Dữ liệu Cá nhân ra Nước ngoài

XMCL sử dụng các nhà cung cấp hạ tầng toàn cầu để phân phối tệp tải xuống, trang web và chẩn đoán tùy chọn:

| Nhà cung cấp | Vai trò & Dữ liệu được Xử lý | Khu vực Xử lý | Chính sách Quyền riêng tư |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Phân tích web không cookie, chẩn đoán trình khởi chạy tùy chọn | Hồng Kông (Đông Á), Hoa Kỳ, Liên minh Châu Âu (EU) | [Quyền riêng tư Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, định tuyến biên, bảo vệ chống DDoS | Mạng Biên Toàn cầu / Hoa Kỳ | [Quyền riêng tư Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Lưu trữ mã nguồn, bản phát hành, theo dõi sự cố | Hoa Kỳ | [Quyền riêng tư GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Lưu trữ và phân phối trang web | Hoa Kỳ / Mạng Biên Toàn cầu | [Quyền riêng tư Vercel](https://vercel.com/legal/privacy-policy) |

- **Thông báo Chuyển Dữ liệu ra Nước ngoài & Biện pháp Bảo vệ:** Khi dữ liệu kỹ thuật được chuyển ra khỏi lãnh thổ Việt Nam, Khu vực Kinh tế Châu Âu (EEA), Vương quốc Anh hoặc Thụy Sĩ, chúng tôi áp dụng mã hóa khi truyền tải, nguyên tắc tối thiểu hóa dữ liệu, Điều khoản Hợp đồng Tiêu chuẩn của Ủy ban Châu Âu (SCCs), Thỏa thuận IDTA của Vương quốc Anh và các biện pháp bảo vệ tương đương phù hợp với **Nghị định số 13/2023/NĐ-CP** của Việt Nam.
- **Quyền Từ chối:** Bạn có thể từ chối việc chuyển dữ liệu chẩn đoán của trình khởi chạy ra nước ngoài đơn giản bằng cách giữ nguyên trạng thái tắt của tính năng đo từ xa (trạng thái mặc định).
- **Không Bán Dữ liệu:** Chúng tôi không bao giờ bán thông tin cá nhân hoặc chia sẻ dữ liệu cho mục đích quảng cáo hành vi liên ngữ cảnh.

---

## 5. Quy định Theo Khu vực và Quyền, Nghĩa vụ của Chủ thể Dữ liệu

### Việt Nam (Nghị định số 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân)
- **Quyền của Chủ thể Dữ liệu (Điều 9 Nghị định 13/2023/NĐ-CP):** Bạn có quyền được biết về hoạt động xử lý dữ liệu; quyền đồng ý hoặc không đồng ý; quyền truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa; quyền rút lại sự đồng ý; quyền xóa dữ liệu; quyền hạn chế xử lý; quyền yêu cầu cung cấp dữ liệu; quyền phản đối xử lý; quyền khiếu nại, tố cáo, khởi kiện theo quy định pháp luật (bao gồm phản ánh tới cơ quan quản lý có thẩm quyền như Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao — Bộ Công an); và quyền yêu cầu bồi thường thiệt hại.
- **Nghĩa vụ của Chủ thể Dữ liệu (Điều 10 Nghị định 13/2023/NĐ-CP):** Bạn có nghĩa vụ tự bảo vệ dữ liệu cá nhân của mình; tôn trọng và bảo vệ dữ liệu cá nhân của người khác; cung cấp đầy đủ, chính xác dữ liệu khi đồng ý cho phép xử lý; và tuân thủ các quy định pháp luật về bảo vệ dữ liệu cá nhân.
- **Bảo vệ Dữ liệu Trẻ em (Điều 20 Nghị định 13/2023/NĐ-CP):** Việc xử lý dữ liệu cá nhân của trẻ em phải có sự đồng ý của trẻ em (từ đủ 7 tuổi trở lên) và của cha, mẹ hoặc người giám hộ theo quy định pháp luật.

### Liên minh Châu Âu / EEA (GDPR), Vương quốc Anh (UK GDPR) và Hoa Kỳ (COPPA, CCPA / CPRA)
- **EU / EEA & Vương quốc Anh:** Cơ sở pháp lý gồm sự đồng ý (Điều 6(1)(a) GDPR) cho đo từ xa tùy chọn và lợi ích hợp pháp (Điều 6(1)(f) GDPR) cho bảo mật hạ tầng và phân tích không cookie. Bạn có đầy đủ các quyền theo Điều 15–22 GDPR và quyền khiếu nại lên cơ quan giám sát quốc gia hoặc ICO Vương quốc Anh ([ico.org.uk](https://ico.org.uk)).
- **Hoa Kỳ (COPPA & CCPA / CPRA):** XMCL không nhắm đến trẻ em dưới 13 tuổi và không bán hay chia sẻ dữ liệu cá nhân cho quảng cáo hành vi. Cha mẹ hoặc người giám hộ có thể liên hệ [cijhn@hotmail.com](mailto:cijhn@hotmail.com) để yêu cầu xóa ngay lập tức.

### Các Khu vực Pháp lý Khác
- Chúng tôi tôn trọng các quyền tương đương của chủ thể dữ liệu theo pháp luật hiện hành trên toàn thế giới.

---

## 6. Cách Thực hiện Quyền của Bạn

Để thực hiện quyền truy cập, chỉnh sửa, xóa dữ liệu hoặc rút lại sự đồng ý, vui lòng liên hệ **CI010** qua email **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Ngôn ngữ Áp dụng & Tuyên bố Miễn trừ Trách nhiệm

- **Ngôn ngữ Áp dụng:** Các bản dịch của thông báo này được cung cấp để thuận tiện tham khảo. Trong trường hợp có bất kỳ sự khác biệt nào giữa bản dịch và bản tiếng Anh, bản tiếng Anh sẽ được ưu tiên áp dụng trong phạm vi pháp luật bắt buộc tại địa phương cho phép.
- **Tuyên bố Miễn trừ về Minecraft & Mojang:** XMCL là dự án phần mềm mã nguồn mở độc lập, không liên kết, không được ủy quyền, tài trợ hay chứng thực bởi Microsoft Corporation hoặc Mojang Studios.
