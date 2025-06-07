
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, TrendingUp, Zap } from 'lucide-react';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Map Your Skills to 
                <span className="text-yellow-400"> Future Roles</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                AI-Driven Competency Mapping & Mentorship Network
              </p>
              <p className="text-lg mb-10 text-blue-200">
                Discover skill gaps, receive AI-curated micro-courses, and connect with industry mentors to accelerate your career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/features"
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Build Your Profile
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/ui-ux"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Interactive skill map visualization placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-16 rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400 transition-all duration-300 cursor-pointer ${
                        i === 4 ? 'bg-yellow-400/30 border-yellow-400' : ''
                      }`}
                    >
                      <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 text-blue-200">Interactive Skill Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Accelerate Your Career Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides personalized learning paths and connects you with industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discover Skill Gaps</h3>
              <p className="text-gray-600">
                Our Neo4j-powered competency graph identifies exactly what skills you need to reach your target role
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                <BookOpen className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Curated Micro-Courses</h3>
              <p className="text-gray-600">
                Personalized learning paths with micro-courses assembled by AI based on your unique skill gaps
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mentor Matching</h3>
              <p className="text-gray-600">
                Connect with verified industry mentors using our tokenized credit system and reputation-based matching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Built for the Future of Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Competency Graph Technology</h3>
                    <p className="text-gray-600">Neo4j graph database mapping skills to roles across industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adaptive Learning Paths</h3>
                    <p className="text-gray-600">AI-powered course recommendations based on graph distance algorithms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Career Forecasting</h3>
                    <p className="text-gray-600">Machine learning predictions for role demand and salary trajectories</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/features"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore All Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Skill Assessment</h4>
                      <p className="text-sm text-gray-600">Analyze your current competencies</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                    <span className="text-gray-500">Interactive Demo Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who are already using CareerCatalyst to map their path to success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/problem-vision"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
