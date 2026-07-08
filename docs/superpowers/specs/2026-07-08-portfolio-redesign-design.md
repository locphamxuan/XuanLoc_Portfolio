# Portfolio Redesign — Dark Modern Developer

**Ngày:** 2026-07-08 · **Nhánh:** `feature/portfolio-redesign`

## Mục tiêu

Redesign toàn bộ portfolio của Phạm Xuân Lộc (Fullstack Developer): giao diện dark modern, bỏ section Contact, thay 6 project mẫu bằng dự án GitHub thật, dọn sạch dependencies và file thừa.

## Định hướng thẩm mỹ

- Nền tối `#0a0e17` → `#111827`, chữ trắng ngà, accent cyan `#22d3ee` (link, hover, tag tech, con trỏ typing).
- Font Centra hiện có; heading đậm cỡ lớn; nội dung tiếng Việt, xưng "tôi".
- Hiệu ứng: fade/slide khi scroll vào view (`react-on-screen` + `animate.css`), card hover nâng nhẹ + viền phát sáng accent.

## Cấu trúc trang

1. **Navbar** — logo "XL"; link Home / Skills / Projects; icon GitHub (github.com/locphamxuan) + LinkedIn. Bỏ nút "Let's Connect". Nền trong suốt → đặc khi scroll. Điều hướng bằng anchor thuần (không react-router).
2. **Hero** — "Hi! I'm Xuân Lộc", hiệu ứng gõ chữ xoay vòng: Fullstack Developer / Frontend Developer / Backend Developer. Đoạn giới thiệu ngắn định vị là fullstack developer. Nút "Xem dự án" (anchor tới #projects) + nút "GitHub" (mở profile).
3. **Skills** — grid tag/badge: HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, MongoDB, Java. Bỏ carousel.
4. **Projects** — grid card 6 dự án (data hardcode trong `src/data/projects.js`). Mỗi card: tên, mô tả ngắn tiếng Việt, tag tech, link GitHub.
5. **Footer** — logo, "© 2026 Phạm Xuân Lộc", icon GitHub/LinkedIn. Bỏ Newsletter/Mailchimp.

## Danh sách dự án (6 card)

| Card | Repo | Ghi chú |
|------|------|---------|
| Parking Management System | ParkingManagement_FE_SWP391 / ParkingManagement_BE / ParkingManagement_Mobile | 1 card, 3 link FE/BE/Mobile |
| Football Community Platform | Football-Community-Platform | |
| Shoes E-Commerce | Shoes-E-Commerce | |
| Smoking Support System | SmokingSupportSystem | |
| Movie Web App | MovieWebApp | |
| Child Vaccine | ChildVaccine | |

(Đã loại CTXQ và SuDaiViet Admin theo yêu cầu user.)

## Dọn dẹp

- **Xóa component:** `Contact.js`, `Newsletter.js`, `MailchimpForm.js`.
- **Xóa asset không dùng:** `contact-img.svg`, `project-img1/2/3.png`, `meter1/2/3.svg`, `arrow1/2.svg`, và ảnh nền cũ nếu không tái sử dụng.
- **Gỡ dependency:** `react-bootstrap`, `bootstrap`, `react-mailchimp-subscribe`, `react-multi-carousel`, `react-router-dom`, `react-router-hash-link`, `react-bootstrap-icons`.
- **Giữ:** `animate.css`, `react-on-screen`, react-scripts (CRA).

## Kiểm thử

- Cập nhật `App.test.js`: render các section Hero, Skills, Projects, Footer; xác nhận không còn Contact.
- `npm test` và `npm run build` phải xanh.

## Quy trình

- Làm trên nhánh `feature/portfolio-redesign`; **không commit** cho đến khi user yêu cầu (commit message tiếng Anh, ngắn gọn).
