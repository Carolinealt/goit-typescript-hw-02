import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import getImages from "./api/images-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { HugeDataImg, ModalData } from "./types";

function App() {
  const [imagesList, setImagesList] = useState<HugeDataImg[]>([]);
  const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(
    null
  );
  const [isLoasding, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({
    src: "",
    alt: "",
    likes: 0,
    location: "",
    desc: "",
  });

  const handleBtnLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchImg = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getImages(query, page);
        setImagesList((prevAr) =>
          page > 1 ? [...prevAr, ...data] : [...data]
        );
      } catch (error) {
        setIsLoading(false);
        setError(true);
        toast("перезагрузи страницу");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImg();
  }, [page, query, setIsLoading, setError]);

  const handleQuerry = (newQuery: string) => {
    setImagesList([]);
    setQuery(newQuery);
    setPage(1);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar func={handleQuerry} />
      {error && <ErrorMessage />}
      {imagesList.length > 0 && (
        <ImageGallery
          images={imagesList}
          setImgData={setModalData}
          setCurrentImage={setCurrentImage}
          handleOpenModal={handleOpenModal}
        />
      )}
      {imagesList.length > 0 && (
        <LoadMoreBtn handleBtnLoadMore={handleBtnLoadMore} />
      )}
      {isLoasding && <Loader />}
      <Toaster />
      {currentImage && (
        <ImageModal
          toOpen={handleOpenModal}
          isOpen={modalIsOpen}
          toClose={handleCloseModal}
          modalData={modalData}
        />
      )}
    </>
  );
}

export default App;
