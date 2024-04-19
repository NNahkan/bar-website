 
const AboutUs = () => {
  const data = [
    {
      header: "Happy hour",
      parap: ` We all need a place to relax after work, so why not do it with a
		drink in your hand? Join us for Happy Hour everyday from Open-7pm
		and All Day Thursday!`,
    },
    {
      header: "Happy hour",
      parap: ` We all need a place to relax after work, so why not do it with a
		drink in your hand? Join us for Happy Hour everyday from Open-7pm
		and All Day Thursday!`,
    },
    {
      header: "Happy hour",
      parap: ` We all need a place to relax after work, so why not do it with a
		drink in your hand? Join us for Happy Hour everyday from Open-7pm
		and All Day Thursday!`,
    },
  ];
  return (
    <section className="w-full bg-red-700">
      <div className="py-20 flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold">ABOUT US</h2>
        <div className="w-full flex justify-center sm:px-10 mt-20">
          {data.map((item) => (
            <div key={item.header} className="text-center w-[30%] px-5">
              <h3 className="text-4xl mb-8">{item.header}</h3>
              <p className="text-xl">{item.parap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
