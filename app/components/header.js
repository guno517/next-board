import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <Link href="/" className="header-logo">
          <span>상점</span>
        </Link>
      </div>
      <div className="search-wrapper">
        <input className="search-input" placeholder="통합 검색" />
        <button className="search-button">검색</button>
      </div>
      <div className="header-icons">
        <div>event</div>
        <div>나만의 상점</div>
        <div>제작</div>
        <div>충전</div>
        <div>유저 아이콘</div>
      </div>
    </div>
  );
}
