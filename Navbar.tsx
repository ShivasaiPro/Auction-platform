import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Gavel className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">BidMaster</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/create-auction" className="text-gray-700 hover:text-indigo-600">
              Create Auction
            </Link>
            <Link to="/signin" className="text-gray-700 hover:text-indigo-600">
              <UserCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar