import React from 'react'
import ProductsCard from '../components/ProductsCard'

export default function Home({query}) {
  return (
    <>
      <ProductsCard query={query}/>
    </>
  )
}
