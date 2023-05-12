import React from 'react';

export default function ChampionList() {
  const champions = ['가렌', '갈리오', '갱플랭크'];
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {champions.map((champ, idx) => (
        <div key={idx} className="champ">
          <h4>{champ} $50</h4>
        </div>
      ))}
    </div>
  );
}
