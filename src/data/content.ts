import tb201_main from '../assets/projects/tb-201/Phòng khách.jpg';
import tb201_1 from '../assets/projects/tb-201/Bếp.jpg';
import tb201_2 from '../assets/projects/tb-201/Ngủ 1.jpg';
import tb201_3 from '../assets/projects/tb-201/Ngủ 2.jpg';
import tb201_4 from '../assets/projects/tb-201/Phòng khách 2.jpg';

import tb202_main from '../assets/projects/tb-202/Phòng khách.jpg';
import tb202_1 from '../assets/projects/tb-202/Ngủ Master.jpg';
import tb202_2 from '../assets/projects/tb-202/Ngủ trẻ con.jpg';
import tb202_3 from '../assets/projects/tb-202/Phòng bếp.jpg';

import kba_main from '../assets/projects/kb-a/IMG_7559.jpg';
import kba_1 from '../assets/projects/kb-a/IMG_7560.jpg';
import kba_2 from '../assets/projects/kb-a/IMG_7561.jpg';
import kba_3 from '../assets/projects/kb-a/IMG_7562.jpg';
import kba_4 from '../assets/projects/kb-a/IMG_7564.jpg';
import kba_5 from '../assets/projects/kb-a/IMG_7565.jpg';

import kbb_main from '../assets/projects/kb-b/IMG_3908.jpg';
import kbb_1 from '../assets/projects/kb-b/IMG_3910.jpg';
import kbb_2 from '../assets/projects/kb-b/IMG_3915.jpg';
import kbb_3 from '../assets/projects/kb-b/IMG_3916.jpg';
import kbb_4 from '../assets/projects/kb-b/IMG_3917.jpg';
import kbb_5 from '../assets/projects/kb-b/IMG_3921.jpg';
import kbb_6 from '../assets/projects/kb-b/IMG_3922.jpg';

import kbc_main from '../assets/projects/kb-c/IMG_3837.jpg';
import kbc_1 from '../assets/projects/kb-c/IMG_3838.jpg';
import kbc_2 from '../assets/projects/kb-c/IMG_3839.jpg';
import kbc_3 from '../assets/projects/kb-c/IMG_3840.jpg';
import kbc_4 from '../assets/projects/kb-c/IMG_3841.jpg';
import kbc_5 from '../assets/projects/kb-c/IMG_3842.jpg';
import kbc_6 from '../assets/projects/kb-c/IMG_3843.jpg';

export interface Project {
  id: number;
  slug: string;
  type: 'image' | 'video';
  title: string;
  category: string;
  image: string;
  description: string;
  gallery?: string[];
  videoSrc?: string;
  poster?: string;
}

