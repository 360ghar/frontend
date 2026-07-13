import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nLink } from '../../i18n/I18nLink';

import LazyImage from '../../common/ui/LazyImage';
import TrustBadge from '../ui/TrustBadge';
import ShareModal from './ShareModal';
import { usePropertyStore } from '../../store';
import { useAuthStore } from '../../store';
import { useCompareStore } from '../../store/compareStore';
import {
  getListingLabel,
  getPropertyTypeLabel,
} from '../../utils/propertyTaxonomy';

const PROPERTY_IMAGE_FALLBACK = '/assets/images/thumbs/property-1.webp';

const isUsableImageUrl = (value) =>
  typeof value === 'string' && value.trim() !== '' && !/kuula\.co/i.test(value);

const generatePropertyAltText = (property, t) => {
  const parts = [];

  if (property.bhk || property.bedrooms) {
    parts.push(`${property.bhk || property.bedrooms} BHK`);
  }

  const propertyType = getPropertyTypeLabel(property.property_type, t);
  parts.push(propertyType);

  if (property.purpose) {
    parts.push(
      getListingLabel(
        { propertyType: property.property_type, purpose: property.purpose },
        t
      ) || 'in'
    );
  }

  if (property.locality) {
    parts.push(`in ${property.locality}`);
  } else if (property.city) {
    parts.push(`in ${property.city}`);
  }

  if (property.furnishing && property.furnishing !== 'not-specified') {
    parts.push(`(${property.furnishing})`);
  }

  if (property.area_sqft) {
    const existingIndex = parts.findIndex((p) =>
      p.startsWith('(')
    );
    if (existingIndex >= 0) {
      parts[existingIndex] = parts[existingIndex].replace(
        ')',
        `, ${property.area_sqft.toLocaleString()} sqft)`
      );
    } else {
      parts.push(`(${property.area_sqft.toLocaleString()} sqft)`);
    }
  }

  const altText = parts.join(' ');
  return altText ? `${altText} - 360Ghar` : t('propertyItem.propertyListing');
};

