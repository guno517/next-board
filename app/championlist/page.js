import Image from 'next/image';
import champImg from 'public/garen.jpg';
import React from 'react';
import '../globals.css';

export default function ChampionList() {
  const champions = ['가렌', '갈리오', '갱플랭크'];
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {champions.map((champ, idx) => (
        <div key={idx} className="champ">
          <Image
            src={champImg}
            alt="챔피언 이미지"
            className="champ-img"
          />
          <h4>{champ} $50</h4>
        </div>
      ))}
    </div>
  );
}
