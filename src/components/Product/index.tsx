import type { Product } from "../../common/types";

interface ProductProps {
    productInfo: Product;
}

const Product: React.FC<ProductProps> = ({ productInfo }) => {
    return (
        <section tabIndex={0} className="dark:bg-slate-800  dark:hover:bg-slate-600 py-6 w-full bg-white md:py-7 antialiased flex flex-col justify-between items-center border  hover:bg-slate-100 group rounded-lg drop-shadow-md">
            <div className="px-4 mx-auto 2xl:px-0 flex flex-col justify-center items-center mb-5">
                <h1 className="dark:text-slate-50  text-sm text-center font-normal text-gray-900 sm:text-2xl my-2 group-hover:underline underline-offset-4">{productInfo.title}</h1>
                <img src={productInfo.image} alt={productInfo.title} className="h-36 w-auto" />
            </div>
            <div className="my-1 sm:mt-8 lg:mt-0 text-left m-2 p-2 border rounded-lg h-14 bg-yellow-100 md:w-3/4 ">
                <p className="text-xs font-normal line-clamp-2 md:line-clamp-2 text-wrap text-slate-950">{productInfo.description}</p>
            </div>
            <div className="text-center">
                <p className="text-sm sm:text-base dark:text-slate-50 "> <span className="">Price:</span> ${productInfo.price}</p>
                <p className="text-sm sm:text-base dark:text-slate-50 ">Rating: {productInfo.rating.rate} ({productInfo.rating.count} reviews )</p>
            </div>
        </section>
    );
}

export default Product