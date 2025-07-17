import React from "react";
import "./reviewList.css";
import { reviewCard } from "./component/reviewCard";
const hardcodedReviews = [
  {
    user_nickname: "김민중",
    writed_at: "2025-07-01",
    review_img: "review1.png",
    review_content: "정말 맛있어요! 다음에 또 구매할게요.",
    store_name: "맛있는가게",
    store_img: "store1.png",
    store_menu: "닭강정",
    origin_price: 12000,
    sale_price: 8900,
  },
  {
    user_nickname: "포차코",
    writed_at: "2025-07-02",
    review_img: "review2.png",
    review_content: "양도 많고 가성비 좋아요!",
    store_name: "든든한식당",
    store_img: "store2.png",
    store_menu: "제육덮밥",
    origin_price: 9000,
    sale_price: 6500,
  },
  {
    user_nickname: "서가은",
    writed_at: "2025-07-03",
    review_img: "review3.jpg",
    review_content: "깔끔하고 포장도 잘 되어 있어요.",
    store_name: "포장마차",
    store_img: "store3.jpg",
    store_menu: "오뎅탕",
    origin_price: 10000,
    sale_price: 7000,
  },
  {
    user_nickname: "오선정",
    writed_at: "2025-07-04",
    review_img: "review4.jpg",
    review_content: "아이랑 같이 맛있게 먹었어요!",
    store_name: "엄마반찬",
    store_img: "store4.jpg",
    store_menu: "잡채",
    origin_price: 11000,
    sale_price: 8000,
  },
];

const ReviewList = () => {
  return (
    <div id="wrapper">
      <div>
        <span className="reviewmoa">리뷰 모아보기</span>
        <span className="reviewmoa2">| 모든 리뷰를 확인할 수 있어요.</span>
      </div>
      <div className="reviewList">
        <div className="overlap">
          {hardcodedReviews.map((review, i) => (
            <div className="reviewBox" key={i}>
              <div className="reviewerName">{review.user_nickname}</div>
              <div className="reviewedDate">
                {new Date(review.writed_at).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </div>
              <img
                className="reviewImage"
                src={`https://ohgoodfood.s3.ap-northeast-2.amazonaws.com/${review.review_img}`}
                alt="리뷰 이미지"
              />
              <hr className="line" />
              <p className="reviewContent">{review.review_content}</p>
              <div className="storeBox" />
              <div className="storeName">{review.store_name}</div>
              <img
                className="storeImage"
                src={`https://ohgoodfood.s3.ap-northeast-2.amazonaws.com/${review.store_img}`}
                alt="가게 이미지"
              />
              <p className="storeMenu">
                <span className="span">{review.store_menu}</span>
              </p>
              <div className="price">
                <span className="originPrice">{review.origin_price} ₩</span>
                <span className="salePrice">{review.sale_price} ₩</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ReviewList;
