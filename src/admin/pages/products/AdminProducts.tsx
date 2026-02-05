import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { products } from "@/moks/products.mock";

export const AdminProducts = () => {
  console.log({ products });
  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Productos" subTitle="Todos nuestros productos" />

        <div className="flex justify-end mb-10 gap-4">
          <Link to={"/admin/products/new"}>
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            {/* <TableHead>Stock</TableHead> */}
            <TableHead>Colores</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>
                <img
                  src={product.image}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              {/* <TableCell>100 unid.</TableCell> */}
              <TableCell>{product.colors.join(' ')}</TableCell>
              <TableCell>{product.sizes.join(' ')}</TableCell>
              <TableCell className="text-right">
                <Link to={`/admin/products/t-shirt-teslo`}>
                  <Button>
                    <PencilIcon />
                    Editar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination totalPages={products.length / 2} />
    </>
  );
};
