import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <div className="main">
      <div className="slider">
        <Image
          src="https://cdn-store.leagueoflegends.co.kr/uploads/url_Mobile_Store_banner_f0b4a448de.jpg"
          alt="메인 페이지 배너"
          fill={true}
          sizes={'100vw'}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="title">인기상품</p>
      <p className="title">세일상품</p>
      <p className="title">신규상품</p>
    </div>
  );
}
