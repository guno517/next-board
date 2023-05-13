import React from 'react';
import '../globals.css';
import { price, count } from './data';
import Hello from './hello';

export default function Cart() {
  return (
    <>
      <h3 className="title">장바구니 페이지입니다</h3>
      <Hello />
      <div className="cart-item">
        <p>상품명</p>
        <p>가격</p>
        <p>수량</p>
      </div>
      <CartItem />
    </>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>가렌</p>
      <p>{price}BP</p>
      <p>{count}개</p>
    </div>
  );
}
