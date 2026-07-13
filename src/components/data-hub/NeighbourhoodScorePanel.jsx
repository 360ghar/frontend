import { useEffect, useState } from 'react';
import ScoreWheel from './ScoreWheel';
import { dataHubService } from '../../services/dataHubService';

const CATEGORIES = ['transit', 'education', 'health', 'retail'];

const NeighbourhoodScorePanel = ({ listingId }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!listingId) return;
    let mounted = true;
    const fetchScore = async () => {
      try {
        const s = await dataHubService.getNeighbourhoodScore(listingId);
        if (mounted) { setScore(s); setLoading(false); }
      } catch {
        if (mounted) { setScore(null); setLoading(false); }
      }
    };
    fetchScore();
    return () => { mounted = false; };
  }, [listingId]);

  if (loading) return <div className="text-muted small">Loading neighbourhood score...</div>;
  if (!score) return null;

  const categoryScores = {
    transit: score.transit_score ?? 0,
    education: score.education_score ?? 0,
    health: score.health_score ?? 0,
    retail: score.retail_score ?? 0,
  };

  return (
    <div className="data-hub-card data-hub-card--score">
      <h4 className="data-hub-card__title">
        <i className="fas fa-star-half-alt" aria-hidden="true"></i>
        Neighbourhood Score
      </h4>
      <div className="data-hub-card__wheels">
        <ScoreWheel score={score.overall_score ?? 0} size={80} label="Overall" />
        {CATEGORIES.map((cat) => (
          <ScoreWheel key={cat} score={categoryScores[cat] ?? 0} size={60}
            label={cat.charAt(0).toUpperCase() + cat.slice(1)} />
        ))}
      </div>
    </div>
  );
};

export default NeighbourhoodScorePanel;
