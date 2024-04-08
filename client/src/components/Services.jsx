const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://sayajihotels.com/images/innerBanner/sayaji-vadodara-banquets.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "https://cdn.cherishx.com/uploads/1638354920_large.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "https://images.squarespace-cdn.com/content/v1/61c342ed9e6b627e0357fe0a/e661ab62-d95c-4dea-9525-f3b1838e81ae/05-21_BounceBox_NaturePhotos_001-47.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "https://i0.wp.com/shystrangemanic.com/wp-content/uploads/2019/10/games.jpg?resize=1024%2C633",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "https://mindyweiss.com/wp-content/uploads/2020/05/1_TooFacedPeach-106.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "https://cdn0.weddingwire.in/vendor/5192/3_2/960/jpg/rk-decor_15_295192-159047117373584.jpeg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
