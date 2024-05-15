import WhyUsImage from "./WhyUsImage";

const WhyUs = () => {
  const data = [
    {
      header: "Amazing Food",
      list: [
        "We have the best food in the town. Always serving with love and smile.",
        "We have the best food in the town. Always serving with love and smile.",
        "We have the best food in the town. Always serving with love and smile.",
      ],
      image: "https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg",
    },
    {
      header: "Perfect Pool Tables",
      list: [
        "We have the best food in the town. Always serving with love and smile.",
        "We have the best food in the town. Always serving with love and smile.",
        "We have the best food in the town. Always serving with love and smile.",
      ],
      image: "https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg",
    },
    {
      header: "Full Open Bar",
      list: [
        "We have the best food in the town. Always serving with love and smile.",
        "We have the best food in the town. Always serving with love and smile.",
        "We have the best food in the town. Always serving with love and smile.",
      ],
      image: "https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg",
    },
  ];
  return (
    <section className="w-full">
      <WhyUsImage />
      <div className="flex flex-col gap-20 justify-center items-center md:px-20">
        {data.map((item) => (
          <div
            key={item.header}
            className="flex w-[60%] gap-10  even:flex-row-reverse"
          >
            <div className="flex-1 mt-10">
              <h2 className="text-4xl mb-10">{item.header}</h2>
              <ul className="list-disc text-lg">
                {item.list.map((info) => (
                  <li key={info} className="mb-5">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <img src={item.image} alt="image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
