import { useState, useRef } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const modal = useRef();
  return;
  {
    showModal ? (
      <>
        <div className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div
              ref={modal}
              className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
            >
              <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">{modalTitle}</h3>
              </div>

              <div className="relative p-6 flex-auto">
                <p className="my-4 text-lg leading-relaxed">{modalContent}</p>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    ) : null;
  }
}

export default Modal;
