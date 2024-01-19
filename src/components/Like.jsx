import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLikeItems,
  selectLikeState,
  setClearLikeItems,
  setCloseLike,
} from "../app/LikeSlice.js";
import LikeItem from "./like/LikeItem.jsx";
import LikeEmpty from "./like/LikeEmpty.jsx";
import LikeCount from "./like/LikeCount.jsx";
import {
  selectCartState,
  setCloseCart,
  setOpenCart,
} from "../app/CartSlice.js";

const Like = () => {
  const dispatch = useDispatch();
  const ifLikeState = useSelector(selectLikeState);
  const likeItems = useSelector(selectLikeItems);
  const ifCartState = useSelector(selectCartState);
  // console.log(cartItems)

  const onLikeToggle = () => {
    dispatch(
      setCloseLike({
        likeState: false,
      })
    );
  };

  const onCartToggle = () => {
    dispatch(
      setCloseLike({
        likeState: false,
      })
    );

    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onClearLikeItems = () => {
    dispatch(setClearLikeItems());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifLikeState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifLikeState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <LikeCount onLikeToggle={onLikeToggle} />
          {likeItems?.length === 0 ? (
            <LikeEmpty onLikeToggle={onLikeToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {likeItems?.map((item, i) => (
                  <LikeItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  {/* <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1> */}
                </div>
                <div className="grid items-center gap-2">
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                    onClick={onCartToggle}
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Like;
