import React from 'react';
import { Clock, DollarSign, User, History } from 'lucide-react';

const AuctionDetail = () => {
  const mockAuction = {
    id: 1,
    title: "Vintage Rolex Submariner",
    description: "A beautiful vintage Rolex Submariner from 1967. The watch is in excellent condition and comes with original box and papers.",
    currentBid: 15000,
    startingPrice: 10000,
    endTime: "2024-03-25T15:00:00",
    seller: "John Doe",
    bids: [
      { amount: 15000, bidder: "Alice Smith", time: "2024-03-20T14:30:00" },
      { amount: 14500, bidder: "Bob Johnson", time: "2024-03-20T14:15:00" },
      { amount: 14000, bidder: "Charlie Brown", time: "2024-03-20T14:00:00" },
    ],
    images: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=1000"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col-reverse">
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={mockAuction.images[0]}
              alt={mockAuction.title}
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{mockAuction.title}</h1>
          
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-500" />
              <p className="text-3xl text-gray-900 ml-2">Current Bid: ${mockAuction.currentBid}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-500" />
              <p className="text-sm text-gray-500 ml-2">
                Ends in: {new Date(mockAuction.endTime).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center mt-2">
              <User className="h-5 w-5 text-gray-500" />
              <p className="text-sm text-gray-500 ml-2">Seller: {mockAuction.seller}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <div className="mt-2 prose prose-sm text-gray-500">
              <p>{mockAuction.description}</p>
            </div>
          </div>

          <form className="mt-6">
            <div className="sm:flex-1 sm:max-w-xs">
              <label htmlFor="bid" className="sr-only">
                Bid amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  name="bid"
                  id="bid"
                  className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter bid amount"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Place Bid
            </button>
          </form>

          {/* Bid History */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <History className="h-5 w-5 mr-2" />
              Bid History
            </h3>
            <div className="mt-4 flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {mockAuction.bids.map((bid, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {bid.bidder}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${bid.amount} • {new Date(bid.time).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetail;