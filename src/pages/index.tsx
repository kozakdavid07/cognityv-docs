import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// Core module data with icons and features
const coreModules = [
  {
    title: 'Sales',
    icon: '📊',
    description: 'Complete sales lifecycle management',
    features: [
      'Sales orders & quotations',
      'Customer relationship management',
      'Invoice generation & tracking',
      'Performance analytics'
    ],
    link: '/docs/Solutions/core-functions-and-pages#sales'
  },
  {
    title: 'Inventory',
    icon: '📦',
    description: 'Smart inventory & warehouse management',
    features: [
      'Real-time stock tracking',
      'QR code & batch management',
      'Multi-warehouse support',
      'Automated reorder points'
    ],
    link: '/docs/Solutions/core-functions-and-pages#inventory-management'
  },
  {
    title: 'Logistics',
    icon: '🚚',
    description: 'Streamlined logistics & procurement',
    features: [
      'Purchase order management',
      'Supplier relationship tools',
      'Delivery tracking',
      'Cost optimization'
    ],
    link: '/docs/Solutions/core-functions-and-pages#procurement'
  },
  {
    title: 'Procurement',
    icon: '📋',
    description: 'Advanced procurement & tender management',
    features: [
      'Run tenders',
      'Accept reject offers',
      'Send bulk RFPs for suppliers',
      'Collect and compare prices'
    ],
    link: '/docs/Solutions/core-functions-and-pages#procurement'
  },
  {
    title: 'Production',
    icon: '⚙️',
    description: 'Efficient production planning & control',
    features: [
      'Production scheduling',
      'Material requirements planning',
      'Quality control workflows',
      'Batch tracking & traceability'
    ],
    link: '/docs/Solutions/core-functions-and-pages#manufacturing'
  },
  {
    title: 'Finance',
    icon: '💰',
    description: 'Comprehensive financial management',
    features: [
      'Accounts payable/receivable',
      'Financial reporting',
      'Cash flow management',
      'Tax compliance & integration'
    ],
    link: '/docs/Solutions/core-functions-and-pages#finance--accounting'
  },
  {
    title: 'Business Settings',
    icon: '⚡',
    description: 'Flexible platform configuration',
    features: [
      'Custom workflows',
      'User permissions & roles',
      'Integration management',
      'Business rules engine'
    ],
    link: '/docs/Platform'
  },
  {
    title: 'HR',
    icon: '👥',
    description: 'Modern human resource management',
    features: [
      'Employee lifecycle management',
      'Attendance & time tracking',
      'Payroll integration',
      'Compliance & reporting'
    ],
    link: '/docs/Solutions/core-functions-and-pages#human-resources-hr'
  },
  {
    title: 'Custom Solutions',
    icon: '🎯',
    description: 'Tailored solutions for your unique needs',
    features: [
      'Industry-specific workflows',
      'Custom integrations',
      'Specialized reporting',
      'Dedicated support'
    ],
    link: '#custom-solution',
    isCustomCTA: true
  }
];

