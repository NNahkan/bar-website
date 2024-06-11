const WhyUsImage = () => {
  return (
    <div className="w-full my-32 bg-top hover:bg-[center_top_-2rem] duration-300 bg-[url('/assets/whyUsImage.png')]">
      <div className="flex flex-col  text-center md:p-32 py-32 px-4">
        <h1 className="text-5xl font-bold">PLAY WITH US</h1>
        <span className="h-20 my-16 bg-center bg-no-repeat ease-in-out
		   bg-[url('https://static.spotapps.co/website_images/ab_websites/123722_website/td1.png')]" />

        <p className="font-bold text-xl mb-16">
          One of the few authentic pool halls in Sevierville, we have 7 billiard
          tables and dart board, as well as amazing food and beer SOMETHING LIKE
          THAT
        </p>
        <button className="btn self-center"> OUR MENU</button>
      </div>
    </div>
  );
};

export default WhyUsImage;
