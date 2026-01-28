import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/moks/products.mock"
import { CustomJombotron } from "@/shop/components/CustomJombotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"


export const HomePage = () => {
  return (
    <>
      <CustomJombotron title="Todos los productos"/>

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  )
}
