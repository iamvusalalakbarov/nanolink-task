const Header = () => {
  return (
    <header className="wrapper mt-[124px] mb-[52px] lg:mt-[180px] lg:mb-12 flex items-start gap-x-5 lg:gap-x-8">
      <a href="#" className="inline-block py-[7px] lg:py-0">
        <img
          src="/svg-icons/arrow-narrow-left.svg"
          alt="arrow-narrow-left"
          className="lg:size-7"
        />
      </a>

      <div className="space-y-2 lg:space-y-4 flex-1">
        <h1 className="text-white text-2xl lg:text-4xl">
          FIG ARTISTIC GYMNASTICS WORLD CUP
        </h1>

        <div className="flex items-center gap-x-3 text-[#9598B1] lg:text-xl lg:text-grey-50">
          <span>Doha, Qatar</span>
          <span>|</span>
          <span>12/03/2023 - 13/02/2023</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
