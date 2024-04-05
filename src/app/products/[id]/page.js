"use client";
import Navber from "@/components/Navber/Navber";
import star from "../../../assets/svg/star.svg";
import Image from "next/image";
import Link from "next/link";
import useProducts from "@/components/Hooks/useProducts";
import { useState } from "react";
export default function DetailsPage({ params }) {
  const [image, setImage] = useState("");
  const { id } = params;
  const { products } = useProducts();
  const productDetails = products?.find(
    (productDetails) => productDetails.id === parseInt(id)
  );
  return (
    <div>
      <Navber />
      <main className="h-screen">
        <section className="bg-[#fafaf2] h-full py-20">
          <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                width={300}
                height={400}
                src={image ? image : productDetails.thumbnail}
                alt={productDetails.title}
                className="w-[400px] h-[500px] mx-auto object-cover"
              ></Image>
              <div className="flex gap-4 mt-4">
                {productDetails?.images.map((image, id) => (
                  <Image
                    onClick={() => setImage(image)}
                    key={id}
                    width={300}
                    height={400}
                    src={image}
                    alt=""
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] mx-auto border object-cover"
                  ></Image>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {productDetails.title}
              </h1>
              <Link href={`/category/${productDetails.category}`} className="text-[#919090] my-3">
                {productDetails.category}
              </Link>
              <div className="mt-3 flex items-center justify-start gap-1">
                <Image
                  width={20}
                  height={20}
                  src={star}
                  alt=""
                  className="w-[20px]"
                ></Image>
                <Image
                  width={20}
                  height={20}
                  src={star}
                  alt=""
                  className="w-[20px]"
                ></Image>
                <Image
                  width={20}
                  height={20}
                  src={star}
                  alt=""
                  className="w-[20px]"
                ></Image>
                <Image
                  width={20}
                  height={20}
                  src={star}
                  alt=""
                  className="w-[20px]"
                ></Image>
                <Image
                  width={20}
                  height={20}
                  src={star}
                  alt=""
                  className="w-[20px]"
                ></Image>
              </div>
              <hr className="my-5 bg-black" />

              <div>
                <p className="my-3">
                  <span className="text-rose-600 opacity-60 line-through">
                    {productDetails.price}
                  </span>
                  <span className="font-bold text-2xl">$195.00</span>
                </p>
              </div>
              <div>
                <p className="leading-7">{productDetails.description}</p>
                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - $195
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
