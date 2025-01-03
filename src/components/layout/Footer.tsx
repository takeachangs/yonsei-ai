export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Yonsei.AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">Contact</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}