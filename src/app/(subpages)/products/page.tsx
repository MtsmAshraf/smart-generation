import React from 'react'
import styles from "./products.module.css"
import allProducts from "./all-products"
import Link from 'next/link'
import Image from 'next/image'
const Products = () => {
  return (
    <div className={styles.products}>
      <div className="container">
        <section className={styles.productsList}>
          <ul>
            {
              allProducts.map((product) => {
                return(
                  <li key={product.id}>
                    <Link href={`/products/${product.href}`}>
                      <Image src={product.src} alt={product.alt} loading='lazy'></Image>
                    </Link>
                    <div className={styles.text}>
                      <h3>
                        {product.name}
                      </h3>
                      <p>
                        {product.description}
                      </p>
                      <Link href={`/products/${product.href}`}>More</Link>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Products