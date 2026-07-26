function StatCard({ label, value, icon }) {
  return (
    <div className="chatbot-stat-card">
      <span className="chatbot-stat-card__icon">{icon}</span>
      <span className="chatbot-stat-card__value">{value ?? '–'}</span>
      <span className="chatbot-stat-card__label">{label}</span>
    </div>
  );
}

function formatIncome(value) {
  if (value === undefined || value === null) return undefined;
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  return `₹${Number(value).toLocaleString('en-IN')}`;
}

export default function DashboardWidget({ data }) {
  if (!data) return null;

  // owner_properties_list nests its counters under `stats`; the PM dashboard
  // tools put them at the top level. Reading only the top level made every
  // owner dashboard render blank.
  const d = { ...data, ...(data.stats ?? {}) };

  const stats = [
    { label: 'Properties', value: d.total_properties ?? d.properties_count, icon: '🏠' },
    { label: 'Occupied', value: d.occupied, icon: '🔑' },
    { label: 'Vacant', value: d.vacant, icon: '🚪' },
    { label: 'Monthly Income', value: formatIncome(d.total_monthly_income), icon: '💰' },
    { label: 'Active Leases', value: d.active_leases ?? d.leases_count, icon: '📋' },
    { label: 'Pending Maintenance', value: d.pending_maintenance ?? d.maintenance_count, icon: '🔧' },
    { label: 'Pending Visits', value: d.pending_visits ?? d.visits_count, icon: '📅' },
  ].filter(s => s.value !== undefined && s.value !== null);

  if (stats.length === 0) return null;

  return (
    <div className="chatbot-widget chatbot-widget--dashboard">
      <div className="chatbot-widget__header">
        <span className="chatbot-widget__title">Dashboard Overview</span>
      </div>
      <div className="chatbot-stat-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
