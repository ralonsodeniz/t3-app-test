const TopNav = () => (
  <nav className="flex w-full items-center justify-between bg-white p-4 shadow-md">
    <div className="flex items-center space-x-4">
      <h1 className="text-lg font-bold">T3 Test App</h1>
    </div>
    <div className="flex items-center space-x-4">
      <a href="/" className="text-sm font-semibold">
        Gallery
      </a>
      <a href="/sign-in" className="text-sm font-semibold">
        Sign In
      </a>
    </div>
  </nav>
);

export default TopNav;
