
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Target, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const ProblemVision = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-800 to-red-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              The Career Crisis We're Solving
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Bridging the gap between current skills and future opportunities
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Problem: Skills Are Evolving Faster Than Ever
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  Rapid Skill Obsolescence
                </h3>
                <p className="text-red-700">
                  The half-life of learned skills is shrinking from years to months. 
                  By 2030, the World Economic Forum estimates that 50% of all employees 
                  will need reskilling.
                </p>
              </div>

              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  Fragmented Learning Platforms
                </h3>
                <p className="text-red-700">
                  Professionals waste countless hours navigating disconnected learning 
                  platforms without clear guidance on which skills will actually 
                  advance their careers.
                </p>
              </div>

              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  Unstructured Mentorship
                </h3>
                <p className="text-red-700">
                  Traditional mentorship relies on chance encounters and personal 
                  networks, leaving many talented individuals without access to 
                  quality career guidance.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                The Impact: $366 Billion in Lost Productivity
              </h3>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                According to McKinsey Global Institute, skills mismatches cost the global 
                economy $366 billion annually in lost productivity. Meanwhile, 87% of 
                executives report skill gaps in their workforce, but only 16% know how to address them.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Target className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Vision: The Future of Career Development
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                A world where every professional has a clear, AI-guided path to their next career milestone
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-8 rounded-xl border border-blue-600">
                <div className="h-12 w-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-900 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Continuous Competency Graph
                </h3>
                <p className="text-blue-100">
                  A living, breathing map of skills that evolves with industry demands, 
                  showing real-time connections between competencies, roles, and career outcomes.
                </p>
              </div>

              <div className="bg-blue-800/50 p-8 rounded-xl border border-blue-600">
                <div className="h-12 w-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-900 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  AI Learning Orchestration
                </h3>
                <p className="text-blue-100">
                  Intelligent systems that curate personalized learning journeys, 
                  adapting in real-time based on progress, industry trends, and career goals.
                </p>
              </div>

              <div className="bg-blue-800/50 p-8 rounded-xl border border-blue-600">
                <div className="h-12 w-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-900 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  On-Demand Expert Network
                </h3>
                <p className="text-blue-100">
                  Democratized access to industry mentors through tokenized, 
                  reputation-based matching that scales quality guidance to millions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  How CareerCatalyst Delivers This Vision
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Real-Time Skill Mapping</h3>
                      <p className="text-gray-600">Neo4j graph database tracks skill relationships across 10M+ job postings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Predictive Career Analytics</h3>
                      <p className="text-gray-600">Machine learning models forecast role demand and salary trends 5 years ahead</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Verified Mentor Network</h3>
                      <p className="text-gray-600">Blockchain-based reputation system ensures quality mentorship at scale</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to="/features"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explore Our Solution
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Expected Impact by 2026</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Skill Gap Reduction</span>
                        <span className="font-bold text-green-600">78%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Career Transition Speed</span>
                        <span className="font-bold text-green-600">3.2x Faster</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Learning ROI</span>
                        <span className="font-bold text-green-600">340%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Be Part of the Solution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing how professionals develop their careers in the age of AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/features"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Roadmap
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProblemVision;
