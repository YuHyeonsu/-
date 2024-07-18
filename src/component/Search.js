import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {
    const navigate = useNavigate();

    return (
        <div className='search-page'>
            <header className='search-header'>
                <button className='back-button' onClick={() => navigate(-1)}>←</button>
                <input type='text' placeholder='검색할 주제 입력' className='search-input' />
            </header>
            <main className='search-main'>
                <h3>인기 검색어</h3>
                <div className='popular-search'>
                    <span className='search-item'>위닉스 공기청정기</span>
                    <span className='search-item'>LG 세탁기</span>
                    <span className='search-item'>필립스 스마트 조명</span>
                </div>
                <h3>카테고리 별 검색</h3>
                <div className='category-search'>
                    <span className='search-category-item'>문학, 책</span>
                    <span className='search-category-item'>영화</span>
                    <span className='search-category-item'>미술, 디자인</span>
                    <span className='search-category-item'>공연, 전시</span>
                    <span className='search-category-item'>일상, 생각</span>
                    <span className='search-category-item'>게임</span>
                    <span className='search-category-item'>스포츠</span>
                    <span className='search-category-item'>기타</span>
                    <span className='search-category-item'>동영상</span>
                </div>
            </main>
        </div>
    );
}

export default Search;
