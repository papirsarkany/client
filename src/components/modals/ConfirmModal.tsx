import NiceModal, { useModal } from '@ebay/nice-modal-react';

type ConfirmProps = {
  title: string;
};

export type ConfirmModalResponse = 'confirm' | 'cancel';

function ConfirmModal({ title }: ConfirmProps) {
  const modal = useModal();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 ">
      <div className="bg-white p-6 rounded-3xl border-4 border-black ">
        <h1>{title}</h1>
        <button
          className="p-2 bg-green-400"
          type={'button'}
          onClick={() => {
            modal.resolve('confirm' as ConfirmModalResponse);
          }}
        >
          Yes!
        </button>
        <button
          className="p-2 bg-red-400"
          type={'button'}
          onClick={() => modal.resolve('cancel' as ConfirmModalResponse)}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default NiceModal.create(ConfirmModal);
