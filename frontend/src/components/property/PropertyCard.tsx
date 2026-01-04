import React from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../../types/property';
import { formatCurrency } from '../../utils/format';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { title, slug, city, pricePerNight, rating, images } = property;
  const primaryImage =
    images.find((img) => img.isPrimary)?.url || images[0]?.url || 'https://via.placeholder.com/400';

  return (
    <Link
      to={`/properties/${slug}`}
      className="group block"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-200 mb-3">
        <img
          src={primaryImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
          ★ {rating}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-primary truncate pr-2">{title}</h3>
        </div>
        <p className="text-secondary text-sm">
          {city.name}, {city.country}
        </p>
        <div className="flex items-baseline mt-1">
          <span className="font-bold text-primary text-lg">{formatCurrency(pricePerNight)}</span>
          <span className="text-secondary text-sm ml-1">Example per night</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
