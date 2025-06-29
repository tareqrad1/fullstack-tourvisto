'use client';

import React from 'react';

const TermsPage = (): React.JSX.Element => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Terms & Conditions</h1>

            <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
                Welcome to Tourvisto! By accessing our platform, you agree to the following terms and conditions. Please read them carefully.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
            <p className="text-gray-700 leading-relaxed">
                You must be at least 18 years old to use our service. You are responsible for ensuring that your use complies with all applicable laws.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Account Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Booking & Payment</h2>
            <p className="text-gray-700 leading-relaxed">
                All bookings are subject to availability. Payments must be made in full and are non-refundable unless otherwise stated.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
                We reserve the right to update these terms at any time. Continued use of the service constitutes acceptance of the new terms.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at <span className="text-blue-600 underline">raditareq16@gmail.com</span>.
            </p>
            </section>
        </div>
        </div>
    );
};

export default TermsPage;
