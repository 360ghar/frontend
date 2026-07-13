import { useEffect, useState } from 'react';
import { I18nLink } from '../../i18n/I18nLink';
import { dataHubService } from '../../services/dataHubService';

const CircleRateBanner = ({ sector }) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    if (!sector) return;
    let mounted = true;
    dataHubService.getCircleRates({ sector, limit: 3 })
      .then((data) => { if (mounted) setRates(data?.items || []); })
      .catch(() => {});
    return () => { mounted = false; };
  }, [sector]);

  if (!rates.length) return null;

  const latest = rates[0];
  const rateDisplay = latest.rate_per_sqyd
    ? `₹${Number(latest.rate_per_sqyd).toLocaleString('en-IN')}/sq yd`
    : latest.rate_per_sqft
    ? `₹${Number(latest.rate_per_sqft).toLocaleString('en-IN')}/sq ft`
    : null;

  if (!rateDisplay) return null;

  return (
    <div className="data-hub-card data-hub-card--banner">
      <span>
        <i className="fas fa-rupee-sign" aria-hidden="true"></i>{' '}
        <strong className="data-hub-card__rate">Circle Rate ({sector}): {rateDisplay}</strong>
        {latest.property_type && <span className="text-muted ms-1">({latest.property_type})</span>}
      </span>
      <I18nLink to="/circle-rates" className="data-hub-card__link">
        View All <i className="fas fa-arrow-right" aria-hidden="true"></i>
      </I18nLink>
    </div>
  );
};

export default CircleRateBanner;
