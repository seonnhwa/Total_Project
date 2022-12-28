const CoffeeCarousel = ({ drinks }) => {
  return (
    <div className="flex justify-center">
      {drinks.map((drink) => {
        return (
          <div
            key={drink.id}
            className="card card-side bg-base-100 shadow-xl h-[380px]"
          >
            <figure className="w-6/12">
              <img
                src={`http://192.168.0.62:3001/uploads/${drink.img}`}
                alt="음료 사진"
              />
            </figure>
            <div className="card-body w-6/12">
              <h6 className="card-title mb-3">{drink.category}</h6>
              <p>음료 : {drink.name}</p>
              <p>매장명 : {drink.store}</p>
              <p>
                키워드 : <kbd className="kbd">{drink.keyword}</kbd>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeCarousel;
