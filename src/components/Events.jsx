const Events = () => {
  const data = [
    {
      header: "Pool tournament",
      paragraph:
        "Thomas shakes up the best Blood Marys around for just $5! This deal is good from 11am to 7pm.",
    },
    {
      header: "Karaoke Night",
      paragraph:
        "Join us for Karaoke Night, where every voice shines! Fun starts at 8 PM.",
    },
    {
      header: "Sunday Party",
      paragraph:
        "Don't miss our Sunday Party—great music, drinks, and fun for everyone!",
    },
    {
      header: "Pool tournament",
      paragraph:
        "Thomas shakes up the best Blood Marys around for just $5! This deal is good from 11am to 7pm.",
    },
  ];
  return (
    <section className="w-full sm:px-5">
      <div className="flex flex-col items-center justify-center pt-32 pb-16">
        <h2 className="text-5xl font-bold text-red-600">WEEKLY EVENTS</h2>
        <div className="flex flex-wrap justify-center self-start mt-10">
          {data.map((event) => (
            <div key={event.header}
				className="p-10 text-center lg:w-[33%]"
				>
              <h3 className="text-3xl mb-5">{event.header}</h3>
              <p className="text-lg text-gray-400">{event.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
