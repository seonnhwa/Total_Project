import React, { useState } from 'react';
import axios from 'axios';
// import { useDispatch } from 'react/redux';
// import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const ModalBody = () => {
  const [category, setCategory] = useState(null);
  const [name, setName] = useState('');
  const [store, setStore] = useState('');
  const [keyword, setKeyword] = useState('');

  const [content, setContent] = useState('');
  const [img, setImg] = useState({
    fileName: '',
    filePath: '',
  });

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeStore = (e) => {
    setStore(e.target.value);
  };

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onChangeImg = (e) => {
    setContent(e.target.files[0]);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log('name', name);
    console.log('name', category);
    console.log('name', store);
    console.log('name', keyword);
    console.log('name', img);

    let formData = new FormData();
    formData.append('category', category);
    formData.append('name', name);
    formData.append('store', store);
    formData.append('keyword', keyword);
    formData.append('img', content);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    axios
      .post('http://192.168.0.62:3001/drinks', formData, config)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);
        setImg({ fileName });
        alert('등록되었습니다!');
        console.log('form', res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  // const onImgHandler = (event) => {
  //   setImg(() => event.target.files[0]);
  // };

  // const dispatch = useDispatch();
  // const navigator = useNavigate();

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setCategory('');
  //   setName('');
  //   setStore('');
  //   setKeyword('');
  // };
  // const img = useRef(null);
  // const onFileUpload = (event) => {
  //   let input = event.target;
  //   if (input.files && input.files[0]) {
  //     this.img = input.files[0];
  //     console.log(this.img);
  //   }
  // };
  // const onSubmit = (event) => {
  //   let drinkData = {
  //     category: this.category,
  //     name: this.name,
  //     store: this.store,
  //     keyword: this.keyword,
  //     img: this.img,
  //   };
  //   const formData = new FormData();
  //   formData.append('category', this.category);
  //   formData.append('name', this.name);
  //   formData.append('store', this.store);
  //   formData.append('keyword', this.keyword);
  //   formData.append('img', this.$refs.img.files[0]);

  //   console.log(drinkData);
  // };

  // actDrinkInsert(context, payload) {
  //   axios.post(
  //     'https://192.168.0.61:5000/drinks',
  //     {
  //       category: this.category,
  //       name: this.name,
  //       store: this.store,
  //       keyword: this.keyword,
  //       img: this.img,
  //     }.then((res) => {
  //       const insertedResult = response && response.data && response.data.id;
  //       console.log('등록완료', res);
  //     }),
  //   );
  // };

  //
  //   const [category, setCategory] = useState('');
  //   const [name, setName] = useState('');
  //   const [store, setStore] = useState('');
  //   const [keyword, setKeyword] = useState('');
  //   const [img, setImg] = useState('');

  // const onChangeCategory = (e) => {
  //   setCategory(e.target.value);
  //   console.log(e.target.value);
  // };

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeStore = (e) => {
  //     setStore(e.target.value);
  //   };

  //   const onChangeKeyword = (e) => {
  //     setKeyword(e.target.value);
  //   };

  //   const onChangeImg = (e) => {
  //     setImg(e.target.value);
  //   };

  //   const onSubmit = () => {
  //     console.log('onSubmit');
  //     axios.post(
  //       'https://192.168.0.61:5000/drinks',
  //       {
  //         category: category,
  //         name: name,
  //         store: store,
  //         keyword: keyword,
  //         img: img,
  //       }.then((res) => {
  //         console.log('등록완료', res);
  //       }),
  //     );
  //   };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form className="modal-box" onSubmit={onSubmit}>
          <h3 className="font-bold text-lg">음료를 등록해주세요!</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered"
              onChange={onChangeCategory}
            >
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
              onChange={onChangeName}
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
              onChange={onChangeStore}
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
              onChange={onChangeKeyword}
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              id="img"
              accept="image/*"
              onChange={onChangeImg}
            />
          </div>
          <div className="mt-6 flex gap-3 float-right">
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                취소
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn" onClick={onSubmit}>
                등록
              </label>
            </div>
            {/* <div className="modal-action">
              <button>등록</button>
            </div> */}
            {/* <button className="modal-action btn">등록</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalBody;
