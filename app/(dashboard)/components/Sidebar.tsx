"use client";

/**
 * Sidebar.tsx
 * ----------
 * Komponen sidebar website RPL SMKN 4 Kendal. Berisi link navigasi cepat.
 * 
 * Digunakan pada main route dashboard seperti /dashboard.
 * 
 * Format: React TypeScript
 */

// App router
import Link from 'next/link';
import { useAuth } from '../authProvider';

export default function Sidebar() {
    const { user, logout } = useAuth(); 

  return (
    <div>
      <div className="flex h-screen w-64 flex-col justify-between border-e bg-gray-900">
        <div className="px-4 py-6">
          <span className="flex items-center gap-1 ml-4 text-lg text-gray-700 dark:text-gray-200">
            <img src="/asset/image/logo/logo-rpl.png" alt="logo" className='w-8 h-8' />
            <span className="font-semibold">RPL</span>
            <span className="font-light">Dashboard</span>
          </span>

          <ul className="mt-6 space-y-1">
            {/* General Dashboard */}
            <li>
              <a
                href="/dashboard"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span className="text-sm font-medium"> General </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2 dark:border-gray-800 dark:bg-gray-900">
          <form action={logout}>
            <button
              type="submit"
              className="cursor-pointer group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                {" "}
                Logout{" "}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
