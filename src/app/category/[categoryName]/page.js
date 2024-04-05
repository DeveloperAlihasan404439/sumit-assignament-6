"use client";
import Footer from "@/components/Footer/Footer";
import useProducts from "@/components/Hooks/useProducts";
import Navber from "@/components/Navber/Navber";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CategoryPage({ params }) {
  const { categoryName } = params;
  const [category, setCategory] = useState(categoryName);
  const { products } = useProducts();
  const searchFunction = (category, products) => {
    let allProducts = products;
    if (category) {
      allProducts = allProducts.filter(
        (categoryProducts) => categoryProducts.category === category
      );
    }
    return allProducts;
  };
  const categoryProducts = searchFunction(category, products);
  const buttonCss =
    "w-fit lg:w-full text-start rounded px-3 border-black block h-6 box-border mt-5 transition duration-700 ease-in-out";
  return (
    <div>
      <Navber />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex flex-wrap flex-row lg:flex-col items-center justify-between lg:block lg:w-2/12 my-10 mr-4 lg:my-0 lg:mt-4">
            <button
              onClick={() => setCategory("")}
              className={`${category === "" && "bg-[#ffd160]"} ${buttonCss}`}
            >
              All
            </button>
            <button
              onClick={() => setCategory("smartphones")}
              className={`${
                category === "smartphones" && "bg-[#ffd160]"
              } ${buttonCss}`}
            >
              Smartphones
            </button>
            <button
              onClick={() => setCategory("laptops")}
              className={`${
                category === "laptops" && "bg-[#ffd160]"
              } ${buttonCss}`}
            >
              Laptops
            </button>
            <button
              onClick={() => setCategory("fragrances")}
              className={`${
                category === "fragrances" && "bg-[#ffd160]"
              } ${buttonCss}`}
            >
              Fragrances
            </button>
            <button
              onClick={() => setCategory("skincare")}
              className={`${
                category === "skincare" && "bg-[#ffd160]"
              } ${buttonCss}`}
            >
              Skincare
            </button>
            <button
              onClick={() => setCategory("groceries")}
              className={`${
                category === "groceries" && "bg-[#ffd160]"
              } ${buttonCss}`}
            >
              Groceries
            </button>
          </div>
          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {categoryProducts.map((product) => (
              <div key={product.id}>
                <div className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
                  <Image
                    width={300}
                    height={400}
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-sm lg:text-base mt-2">
                  <Link
                    className="text-base font-bold"
                    href={`/products/${product.id}`}
                  >
                    {product.title}
                  </Link>
                  <Link
                    href={`/category/${product.category}`}
                    className="text-[#919090]"
                  >
                    (${product.category})
                  </Link>
                </h2>
                <p className="text-[#919090] text-sm ">{product.description}</p>
                <p className="text-rose-600 text-sm mt-4">
                  <span className="text-[#919090] line-through">
                    ${product.price}
                  </span>{" "}
                  $
                  {product.price -
                    (product.price * product.discountPercentage) / 100}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
