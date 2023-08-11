'use client';
import React from 'react';
import { ProductCart } from '@/components';
import axios from '@/api/axios';
import { ProductProps } from '@/types';

const Products: React.FC = () => {
  const [allProducts, setAllProducts] = React.useState<[] | ProductProps[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [height, setHeight] = React.useState<number>(0);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get('/products')
      .then(({ data }) => {
        setAllProducts(data.products);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
    if (typeof window !== undefined) {
      setHeight(window.innerHeight);
    }
  }, []);
  return (
    <>
      <div className="pz_wrapper" style={{ minHeight: `${height}px` }}>
        <div className="pz_sidebar">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          officiis odio dolorem, ad suscipit minus. Asperiores consequatur
          expedita quis sed dolores! Minus soluta quae officia aut nisi iusto
          deleniti possimus?
        </div>
        <div className="products-container">
          <div className="products-header">
            <h3>All Products</h3>
          </div>
          {loading ? (
            <p>Loading</p>
          ) : (
            <div className="products-list">
              {allProducts.map((prod) => (
                <ProductCart key={prod._id} {...prod} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
