import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { PageHeader } from "@/components/site/PageHeader";


export const Route = createFileRoute("/cart")({
  component: CartPage,
});


function CartPage(){

  const {
    items,
    setQty,
    remove,
    count
  } = useCart();



  return (

    <>

      <PageHeader
        eyebrow="Inquiry"
        title="Product Inquiry List"
        description="Review selected products and contact our sales team for quotation."
      />



      <section className="mx-auto max-w-6xl px-5 py-16">


      {
        items.length === 0 ?

        <div className="text-center py-20">

          <h2 className="font-display text-3xl">
            No selected products
          </h2>


          <Link
            to="/products"
            className="btn-gold inline-block mt-8"
          >
            Browse Catalogue
          </Link>


        </div>


        :


        <div>


          <div className="border divide-y">


          {
            items.map(({product,qty})=>(


              <div
                key={product.id}
                className="flex gap-6 p-6 items-center"
              >


                <img
                  src={product.image}
                  className="w-24 h-24 object-cover"
                />


                <div className="flex-1">

                  <h3 className="font-display text-xl">
                    {product.name}
                  </h3>


                  <p className="text-sm text-muted-foreground">
                    Model: {product.model}
                  </p>


                </div>



                <div className="flex items-center gap-3">


                  <button
                    onClick={()=>setQty(product.id,qty-1)}
                  >
                    <Minus size={14}/>
                  </button>


                  <span>
                    {qty}
                  </span>


                  <button
                    onClick={()=>setQty(product.id,qty+1)}
                  >
                    <Plus size={14}/>
                  </button>


                  <button
                    onClick={()=>remove(product.id)}
                  >
                    <Trash2 size={16}/>
                  </button>


                </div>


              </div>


            ))
          }


          </div>



          <div className="mt-10 border p-6">

            <p>
              Selected products: {count}
            </p>


            <Link
              to="/contact"
              className="btn-gold inline-block mt-6"
            >
              Send Inquiry
            </Link>


          </div>



        </div>


      }


      </section>


    </>

  );
}