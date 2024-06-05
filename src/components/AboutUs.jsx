const AboutUs = () => {
  const data = [
    {
      header: "Happy hour",
      parap: ` We all need a place to relax after work, so why not do it with a
		drink in your hand? Join us for Happy Hour everyday from Open-7pm
		and All Day Thursday!`,
    },
    {
      header: "Pool Tables",
      parap: ` Experience the best in town with our 8 ft pool tables, offering top-notch quality for every game. 
		Perfect for enthusiasts and professionals alike, our tables ensure an unparalleled billiard experience.`,
    },
    {
      header: "Delicious Food",
      parap: `Discover our food menu, featuring a variety of delicious options to complement your game.
		 From savory snacks to hearty meals, we offer something for everyone, making your visit truly enjoyable.`,
    },
  ];
  return (
    <section className="w-full bg-red-700">
      <div className="py-20 flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold">ABOUT US</h2>
        <div className="w-full flex justify-center sm:px-6 mt-20 gap-10 flex-wrap">
          {data.map((item) => (
            <div key={item.header} className="text-center lg:w-[30%] px-5">
              <h3 className="text-4xl md:mb-8 mb-4 ">{item.header}</h3>
              <p className="text-xl">{item.parap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
