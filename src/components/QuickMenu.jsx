const QuickMenu = () => {
  const data = [
    {
      img: "https://static.spotapps.co/website_images/ab_websites/123722_website/parties_left.jpg",
      header: "Private Parties",
      subHeader: "Exclusive events tailored for you",
      paragraph: `We would be honored to provide our services for your next event. Each event is bespoke to your tastes and needs, to provide the best experience possible for you and your guests.`,
      buttonText: "Parties",
      link: "#",
    },
    {
      img: "https://static.spotapps.co/website_images/ab_websites/123722_website/orders_right.jpg",
      header: "Order Online",
      subHeader: "From our restaurant to your doorstep",
      paragraph: `Ordering your favorite dishes from our restaurant is now even easier with our online ordering system. It's user-friendly and allows you to customize your order and track its progress from the comfort of your own home.`,
      buttonText: "Order",
      link: "https://order.toasttab.com/online/brooks-place-131-forks-of-the-river-parkway",
    },
  ];
  return (
    <section className="w-full bg-white text-black p-16 ">
      <div className="flex flex-col gap-20 ">
        {data.map((item) => (
          <div
            key={item.header}
            className="flex justify-center flex-wrap items-center even:flex-row-reverse gap-8"
          >
            <div className="md:flex-1">
              <img   src={item.img} alt={item.header} />
            </div>
            <div className="flex flex-col md:flex-1 items-center text-center px-6">
              <h1 className="text-7xl font-bold uppercase">{item.header}</h1>
              <h3 className="text-xl my-2">{item.subHeader}</h3>
              <p className="my-4 text-lg">{item.paragraph}</p>
              <a href={item.link} className="btn text-lg">
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickMenu;
