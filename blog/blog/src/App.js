/* eslint-disable*/
import React, { useState } from 'react';
import './App.css';


function App()
{
  let [title, setTitle] = useState(['모모는 귀여워', '마요도 귀여워', '고양이최고']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  let [changetitle, setChangetitle] = useState(0);
  let [inputvalue, setInputvalue] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
        title.map(function (a, i)
        {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setChangetitle(i) }}>{title[i]}
                <span onClick={(e) =>
                {
                  e.stopPropagation(); setLike(like + 1)
                }}> 👍 </span> {like} </h4>
              {modal === true ? <Modal color={'pink'} title={title} changetitle={changetitle} /> : null}
              <p>2월 17일 발행</p>
              <button onClick={() =>
              {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>삭제</button>
              <hr />
            </div>
          )
        })
      }
      <div>
        < input onChange={(e) =>
        {
          setInputvalue(e.target.value);
        }
        } />
        < button onClick={() =>
        {
          let copy = [...title];
          copy.unshift(inputvalue);
          setTitle(copy)
        }}> 등록 </button >
      </div>
    </div>


  );
}


function Modal(props)
{
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.changetitle]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={() =>
      {
        props.changetitle(['1', '2', '3'])
      }
      }>글수정</button>
    </div >
  )
}



export default App;



