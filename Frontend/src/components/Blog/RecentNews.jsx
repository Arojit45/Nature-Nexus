import React from 'react'
import Button from '../../lib/Button';
import { Link } from 'react-router-dom';
const newsItems = [
  {
    title: "Royal Bengal Tiger Spotted in Restored Reserve",
    description:
      "A Royal Bengal Tiger was seen in the newly restored wildlife reserve after 12 years, signaling successful conservation efforts.",
    image:
      "https://www.tigersafari.net/wp-content/uploads/2023/06/Bengal-tiger-in-kanha-national-park-India.webp", // example URL
  },
  {
    title: "10,000+ Trees Planted in a Single Day",
    description:
      "Volunteers from across the region planted over 10,000 native trees, breaking the state record and revitalizing local biodiversity.",
    image:
      "https://www.theblackgardenerblog.co.uk/wp-content/uploads/2019/12/10000-Trees-Planted-at-The-Young-Peoples-Forest.jpg",
  },
  {
    title: "Local Student Wins National Eco-Champion Award",
    description:
      "15-year-old Aanya Verma wins the National Eco-Champion Award for her outstanding contributions to recycling and awareness campaigns.",
    image:
      "https://himalayainternational.in/wp-content/uploads/2024/07/452750407_404358839418484_6665014934892841812_n.jpg",
  },
  {
    title: "Elephant Family Reunited After Rescue",
    description:
      "A herd of elephants separated due to forest fires has been safely rescued and reunited, thanks to local forest officers.",
    image:
      "https://www.africanparks.org/sites/default/files/styles/inline_image_style/public/teaser_image/2018-10/42582155_10156212961658411_5967738211751952384_o%202_0.jpg?itok=9m6eu0OJ",
  },
  {
    title: "Clean River Campaign Removes 2 Tons of Waste",
    description:
      "The GreenFlow Initiative successfully cleared 2 tons of plastic and waste from the city’s main riverbank during their weekend drive.",
    image:
      "https://thebalisun.com/wp-content/uploads/2023/03/Four-Teenagers-Clean-Up-Balis-Rivers.jpg.webp",
  },
];


const RecentNews = () => {
    
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-100 min-h-screen">
      <h2 className="text-6xl font-bold text-center text-green-700 mb-10">
        Recent News
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {news.title}
              </h3>
              <p className="text-gray-700">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/"}>
        <div className="w-[200px] h-[50px] sm:w-[250px] sm:h-[60px] mt-10 mx-auto">
          <Button title={"Back"} />
        </div>
      </Link>
    </div>
  );
}

export default RecentNews