export const websiteContent = {
  header: {
    logo: "Nội Thất Tùng Bách",
    nav: [
      { label: "Trang chủ", href: "/#home" },
      { label: "Về chúng tôi", href: "/#about" },
      { label: "Căn hộ mẫu", href: "/#portfolio" },
      { label: "Đánh giá", href: "/#reviews" },
      { label: "Liên hệ", href: "/#contact" }
    ]
  },
  hero: {
    title: "Nâng Tầm Không Gian Sống Của Bạn",
    subtitle: "Chuyên thiết kế và thi công nội thất hiện đại, mang lại sự sang trọng và tiện nghi cho ngôi nhà của bạn.",
    cta: "Nhận Tư Vấn Miễn Phí",
    ctaLink: "/#contact"
  },
  about: {
    title: "Về Chúng Tôi",
    description: "Nội Thất Tùng Bách được thành lập với sứ mệnh ban đầu là đáp ứng nhu cầu kiến tạo tổ ấm cho cư dân tại khu NOXH Tùng Bách, Phương Liễu, Bắc Ninh. Chúng tôi không chỉ là đơn vị nội thất, mà là người đồng hành giúp bạn hiện thực hóa ngôi nhà mơ ước từ những bước đầu tiên.",
    stats: [
      { label: "Căn hộ tại CT1-CT4", value: "100+" },
      { label: "Năm kinh nghiệm", value: "10+" }
    ],
    values: [
      {
        title: "Chất lượng hàng đầu",
        description: "Đặt chất lượng sản phẩm và dịch vụ lên trên hết, đảm bảo sự bền vững theo thời gian."
      },
      {
        title: "Cá nhân hóa",
        description: "Mọi thiết kế đều dựa trên nhu cầu và phong cách sống riêng biệt của từng gia chủ."
      },
      {
        title: "Tối ưu tiện nghi",
        description: "Tập trung vào giải pháp không gian thông minh, tối ưu hóa sự thoải mái cho việc sử dụng lâu dài."
      }
    ],
    services: [
      "Tư vấn thiết kế kiến trúc & nội thất",
      "Môi giới và hỗ trợ thủ tục căn hộ",
      "Xây dựng và cải tạo phần thô",
      "Sản xuất và lắp đặt nội thất từ A-Z"
    ]
  },
  portfolio: {
    title: "Căn Hộ Mẫu Thực Tế",
    subtitle: "Khám phá các căn hộ mẫu và căn hộ đã hoàn thiện.",
    projects: [
      {
        id: 1,
        slug: "noxh-tung-bach-ct01-201",
        type: "image",
        title: "Dự án NOXH Tùng Bách CT01.201",
        category: "Căn hộ mẫu",
        image: tb201_main,
        description: "Dự án thi công hoàn thiện căn hộ 201 tại tòa CT1 khu NOXH Tùng Bách với phong cách hiện đại, tối ưu công năng sử dụng.",
        gallery: [tb201_main, tb201_1, tb201_2, tb201_3, tb201_4],
        videoSrc: "https://www.youtube.com/embed/0Va4VudF4_o"
      },
      {
        id: 2,
        slug: "noxh-tung-bach-ct01-202",
        type: "image",
        title: "Dự án NOXH Tùng Bách CT01.202",
        category: "Căn hộ mẫu",
        image: tb202_main,
        description: "Dự án thi công nội thất căn hộ 202 tòa CT1 Tùng Bách, tập trung vào sự ấm cúng và tinh tế cho gia đình.",
        gallery: [tb202_main, tb202_1, tb202_2, tb202_3]
      },
      {
        id: 3,
        slug: "noxh-kinh-bac-toa-c-a",
        type: "image",
        title: "Dự án NOXH Kinh Bắc - Căn A",
        category: "Căn hộ mẫu",
        image: kba_main,
        description: "Thiết kế phối cảnh căn hộ loại A tại tòa C khu NOXH Kinh Bắc với không gian mở rộng rãi.",
        gallery: [kba_main, kba_1, kba_2, kba_3, kba_4, kba_5]
      },
      {
        id: 4,
        slug: "noxh-kinh-bac-toa-c-b",
        type: "image",
        title: "Dự án NOXH Kinh Bắc - Căn B",
        category: "Căn hộ mẫu",
        image: kbb_main,
        description: "Giải pháp thiết kế thông minh cho căn hộ loại B tòa C Kinh Bắc, đảm bảo đầy đủ tiện nghi.",
        gallery: [kbb_main, kbb_1, kbb_2, kbb_3, kbb_4, kbb_5, kbb_6]
      },
      {
        id: 5,
        slug: "noxh-kinh-bac-toa-c-c",
        type: "image",
        title: "Dự án NOXH Kinh Bắc - Căn C",
        category: "Căn hộ mẫu",
        image: kbc_main,
        description: "Nội thất căn hộ loại C tòa C Kinh Bắc, sự kết hợp hoàn hảo giữa màu sắc và chất liệu.",
        gallery: [kbc_main, kbc_1, kbc_2, kbc_3, kbc_4, kbc_5, kbc_6]
      }
    ] as Project[]
  },
  reviews: {
    title: "Khách Hàng Nói Gì",
    testimonials: [
      { id: 1, name: "Anh Nam", role: "Khách hàng dự án Kinh Bắc", comment: "Rất hài lòng với sự chuyên nghiệp và tiến độ thi công của Tùng Bách. Không gian sống mới thật sự tuyệt vời.", rating: 5 },
      { id: 2, name: "Chị Lan", role: "Khách hàng dự án Tùng Bách", comment: "Đội ngũ kiến trúc sư lắng nghe và đưa ra những tư vấn rất thực tế. Đồ nội thất chất lượng, sắc nét.", rating: 5 }
    ]
  },
  contact: {
    title: "Liên Hệ Với Chúng Tôi",
    info: {
      address: "Địa chỉ: Căn 01.07 - Toà nhà CT1 Khu NOXH Tùng Bách, Phường Phương Liễu, Tỉnh Bắc Ninh",
      phone: "Hotline: 098.689.8877 - 091.286.6810 - 091.675.6000",
      email: "Email: noithattungbachct1.107@gmail.com",
      zalo: "Zalo: 098.689.8877"
    },
    form: {
      namePlaceholder: "Họ và tên",
      phonePlaceholder: "Số điện thoại",
      emailPlaceholder: "Email (Không bắt buộc)",
      addressPlaceholder: "Địa chỉ căn hộ cần thiết kế",
      messagePlaceholder: "Yêu cầu chi tiết của bạn",
      submitButton: "Gửi Yêu Cầu",
      privacyClause: "Chúng tôi cam đoan bảo mật số điện thoại và thông tin của bạn."
    }
  },
  footer: {
    copyright: "© 2026 Nội Thất Tùng Bách. All rights reserved."
  }
};
