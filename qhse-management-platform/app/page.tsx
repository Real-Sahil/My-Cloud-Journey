import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-blue">Overview</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-primary-green">
          <h3 className="text-gray-500 font-medium">Completed Audits</h3>
          <p className="text-3xl font-bold text-gray-800">12</p>
          <span className="text-sm text-green-600">+2 this week</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-primary-blue">
          <h3 className="text-gray-500 font-medium">Pending RAMs</h3>
          <p className="text-3xl font-bold text-gray-800">5</p>
          <span className="text-sm text-blue-600">Action required</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
          <h3 className="text-gray-500 font-medium">Open Incidents</h3>
          <p className="text-3xl font-bold text-gray-800">3</p>
          <span className="text-sm text-yellow-600">Needs attention</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-secondary-blue">Recent Audits</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-sm font-medium text-gray-600">Audit Name</th>
                  <th className="py-2 text-sm font-medium text-gray-600">Date</th>
                  <th className="py-2 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 text-sm">Site Safety Walk</td>
                  <td className="py-3 text-sm">Oct 24, 2023</td>
                  <td className="py-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 text-sm">Quality Inspection</td>
                  <td className="py-3 text-sm">Oct 25, 2023</td>
                  <td className="py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
             <Link href="/audits" className="text-primary-blue hover:underline text-sm">View All Audits &rarr;</Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-secondary-blue">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/audits" className="block w-full text-center py-3 bg-primary-blue text-white rounded hover:bg-blue-700 transition">
              Conduct New Audit
            </Link>
            <Link href="/rams" className="block w-full text-center py-3 bg-primary-green text-white rounded hover:bg-green-700 transition">
              Create New RAMs
            </Link>
            <Link href="/forms" className="block w-full text-center py-3 border border-secondary-blue text-secondary-blue rounded hover:bg-blue-50 transition">
              Build Custom Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
