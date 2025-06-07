
import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Cloud, Shield, Zap, Network, Code } from 'lucide-react';
import Layout from '@/components/Layout';

const Architecture = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Code className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Architecture & Tech Stack
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100">
              Enterprise-grade infrastructure built for scale and performance
            </p>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                System Architecture
              </h2>
              <p className="text-xl text-gray-600">
                Microservices-based platform designed for global scale
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <Database className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Graph Database Layer
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Neo4j Aura</span>
                    <span className="text-blue-600 font-medium">Primary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Causal Cluster</span>
                    <span className="text-blue-600 font-medium">HA/DR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Redis Cache</span>
                    <span className="text-blue-600 font-medium">Performance</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <Cloud className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  AI Services Layer
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-700">Python/FastAPI</span>
                    <span className="text-green-600 font-medium">Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">TensorFlow</span>
                    <span className="text-green-600 font-medium">ML Models</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">EKS Cluster</span>
                    <span className="text-green-600 font-medium">Kubernetes</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-purple-800 mb-4">
                  Auth & Security
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Keycloak</span>
                    <span className="text-purple-600 font-medium">SSO/IdP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">DID Protocol</span>
                    <span className="text-purple-600 font-medium">Identity</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">OAuth2/OIDC</span>
                    <span className="text-purple-600 font-medium">Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Details */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
              Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Network className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Frontend Stack</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">React + TypeScript</h4>
                    <p className="text-gray-600 text-sm">Component-based UI with type safety</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Cytoscape.js</h4>
                    <p className="text-gray-600 text-sm">Interactive graph visualizations</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Tailwind CSS</h4>
                    <p className="text-gray-600 text-sm">Utility-first styling framework</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">PWA Support</h4>
                    <p className="text-gray-600 text-sm">Offline-first mobile experience</p>
                  </div>
                </div>
              </div>

              {/* Backend Services */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Backend Services</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Python/FastAPI</h4>
                    <p className="text-gray-600 text-sm">High-performance API services</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">GraphQL Gateway</h4>
                    <p className="text-gray-600 text-sm">Unified API layer with type safety</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Apache Kafka</h4>
                    <p className="text-gray-600 text-sm">Event streaming and data pipeline</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Elasticsearch</h4>
                    <p className="text-gray-600 text-sm">Search and analytics engine</p>
                  </div>
                </div>
              </div>

              {/* Data & ML */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Data & ML Pipeline</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Neo4j Graph DB</h4>
                    <p className="text-gray-600 text-sm">Skill relationship modeling</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">TensorFlow/PyTorch</h4>
                    <p className="text-gray-600 text-sm">Deep learning model training</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Apache Airflow</h4>
                    <p className="text-gray-600 text-sm">Data workflow orchestration</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">MLflow</h4>
                    <p className="text-gray-600 text-sm">ML lifecycle management</p>
                  </div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Cloud className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cloud Infrastructure</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">AWS EKS</h4>
                    <p className="text-gray-600 text-sm">Managed Kubernetes clusters</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Helm Charts</h4>
                    <p className="text-gray-600 text-sm">Application deployment</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">GitOps/ArgoCD</h4>
                    <p className="text-gray-600 text-sm">Continuous deployment</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Prometheus/Grafana</h4>
                    <p className="text-gray-600 text-sm">Monitoring and observability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Scale */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Performance & Scale Metrics
              </h2>
              <p className="text-xl text-gray-600">
                Built to handle millions of users with sub-second response times
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-600">99.9%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uptime SLA</h3>
                <p className="text-gray-600">Multi-region deployment with automatic failover</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-green-600">&lt;200ms</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Response</h3>
                <p className="text-gray-600">Graph queries optimized for real-time performance</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-600">10M+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Concurrent Users</h3>
                <p className="text-gray-600">Horizontal auto-scaling based on demand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Security & Compliance
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Enterprise-grade security with industry-standard compliance certifications
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Encryption</h4>
                      <p className="text-gray-600">AES-256 encryption at rest and TLS 1.3 in transit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Access Control</h4>
                      <p className="text-gray-600">Zero-trust architecture with fine-grained permissions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                      <p className="text-gray-600">SOC 2 Type II, GDPR, and CCPA compliant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Security Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['SOC 2', 'ISO 27001', 'GDPR', 'CCPA', 'HIPAA', 'FedRAMP'].map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API & Integration */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              API-First Architecture
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive APIs for seamless integration with your existing systems
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-800 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">REST APIs</h4>
                <p className="text-blue-200 text-sm">RESTful endpoints for all platform features</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">GraphQL</h4>
                <p className="text-blue-200 text-sm">Flexible queries with real-time subscriptions</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">WebHooks</h4>
                <p className="text-blue-200 text-sm">Event-driven notifications and updates</p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/docs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore API Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Architecture;
