function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div id="title-header">
        <h1 className="text-white text-xl font-semibold">devfinder</h1>
      </div>
      <div id="theme-toggler" className="flex justify-center items-center">
        <p className="text-white text-xl font-semibold">LIGHT </p>
        <i className="icon icon-moon"></i>
      </div>
    </div>
  );
}

export default Header;
