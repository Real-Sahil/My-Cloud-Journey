import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-blue text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">QHSE Platform</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="hover:bg-primary-blue">
              <Link href="/" className="block px-6 py-3">Dashboard</Link>
            </li>
            <li className="hover:bg-primary-blue">
              <Link href="/audits" className="block px-6 py-3">Audits</Link>
            </li>
            <li className="hover:bg-primary-blue">
              <Link href="/rams" className="block px-6 py-3">RAMs</Link>
            </li>
            <li className="hover:bg-primary-blue">
              <Link href="/forms" className="block px-6 py-3">Form Builder</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-secondary-blue">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">User: Admin</span>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-secondary-blue font-bold">A</div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
