/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import Footer from './component/page/Footer';
import Header from './component/page/Header';
import Notice from './component/page/Notice';

const Button=styled.button`
  display:flex;
  text-align:center;
  color:black;
  background-color:white;
  margin:10px;
  border-radius:5px;
`;
/*
const Wrapper=styled.div`
  overflow-y:scroll;
`;
*/
function App() {
  let post = '블로그 글 제목';
  let [글제목,글제목변경] = useState(['남자 코트 추천','여자 코트 추천','봄 아우터 추천']);
  let [좋아요,좋아요변경] = useState(0);
  
  return (
    <>
    <BrowserRouter>
    <Header />
      <div className="App">
      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 19일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 20일 발행</p>
      </div>
      <Button onClick={()=> {
        let copy = [...글제목];
        copy[0]='여자 코트 추천';
        글제목변경(copy);
      }}>글수정</Button> 
    </div>
    <Footer />
    </BrowserRouter>
      
    </>
  );
}
/*
function Modal() {
  return (
      <div className="modal">
      <h4>문의내용</h4>      
      <p>날짜</p>
      <p>상세내용</p>
      </div>
  )
}
*/

export default App;
