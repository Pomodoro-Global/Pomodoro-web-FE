const Navbar = () => (
  <section className="border-2 w-2/12 h-screen relative">
    {/* Navbar logo */}
    <div className="border-2 flex justify-center items-center">
      <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-pomodoro-productivity-flaticons-lineal-color-flat-icons.png" alt="Band logo" />
    </div>
    {/* Navbar links */}
    <ul className="border-2 h-4/5 px-4 py-4 flex-col border-black">
      <li className="border-4 p-2 mt-8">Pomodoro app</li>
      <li className="border-4 p-2 my-2">Log in/up</li>
      <li className="border-4 p-2 my-2">Setting</li>
      <li className="border-4 p-2 my-2">Dark/Light mode</li>
      <li className="border-4 p-2 my-2">Log out</li>
    </ul>
    {/* Navbar footer */}
    <footer className="border-2 flex justify-center items-center py-2 px-2 absolute right-0 left-0 bottom-0">
      footer part
    </footer>
  </section>
);

export default Navbar;
