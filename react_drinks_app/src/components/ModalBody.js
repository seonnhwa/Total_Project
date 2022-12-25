import React from 'react';

const ModalBody = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">음료를 등록해주세요!</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                카테고리를 선택해주세요
              </option>
              <option>Coffee</option>
              <option>Non-Coffee</option>
              <option>Tea</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">음료</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Store</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Keyword</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="mt-6 flex gap-3 float-right">
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                취소
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                등록
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
