'use client';

import { useState } from 'react';

type Hazard = {
  id: number;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  controlMeasure: string;
};

export default function RamsPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');

  // Create RAMS State
  const [projectTitle, setProjectTitle] = useState('');
  const [hazards, setHazards] = useState<Hazard[]>([]);
  const [currentHazard, setCurrentHazard] = useState({ description: '', riskLevel: 'Low', controlMeasure: '' });

  const addHazard = () => {
    if (!currentHazard.description || !currentHazard.controlMeasure) return;
    setHazards([...hazards, { ...currentHazard, id: Date.now(), riskLevel: currentHazard.riskLevel as any }]);
    setCurrentHazard({ description: '', riskLevel: 'Low', controlMeasure: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-blue">RAMs Management</h1>
        <div className="space-x-2">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 rounded ${activeTab === 'list' ? 'bg-primary-blue text-white' : 'bg-white text-gray-700 border'}`}
          >
            All RAMs
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded ${activeTab === 'create' ? 'bg-primary-blue text-white' : 'bg-white text-gray-700 border'}`}
          >
            Create New
          </button>
        </div>
      </div>

      {activeTab === 'list' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
             {/* List View */}
             <table className="min-w-full text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-3 px-6 text-sm font-medium text-gray-600">Project / Activity</th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-600">Created Date</th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-600">Hazards ID'd</th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-600">Status</th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm font-medium text-gray-800">Warehouse Roof Repair</td>
                  <td className="py-3 px-6 text-sm text-gray-600">2023-10-20</td>
                  <td className="py-3 px-6 text-sm text-gray-600">4</td>
                  <td className="py-3 px-6 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Approved</span></td>
                  <td className="py-3 px-6 text-sm text-blue-600 hover:underline cursor-pointer">View PDF</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm font-medium text-gray-800">Excavation Works - Zone B</td>
                  <td className="py-3 px-6 text-sm text-gray-600">2023-10-22</td>
                  <td className="py-3 px-6 text-sm text-gray-600">6</td>
                  <td className="py-3 px-6 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Draft</span></td>
                  <td className="py-3 px-6 text-sm text-blue-600 hover:underline cursor-pointer">Edit</td>
                </tr>
              </tbody>
            </table>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Create Risk Assessment Method Statement</h2>

          <div className="space-y-6">
            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Project / Activity Title</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="e.g. Electrical Installation at Block A"
              />
            </div>

            <hr />

            {/* Hazard Identification */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-blue mb-4">Hazard Identification & Control</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 bg-gray-50 p-4 rounded border">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Hazard Description</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={currentHazard.description}
                    onChange={(e) => setCurrentHazard({...currentHazard, description: e.target.value})}
                    placeholder="e.g. Working at height"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Risk Level (Before Control)</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={currentHazard.riskLevel}
                    onChange={(e) => setCurrentHazard({...currentHazard, riskLevel: e.target.value as any})}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Control Measure</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={currentHazard.controlMeasure}
                    onChange={(e) => setCurrentHazard({...currentHazard, controlMeasure: e.target.value})}
                    placeholder="e.g. Use harness and scaffolding"
                  />
                </div>
                <div className="md:col-span-3 text-right">
                  <button
                    onClick={addHazard}
                    className="bg-primary-blue text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add Hazard
                  </button>
                </div>
              </div>

              {/* List of Added Hazards */}
              {hazards.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2 border">Hazard</th>
                        <th className="p-2 border">Risk</th>
                        <th className="p-2 border">Control Measure</th>
                        <th className="p-2 border">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hazards.map((h) => (
                        <tr key={h.id} className="border-b">
                          <td className="p-2 border">{h.description}</td>
                          <td className="p-2 border">
                            <span className={`px-2 py-0.5 rounded text-xs text-white
                              ${h.riskLevel === 'High' ? 'bg-red-500' : h.riskLevel === 'Medium' ? 'bg-orange-400' : 'bg-green-500'}`}>
                              {h.riskLevel}
                            </span>
                          </td>
                          <td className="p-2 border">{h.controlMeasure}</td>
                          <td className="p-2 border">
                            <button
                              onClick={() => setHazards(hazards.filter(x => x.id !== h.id))}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <hr />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setActiveTab('list')}
                className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('RAMS Saved successfully!');
                  setActiveTab('list');
                }}
                className="px-6 py-2 bg-primary-green text-white rounded hover:bg-green-700 font-medium"
              >
                Save RAMS
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
