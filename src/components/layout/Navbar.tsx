import Link from 'next/link';

const navigation = [
  { name: 'Research', href: '/research' },
  { name: 'News & Events', href: '/news' },
  { name: 'Blog', href: '/blog' },
  { name: 'AI Tools', href: '/tools' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Yonsei.AI</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}