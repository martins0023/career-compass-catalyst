
import React from 'react';
import { Link } from 'react-router-dom';
import { Network, BookOpen, Users, Award, TrendingUp, Shield } from 'lucide-react';
import Layout from '@/components/Layout';

const Features = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Powerful Features for Career Growth
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Advanced AI and graph technology working together to accelerate your professional development
            </p>
          </div>
        </section>

        {/* Feature 1: Competency Graph */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Network className="h-12 w-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Competency Graph Technology
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our Neo4j-powered graph database maps relationships between skills, roles, and industries 
                  in real-time, creating the most comprehensive competency network ever built.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span className="text-blue-600 font-bold">10M+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Job Postings Analyzed</h4>
                      <p className="text-gray-600">Continuous analysis of global job market trends</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span className="text-blue-600 font-bold">50K+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Skill Nodes</h4>
                      <p className="text-gray-600">Interconnected competencies across all industries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span className="text-blue-600 font-bold">500+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Industries Covered</h4>
                      <p className="text-gray-600">From tech to healthcare to creative industries</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-12 w-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
                          [3, 6, 9, 12].includes(i)
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : [1, 4, 7, 10, 13].includes(i)
                            ? 'bg-yellow-400 border-yellow-400 text-gray-900'
                            : 'bg-white border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-4 text-blue-700 font-medium">Interactive Skill Network</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Adaptive Learning */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-6">Personalized Learning Path</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-green-100 rounded-lg p-3">
                          <p className="text-sm font-medium">Python Fundamentals</p>
                          <p className="text-xs text-gray-600">Completed • 2 hours</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">→</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-blue-100 rounded-lg p-3 border-2 border-blue-300">
                          <p className="text-sm font-medium">Data Structures & Algorithms</p>
                          <p className="text-xs text-gray-600">In Progress • 4 hours remaining</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-sm font-medium">Machine Learning Basics</p>
                          <p className="text-xs text-gray-600">Next • 6 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-12 w-12 text-yellow-600 mr-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Adaptive Learning Paths
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI engine creates personalized learning journeys using LTI integration 
                  and graph distance algorithms to optimize your skill development sequence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-700">Graph-based skill sequencing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-700">Real-time difficulty adjustment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-700">Multi-modal content delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-700">Industry-specific contextualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Mentor Marketplace */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Users className="h-12 w-12 text-green-600 mr-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Mentor Marketplace
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with verified industry experts through our tokenized credit system. 
                  CareTokens and reputation-based matching ensure quality mentorship at scale.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">5,000+</h4>
                    <p className="text-green-700 text-sm">Verified Mentors</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">95%</h4>
                    <p className="text-green-700 text-sm">Satisfaction Rate</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">24/7</h4>
                    <p className="text-green-700 text-sm">Global Availability</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">SBT</h4>
                    <p className="text-green-700 text-sm">Reputation System</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h4 className="font-semibold text-gray-900 mb-4">Featured Mentors</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Sarah Chen', role: 'Senior ML Engineer at Google', rating: 4.9, tokens: 15 },
                      { name: 'Marcus Rodriguez', role: 'Product Manager at Meta', rating: 4.8, tokens: 12 },
                      { name: 'Dr. Emily Watson', role: 'CTO at HealthTech Startup', rating: 5.0, tokens: 20 }
                    ].map((mentor, i) => (
                      <div key={i} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{mentor.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{mentor.name}</h5>
                          <p className="text-sm text-gray-600">{mentor.role}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-yellow-500">★ {mentor.rating}</span>
                            <span className="text-sm text-gray-500">• {mentor.tokens} CareTokens</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 4: Skill Validation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Award className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Skill Validation & Credentials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prove your competencies through proctored assessments and peer-validated project portfolios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proctored Assessments</h3>
                <p className="text-gray-600 text-sm">AI-monitored testing with fraud detection</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Peer Validation</h3>
                <p className="text-gray-600 text-sm">Community-driven portfolio reviews</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Digital Credentials</h3>
                <p className="text-gray-600 text-sm">Blockchain-verified certificates</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Skill Tracking</h3>
                <p className="text-gray-600 text-sm">Real-time competency progression</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 5: Career Forecasting */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-12 w-12 text-yellow-400 mr-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    Career Forecasting Engine
                  </h2>
                </div>
                <p className="text-lg text-blue-100 mb-6">
                  Our LightGBM-powered models analyze market trends, salary data, and skill demand 
                  to predict career opportunities up to 5 years in advance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
                    <span className="text-blue-100">Role demand forecasting with 89% accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
                    <span className="text-blue-100">Salary trajectory predictions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
                    <span className="text-blue-100">Emerging skill trend alerts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
                    <span className="text-blue-100">Geographic opportunity mapping</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-800 rounded-2xl p-6">
                  <h4 className="font-semibold mb-4">5-Year Career Forecast</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Data Scientist Demand</span>
                        <span className="text-green-400">+34%</span>
                      </div>
                      <div className="bg-blue-600 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-blue-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Expected Salary Range</span>
                        <span className="text-yellow-400">$120K-180K</span>
                      </div>
                      <div className="bg-blue-600 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div className="bg-blue-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Skills Gap Score</span>
                        <span className="text-red-400">2.3/10</span>
                      </div>
                      <div className="bg-blue-600 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start mapping your career path with our powerful AI-driven platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ui-ux"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Interactive Demo
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Technical Details
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
