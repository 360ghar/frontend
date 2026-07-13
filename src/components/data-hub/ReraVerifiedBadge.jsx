const ReraVerifiedBadge = ({ reraNumber, small = false }) => (
  <span className={`rera-badge ${small ? 'rera-badge--sm' : ''}`}>
    <i className="fas fa-check-circle" aria-hidden="true"></i>
    RERA Verified
    {reraNumber && !small && <span className="rera-badge__number">({reraNumber})</span>}
  </span>
);

export default ReraVerifiedBadge;
