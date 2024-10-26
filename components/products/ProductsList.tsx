import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;

        return (
          <article key={productId} className='group relative'>
            <Link href={`/products/${productId}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                  {/* Image */}
                  <div className='relative h-64 md:size-48'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                      priority
                      className='w-full rounded-md object-cover'
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                    <h4 className='text-muted-foreground'>{company}</h4>
                  </div>

                  {/* Price */}
                  <p className='text-muted-foreground text-lg md:ml-auto'>
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <div className='absolute bottom-8 right-8'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsList;
