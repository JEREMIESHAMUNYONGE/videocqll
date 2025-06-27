"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300 opacity-20 blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-72 h-72 rounded-full bg-red-300 opacity-20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-700 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-red-600">
              Acme Inc
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 rounded-lg font-medium bg-indigo-700 text-white hover:bg-indigo-800 transition-colors shadow-lg">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-300/20 border border-indigo-300/30 text-indigo-700 font-medium">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-700"></span>
              </span>
              <span>We're hiring!</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900">
              Transform your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-red-600">
                business
              </span>{' '}
              with AI
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Our platform helps you automate processes, gain insights, and make data-driven decisions faster than ever before. Join thousands of businesses revolutionizing their operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 rounded-xl bg-indigo-700 text-white font-medium hover:bg-indigo-800 transition-colors shadow-lg flex items-center justify-center">
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch demo
              </button>
            </div>

            <div className="flex items-center pt-8 space-x-4">
              <div className="flex -space-x-2">
                {[12, 32, 45, 76].map((id) => (
                  <img
                    key={id}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://randomuser.me/api/portraits/$
                      {id % 2 === 0 ? 'men' : 'women'}/${id}.jpg`}
                    alt="User"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">10,000+</span> businesses trust us worldwide
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative aspect-square w-full h-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/10 to-red-200/10"></div>
              <div className="absolute inset-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm p-6 flex flex-col">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 h-4 rounded bg-gray-100"></div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-8 rounded-lg bg-indigo-200"></div>
                  <div className="h-8 rounded-lg bg-indigo-300"></div>
                  <div className="h-32 rounded-lg bg-indigo-100"></div>
                  <div className="h-32 rounded-lg bg-gray-100"></div>
                  <div className="h-32 rounded-lg bg-red-200"></div>
                </div>
                <div className="mt-6 flex-1 rounded-lg bg-gray-100 border border-gray-200 p-4">
                  <div className="h-4 w-1/2 rounded bg-gray-200 mb-3"></div>
                  <div className="h-3 w-3/4 rounded bg-gray-300 mb-2"></div>
                  <div className="h-3 w-2/3 rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-red-400/10 backdrop-blur-sm border border-red-200 shadow-lg"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl bg-indigo-400/10 backdrop-blur-sm border border-indigo-200 shadow-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
