/* eslint-disable*/
import React, { useState } from 'react';
import './App.css';

function App()
{
  let [title, titlechange] = useState(['모모는 귀여워', '마요도 귀여워', '고양이최고']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function ()
  {

  })


  return (

    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> {title[0]} <span onClick={() => { setLike(like + 1) }}>👍</span>
          {like} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3 onClick={() => { setModal(!modal) }}> {title[2]} </h3>

        {modal === true ? <Modal /> : null
        }
        <p>2월 17일 발행</p>
        <hr />
      </div>

      {/* <button onClick={() => {
        let copy = [...title];
        copy.sort();
        titlechange(copy)
      }}>가나다 순 정렬 </button>   */}

    </div>
  );
}

// function Modal()
// {
//   return (
//     <div className="modal">
//       <h2>제목</h2>
//       <p>날짜</p>
//       <p>상세 내용</p>
//     </div>
//   )
// }

export default App;
