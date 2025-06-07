
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Zap, Users, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q4 2025',
      title: 'VR Skill Labs',
      description: 'Immersive virtual reality environments for hands-on skill practice',
      features: [
        'Virtual engineering labs with 3D modeling tools',
        'Collaborative coding environments in VR',
        'Medical simulation training modules',
        'Architectural design workshops'
      ],
      status: 'upcoming',
      icon: <Zap className="h-6 w-6" />
    },
    {
      quarter: 'Q1 2026',
      title: 'Adaptive Peer Cohorts',
      description: 'AI-facilitated learning groups that evolve based on progress and compatibility',
      features: [
        'LLM-powered group formation algorithms',
        'Real-time cohort rebalancing',
        'Peer accountability systems',
        'Collaborative project assignments'
      ],
      status: 'upcoming',
      icon: <Users className="h-6 w-6" />
    },
    {
      quarter: 'Q2 2026+',
      title: 'Cross-Org Skill Registry',
      description: 'Blockchain-based skill recognition system spanning organizations globally',
      features: [
        'Universal skill passport on blockchain',
        'Cross-company talent mobility',
        'Decentralized skill verification',
        'Global competency standards'
      ],
      status: 'future',
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const currentFeatures = [
    {
      title: 'Competency Graph Engine',
      description: 'Neo4j-powered skill mapping across 50K+ competencies',
      status: 'live'
    },
    {
      title: 'AI Learning Paths',
      description: 'Personalized micro-course sequences with LTI integration',
      status: 'live'
    },
    {
      title: 'Mentor Marketplace',
      description: 'Tokenized mentorship with 5K+ verified industry experts',
      status: 'live'
    },
    {
      title: 'Career Forecasting',
      description: 'LightGBM models predicting role demand and salary trends',
      status: 'beta'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="h-16 w-16 text-purple-300 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Product Roadmap & Future Vision
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100">
              Transforming career development through cutting-edge technology
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Current Platform Status
              </h2>
              <p className="text-xl text-gray-600">
                Already delivering value to thousands of professionals worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      feature.status === 'live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {feature.status === 'live' ? '✓ Live' : 'Beta'}
                    </span>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">2.3M</div>
                  <p className="text-gray-600">Learning Hours Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                  <p className="text-gray-600">Career Goal Achievement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Future Enhancements
              </h2>
              <p className="text-xl text-gray-600">
                Revolutionary features coming to transform professional development
              </p>
            </div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg mr-4 ${
                          item.status === 'upcoming' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-purple-100 text-purple-600'
                        }`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">{item.quarter}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 mb-6">{item.description}</p>
                      <div className="space-y-3">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className={`rounded-2xl p-8 ${
                        item.status === 'upcoming' 
                          ? 'bg-gradient-to-br from-blue-100 to-blue-200' 
                          : 'bg-gradient-to-br from-purple-100 to-purple-200'
                      }`}>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <h4 className="font-semibold text-gray-900 mb-4">Expected Impact</h4>
                          <div className="space-y-3">
                            {item.quarter === 'Q4 2025' && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Hands-on Learning</span>
                                  <span className="font-bold text-blue-600">+300%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Skill Retention</span>
                                  <span className="font-bold text-blue-600">+85%</span>
                                </div>
                              </>
                            )}
                            {item.quarter === 'Q1 2026' && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Peer Collaboration</span>
                                  <span className="font-bold text-blue-600">+250%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Completion Rate</span>
                                  <span className="font-bold text-blue-600">+60%</span>
                                </div>
                              </>
                            )}
                            {item.quarter === 'Q2 2026+' && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Global Adoption</span>
                                  <span className="font-bold text-purple-600">10M+ Users</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Skill Portability</span>
                                  <span className="font-bold text-purple-600">Universal</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Innovation Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Technical Innovation Pipeline
              </h2>
              <p className="text-xl text-gray-600">
                Pioneering technologies that will reshape professional development
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {[
                  {
                    period: '2025 Q3-Q4',
                    tech: 'WebXR Integration',
                    description: 'Browser-based VR/AR experiences for immersive learning',
                    details: ['WebXR API implementation', 'Hand tracking support', 'Spatial audio integration']
                  },
                  {
                    period: '2026 Q1',
                    tech: 'Advanced NLP Models',
                    description: 'GPT-4 powered learning facilitators and content generation',
                    details: ['Personalized content creation', 'Real-time feedback systems', 'Multilingual support']
                  },
                  {
                    period: '2026 Q2',
                    tech: 'Blockchain Infrastructure',
                    description: 'Decentralized identity and credential verification',
                    details: ['Self-sovereign identity', 'Smart contract automation', 'Cross-chain compatibility']
                  },
                  {
                    period: '2026 Q3+',
                    tech: 'Quantum-Enhanced AI',
                    description: 'Quantum computing for complex skill relationship modeling',
                    details: ['Quantum algorithms for optimization', 'Enhanced prediction accuracy', 'Real-time global analysis']
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{item.tech}</h3>
                        <span className="text-sm font-medium text-gray-500">{item.period}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.details.map((detail, detailIndex) => (
                          <span key={detailIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community & Feedback */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Shape the Future with Us
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our roadmap evolves based on community feedback and emerging industry needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/features"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Try Current Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Join Developer Preview
              </Link>
            </div>
            <div className="mt-12 bg-blue-800/50 rounded-xl p-6">
              <p className="text-blue-100">
                <strong>Community Input:</strong> Join our Discord to influence roadmap priorities and beta test new features
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Roadmap;
