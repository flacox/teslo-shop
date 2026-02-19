import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJombotron } from "@/shop/components/CustomJombotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"


export const HomePage = () => {

  const {data} = useProducts();

  console.log({data})

  return (
    <>
      <CustomJombotron title="Todos los productos"/>

      <ProductsGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  )
}
