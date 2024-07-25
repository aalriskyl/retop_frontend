import React from "react";

const Reviews = () => {
  const reviews = [
    {
      text: "Pelayanan sangat memuaskan! Laptop saya yang rusak bisa diperbaiki dengan cepat dan harganya sangat terjangkau. Terima kasih banyak!",
      author: "Budi Santoso",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "Saya sangat puas dengan hasil reparasi laptop saya di sini. Tim sangat profesional dan komunikatif. Sangat direkomendasikan!",
      author: "Rina Suryani",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      text: "Layanan cepat dan ramah! Laptop saya sekarang kembali berfungsi dengan baik setelah mengalami masalah hardware.",
      author: "Ahmad Fadli",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      text: "Pelayanan cepat dan ramah! Saya sangat puas dengan perbaikan laptop saya.",
      author: "Siti Aminah",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      text: "Harga sangat terjangkau untuk kualitas pelayanan yang diberikan. Sangat puas!",
      author: "Ali Usman",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      text: "Layanan yang diberikan sangat profesional dan memuaskan.",
      author: "Dewi Kusuma",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      text: "Rekomendasi terbaik untuk perbaikan laptop di kota ini!",
      author: "Joko Priyono",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      text: "Pelayanan cepat dan hasil perbaikan sangat memuaskan.",
      author: "Lisa Kartika",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      text: "Tempat terbaik untuk perbaikan laptop dengan harga terjangkau.",
      author: "Agus Prasetyo",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];

  const getRandomRating = () => {
    return (Math.random() * 1 + 4).toFixed(1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-12 bg-slate-200">
      <h1 className="mb-8 text-3xl font-bold text-center">Ulasan</h1>
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 max-w-7xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <img
              src={review.image}
              alt={review.author}
              className="w-16 h-16 mb-4 rounded-full"
            />
            <p className="text-center text-gray-800">{review.text}</p>
            <p className="mt-2 text-right text-gray-600">- {review.author}</p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(getRandomRating())
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049.927l2.573 5.216 5.75.834-4.168 4.062.984 5.739-5.139-2.699-5.139 2.699.984-5.739L.726 6.977l5.75-.834L9.049.927z" />
                </svg>
              ))}
            </div>
            <p className="mt-2 text-gray-600">{getRandomRating()} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
