import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
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
          <ul>
            <li>
              <Link href="/event">
                <Image
                  src="https://cdn-store.leagueoflegends.co.kr/images/v2/eventshop/f32326ea-9386-4f8d-9f72-299cf21291ab.svg"
                  alt="이벤트 아이콘"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link href="/event">
                <Image
                  src="https://cdn-store.leagueoflegends.co.kr/images/v2/eventshop/f32326ea-9386-4f8d-9f72-299cf21291ab.svg"
                  alt="나만의 상점"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link href="/event">
                <Image
                  src="https://cdn-store.leagueoflegends.co.kr/images/v2/eventshop/f32326ea-9386-4f8d-9f72-299cf21291ab.svg"
                  alt="마법공학 제작"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link href="/event">
                <Image
                  src="https://cdn-store.leagueoflegends.co.kr/images/v2/eventshop/f32326ea-9386-4f8d-9f72-299cf21291ab.svg"
                  alt="RP 충전"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link href="/event">
                <Image
                  src="https://cdn-store.leagueoflegends.co.kr/images/v2/eventshop/f32326ea-9386-4f8d-9f72-299cf21291ab.svg"
                  alt="내정보"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
