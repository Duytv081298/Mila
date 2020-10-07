const data = {
  users: [
    {
      id: "1",
      name: 'Trịnh Văn Duy',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2Favatars%2F19025117_357590297977621_6041579481536350082_o.jpg?alt=media&token=b0e0fd77-144e-461d-bb8e-f949edb2ee0a',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2FcoverImages%2F14448816_232340780502574_3561813144042596751_n.jpg?alt=media&token=a57da35f-1bfd-4a1a-984d-98a7e6663d85',
      followers: 23,
      following: 122
    },
    {
      id: "2",
      name: 'Nguyễn Thị Anh Anh',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2Favatars%2F82344162_2204585263180688_3166156028395913216_o.jpg?alt=media&token=4c07141b-e7b2-4a9d-8e22-5f0179ae86d0',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2FcoverImages%2F66260801_2062627477376468_7857090232158519296_o.jpg?alt=media&token=bb3ae1ec-3eaa-4eb1-ae11-54db44aa1213',
      followers: 34,
      following: 233
    },

    {
      id: "3",
      name: 'Trần Trung Hiếu',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2Favatars%2F82444894_216660219359000_6395340212234354688_n.jpg?alt=media&token=169d6148-b6eb-44fc-aa0d-615e507c4e3f',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2FcoverImages%2Fanh-hoa-anh-dao-nhat-dep_102503421.jpg?alt=media&token=8aad99a0-efcb-4712-8ea8-e66b7d485d4b',
      followers: 43,
      following: 5435
    },
    {
      id: "4",
      name: 'Lê Hồng Thư',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2Favatars%2F83308725_2185562558246032_6982305114513997824_o.jpg?alt=media&token=58b4c942-2d2b-4980-b5b2-b82e1be87d27',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2FcoverImages%2F11722312_662550373880599_4194699102710399397_o.jpg?alt=media&token=f6101f3a-c790-4558-b1df-4f44d40b64dc',
      followers: 28,
      following: 6457
    }

  ],
  artist: [
    {
      id: "1",
      name: 'Sơn Tùng M-TP',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2Favatars%2FSon-Tung-Mtp.jpg?alt=media&token=a132f91b-a078-4343-b027-efdbf995f7f2',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2FcoverImages%2Fson-tung-m-tp-mang-mua-dong-ve-giua-mua-ha-ha-noi-1-20170721121612.jpg?alt=media&token=325cb5d6-96f3-435c-9558-a6999fb034cb',
      followers: 64538,
      following: 43
    },
    {
      id: "2",
      name: 'Jack',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2Favatars%2F862892018706894767275168388718750026694656n-2-15814365592801945667256-15820951031581507809516.jpg?alt=media&token=80621d53-2600-4388-95ac-23655ad655f2',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2FcoverImages%2F1H4A1542_1.jpg?alt=media&token=c22e6a5f-09d0-498c-a3c1-a0acd85e7b7a',
      followers: 23425,
      following: 12
    },
    {
      id: "3",
      name: 'Thanh Hưng',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2Favatars%2F91960bd4573f45b0682154c7c140af77.jpeg?alt=media&token=74cd4442-95b8-4731-a673-1625943b193a',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2FcoverImages%2Fthumb.jpg?alt=media&token=ead8d08e-6b33-4a09-8a17-fcd9443f497c',
      followers: 67865,
      following: 87
    },
    {
      id: "4",
      name: 'HuyR',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2Favatars%2Funnamed.jpg?alt=media&token=1abe50ea-0581-4e68-b7d6-c24be961d941',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2FcoverImages%2F1591934795956.jpg?alt=media&token=8571bf1f-e99e-4421-b078-b5a87b1a074f',
      followers: 42344,
      following: 67
    },
    {
      id: "5",
      name: 'Đinh Tùng Huy',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2Favatars%2F5da92b54155ac844f9dac366057cbcde.jpg?alt=media&token=0c657540-b0f7-4c06-9a07-2fb22e4ca24c',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2FcoverImages%2F0b21e78752d9d94935a3c5bf62be9049.jpg?alt=media&token=856b8fe6-cd8e-4e15-9433-ad7dcbc66559',
      followers: 54365,
      following: 83
    },
    {
      id: "6",
      name: 'Đạt G',
      avatar: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2Favatars%2Fc140ebb6799391799b29a8eabae217f5.jpg?alt=media&token=6990793a-00f0-419c-8228-224e3045ddce',
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fartist%2FcoverImages%2F1519868385622.jpg?alt=media&token=28b890a3-a21a-4481-9bf4-2aeccd601c42',
      followers: 23432,
      following: 48
    },
  ],
  popupList: [
    {
      id: "1",
      name: "Thêm vào thư viện"
    },
    {
      id: "2",
      name: "Thêm vào danh sách phát"
    },
    {
      id: "3",
      name: "Thêm vào playlist"
    },
    {
      id: "4",
      name: "Tải về"
    },
    {
      id: "5",
      name: "Chia sẻ"
    }
  ],
  post: [
    {
      id: "1",
      avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/73191306_1871894072944551_7594482162015928320_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fsXOMSgNoC0AX8hFf3f&_nc_ht=scontent.fhan2-5.fna&oh=325849f0422bd12cb311862055649a62&oe=5F952BB4",
      name: "Fotografie Petra Liebich",
      content: "Erinnerungen sind gelebte Träume, die mir niemand nehmen kann. Fülle deine Seele wie eine Schatztruhe mit solchen Erinnerungen.",
      image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/p640x640/120263861_2219708164829805_7316689900879812399_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=S44aqX0usB8AX_6vGlb&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=d09639dd5df2321ee32ef5d12c6e838f&oe=5F95D89D"
    },
    {
      id: "2",
      avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/73191306_1871894072944551_7594482162015928320_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fsXOMSgNoC0AX8hFf3f&_nc_ht=scontent.fhan2-5.fna&oh=325849f0422bd12cb311862055649a62&oe=5F952BB4",
      name: "Tainn.vn",
      content: "Erinnerungen sind gelebte Träume, die mir niemand nehmen kann. Fülle deine Seele wie eine Schatztruhe mit solchen Erinnerungen.",
      image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/p640x640/120263861_2219708164829805_7316689900879812399_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=S44aqX0usB8AX_6vGlb&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=d09639dd5df2321ee32ef5d12c6e838f&oe=5F95D89D"
    },
    {
      id: "3",
      avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/73191306_1871894072944551_7594482162015928320_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fsXOMSgNoC0AX8hFf3f&_nc_ht=scontent.fhan2-5.fna&oh=325849f0422bd12cb311862055649a62&oe=5F952BB4",
      name: "Cuteeee",
      content: "Mày cứ cẩn thận.",
      image: "https://scontent.fhan5-2.fna.fbcdn.net/v/l/t1.0-9/120171860_3458061550952224_1693390913172462391_n.jpg?_nc_cat=1&_nc_sid=8bfeb9&_nc_ohc=T5ME2FwwbaAAX-7Pz66&_nc_ht=scontent.fhan5-2.fna&oh=455b5b41eb94220911a0b6e17e192fe8&oe=5F9CC60E"
    },
    {
      id: "4",
      avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/73191306_1871894072944551_7594482162015928320_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fsXOMSgNoC0AX8hFf3f&_nc_ht=scontent.fhan2-5.fna&oh=325849f0422bd12cb311862055649a62&oe=5F952BB4",
      name: "Fotografie Petra Liebich",
      content: "Erinnerungen sind gelebte Träume, die mir niemand nehmen kann. Fülle deine Seele wie eine Schatztruhe mit solchen Erinnerungen.",
      image: null
    },
    {
      id: "5",
      avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/73191306_1871894072944551_7594482162015928320_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=fsXOMSgNoC0AX8hFf3f&_nc_ht=scontent.fhan2-5.fna&oh=325849f0422bd12cb311862055649a62&oe=5F952BB4",
      name: "Fotografie Petra Liebich",
      content: null,
      image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/p640x640/120263861_2219708164829805_7316689900879812399_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=S44aqX0usB8AX_6vGlb&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=d09639dd5df2321ee32ef5d12c6e838f&oe=5F95D89D"
    }
  ],
  album: [
    {
      title: 'Nhạc trẻ gât nghiện',
      content: 'Những gia điệu nghe một lần mà không thể quên của Vpop. Cùng thưởng thức nhé',
      coverImage: 'https://photo-zmp3.zadn.vn/banner/3/5/3/b/353be849b4b3a4965e19ecb772a54b26.jpg'
    },
    {
      title: 'Tạm thương',
      content: 'Một ca khúc nhẹ nhàng trên nền giai điệu bắt tai từ K-ICM và Huyền Tâm Môn',
      coverImage: 'https://photo-zmp3.zadn.vn/banner/e/e/c/4/eec40b6b47a67bc28c01a7b9391ad74e.jpg'
    },
    {
      title: 'Đêm qua anh mơ',
      content: 'Đừng bỏ lỡ ca khúc mới nhất của anh tràng Trung Tự, chỉ có trên Mila!',
      coverImage: 'https://photo-zmp3.zadn.vn/banner/a/0/2/7/a027649ffed1dfd78ba46af2a622c7b9.jpg'
    },
    {
      title: 'Nghe thôi... đa thấy HIT',
      content: "Những ca khúc chỉ ngay lần nghe đầu tiên đã đem lại cho bạn cảm giác đây sẽ là ca khucs 'gây sốt'  trong tương lai. Cùng nghe và dự đoán HIT với Mila nhé!",
      coverImage: 'https://photo-zmp3.zadn.vn/banner/8/5/e/b/85eb8718b02e60afd7974bb994f698df.jpg'
    },
    {
      title: 'Hoa Bất Tử(Immortelle)',
      content: "Giai điệu bắt tai kết hợp cùng chất giọng đặc biệt của Quang Hùng MasterD và Blackbi",
      coverImage: 'https://photo-zmp3.zadn.vn/banner/a/4/3/6/a43658105e745ec482dff1a9e735fcc7.jpg'
    },
  ],
  songs: [
    {
      title: "Ai Doi Minh Duoc Mai",
      artist: "Thanh Hung Idol",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAi%20Doi%20Minh%20Duoc%20Mai%20-%20Thanh%20Hung%20Idol.mp3?alt=media&token=9abe1948-2f51-4932-8bc0-15bcb8799ea1",
      id: "1",
    },
    {
      title: "Anh Se Tot Ma",
      artist: "Pham Hong Phuoc _ Thuy Chi",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Se%20Tot%20Ma%20-%20Pham%20Hong%20Phuoc_%20Thuy%20Ch.mp3?alt=media&token=fb337fbc-1be0-42cc-a8e1-da8943dce154",
      id: "2",
    },
    {
      title: "Anh Thanh Nien",
      artist: "HuyR",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Thanh%20Nien%20-%20HuyR.mp3?alt=media&token=bb4e09c3-e1aa-4d89-84ca-f218c8529e7c",
      id: "3",
    },
    {
      title: "Anh Thuong Em Em Thuong Ai",
      artist: "Dinh Tung",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Thuong%20Em_%20Em%20Thuong%20Ai%20-%20Dinh%20Tung.mp3?alt=media&token=fe10c373-da20-4a6b-be8d-0d30a1677746",
      id: "4",
    },
    {
      title: "Bac Phan",
      artist: "Jack _ K-ICM",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FBac%20Phan%20-%20Jack_%20K-ICM.mp3?alt=media&token=42336619-a160-42a8-b5ff-8c925995ea97",
      id: "5",
    },
    {
      title: "Banh Mi Khong",
      artist: "Dat G _ Du Uyen",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FBanh%20Mi%20Khong%20-%20Dat%20G_%20Du%20Uyen.mp3?alt=media&token=341d6677-c25d-43fa-82de-0f40fc99df9f",
      id: "6",
    }, {
      title: "Ai Doi Minh Duoc Mai",
      artist: "Thanh Hung Idol",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAi%20Doi%20Minh%20Duoc%20Mai%20-%20Thanh%20Hung%20Idol.mp3?alt=media&token=9abe1948-2f51-4932-8bc0-15bcb8799ea1",
      id: "7",
    },
    {
      title: "Anh Se Tot Ma",
      artist: "Pham Hong Phuoc _ Thuy Chi",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Se%20Tot%20Ma%20-%20Pham%20Hong%20Phuoc_%20Thuy%20Ch.mp3?alt=media&token=fb337fbc-1be0-42cc-a8e1-da8943dce154",
      id: "8",
    },
    {
      title: "Anh Thanh Nien",
      artist: "HuyR",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Thanh%20Nien%20-%20HuyR.mp3?alt=media&token=bb4e09c3-e1aa-4d89-84ca-f218c8529e7c",
      id: "9",
    },
    {
      title: "Anh Thuong Em Em Thuong Ai",
      artist: "Dinh Tung",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Thuong%20Em_%20Em%20Thuong%20Ai%20-%20Dinh%20Tung.mp3?alt=media&token=fe10c373-da20-4a6b-be8d-0d30a1677746",
      id: "10",
    },
    {
      title: "Bac Phan",
      artist: "Jack _ K-ICM",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FBac%20Phan%20-%20Jack_%20K-ICM.mp3?alt=media&token=42336619-a160-42a8-b5ff-8c925995ea97",
      id: "11",
    },
    {
      title: "Banh Mi Khong",
      artist: "Dat G _ Du Uyen",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FBanh%20Mi%20Khong%20-%20Dat%20G_%20Du%20Uyen.mp3?alt=media&token=341d6677-c25d-43fa-82de-0f40fc99df9f",
      id: "12",
    },
  ],

  account: [
    {
      title: "Ai Doi Minh Duoc Mai",
      artist: "Thanh Hung Idol",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAi%20Doi%20Minh%20Duoc%20Mai%20-%20Thanh%20Hung%20Idol.mp3?alt=media&token=9abe1948-2f51-4932-8bc0-15bcb8799ea1",
      id: "1",
    },
    {
      title: "Anh Se Tot Ma",
      artist: "Pham Hong Phuoc _ Thuy Chi",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Se%20Tot%20Ma%20-%20Pham%20Hong%20Phuoc_%20Thuy%20Ch.mp3?alt=media&token=fb337fbc-1be0-42cc-a8e1-da8943dce154",
      id: "2",
    },
    {
      title: "Anh Thanh Nien",
      artist: "HuyR",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Thanh%20Nien%20-%20HuyR.mp3?alt=media&token=bb4e09c3-e1aa-4d89-84ca-f218c8529e7c",
      id: "3",
    },
    {
      title: "Anh Thuong Em Em Thuong Ai",
      artist: "Đinh Tùng Huy",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FAnh%20Thuong%20Em_%20Em%20Thuong%20Ai%20-%20Dinh%20Tung.mp3?alt=media&token=fe10c373-da20-4a6b-be8d-0d30a1677746",
      id: "4",
    },
    {
      title: "Bac Phan",
      artist: "Jack _ K-ICM",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FBac%20Phan%20-%20Jack_%20K-ICM.mp3?alt=media&token=42336619-a160-42a8-b5ff-8c925995ea97",
      id: "5",
    },
    {
      title: "Banh Mi Khong",
      artist: "Dat G _ Du Uyen",
      artwork: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940",
      url: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/audios%2FBanh%20Mi%20Khong%20-%20Dat%20G_%20Du%20Uyen.mp3?alt=media&token=341d6677-c25d-43fa-82de-0f40fc99df9f",
      id: "6",
    },
  ],
};

export default data;
