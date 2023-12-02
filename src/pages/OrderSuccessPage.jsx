import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { resetOrder } from "../features/order/orderSlice";

export default function OrderSuccessPage() {

  const params=useParams();
  const dispatch=useDispatch();

  const userID=useSelector(state=>state.auth.loggedInUser.id);

  useEffect(()=>{
    //reset cart
    dispatch(resetCartAsync(userID));
    //resent current order placed
    dispatch(resetOrder())
  },[])

  return (
    <>
    {!params.id && <Navigate to='/' replace={true} />}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className=" mx-auto flex flex-col items-center justify-center">
          <CheckCircleIcon className="h-24 w-24 text-orange-600" />

          <p className="text-base font-semibold mt-4">Hey Anup Gupta.</p>
          <h1 className="mt-4 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your order is successfully placed.
          </h1>
          <p className="mt-1 text-base leading-7 text-gray-600">{`check from, My Account > Orders`}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/cart"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}