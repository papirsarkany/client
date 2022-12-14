import { ReactNode, useEffect } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

// assets
import closeIcon from '../../assets/close.svg';

type InfoModalProps = {
  children: ReactNode;
};

function InfoModal({ children }: InfoModalProps) {
  const modal = useModal();

  useEffect(() => {
    const handleEscEvent = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        modal.remove();
      }
    };
    document.addEventListener('keyup', handleEscEvent);

    return () => {
      document.removeEventListener('keyup', handleEscEvent);
    };
  }, [modal]);

  return (
    <div className="fixed flex inset-0 bg-black bg-opacity-30 z-50 ">
      <div className="relative flex-grow bg-white p-6 pr-0 rounded-3xl border-4 border-black  m-5">
        <div className="overflow-auto h-full pr-6">{children}</div>
        <button className="absolute top-2 right-2" type="button" onClick={modal.remove}>
          <img className="w-12" src={closeIcon} alt="close-button" />
        </button>
      </div>
    </div>
  );
}

export default NiceModal.create(InfoModal);
