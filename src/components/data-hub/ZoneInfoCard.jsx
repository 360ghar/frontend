import { useEffect, useState } from 'react';
import { I18nLink } from '../../i18n/I18nLink';
import { dataHubService } from '../../services/dataHubService';

const ZoneInfoCard = ({ sector }) => {
  const [zone, setZone] = useState(null);

  useEffect(() => {
    if (!sector) return;
    let mounted = true;
    dataHubService.getZoningData({ sector, limit: 1 })
      .then((data) => { if (mounted) setZone(data?.items?.[0] || null); })
      .catch(() => {});
    return () => { mounted = false; };
  }, [sector]);

  if (!zone) return null;

  const fields = [
    ['Land Use', zone.land_use],
    ['FAR Limit', zone.far],
    ['Max Height', zone.max_height_m ? `${zone.max_height_m}m` : null],
    ['Coverage', zone.ground_coverage_pct ? `${zone.ground_coverage_pct}%` : null],
  ].filter(([, val]) => val);

  return (
    <div className="data-hub-card">
      <h4 className="data-hub-card__title">
        <i className="fas fa-map-marked-alt" aria-hidden="true"></i>
        Zone Information
      </h4>
      {fields.length > 0 && (
        <div className="data-hub-card__grid">
          {fields.map(([label, val]) => (
            <div className="data-hub-card__field" key={label}>
              <span className="data-hub-card__label">{label}</span>
              <p className="data-hub-card__value">{val}</p>
            </div>
          ))}
        </div>
      )}
      <I18nLink to={`/zone-checker/${zone.slug}`} className="data-hub-card__link">
        Full zone details <i className="fas fa-arrow-right" aria-hidden="true"></i>
      </I18nLink>
    </div>
  );
};

export default ZoneInfoCard;
