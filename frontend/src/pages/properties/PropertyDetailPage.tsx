import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyBySlug } from '../../services/mockData';
import type { Property } from '../../types/property';
import { formatCurrency } from '../../utils/format';
import Button from '../../components/common/Button';
import { FiStar, FiCheck, FiPlus } from 'react-icons/fi';

const PropertyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<Property | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getPropertyBySlug(slug)
        .then(setProperty)
        .finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!property) return <div className="text-center py-20 text-red-500">Property not found</div>;

  const { title, city, rating, reviewsCount, description, host, amenities, pricePerNight, images } =
    property;

  return (
    <div className="pb-20 font-urbanist">
      <div className="w-full h-[60vh] bg-slate-50 relative p-4 md:px-20 md:pt-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-full rounded-2xl overflow-hidden">
          <div className="col-span-4 md:col-span-2 row-span-2 relative group cursor-pointer">
            <img
              src={images[0]?.url}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img
              src={images[1]?.url || images[0].url}
              alt="Property 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img
              src={images[2]?.url || images[0].url}
              alt="Property 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img
              src={images[3]?.url || images[0].url}
              alt="Property 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img
              src={images[4]?.url || images[0].url}
              alt="Property 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            {images.length > 5 && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold text-lg">
                Show all photos
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-[-30px] left-8 md:left-24 bg-white p-6 md:p-8 shadow-md rounded-2xl max-w-2xl z-20 border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
            {title}
          </h1>
          <div className="flex items-center text-sm md:text-base text-secondary">
            <span className="font-bold mr-1 text-primary flex items-center">
              <FiStar className="mr-1 inline fill-current" /> {rating}
            </span>
            <span className="underline mr-2">({reviewsCount} reviews)</span>
            <span>
              • {city.name}, {city.country}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-20 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between border-b border-gray-100 pb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-primary">Hosted by {host.fullName}</h2>
              <div className="flex items-center space-x-4 text-secondary">
                <span>{property.maxGuests} guests</span>
                <span>• {property.bedrooms} bedrooms</span>
                <span>• {property.bathrooms} bathrooms</span>
              </div>
            </div>
            <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={`https://ui-avatars.com/api/?name=${host.fullName}&background=random`}
                alt={host.fullName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <p className="text-lg text-secondary leading-relaxed font-light">{description}</p>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <h3 className="font-bold text-2xl mb-6 text-primary">Amenities</h3>
            <div className="grid grid-cols-2 gap-y-4">
              {amenities.map((am) => (
                <div
                  key={am.id}
                  className="flex items-center space-x-3 text-secondary"
                >
                  <div className="text-accent">
                    <FiCheck />
                  </div>
                  <span className="font-medium">{am.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 relative">
          <div className="sticky top-24">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-baseline mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-primary">
                    {formatCurrency(pricePerNight)}
                  </span>
                  <span className="text-gray-500 ml-1">/ night</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl mb-6 overflow-hidden">
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="p-4 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      Check-in
                    </div>
                    <div className="text-sm font-medium mt-1 text-gray-800">Add date</div>
                  </div>
                  <div className="p-4 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      Check-out
                    </div>
                    <div className="text-sm font-medium mt-1 text-gray-800">Add date</div>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-100 transition cursor-pointer flex justify-between items-center">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      Guests
                    </div>
                    <div className="text-sm font-medium mt-1 text-gray-800">1 guest</div>
                  </div>
                  <FiPlus className="text-gray-400" />
                </div>
              </div>

              <Button
                fullWidth
                size="lg"
                variant="primary"
              >
                Reserve
              </Button>

              <div className="mt-4 text-center text-sm text-gray-400">You won't be charged yet</div>

              <div className="space-y-3 mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-secondary">
                  <span className="underline">Cleaning fee</span>
                  <span>Rp 250.000</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span className="underline">Service fee</span>
                  <span>Rp 150.000</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-primary pt-3">
                  <span>Total</span>
                  <span>{formatCurrency(pricePerNight + 400000)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
