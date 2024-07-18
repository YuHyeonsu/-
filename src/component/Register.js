import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const [alertVisible, setAlertVisible] = useState(false);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleSubmit = () => {
        setAlertVisible(true);
    };

    const handleAlertConfirm = () => {
        setAlertVisible(false);
        handleNavigate('/home');
    };

    return (
        <div className='register-page'>
            <header className='register-header'>
                <button className='back-button' onClick={() => handleNavigate('/home')}>←</button>
                <h3>주제 등록하기</h3>
                <div className='placeholder'></div>
            </header>
            
            <main className='main-content'>
                <div className='upload-section'>
                    <div className='upload-image'>사진 업로드</div>
                </div>
                <input type='text' placeholder='제목' className='input-title' />
                <textarea placeholder='상황 설명' className='input-description'></textarea>
                <div className='category-section'>
                    <h4>카테고리</h4>
                    <div className='register-category'>
                        <span className='register-category-item'>문학, 책</span>
                        <span className='register-category-item'>영화</span>
                        <span className='register-category-item'>미술, 디자인</span>
                        <span className='register-category-item'>공연, 전시</span>
                        <span className='register-category-item'>운동</span>
                    </div>
                    <div className='register-category-notice'>카테고리 선택 안 함</div>
                </div>
                <button className='submit-button' onClick={handleSubmit}>등록하기</button>
            </main>
            <footer className='footer'>
                <button className='nav-button' onClick={() => handleNavigate('/dictionary')}>📚</button>
                <button className='nav-button' onClick={() => handleNavigate('/home')}>🏠</button>
                <button className='nav-button' onClick={() => handleNavigate('/mypage')}>👤</button>
            </footer>
            {alertVisible && (
                <div className='alert-overlay'>
                    <div className='alert-box'>
                        <p>등록이 완료되었습니다.</p>
                        <button className='alert-button' onClick={handleAlertConfirm}>확인</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;
