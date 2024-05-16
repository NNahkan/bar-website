const Footer = () => {
  return (
    <footer className="w-full mt-20 py-8 bg-red-700">
      <div className="footerFlexDiv lg:max-w-[1080px] ">
        <div>
          <h1>Location</h1>
          <p>131 Forks of the River Pkwy </p>
          <p>Sevierville, TN</p>
          <p>37862</p>
        </div>
        <div>
          <h1>HOURS</h1>
          <p>Sun, Mon, Tue, Wed, Thur, Fri, Sat</p>
          <p>11:00 AM - 12:00 AM</p>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h1>FIND US ON</h1>
            <p>instragram</p>
            <p>facebook</p>
          </div>
          <div>
            <h1>CONTACT US</h1>
            <p>(123)-456-7890</p>
            <p>contact@brooksbar.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
