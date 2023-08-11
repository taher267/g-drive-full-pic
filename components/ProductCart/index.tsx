import { ProductProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const ProductCart = ({ name, description, price, drive_id }: ProductProps) => {
  return (
    <div className="product">
      <div className="featuredImageWrapper">
        <Image
          loading="lazy"
          src={`https://drive.google.com/uc?export=view&id=${drive_id}`}
          onLoad={() => <>Loading</>}
          // width={700} height={800}
          fill
          // property
          sizes="(max-width:768px) 100vw, 700px"
          alt="Panzabi"
        />
      </div>

      {/* <React.Suspense fallback={<h1>Loading</h1>}>
        <img
          src={`https://drive.google.com/uc?export=view&id=${drive_id}`}
          alt="Product Image"
          style={{ maxWidth: "100%" }}
        />
      </React.Suspense> */}
      {/* https://prnt.sc/8Agjt1H2JGKE */}
      <h4>{name}</h4>
      {(description && <p>{description}</p>) || ''}
      {(price && <p>{price}</p>) || ''}
      <p>More</p>
    </div>
  );
};

export default ProductCart;
