import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";


export function ProductModal({
  product,
  onClose,
}:{
  product: Product;
  onClose: ()=>void;
}){


  const { add } = useCart();



  return (

    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/70
      p-5
      "
    >


      <div
        className="
        relative
        max-h-[90vh]
        overflow-y-auto
        w-full
        max-w-5xl
        bg-background
        border
        p-8
        "
      >


        <button

          onClick={onClose}

          className="
          absolute
          right-5
          top-5
          text-muted-foreground
          hover:text-gold
          "

        >

          <X size={22}/>

        </button>




        <div className="grid gap-10 md:grid-cols-2">


          <img

            src={product.image}

            alt={product.name}

            className="
            w-full
            aspect-square
            object-cover
            "

          />



          <div>


            <p className="text-xs uppercase tracking-widest text-gold">

              TIMES SQUARE COLLECTION

            </p>



            <h2 className="font-display text-3xl mt-4">

              {product.name}

            </h2>



            <p className="mt-3 text-sm text-muted-foreground">

              Model: {product.model}

            </p>




            <p className="mt-6 leading-relaxed">

              {product.description}

            </p>




            <div className="mt-6 space-y-2 text-sm">


              <p>
                <strong>Category:</strong> {product.category}
              </p>


              <p>
                <strong>Origin:</strong> {product.origin}
              </p>


              <p>
                <strong>Type:</strong> Personal Gift Watch
              </p>


            </div>




            <div className="mt-6">


              <h3 className="font-semibold">

                Specifications

              </h3>


              <ul className="mt-3 list-disc pl-5">

                {
                  product.specifications.map(
                    item=>(
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )
                }

              </ul>


            </div>




            <div className="mt-8 flex gap-3">


              <button

                onClick={()=>{
                  add(product.id);
                }}

                className="btn-gold"

              >

                Add Inquiry

              </button>




              <Link

                to="/contact"

                className="btn-outline-gold"

              >

                Contact Us

              </Link>


            </div>



          </div>



        </div>



      </div>


    </div>

  );

}