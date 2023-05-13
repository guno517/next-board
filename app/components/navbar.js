import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/championlist">챔피언</Link>
      <Link href="/skinlist">스킨</Link>
      <Link href="/setlist">세트</Link>
      <Link href="/boxlist">마법공학 제작</Link>
      <Link href="/tftlist">전략적 팀 전투</Link>
      <Link href="/iconlist">아이콘</Link>
      <Link href="/emojilist">감정표현</Link>
      <Link href="/wardlist">와드 스킨</Link>
      <Link href="/screenlist">바탕 화면</Link>
    </div>
  );
}
