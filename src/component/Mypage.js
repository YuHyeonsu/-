import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mypage.css';

function Mypage() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className='my-page'>
            <header className='header'>
                <img src='/logo2.png' alt='로고' className='logo2' />
                <h3>마이페이지</h3>
                <div className='icons'>
                <span className='search-icon' onClick={() => handleNavigate('/search')}>🔍</span>
                    <span className='profile-icon'>🔔</span>
                </div>
            </header>
            <main className='main-content'>
                <section className='profile-section'>
                    <img src='/profile.png' alt='프로필 이미지' className='profile-image' />
                    <div className='profile-text'>
                        <h2>홍길동
                        <button className='logout-button'>로그아웃</button>
                        </h2>
                        <span className='status'>• 전설</span>
                    </div>
                </section>
                <section className='topic-section'>
                    <h2>내가 등록한 주제 <span className='view-all'>전체 보기 </span></h2>
                    {[...Array(3)].map((_, index) => (
                        <div className='topic-item' key={index}>
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
                <section className='topic-section'>
                    <h2>내가 투표한 주제 <span className='view-all'>전체 보기 </span></h2>
                    {[...Array(3)].map((_, index) => (
                        <div className='topic-item' key={index}>
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
            <footer className='footer'>
                <button className='nav-button' onClick={() => handleNavigate('/dictionary')}>📚</button>
                <button className='nav-button' onClick={() => handleNavigate('/home')}>🏠</button>
                <button className='nav-button' onClick={() => handleNavigate('/mypage')}>👤</button>
            </footer>
        </div>
    );
}

export default Mypage;
