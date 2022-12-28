const TeaCarousel = ({ tea }) => {
  return (
    <div className="flex justify-center">
      {tea.map((tea1) => {
        return (
          <div
            key={tea1.id}
            className="card card-side bg-base-100 shadow-xl h-[380px]"
          >
            <figure className="w-6/12">
              <img
                src={`http://192.168.0.62:3001/uploads/${tea1.img}`}
                alt="음료 사진"
              />
            </figure>
            <div className="card-body w-6/12">
              <h6 className="card-title mb-3">{tea1.category}</h6>
              <p>음료 : {tea1.name}</p>
              <p>매장명 : {tea1.store}</p>
              <p>
                키워드 : <kbd className="kbd">{tea1.keyword}</kbd>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeaCarousel;