export default function Home() {
  return (
    <Layout
      title="Cognityv Cloud - All-in-One SMB Platform"
      description="Modern all-in-one business platform for SMBs. Manage sales, inventory, logistics, production, finance, and HR in one unified system.">
      
            {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--ifm-background-color) 0%, var(--ifm-background-surface-color) 100%)',
        padding: '5rem 1rem 3rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '500',
            marginBottom: '2rem',
            letterSpacing: '0.5px'
          }}>
            ALL-IN-ONE SMB PLATFORM
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: 'var(--ifm-font-color-base)',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Everything Your Business
            <br />
            <span style={{ color: 'var(--ifm-color-primary)' }}>Needs in One Place</span>
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '3rem',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            fontWeight: '400'
          }}>
            Streamline your operations with our integrated platform for sales, inventory, logistics, production, finance, and HR management.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="#explore-modules"
              style={{
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.5)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(0, 118, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(0, 118, 255, 0.5)';
              }}
            >
              Explore Platform
            </Link>
            <Link
              to="/docs/Solutions"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--ifm-color-primary)',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid var(--ifm-color-primary)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--ifm-color-primary)';
              }}
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section id="explore-modules" style={{
        padding: '5rem 1rem',
        backgroundColor: 'var(--ifm-background-color)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--ifm-font-color-base)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em'
            }}>
              Complete Business Management
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--ifm-color-emphasis-700)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Discover how each module works together to create a seamless business workflow
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {coreModules.map((module, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: module.isCustomCTA ? 'linear-gradient(135deg, var(--ifm-color-primary) 0%, #1e40af 100%)' : 'var(--ifm-background-color)',
                  border: module.isCustomCTA ? '2px solid var(--ifm-color-primary)' : '1px solid var(--ifm-border-color)',
                  borderRadius: '12px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  background: module.isCustomCTA ? 'linear-gradient(135deg, var(--ifm-color-primary) 0%, #1e40af 100%)' : 'var(--ifm-background-color)',
                  color: module.isCustomCTA ? 'white' : 'inherit'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = module.isCustomCTA ? '0 15px 35px rgba(0, 118, 255, 0.4)' : '0 10px 25px var(--ifm-color-emphasis-200)';
                  e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = module.isCustomCTA ? 'var(--ifm-color-primary)' : 'var(--ifm-border-color)';
                }}
                onClick={() => {
                  if (module.isCustomCTA) {
                    // Handle custom CTA click - could open a contact form or navigate to contact page
                    window.location.href = '/docs/Solutions';
                  } else {
                    window.location.href = module.link;
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    marginRight: '1rem',
                    filter: 'grayscale(0.2)'
                  }}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: module.isCustomCTA ? 'white' : 'var(--ifm-font-color-base)',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {module.title}
                    </h3>
                    <p style={{
                      color: module.isCustomCTA ? 'rgba(255, 255, 255, 0.9)' : 'var(--ifm-color-emphasis-700)',
                      margin: '0',
                      fontSize: '0.95rem'
                    }}>
                      {module.description}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: module.isCustomCTA ? 'rgba(255, 255, 255, 0.8)' : 'var(--ifm-color-primary)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {module.isCustomCTA ? 'What We Offer' : 'Key Features'}
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0'
                  }}>
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem',
                        color: module.isCustomCTA ? 'rgba(255, 255, 255, 0.9)' : 'var(--ifm-color-emphasis-600)'
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: module.isCustomCTA ? 'rgba(255, 255, 255, 0.8)' : 'var(--ifm-color-primary)',
                          borderRadius: '50%',
                          marginRight: '0.75rem',
                          flexShrink: 0
                        }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: module.isCustomCTA ? 'white' : 'var(--ifm-color-primary)',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  {module.isCustomCTA ? 'Get Your Custom Solution' : `Explore ${module.title}`}
                  <span style={{ marginLeft: '0.5rem', transition: 'transform 0.2s ease' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Builder Features Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: 'var(--ifm-background-color)',
        borderTop: '1px solid var(--ifm-border-color)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--ifm-font-color-base)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em'
            }}>
              Built on a Powerful Platform
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--ifm-color-emphasis-700)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Create, customize, and scale your business applications with our advanced no-code platform
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '2rem'
          }}>
            {/* Platform Core Box */}
            <div style={{
              position: 'relative',
              padding: '2.5rem',
              background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, #1e40af 100%)',
              borderRadius: '16px',
              color: 'white',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                zIndex: 1
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '100px',
                height: '100px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                zIndex: 1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem'
                }}>
                  🏗️
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  Platform Foundation
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: '0.9'
                }}>
                  Built on sophisticated structured data architecture ensuring transparency, traceability, and scalability across your entire business ecosystem.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}>
                  {[
                    'Flexible Data Model',
                    'Real-time Processing',
                    'Advanced Security',
                    'Cloud Infrastructure'
                  ].map((feature, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        borderRadius: '50%',
                        marginRight: '0.75rem',
                        flexShrink: 0
                      }}></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Builder Tools Box */}
            <div style={{
              position: 'relative',
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: '16px',
              color: 'white',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-40px',
                left: '-40px',
                width: '120px',
                height: '120px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                zIndex: 1
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-60px',
                right: '-60px',
                width: '180px',
                height: '180px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                zIndex: 1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem'
                }}>
                  🛠️
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  No-Code Builder Suite
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  opacity: '0.9'
                }}>
                  Powerful visual tools that let you create custom pages, forms, data grids, and workflows without writing a single line of code.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1rem'
                }}>
                  {[
                    { name: 'Page Editor', desc: 'Visual page builder' },
                    { name: 'Form Editor', desc: 'Dynamic form creator' },
                    { name: 'Grid Editor', desc: 'Data grid designer' },
                    { name: 'Workflow Engine', desc: 'Business process automation' }
                  ].map((tool, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ fontWeight: '600' }}>{tool.name}</span>
                      <span style={{ opacity: '0.8', fontSize: '0.85rem' }}>{tool.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Platform Benefits */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--ifm-background-surface-color)',
            borderRadius: '12px',
            border: '1px solid var(--ifm-border-color)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              {[
                {
                  icon: '⚡',
                  title: 'Rapid Development',
                  description: 'Build applications 10x faster with visual tools'
                },
                {
                  icon: '🔧',
                  title: 'Full Customization',
                  description: 'Tailor every aspect to your business needs'
                },
                {
                  icon: '🔗',
                  title: 'Seamless Integration',
                  description: 'Connect with existing systems and APIs'
                },
                {
                  icon: '📈',
                  title: 'Enterprise Scale',
                  description: 'Grows from startup to enterprise level'
                }
              ].map((benefit, index) => (
                <div key={index}>
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem'
                  }}>
                    {benefit.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--ifm-font-color-base)',
                    marginBottom: '0.5rem'
                  }}>
                    {benefit.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Benefits Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        borderTop: '1px solid var(--ifm-border-color)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: 'var(--ifm-font-color-base)',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                Built for Modern Businesses
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--ifm-color-emphasis-700)',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Our platform grows with your business, providing the flexibility and scalability you need to succeed in today's competitive market.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem'
              }}>
                <div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--ifm-color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    99.9%
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    fontWeight: '500'
                  }}>
                    Uptime Reliability
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--ifm-color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    50+
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    fontWeight: '500'
                  }}>
                    Integrations Available
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: 'Real-time Synchronization',
                  description: 'All modules work in perfect harmony with instant data synchronization across your entire business.'
                },
                {
                  title: 'Advanced Analytics',
                  description: 'Make data-driven decisions with comprehensive reporting and business intelligence tools.'
                },
                {
                  title: 'Scalable Architecture',
                  description: 'From startup to enterprise, our platform scales with your business needs seamlessly.'
                }
              ].map((benefit, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--ifm-background-color)',
                  borderRadius: '8px',
                  border: '1px solid var(--ifm-border-color)'
                }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--ifm-font-color-base)',
                    marginBottom: '0.5rem'
                  }}>
                    {benefit.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: 'var(--ifm-color-primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2.5rem',
            opacity: '0.9',
            lineHeight: '1.6'
          }}>
            Join thousands of businesses already using Cognityv to streamline their operations and drive growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/docs/Solutions"
              style={{
                backgroundColor: 'white',
                color: 'var(--ifm-color-primary)',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Started
            </Link>
            <Link
              to="/docs/Platform"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
