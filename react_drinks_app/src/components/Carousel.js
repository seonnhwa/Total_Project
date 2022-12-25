import React from 'react';

const Carousel = () => {
  return (
    <div className="flex justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl w-6/12">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h6 className="card-title mb-3">카테고리 넣기 </h6>
          <p>음료명 : </p>
          <p>매장명 : </p>
          <p>
            키워드 : <kbd className="kbd">A</kbd>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
