const data = {
  popupList: [
    {
      id: 1,
      name: "Thêm vào thư viện"
    },
    {
      id: 2,
      name: "Thêm vào danh sách phát"
    },
    {
      id: 3,
      name: "Thêm vào playlist"
    },
    {
      id: 4,
      name: "Tải về"
    },
    {
      id: 5,
      name: "Chia sẻ"
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
    },
  ],
};

export default data;
