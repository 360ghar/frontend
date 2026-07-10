import { api } from './api';
import { extractError } from '../utils/apiError';

/**
 * Account deletion / data-erasure service.
 *
 * Backend contracts (verified):
 *   POST /auth/delete-account  body: { confirm: true }  → 204 (authenticated)
 *   DELETE /users/me           → MessageResponse (authenticated)
 *
 * There is NO `/account/delete-request/*` route. Anonymous GDPR requests
 * cannot be stored via API until a dedicated endpoint exists — the UI should
 * direct users to email support or sign in and use immediate delete.
 */

const SUPPORT_EMAIL = 'privacy@360ghar.com';

export const deletionService = {
  supportEmail: SUPPORT_EMAIL,

  /**
   * Immediate account deletion for an authenticated user.
   * Backend returns 204 No Content on success.
   * @returns {Promise<void>}
   */
  deleteAccountImmediate: async () => {
    await api.post('/auth/delete-account', { confirm: true });
  },

  /**
   * @deprecated No backend route. Prefer immediate delete when authenticated,
   * or mailto:privacy@360ghar.com for anonymous GDPR requests.
   * @param {{ email: string, deletion_type: string, reason: string, message?: string }} data
   */
  submitDeletionRequest: async (data) => {
    const email = (data?.email || '').trim();
    const subject = encodeURIComponent(
      `Account deletion request (${data?.deletion_type || 'account'})`
    );
    const body = encodeURIComponent(
      [
        `Email: ${email}`,
        `Deletion type: ${data?.deletion_type || ''}`,
        `Reason: ${data?.reason || ''}`,
        '',
        data?.message || '',
      ].join('\n')
    );
    const err = new Error(
      `Online deletion requests are not available yet. Please email ${SUPPORT_EMAIL} or sign in to delete your account immediately.`
    );
    err.code = 'DELETE_REQUEST_UNAVAILABLE';
    err.mailto = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    err.supportEmail = SUPPORT_EMAIL;
    throw err;
  },

  /**
   * @deprecated Status polling is unavailable without a backend request id.
   */
  getDeletionRequestStatus: async () => {
    const err = new Error(
      `Deletion request status is unavailable. Contact ${SUPPORT_EMAIL} if you have an open request.`
    );
    err.code = 'DELETE_REQUEST_UNAVAILABLE';
    throw err;
  },

  /**
   * @deprecated Cancel is unavailable without a backend request id.
   */
  cancelDeletionRequest: async () => {
    const err = new Error(
      `Deletion request cancel is unavailable. Contact ${SUPPORT_EMAIL}.`
    );
    err.code = 'DELETE_REQUEST_UNAVAILABLE';
    throw err;
  },

  extractError,
};

export default deletionService;
