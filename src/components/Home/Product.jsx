import useProducts from "../Hooks/useProducts";
import Image from "next/image";
import Link from "next/link"
function Product() {
  const { products } = useProducts();
  return (
    <main>
      {/* Product section start */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {products?.map((product) => (
            <div key={product.id}>
              <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform">
                <Image
                  width={300}
                  height={400}
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full"
                ></Image>
              </div>
              <h2 className="text-sm lg:text-base mt-2">
                <Link className="text-base font-bold" href={`/products/${product.id}`}>
                  {product.title}
                </Link>
                <Link href={`/category/${product.category}`} className="text-[#919090]">(${product.category})
                </Link>
              </h2>
              <p className="text-[#919090] text-sm ">{product.description}</p>

              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">
                  ${product.price}
                </span>{" "}
                $195.00
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Product;