const PropertyItem = ({
  property,
  itemClass = '',
  iconsClass = 'text-main',
  btnClass = 'btn-outline-main fw-semibold',
  badgeText,
  badgeClass = 'property-item__badge',
  btnRenderBottom,
  btnRenderRight,
  showFeatureBadges = true,
}) => {
  const { t } = useTranslation('properties');

  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(property.is_liked ?? false);
  const [showShareModal, setShowShareModal] = useState(false);

  const propertyImages = Array.isArray(property.images)
    ? property.images
        .map((img) => img?.image_url)
        .filter((url) => isUsableImageUrl(url))
    : [];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Cycle through property images while the card is hovered.
  useEffect(() => {
    if (!isHovered || propertyImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % propertyImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered, propertyImages.length]);



  const id = property.id;
  const recordSwipe = usePropertyStore((state) => state.recordSwipe);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { compareList, toggleCompare, openCompare } = useCompareStore();
  const isInCompare = compareList.some((p) => p.id === id);

  const isCompactCard =
    typeof itemClass === 'string' &&
    (itemClass.includes('compact-card') || itemClass.includes('style-two'));
  const visibleAmenitiesCount = isCompactCard ? 3 : 4;

  const mainImageFromList = Array.isArray(property.images)
    ? (
        property.images.find((img) => img?.is_main_image && isUsableImageUrl(img?.image_url))?.image_url ||
        property.images.find((img) => isUsableImageUrl(img?.image_url))?.image_url
      )
    : undefined;
  const thumb =
    mainImageFromList ||
    property.main_image_url ||
    property.image_url ||
    property.thumb ||
    PROPERTY_IMAGE_FALLBACK;

  const carouselThumb = propertyImages.length > 0 ? propertyImages[activeImageIdx] : thumb;

  const purpose = property.purpose || property.price_type;
  const priceValue =
    purpose === 'rent'
      ? property.monthly_rent || property.daily_rate || property.base_price
      : property.base_price;
  const day =
    purpose === 'rent'
      ? property.daily_rate
        ? t('listing.perDay')
        : t('listing.perMonth')
      : '';
  const title = property.title || property.name || t('propertyItem.propertyListing');
  const location =
    property.full_address ||
    [property.locality, property.city, property.state]
      .filter(Boolean)
      .join(', ') ||
    property.address ||
    property.location ||
    t('propertyItem.locationNotSpecified');
  const btnText = t('listing.viewDetails');

  const amenities = [];
  if (property.bedrooms) {
    amenities.push({
      icon: <i className="fas fa-bed"></i>,
      text:
        property.bedrooms > 1
          ? t('propertyItem.beds', { count: property.bedrooms })
          : t('propertyItem.bed', { count: property.bedrooms }),
    });
  }
  if (property.bathrooms) {
    amenities.push({
      icon: <i className="fas fa-bath"></i>,
      text:
        property.bathrooms > 1
          ? t('propertyItem.baths', { count: property.bathrooms })
          : t('propertyItem.bath', { count: property.bathrooms }),
    });
  }
  if (property.area_sqft) {
    amenities.push({
      icon: <i className="fas fa-ruler-combined"></i>,
      text: t('propertyItem.sqft', { count: property.area_sqft.toLocaleString() }),
    });
  }
  if (property.balconies) {
    amenities.push({
      icon: <i className="fas fa-home"></i>,
      text:
        property.balconies > 1
          ? t('propertyItem.balconies', { count: property.balconies })
          : t('propertyItem.balcony', { count: property.balconies }),
    });
  }
  if (property.parking_spaces) {
    amenities.push({
      icon: <i className="fas fa-car"></i>,
      text: t('propertyItem.parkingSpaces', { count: property.parking_spaces }),
    });
  }
  if (property.floor_number && property.total_floors) {
    amenities.push({
      icon: <i className="fas fa-building"></i>,
      text: t('propertyItem.floorInfo', { floor: property.floor_number, total: property.total_floors }),
    });
  } else if (property.floor_number) {
    amenities.push({
      icon: <i className="fas fa-building"></i>,
      text: t('propertyItem.floorOnly', { floor: property.floor_number }),
    });
  }
  if (property.age_of_property) {
    amenities.push({
      icon: <i className="fas fa-calendar"></i>,
      text: t('propertyItem.yearsOld', { count: property.age_of_property }),
    });
  }

  const propertyURL = `/property/${id}`;

  const normalizedPurpose = getListingLabel(
    { propertyType: property.property_type, purpose: property.purpose },
    t
  );
  const resolvedBadgeText = property.is_verified
    ? t('propertyItem.verifiedProperty')
    : (badgeText || normalizedPurpose);
  // Only show a top badge when it carries extra information (e.g. Featured/Selected)
  // and isn't just duplicating the purpose tag.
  const shouldRenderBadge =
    Boolean(resolvedBadgeText) &&
    resolvedBadgeText.toLowerCase() !== (normalizedPurpose || '').toLowerCase();

  const handleSaveClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    if (isAuthenticated && id) {
      const ok = await recordSwipe(id, newValue);
      if (ok === false) {
        setIsFavorite(!newValue);
      }
    }
  };

  const handleShareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowShareModal(true);
  };

  const handleCompareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCompare(property);
    if (compareList.length + (isInCompare ? 0 : 1) >= 2 && !isInCompare) {
      openCompare();
    }
  };

  const distance = property.distance_km ? (
    <span className="property-item__distance">
      <i className="fas fa-map-marker-alt"></i>
      {property.distance_km < 1
        ? `${(property.distance_km * 1000).toFixed(0)}m`
        : `${property.distance_km.toFixed(1)}km`}
    </span>
  ) : null;

  const propertyAmenities = property.amenities || [];
  const propertyFeatures = property.features || [];
  const topAmenities = propertyAmenities.slice(0, 3);
  const topFeatures = propertyFeatures.slice(0, 2);

  return (
    <>
      <div
        className={`property-item ${itemClass || ''}`.trim()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveImageIdx(0);
        }}
        data-status={property.status}
        data-type={property.property_type}
        data-location={property.city}
        data-sort={property.sort_by || 'newest'}
      >
        <div className="property-item__thumb">
          <I18nLink to={propertyURL} className="property-item__thumb-link">
            <LazyImage
              src={carouselThumb}
              fallbackSrc={PROPERTY_IMAGE_FALLBACK}
              alt={generatePropertyAltText(property, t)}
              className="cover-img"
            />
          </I18nLink>

          {propertyImages.length > 1 && (
            <div className="property-item__carousel-dots">
              {propertyImages.slice(0, 5).map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`carousel-dot ${dotIdx === activeImageIdx ? 'carousel-dot--active' : ''}`}
                />
              ))}
            </div>
          )}

          <div className="property-item__badge-stack">
            {property.is_verified && (
              <TrustBadge
                type="verified"
                position="top-left"
                tooltip={t('propertyItem.verifiedProperty')}
              />
            )}
            {shouldRenderBadge && !property.is_verified && (
              <span className={badgeClass}>{resolvedBadgeText}</span>
            )}
            {distance}
          </div>

          <div className="property-item__quick-actions">
            <button
              type="button"
              className={`quick-action-btn quick-action-btn--save ${isFavorite ? 'quick-action-btn--active' : ''}`}
              onClick={handleSaveClick}
              title={isFavorite ? t('propertyItem.removeFromFavorites') : t('propertyItem.saveToFavorites')}
              aria-label={isFavorite ? t('propertyItem.removeFromFavorites') : t('propertyItem.saveProperty')}
            >
              <i className={`${isFavorite ? 'fas' : 'far'} fa-heart`}></i>
            </button>
            <button
              type="button"
              className="quick-action-btn quick-action-btn--share"
              onClick={handleShareClick}
              title={t('propertyItem.shareProperty')}
              aria-label={t('propertyItem.shareProperty')}
            >
              <i className="fas fa-share-alt"></i>
            </button>
            <button
              type="button"
              className={`quick-action-btn quick-action-btn--compare ${isInCompare ? 'quick-action-btn--active' : ''}`}
              onClick={handleCompareClick}
              title={t('propertyItem.compare')}
              aria-label={t('propertyItem.compare')}
            >
              <i className="fas fa-balance-scale"></i>
            </button>
          </div>

          {property.virtual_tour_url && (
            <span className="property-item__tour-badge" title={t('propertyItem.tourAvailable')}>
              <i className="fas fa-vr-cardboard" aria-hidden="true"></i>
              360°
            </span>
          )}
        </div>

        <div className="property-item__content">
          <div className="property-item__header">
            <div className="property-item__price-wrapper">
              <h6 className="property-item__price">
                <span className="property-item__price-currency">₹</span>
                <span className="property-item__price-value">
                  {priceValue ? Number(priceValue).toLocaleString('en-IN') : t('listing.priceOnRequest')}
                </span>
                <span className="property-item__price-period">{day}</span>
              </h6>
              {property.price_per_sqft && (
                <span className="property-item__price-per-sqft">
                  ₹{property.price_per_sqft.toLocaleString('en-IN')}/sqft
                </span>
              )}
            </div>
          </div>

          <h6 className="property-item__title">
            <I18nLink to={propertyURL} className="property-item__title-link">
              {title}
            </I18nLink>
          </h6>

          <p className="property-item__location">
            <span className={`property-item__location-icon ${iconsClass}`}>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="property-item__location-text">{location}</span>
          </p>

          <div className="property-item__tags">
            {property.purpose && (
              <span className="property-item__tag property-item__tag--purpose">
                {normalizedPurpose || t('propertyItem.listing')}
              </span>
            )}
            {property.property_type && (
              <span className="property-item__tag property-item__tag--type">
                {getPropertyTypeLabel(property.property_type, t)}
              </span>
            )}
          </div>

          <div className="property-item__bottom">
            <ul className="amenities-list">
              {amenities.slice(0, visibleAmenitiesCount).map((amenity, amenityIndex) => (
                <li className="amenities-list__item" key={amenityIndex} title={amenity.text}>
                  <span className={`amenities-list__icon ${iconsClass}`}>{amenity.icon}</span>
                  <span className="amenities-list__text">{amenity.text}</span>
                </li>
              ))}
            </ul>
            {btnRenderRight && (
              <I18nLink to={propertyURL} className={`btn ${btnClass}`}>
                {btnText}
                <span className="icon-right">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </I18nLink>
            )}
          </div>

          {showFeatureBadges && (topAmenities.length > 0 || topFeatures.length > 0) && (
            <div className="property-item__features">
              {topAmenities.length > 0 && (
                <div className="property-item__features-group">
                  <small className="property-item__features-label">{t('propertyItem.amenities')}</small>
                  <div className="property-item__features-list">
                    {topAmenities.map((amenity, index) => {
                      const label = amenity.title || amenity;
                      return (
                        <span key={index} className="property-item__feature-chip property-item__feature-chip--amenity">
                          {label}
                        </span>
                      );
                    })}
                    {propertyAmenities.length > 3 && (
                      <span className="property-item__feature-chip property-item__feature-chip--amenity">
                        {t('propertyItem.more', { count: propertyAmenities.length - 3 })}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {topFeatures.length > 0 && (
                <div className="property-item__features-group">
                  <small className="property-item__features-label">{t('propertyItem.features')}</small>
                  <div className="property-item__features-list">
                    {topFeatures.map((feature, index) => (
                      <span key={index} className="property-item__feature-chip property-item__feature-chip--feature">
                        {feature}
                      </span>
                    ))}
                    {propertyFeatures.length > 2 && (
                      <span className="property-item__feature-chip property-item__feature-chip--feature">
                        {t('propertyItem.more', { count: propertyFeatures.length - 2 })}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {btnRenderBottom && (
            <I18nLink to={propertyURL} className={`btn ${btnClass} w-100 property-item__cta-bottom`}>
              {btnText}
              <span className="icon-right">
                <i className="fas fa-arrow-right"></i>
              </span>
            </I18nLink>
          )}
        </div>
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        propertyTitle={title}
        propertyURL={propertyURL}
      />
    </>
  );
};

export default PropertyItem;
