export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Yonsei AI Lab</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advancing the frontiers of artificial intelligence through innovative research,
          collaboration, and education.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Yonsei AI Lab, we're dedicated to pushing the boundaries of artificial intelligence
            research while fostering an environment of collaboration, innovation, and learning.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Research Excellence</h3>
              <p className="text-gray-600">
                Conducting cutting-edge research in machine learning, natural language processing,
                and artificial intelligence applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Education & Training</h3>
              <p className="text-gray-600">
                Preparing the next generation of AI researchers through comprehensive
                education and hands-on research experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Industry Collaboration</h3>
              <p className="text-gray-600">
                Building bridges between academic research and practical applications
                through industry partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Research Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Deep Learning Architectures</li>
              <li>Reinforcement Learning</li>
              <li>Transfer Learning</li>
              <li>Neural Network Optimization</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Large Language Models</li>
              <li>Text Generation & Analysis</li>
              <li>Multilingual Processing</li>
              <li>Information Extraction</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Object Detection & Recognition</li>
              <li>Image Generation</li>
              <li>Video Analysis</li>
              <li>Medical Image Processing</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Applied AI</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Healthcare Applications</li>
              <li>Robotics & Automation</li>
              <li>Smart Systems</li>
              <li>AI Ethics & Safety</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              Yonsei University<br />
              50 Yonsei-ro, Seodaemun-gu<br />
              Seoul, South Korea
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">
              Email: ai.lab@yonsei.ac.kr<br />
              Phone: +82-2-2123-XXXX<br />
              Office: Engineering Building, Room XXX
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}