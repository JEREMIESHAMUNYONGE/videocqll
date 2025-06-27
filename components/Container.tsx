'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function Container() {
  const [roomId, setRoomId] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans overflow-x-hidden flex flex-col items-center justify-center px-6">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300 opacity-20 blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-72 h-72 rounded-full bg-rose-300 opacity-20 blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 max-w-xl">
        {/* Icon & Title */}
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          <h2 className="text-xl font-display font-semibold text-indigo-800">
            Appel Vidéo Rapide
          </h2>
        </div>

        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-100">
          🔴 En direct – Créez ou rejoignez une salle
        </span>

        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 leading-tight">
          Rejoignez votre <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-500">
            salle de réunion
          </span>
        </h1>

        <p className="text-lg text-gray-600">
          Entrez le nom de la salle pour démarrer une session d'appel vidéo sécurisée.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Nom de la salle"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64 bg-white shadow-sm text-gray-700 text-base"
          />
          <Link href={`/room/${roomId}`}>
            <button
              disabled={!roomId}
              className={`px-6 py-3 rounded-xl font-medium text-white shadow-md transition-all duration-200 ${
                roomId
                  ? 'bg-indigo-600 hover:bg-indigo-500'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Rejoindre
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
