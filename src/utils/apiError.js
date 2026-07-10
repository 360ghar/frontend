/**
 * Extract a human-readable error message from an Axios error.
 *
 * Prefers the backend envelope:
 *  - { error: { message: "...", code: "..." } }
 * then falls back to FastAPI/Pydantic formats:
 *  - { detail: string }
 *  - { detail: [{ msg: "..."}, ...] }
 *  - { detail: { msg: "..." } }
 *  - Plain Error with .message
 */
export const extractError = (err, fallback = 'Something went wrong') => {
  try {
    const data = err?.response?.data;

    // Prefer structured error envelope (error.message / error.code)
    const envelopeMsg = data?.error?.message || data?.error?.code;
    if (typeof envelopeMsg === 'string' && envelopeMsg.trim()) {
      return envelopeMsg;
    }

    // Prefer response detail; only use Error.message (not Object#toString).
    const detail =
      data?.detail ??
      (typeof err?.message === 'string' && err.message !== '[object Object]'
        ? err.message
        : undefined);
    if (Array.isArray(detail)) {
      const msgs = detail.map((d) => d?.msg || d?.message || (typeof d === 'string' ? d : JSON.stringify(d)));
      return msgs.filter(Boolean).join(', ') || fallback;
    }
    if (detail && typeof detail === 'object') {
      if (detail?.msg || detail?.message) return detail.msg || detail.message;
      return JSON.stringify(detail);
    }
    if (typeof detail === 'string' && detail.trim() && detail !== '[object Object]') {
      return detail;
    }
    return fallback;
  } catch {
    return fallback;
  }
};
