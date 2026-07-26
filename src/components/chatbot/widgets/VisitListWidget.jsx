function formatDate(dateStr) {
  if (!dateStr) return 'Date TBD';
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  } catch {
    return dateStr;
  }
}

const STATUS_LABELS = {
  // Current wire values
  requested: { label: 'Requested', cls: 'chatbot-badge--info' },
  reschedule_suggested: { label: 'Reschedule suggested', cls: 'chatbot-badge--warning' },
  // Shared / still-active statuses
  pending: { label: 'Pending', cls: 'chatbot-badge--warning' },
  confirmed: { label: 'Confirmed', cls: 'chatbot-badge--success' },
  completed: { label: 'Completed', cls: 'chatbot-badge--neutral' },
  cancelled: { label: 'Cancelled', cls: 'chatbot-badge--error' },
  // Legacy fallbacks for cached/old data
  scheduled: { label: 'Scheduled', cls: 'chatbot-badge--info' },
};

export default function VisitListWidget({ data }) {
  if (!data) return null;

  // The agent's bookings_list returns rows under `bookings`, visits_list under
  // `visits`; older payloads used `items`. Accept whichever is present.
  const visits = [data?.bookings, data?.visits, data?.items].find(Array.isArray) || [];

  if (visits.length === 0) {
    return (
      <div className="chatbot-widget chatbot-widget--empty">
        <p>No visits scheduled.</p>
      </div>
    );
  }

  return (
    <div className="chatbot-widget chatbot-widget--visits">
      <div className="chatbot-widget__header">
        <span className="chatbot-widget__title">Visits</span>
        <span className="chatbot-widget__count">{visits.length}</span>
      </div>
      <ul className="chatbot-visit-list">
        {visits.slice(0, 5).map((visit, i) => {
          const status = STATUS_LABELS[visit.status] || { label: visit.status || 'Unknown', cls: 'chatbot-badge--neutral' };
          return (
            <li key={visit.id || i} className="chatbot-visit-item">
              <div className="chatbot-visit-item__main">
                <p className="chatbot-visit-item__property">{visit.property_title || visit.property?.title || 'Property'}</p>
                <p className="chatbot-visit-item__date">{formatDate(visit.scheduled_date || visit.check_in_date || visit.check_in)}</p>
              </div>
              <span className={`chatbot-badge ${status.cls}`}>{status.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
