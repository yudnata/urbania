import { useEffect, useState } from 'react';
import PropertyCard from '../../components/property/PropertyCard';
import { getProperties } from '../../services/mockData';
import type { Property } from '../../types/property';

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Guest Dropdown State
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleGuestChange = (type: keyof typeof guests, operation: 'increment' | 'decrement') => {
    setGuests((prev) => {
      const newValue = operation === 'increment' ? prev[type] + 1 : prev[type] - 1;
      return { ...prev, [type]: newValue };
    });
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to fetch properties', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="relative h-[500px] -mt-6 mb-8 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 min-w-full">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.5] rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 w-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Find your next stay
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">
            Search deals on hotels, homes, and much more...
          </h2>

          {/* Search Bar */}
          <div className="bg-white text-gray-800 rounded-full p-2 pl-6 flex flex-col md:flex-row items-center justify-between shadow-xl max-w-3xl mx-auto">
            <div className="flex-1 w-full md:w-auto mb-2 md:mb-0 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                Location
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full bg-transparent outline-none font-semibold text-gray-800 placeholder-gray-400"
              />
            </div>
            <div className="flex-1 w-full md:w-auto mb-2 md:mb-0 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:px-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                Check in
              </label>
              <input
                type="text"
                placeholder="Add dates"
                className="w-full bg-transparent outline-none font-semibold text-gray-800 placeholder-gray-400"
              />
            </div>
            {/* Guests with Dropdown */}
            <div className="flex-1 w-full md:w-auto mb-2 md:mb-0 text-left pb-2 md:pb-0 md:pl-4 relative">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                Guests
              </label>
              <div
                className="w-full bg-transparent outline-none font-semibold text-gray-800 placeholder-gray-400 cursor-pointer flex items-center"
                onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              >
                {guests.adults + guests.children} guests
                {(guests.infants > 0 || guests.pets > 0) && (
                  <span className="text-gray-500 ml-1 text-sm font-normal">
                    {guests.infants > 0 ? `, ${guests.infants} infants` : ''}
                    {guests.pets > 0 ? `, ${guests.pets} pets` : ''}
                  </span>
                )}
              </div>

              {/* Dropdown Menu */}
              {isGuestDropdownOpen && (
                <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-xl shadow-2xl p-6 z-20 border border-gray-100">
                  {['Adults', 'Children', 'Infants', 'Pets'].map((type) => {
                    const key = type.toLowerCase() as keyof typeof guests;
                    const description =
                      type === 'Adults'
                        ? 'Ages 13 or above'
                        : type === 'Children'
                        ? 'Ages 2–12'
                        : type === 'Infants'
                        ? 'Under 2'
                        : 'Bringing a service animal?';

                    return (
                      <div
                        key={type}
                        className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                      >
                        <div>
                          <div className="font-semibold text-gray-800">{type}</div>
                          <div className="text-sm text-gray-500">{description}</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleGuestChange(key, 'decrement')}
                            disabled={
                              guests[key] === 0 || (type === 'Adults' && guests.adults === 1)
                            }
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${
                              guests[key] === 0 || (type === 'Adults' && guests.adults === 1)
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-gray-400 text-gray-600 hover:border-black hover:text-black'
                            }`}
                          >
                            -
                          </button>
                          <span className="w-4 text-center text-gray-700">{guests[key]}</span>
                          <button
                            onClick={() => handleGuestChange(key, 'increment')}
                            className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-black hover:text-black transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="bg-primary p-3 rounded-full text-white cursor-pointer hover:bg-slate-700 transition ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
        {['Beachfront', 'Cabins', 'Trending', 'Urban', 'Mansions'].map((cat) => (
          <button
            key={cat}
            className="flex flex-col items-center min-w-[64px] space-y-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-slate-200"></div>
            <span className="text-xs font-semibold">{cat}</span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse"
            >
              <div className="bg-gray-200 aspect-4/3 rounded-xl mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
