import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Work', href: '/work' },
    { name: 'Brain', href: '/brain' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <ul className="flex justify-center space-x-6 p-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-gray-800 hover:text-blue-500 transition duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
