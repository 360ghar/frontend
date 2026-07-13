import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const ShareModal = ({ isOpen, onClose, propertyTitle, propertyURL }) => {
  const { t } = useTranslation('properties');

  if (!isOpen) return null;

  const fullURL = typeof window !== 'undefined'
    ? `${window.location.origin}${propertyURL}`
    : propertyURL;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(fullURL).then(() => {
      toast.success(t('propertyItem.linkCopied'), { theme: 'colored' });
    }).catch(() => {
      toast.error(t('propertyItem.failedToCopy'));
    });
    onClose();
  };

  const handleShareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: propertyTitle, url: fullURL });
      } catch {
        // User cancelled or share failed
      }
    }
    onClose();
  };

  return (
    <div
      className="share-modal-overlay"
      onClick={onClose}
      role="button"
      tabIndex={-1}
      aria-label={t('propertyItem.closeShare')}
      onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') onClose(); }}
    >
      <div className="share-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="share-modal__header">
          <h5 className="share-modal__title">{t('propertyItem.shareTitle')}</h5>
          <button
            type="button"
            className="share-modal__close"
            onClick={onClose}
            aria-label={t('propertyItem.closeShare')}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="share-modal__content">
          <button
            type="button"
            className="share-modal__btn"
            onClick={handleCopyLink}
          >
            <i className="fas fa-link"></i>
            <span>{t('propertyItem.copyLink')}</span>
          </button>
          {typeof navigator !== 'undefined' && navigator.share && (
            <button
              type="button"
              className="share-modal__btn"
              onClick={handleShareNative}
            >
              <i className="fas fa-share-alt"></i>
              <span>{t('propertyItem.share')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
