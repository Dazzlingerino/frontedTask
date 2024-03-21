import { type FC, type FormEvent, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import iconAlert from '../assets/alert.svg';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  type?: 'default' | 'alert';
  submitBtnTitle?: string;
  cancelBtnTitle?: string;
  submitDisabled?: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  type = 'default',
  submitBtnTitle = 'Submit',
  cancelBtnTitle = 'Cancel',
  submitDisabled = false,
  children,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-[#192F52] bg-opacity-60 backdrop-blur-[3px]">
      <div className="flex w-[400px] flex-col items-center justify-center gap-8 rounded-xl bg-white p-6 shadow-md">
        <div>
          {type === 'alert' ? (
            <div className="mb-[16px] ml-[-4px] mt-[-4px]">
              <img src={iconAlert} alt="" />
            </div>
          ) : null}
          {children}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="col-span-full row-start-2 flex justify-between gap-3">
            <button
              onClick={onClose}
              type="button"
              className="h-[44px] w-[170px] rounded-lg border border-neutral-25 bg-white px-4 py-2 font-opensans text-base-semibold text-neutral-100 hover:bg-neutral-6 focus:outline-none focus:ring-4 focus:ring-focused-neutral active:bg-neutral-12"
            >
              {cancelBtnTitle}
            </button>
            <button
              type="submit"
              disabled={submitDisabled}
              className={`h-[44px] w-[170px] rounded-lg bg-red-110 px-4 py-2 font-opensans text-base-semibold text-neutral-0 hover:bg-red-120 focus:bg-red-110 focus:outline-none focus:ring-4 focus:ring-focused-red active:bg-red-130 ${
                submitDisabled ? 'cursor-not-allowed bg-red-40 text-opacity-50' : ''
              }`}
            >
              {submitBtnTitle}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
