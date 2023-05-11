import Link from 'next/link';
import React from 'react';

export default function ProductList() {
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      <div className="food">
        <h4>상품1 $50</h4>
      </div>
      <div className="food">
        <h4>상품2 $30</h4>
      </div>
      <Link href="/cart" className="food">
        <h4>상품3 $20 결제 테스트</h4>
      </Link>
    </div>
  );
}
