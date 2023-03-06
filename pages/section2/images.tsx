import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import example from '../../public/example.jpg';
const Images: NextPage = () => {
  return (
    <main>
      <section style={{ height: '500vh' }}>long long content</section>
      <hr style={{ margin: '32px 0' }}></hr>
      <h1>img tag</h1>

      <figure>
        <img
          src="/example.jpg"
          alt="example"
          width={500}
          height={100}
          loading="lazy"
        />

        <figcaption>example img</figcaption>
      </figure>

      <h1> next/image</h1>
      <figure>
        <Image
          src={example} //애를 static하게 import하면 next는 빌드타임에 너비와 높이 다 알수있음 그래서 미리 최적화가능
          alt="v13 image"
          width={500}
          height={100}
          placeholder="blur" //스켈레톤 ui 알아서 해줌
          quality={100}
        />
        <figcaption>v13 image</figcaption>

        <figure
          style={{ position: 'relative', width: '500px', height: '100px' }}
        >
          <Image
            src="/example.jpg"
            alt="v13 fill"
            fill
            style={{ objectFit: 'cover' }}
          />
        </figure>
      </figure>
    </main>
  );
};

export default Images;
