import { useState } from 'react';
import Modal from './components/Modal';
import useDelayedEnablement from './hooks/useDelayedEnablement';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSubmitEnabled = useDelayedEnablement(2000, isModalOpen);

  return (
    <>
      {isModalOpen ? (
        <img
          className="fixed inset-0 h-full w-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/cde9/b82f/c1a950b870c4a179cdf20b5a53c4f10e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGd-E67sbc1jHYceHdedNGg1SbhbxnE3N~4y7qvFCbpqXgoJTaPQNLbpuO~cBZMiBLKtzkG28sioeyzyP2tv4W2azQlVeMsC6qg~L8MMyg4pkb5DA-82PbzEmWLUPXRv7VjK1QPug6Tk1NEU1xk4DkTWBhKdWcyxPs9-zK42P6cMholS5e5BZGXD8IVtaDf0SF8htp9cYz2gdXjoguvQ5VV4bzLM5csrDwGctxGqh5VMXG6DYz~38MZyaNGhDllItSxITtkyAAElHYLCkh820z9dlLgkBlqL094jZ6c6uHZP8mxi36qU851CAlpTXRqgw3PBLzGAEz4qf2eVXJW60A__"
          alt=""
        />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-blue-100">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-white">Frontend task</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Open modal
            </button>
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
        type="alert"
        submitBtnTitle="Delete"
        submitDisabled={!isSubmitEnabled}
      >
        <h2 className="mb-2 text-left font-opensans text-lg-semibold text-neutral-100">
          Delete subprocess 03A456 Picking smtg_long name
        </h2>
        <p className="text-left font-opensans text-sm-normal text-neutral-85">
          Are you sure you want to delete this subprocess? This action cannot be undone.
        </p>
      </Modal>
    </>
  );
}
