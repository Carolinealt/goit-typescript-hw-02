import { FC } from "react";

interface LoadMoreBtnProps {
  handleBtnLoadMore: (e: {}) => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleBtnLoadMore }) => {
  return (
    <>
      <button onClick={handleBtnLoadMore}>load more</button>
    </>
  );
};

export default LoadMoreBtn;
