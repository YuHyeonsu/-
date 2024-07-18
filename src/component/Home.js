import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className='home-page'>
            <header className='header'>
                <img src='/logo2.png' alt='로고' className='logo2' />
                <h3>홈</h3>
                <div className='icons'>
                    <span className='search-icon' onClick={() => handleNavigate('/search')}>🔍</span>
                    <span className='profile-icon'>🔔</span>
                </div>
            </header>
            <main className='main-content'>
                <section className='topic-section'>
                    <h2>토론중인 주제 </h2>
                    <h4>정렬순서
                        <span className='view-all'> · 인기순</span> <span className='view-all'> · 최신순</span>
                    </h4>
                    <div className='home-category'>
                        <h4>카테고리
                            <span className='home-category-item'>문학, 책</span>
                            <span className='home-category-item'>영화</span>
                            <span className='home-category-item'>미술, 디자인</span>
                            <span className='home-category-item'>공연</span>
                        </h4>
                    </div>
                    {[...Array(8)].map((_, index) => (
                     /*   <div 
                            className='topic-item' 
                            key={index}
                            onClick={() => handleNavigate(`/topicdetail/${index}`)}
                        >
                        */
                            <div 
                            className='topic-item' 
  
                            onClick={() => handleNavigate(`/topicdetail/`)}
                        >
                            <img src='/picture.png' alt='주제 이미지' className='topic-image' />
                            <div className='topic-text'>
                                <p>선배와 후배간 말을 놓는 순서에 관하여</p>
                                <div className='topic-text-detail'>
                                    <p>2개의 국룰 제시 됨.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                
            </main>
            <button className='register-button' onClick={() => handleNavigate('/register')}>+ 주제 등록하기</button>
            <footer className='footer'>
                <button className='nav-button' onClick={() => handleNavigate('/dictionary')}>📚</button>
                <button className='nav-button' onClick={() => handleNavigate('/home')}>🏠</button>
                <button className='nav-button' onClick={() => handleNavigate('/mypage')}>👤</button>
            </footer>
        </div>
    );
}

export default Home;
