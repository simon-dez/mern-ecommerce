
import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-light tracking-wider text-center" style={{ color: '#45423D' }}>Our Privacy Policies</h1>
          
        </div>
      </header>
      
      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex border-b border-gray-200">
          <button 
            className={`px-6 py-3 font-light tracking-wide ${activeTab === 'privacy' ? 'border-b-2 border-gray-800' : ''}`}
            style={{ color: activeTab === 'privacy' ? '#181A1B' : '#6C6A61' }}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
          <button 
            className={`px-6 py-3 font-light tracking-wide ${activeTab === 'terms' ? 'border-b-2 border-gray-800' : ''}`}
            style={{ color: activeTab === 'terms' ? '#181A1B' : '#6C6A61' }}
            onClick={() => setActiveTab('terms')}
          >
            Terms of Service
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {activeTab === 'privacy' ? (
          <div>
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Privacy Policy</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                At DEDSV, we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
              </p>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                Last updated: March 12, 2025
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Information We Collect</h2>
              <h3 className="text-xl font-light mb-3" style={{ color: '#45423D' }}>Personal Information</h3>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                When you make a purchase or attempt to make a purchase through our Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.
              </p>
              <h3 className="text-xl font-light mb-3" style={{ color: '#45423D' }}>Usage Information</h3>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                We automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>How We Use Your Information</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4" style={{ color: '#181A1B' }}>
                <li className="mb-2">Process transactions and send you related information, including confirmations and invoices</li>
                <li className="mb-2">Respond to your comments, questions, and requests and provide customer service</li>
                <li className="mb-2">Send you technical notices, updates, security alerts, and support messages</li>
                <li className="mb-2">Communicate with you about products, services, offers, and events, and provide news and information we think will interest you</li>
                <li className="mb-2">Monitor and analyze trends, usage, and activities in connection with our Services</li>
              </ul>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Sharing Your Information</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use our Site. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Your Rights</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Contact Us</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@dedsv.com or by mail using the details provided below:
              </p>
              <p style={{ color: '#181A1B' }}>
                DEDSV<br />
                25 Long Street<br />
                Munich, 123456
              </p>
            </section>
          </div>
        ) : (
          <div>
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Terms of Service</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service.
              </p>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                Last updated: March 12, 2025
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>General Conditions</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                We reserve the right to refuse service to anyone for any reason at any time. You understand that your content may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Products</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                Certain products may be available exclusively online through the website. These products may have limited quantities and are subject to return or exchange only according to our Return Policy. We reserve the right, but are not obligated, to limit the sales of our products to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis.
              </p>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                We reserve the right to discontinue any product at any time. Any offer for any product made on this site is void where prohibited.
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Accuracy of Information</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
              </p>
            </section>
            
            <section className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Changes to Terms of Service</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#45423D' }}>Contact Information</h2>
              <p className="mb-4" style={{ color: '#181A1B' }}>
                Questions about the Terms of Service should be sent to us at legal@dedsv.com or by mail using the details provided below:
              </p>
              <p style={{ color: '#181A1B' }}>
                DEDSV<br />
                25 Long Street<br />
                Munich, 123456
            
              </p>
            </section>
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default PrivacyPolicy;




