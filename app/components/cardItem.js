import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardItem({
  thumbnail,
  name,
  rp_price,
  bp_price,
}) {
  return (
    <div className="cardWrapper">
      <Link href="/list">
        <div className="card_thumbnail">
          <Image
            alt="카드 아이템 이미지"
            src={thumbnail}
            fill={true}
          />
        </div>
        <div className="card_info">
          <div className="name">
            <span>{name}</span>
          </div>
          <div className="prices">
            <span>{rp_price}</span>
            <span>{bp_price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
