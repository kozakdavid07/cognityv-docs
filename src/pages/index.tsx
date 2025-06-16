import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Cognityv Cloud"
      description="Modern asset management and operational intelligence platform">
      
      {/* Hero Section */}
      <section style={{
        background: 'var(--ifm-background-color)',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '600',
            color: 'var(--ifm-font-color-base)',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Cognityv Cloud
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Intelligent Enterprise Platform with advanced AI agents that transform business automation and data-driven decision making.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/docs/Solutions"
              style={{
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-dark)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
              }}
            >
              Explore Solutions
            </Link>
            <Link
              to="/docs/Platform"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--ifm-color-primary)',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '500',
                border: '1px solid var(--ifm-border-color)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Platform Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section style={{
        background: 'var(--ifm-background-color)',
        padding: '4rem 1rem',
        borderTop: '1px solid var(--ifm-border-color)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: 'var(--ifm-font-color-base)',
            marginBottom: '3rem'
          }}>
            Why Choose Cognityv
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            lineHeight: '1.7',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}>
            Experience a new era of business management with Cognityv's flexible data model that securely stores your company's vital information. Our platform serves as the foundation for building powerful no-code business applications across all operational areas.
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            What sets Cognityv apart is our advanced AI agent technology that autonomously handles complex tasks like invoice matching, purchase order generation, and payment reconciliation, making your operations more efficient and error-free.
          </p>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section style={{
        background: 'var(--ifm-background-color)',
        padding: '4rem 1rem',
        borderTop: '1px solid var(--ifm-border-color)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            
            {/* Advanced Data Architecture */}
            <div style={{
              padding: '2rem',
              border: '1px solid var(--ifm-border-color)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--ifm-font-color-base)',
                marginBottom: '1rem'
              }}>
                Advanced Data Architecture
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Built on sophisticated structured data systems ensuring unparalleled transparency and traceability across your entire business ecosystem with complete audit trails.
              </p>
              <Link
                to="/docs/Platform"
                style={{
                  color: 'var(--ifm-color-primary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}
              >
                Learn More →
              </Link>
            </div>

            {/* Seamless Transaction Management */}
            <div style={{
              padding: '2rem',
              border: '1px solid var(--ifm-border-color)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--ifm-font-color-base)',
                marginBottom: '1rem'
              }}>
                Seamless Transaction Management
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Revolutionize business processes by breaking down complex operations into trackable transactions, integrating procurement, manufacturing, and sales with real-time visibility.
              </p>
              <Link
                to="/docs/Solutions"
                style={{
                  color: 'var(--ifm-color-primary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}
              >
                Learn More →
              </Link>
            </div>

            {/* Adaptive User Experience */}
            <div style={{
              padding: '2rem',
              border: '1px solid var(--ifm-border-color)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--ifm-font-color-base)',
                marginBottom: '1rem'
              }}>
                Adaptive User Experience
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Delivers truly personalized experiences where interfaces adapt to individual user needs with role-specific views and tools for efficient collaboration.
              </p>
              <Link
                to="/docs/Solutions/asset-manager"
                style={{
                  color: 'var(--ifm-color-primary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}
              >
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section style={{
        background: 'var(--ifm-background-color)',
        padding: '4rem 1rem',
        borderTop: '1px solid var(--ifm-border-color)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: 'var(--ifm-font-color-base)',
            marginBottom: '1rem'
          }}>
            Get Started
          </h2>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Explore our documentation to learn how Cognityv Cloud can transform your operations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/docs/Solutions"
              style={{
                color: 'var(--ifm-color-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                border: '1px solid var(--ifm-border-color)',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              View Solutions
            </Link>
            <Link
              to="/release-notes"
              style={{
                color: 'var(--ifm-color-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                border: '1px solid var(--ifm-border-color)',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Release Notes
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
