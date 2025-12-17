'use client';

import { useState } from 'react';

// Mock Data
const initialAudits = [
  { id: 1, name: 'Site Safety Walk', template: 'General Safety', date: '2023-10-24', status: 'Completed', auditor: 'John Doe' },
  { id: 2, name: 'Equipment Check', template: 'Machinery Inspection', date: '2023-10-25', status: 'In Progress', auditor: 'Jane Smith' },
  { id: 3, name: 'Environmental Compliance', template: 'ISO 14001', date: '2023-10-26', status: 'Scheduled', auditor: 'Pending' },
];

export default function AuditsPage() {
  const [audits, setAudits] = useState(initialAudits);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-blue">Audits Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary-green text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          + New Audit
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Audit Name</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Template</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Date</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Auditor</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Status</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {audits.map((audit) => (
              <tr key={audit.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-sm font-medium text-gray-800">{audit.name}</td>
                <td className="py-3 px-6 text-sm text-gray-600">{audit.template}</td>
                <td className="py-3 px-6 text-sm text-gray-600">{audit.date}</td>
                <td className="py-3 px-6 text-sm text-gray-600">{audit.auditor}</td>
                <td className="py-3 px-6 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${audit.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      audit.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'}`}>
                    {audit.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm">
                  <button className="text-primary-blue hover:underline mr-3">View</button>
                  {audit.status !== 'Completed' && (
                    <button className="text-green-600 hover:underline">Conduct</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simple Mock Modal for creating an audit */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Start New Audit</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Audit Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Weekly Site Walk" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Template</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option>General Safety Inspection</option>
                  <option>Fire Safety Check</option>
                  <option>ISO 9001 Quality Audit</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Audit Created (Mock)!');
                    setShowModal(false);
                  }}
                  className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-blue-700"
                >
                  Start Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
