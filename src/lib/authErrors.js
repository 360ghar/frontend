const FALLBACK = 'Something went wrong. Please try again.';

function isUnverifiedMessage(message) {
  return (
    message.includes('email not confirmed') ||
    message.includes('phone not confirmed') ||
    message.includes('user not confirmed') ||
    message.includes('email address not confirmed')
  );
}

/** @param {unknown} error @param {'login' | 'otp' | 'forgot_password'} [context] */
export function mapSupabaseAuthError(error, context = 'login') {
  if (!error) return FALLBACK;

  const err = /** @type {{ status?: number; code?: string; message?: string }} */ (error);
  const code = (err.code || '').toLowerCase();
  const message = (err.message || '').toLowerCase();
  const status = err.status;

  switch (code) {
    case 'invalid_credentials':
    case 'invalid_grant':
      return context === 'otp'
        ? 'Invalid code. Check and try again.'
        : 'Invalid email/phone or password.';
    case 'user_not_found':
      return 'No account found for this email/phone.';
    case 'email_exists':
    case 'user_already_exists':
      return 'An account with this email already exists.';
    case 'phone_exists':
      return 'An account with this phone number already exists.';
    case 'email_not_confirmed':
      return 'Please verify your email before signing in. We can send you a new code.';
    case 'phone_not_confirmed':
      return 'Please verify your phone number before signing in. We can send you a new code.';
    case 'over_email_send_rate_limit':
    case 'over_request_rate_limit':
    case 'over_sms_send_rate_limit':
      return 'Too many requests. Please wait a few minutes and try again.';
    case 'sms_send_failed':
      return "We couldn't send an SMS. Please try again or use email.";
    case 'otp_expired':
      return 'The verification code has expired. Request a new one.';
    case 'otp_disabled':
      return 'The verification code is invalid. Check and try again.';
    case 'weak_password':
      return 'Password is too weak. Try a longer password.';
    case 'validation_failed':
      return 'Validation failed. Please check your input.';
    case 'bad_jwt':
      return 'Your session has expired. Please sign in again.';
    case 'email_address_not_authorized':
      return 'This email is not authorized. Please contact support.';
    default:
      break;
  }

  if (status === 400) return 'Invalid request. Please check your input.';
  if (status === 401) {
    return context === 'otp'
      ? 'Invalid code. Check and try again.'
      : 'Invalid email/phone or password.';
  }
  if (status === 403) return 'Action not allowed.';
  if (status === 404) return 'Requested resource was not found.';
  if (status === 429) return 'Too many attempts. Please try again later.';
  if (status && status >= 500) return 'Server error. Please try again later.';

  if (isUnverifiedMessage(message)) {
    return 'Please verify your account before signing in. We can send you a new code.';
  }
  if (message.includes('invalid login') || message.includes('invalid credentials')) {
    return context === 'otp'
      ? 'Invalid code. Check and try again.'
      : 'Invalid email/phone or password.';
  }
  if (message.includes('expired') && (message.includes('otp') || message.includes('token'))) {
    return 'The verification code has expired. Request a new one.';
  }
  if (message.includes('rate limit')) {
    return 'Too many requests. Please wait and try again.';
  }
  if (message.includes('password is incorrect') || message.includes('wrong password')) {
    return 'Incorrect password. Please try again.';
  }
  if (message.includes('network')) {
    return 'Network error. Check your connection and try again.';
  }

  return err.message || FALLBACK;
}

export const UNVERIFIED_ACCOUNT_MESSAGE =
  "Your account isn't verified yet. We've sent a code — enter it below or resend.";

export const NO_ACCOUNT_FOUND_MESSAGE =
  'No account found with this email or phone. Check the address or sign up.';

export const IDENTIFIER_STATUS_UNAVAILABLE_MESSAGE =
  "Can't reach the server to verify your account. Check your connection and try again.";