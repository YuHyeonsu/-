import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topicdetail.css';

function Topicdetail() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className='Topicdetail-page'>
            <header className='Topicdetail-header'>
                <button className='back-button' onClick={() => handleNavigate('/home')}>←</button>
            </header>
            
            <main className='main-content'>
                <img src='/picture.png' alt='Hand Shake' className='Topicdetail-image' />
                <div className='Topicdetail-details'>
                    <h2>선배와 후배간 말을 놓는 순서에 관하여</h2>
                    <div className='Topicdetail-meta'>
                        <span className='author'>작성일 ✿ 전설</span>
                        <span className='meta-info'>👁 156 💬 16</span>
                    </div>
                    <p className='Topicdetail-category'>카테고리 : 학교</p>
                    <h3>상황 설명</h3>
                    <p className='description'>
                        학교에서 선후배사이 오랜 관계가 이루어지면서 자연스럽게 말을 놓게 된다. 
                        이 때 선배와 후배 중 누가 먼저 말을 놓아야 하는가?
                    </p>
                    <textarea placeholder='국룰 제시하기' className='input-description'></textarea>
                </div>
            </main>
            <button className='discussion-button' onClick={() => handleNavigate('/discussion')}>토론방으로 이동</button>
            <footer className='footer'>
                <button className='nav-button' onClick={() => handleNavigate('/dictionary')}>📚</button>
                <button className='nav-button' onClick={() => handleNavigate('/home')}>🏠</button>
                <button className='nav-button' onClick={() => handleNavigate('/mypage')}>👤</button>
            </footer>
        </div>
    );
}

export default Topicdetail;
