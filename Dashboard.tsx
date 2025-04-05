import React from 'react';
import { Package, Timer, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const mockAuctions = [
    {
      id: 1,
      title: "Vintage Watch Collection",
      currentBid: 1200,
      endTime: "2024-03-25T15:00:00",
      bids: 15
    },
    {
      id: 2,
      title: "Antique Furniture Set",
      currentBid: 3500,
      endTime: "2024-03-26T18:00:00",
      bids: 8
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Active Auctions</h2>
              <p className="text-2xl font-semibold text-gray-900">5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Timer className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Pending Bids</h2>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Total Won</h2>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            My Active Bids
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {mockAuctions.map((auction) => (
              <li key={auction.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{auction.title}</h4>
                    <p className="text-sm text-gray-500">
                      Current Bid: ${auction.currentBid} • {auction.bids} bids
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Ends in:</p>
                    <p className="text-sm font-medium text-indigo-600">
                      {new Date(auction.endTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;