'use client';

import { useState } from 'react';

type FormField = {
  id: number;
  type: 'text' | 'textarea' | 'checkbox' | 'date';
  label: string;
};

export default function FormsBuilderPage() {
  const [formName, setFormName] = useState('');
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      id: Date.now(),
      type,
      label: `New ${type} field`
    };
    setFields([...fields, newField]);
  };

  const updateLabel = (id: number, newLabel: string) => {
    setFields(fields.map(f => f.id === id ? { ...f, label: newLabel } : f));
  };

  const removeField = (id: number) => {
    setFields(fields.filter(f => f.id !== id));
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      <h1 className="text-3xl font-bold text-secondary-blue flex-shrink-0">Custom Form Builder</h1>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Toolbox */}
        <div className="w-64 bg-white p-4 rounded-lg shadow flex flex-col flex-shrink-0">
          <h3 className="font-semibold mb-4 text-gray-700">Toolbox</h3>
          <div className="space-y-2">
            <button
              onClick={() => addField('text')}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border rounded flex items-center"
            >
              <span className="mr-2">📝</span> Text Input
            </button>
            <button
              onClick={() => addField('textarea')}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border rounded flex items-center"
            >
              <span className="mr-2">📄</span> Text Area
            </button>
            <button
              onClick={() => addField('checkbox')}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border rounded flex items-center"
            >
              <span className="mr-2">☑️</span> Checkbox
            </button>
            <button
              onClick={() => addField('date')}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border rounded flex items-center"
            >
              <span className="mr-2">📅</span> Date Picker
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow overflow-auto">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border-b pb-4">
              <input
                type="text"
                placeholder="Form Title (e.g. Incident Report)"
                className="text-3xl font-bold w-full border-none focus:ring-0 placeholder-gray-300"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
              <p className="text-gray-500 mt-2">Drag and drop fields (mock) or click to add from toolbox.</p>
            </div>

            {fields.length === 0 ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center text-gray-400">
                Start adding fields to your form
              </div>
            ) : (
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.id} className="group relative border rounded-md p-4 hover:border-primary-blue bg-gray-50">
                    <div className="mb-2">
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateLabel(field.id, e.target.value)}
                        className="bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary-blue font-medium w-full"
                      />
                    </div>

                    {/* Preview of input */}
                    <div className="pointer-events-none opacity-60">
                      {field.type === 'text' && <input type="text" className="w-full border p-2 rounded" disabled />}
                      {field.type === 'textarea' && <textarea className="w-full border p-2 rounded" rows={3} disabled />}
                      {field.type === 'checkbox' && <div className="flex items-center"><input type="checkbox" className="mr-2" disabled /> <span className="text-sm">Option</span></div>}
                      {field.type === 'date' && <input type="date" className="w-full border p-2 rounded" disabled />}
                    </div>

                    <button
                      onClick={() => removeField(field.id)}
                      className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-6 flex justify-end">
              <button
                className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold shadow-lg transition transform hover:-translate-y-1"
                onClick={() => alert(`Saved form "${formName}" with ${fields.length} fields!`)}
              >
                Save Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
