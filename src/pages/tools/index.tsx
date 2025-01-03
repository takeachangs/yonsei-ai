import { useState } from 'react';

export default function Tools() {
  const [email, setEmail] = useState('');

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email notification system
    alert('Thank you! We\'ll notify you when our AI tools are ready.');
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Tools</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our AI tools are currently under development. We're working on bringing you
          cutting-edge AI capabilities to enhance your research and learning experience.
        </p>
      </section>

      {/* Coming Soon Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Coming Soon</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Research Assistant</h3>
            <p className="text-gray-600">
              AI-powered research assistant to help you analyze papers, generate summaries,
              and explore research connections.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Code Assistant</h3>
            <p className="text-gray-600">
              Get help with coding tasks, debugging, and implementing AI algorithms
              in various programming languages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Study Guide Generator</h3>
            <p className="text-gray-600">
              Generate personalized study materials and quizzes based on research
              papers and academic content.
            </p>
          </div>
        </div>
      </section>

      {/* Notification Form */}
      <section className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Want to be notified when our AI tools are ready? Leave your email below.
        </p>
        <form onSubmit={handleNotifyMe} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Notify Me
          </button>
        </form>
      </section>
    </div>
  );
}