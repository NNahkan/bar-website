const Hero = () => {
  return (
    <section className="w-full pb-5 flex flex-col justify-between items-center text-2xl">
      <div className="w-full flex md:flex-row flex-col justify-center items-center bg-red-700 p-5">
        <img
          src="https://www.brooksplacetn.com/wp-content/uploads/elementor/thumbs/Brooks-Place-Pool-and-Sports-Bar-Sevierville-Tennessee-px102vp40qyk4iief50idz7a3iutiu70m1h1f8bq1a.png"
          alt="logo"
          width={120}
        />
        <h1 className="text-center px-10">
          Everyday Happy Hour from 2pm to 6pm , WE ID all customers, 21
        </h1>
        <img
          src="https://www.brooksplacetn.com/wp-content/uploads/elementor/thumbs/Brooks-Place-Pool-and-Sports-Bar-Sevierville-Tennessee-px102vp40qyk4iief50idz7a3iutiu70m1h1f8bq1a.png"
          alt="logo"
          width={120}
        />
      </div>

      <div className="w-full relative ">
        <a
          className="absolute border border-1 border-transparent right-10 p-5 mt-5 bg-black/50 hover:border-white"
          href="123-456-7890"
        >
          123-456-7890
        </a>
        <img
          className="w-full h-[90vh]"
          src="https://cdn.pixabay.com/photo/2016/09/17/22/43/billiards-1677103_1280.jpg"
          alt=""
        />
      </div>
      <div className="w-full bg-black-">
        <h2 className="text-center py-10 text-5xl text-red-600">
          2-6 is happy hour everyday ! <br />
          Maybe address here
        </h2>
      </div>
    </section>
  );
};

export default Hero;
