import React from 'react'
import styles from "./products.module.css"
import allProducts from "./all-products"
import Link from 'next/link'
import Image from 'next/image'
import Loader from '@/components/loader/loader'
import Contact from '@/components/contact/contact'
const Products = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <div className={styles.products}>
        <Loader></Loader>
        <div className="container">
        <section className={styles.productsList}>
          <ul>
            {
              allProducts.map((product) => {
                return(
                  <li key={product.id}>
                    <Link href={`/${locale}/products/${product.href}`}>
                      <Image src={product.src} alt={product.alt} loading='lazy'></Image>
                    </Link>
                    <div className={styles.text}>
                      <h3>
                        {product.name}
                      </h3>
                      <p>
                        {product.description}
                      </p>
                      <Link href={`/${locale}/products/${product.href}`}>More</Link>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
      <Contact l={locale}></Contact>
    </div>
  )
}

export default Products