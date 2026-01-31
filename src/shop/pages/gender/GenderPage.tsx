import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/moks/products.mock"
import { CustomJombotron } from "@/shop/components/CustomJombotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"


export const GenderPage = () => {

  const {gender} = useParams();

  const genderLabel = gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';
  return (
    <>
      <CustomJombotron title={`Productos para ${genderLabel}`}/>

      <ProductsGrid products={products}/>

      <CustomPagination totalPages={5}/>
    </>
  )
}
