const NonCarousel = ({ nonCoffee }) => {
  return (
    <div className="flex justify-center">
      {nonCoffee.map((non) => {
        return (
          <div
            key={non.id}
            className="card card-side bg-base-100 shadow-xl h-[380px]"
          >
            <figure className="w-6/12">
              <img
                src={`http://192.168.0.62:3001/uploads/${non.img}`}
                alt="음료 사진"
              />
            </figure>
            <div className="card-body w-6/12">
              <h6 className="card-title mb-3">{non.category}</h6>
              <p>음료 : {non.name}</p>
              <p>매장명 : {non.store}</p>
              <p>
                키워드 : <kbd className="kbd">{non.keyword}</kbd>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NonCarousel;
