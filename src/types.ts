export interface ImageGalleryProps {
  images: HugeDataImg[];
  setImgData: (data: ModalData) => void;
  setCurrentImage: (img: HTMLImageElement) => void;
  handleOpenModal: (value: boolean) => void;
}

export interface ImageCardProps {
  image: HugeDataImg;
  setImgData: (data: ModalData) => void;
  setCurrentImage: (img: HTMLImageElement) => void;
  handleOpenModal: (value: boolean) => void;
}

export interface ModalData {
  src: string;
  alt: string;
  likes: number;
  location: string;
  desc: string;
}

export interface HugeDataImg {
  urls: { small: string; full: string };
  alternative_slugs: { en: string };
  likes: number;
  user: { location: string };
  alt_description: string;
  id: number;
}
