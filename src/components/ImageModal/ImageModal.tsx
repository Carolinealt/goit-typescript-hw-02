import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ModalData } from "../../types";
import { FC } from "react";
Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  toClose: () => void;
  toOpen: () => void;
  modalData: ModalData;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  toClose,
  modalData: { src, alt, location, desc, likes },
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img className={css.fullImg} src={src} alt={alt} />
        <div className={css.desc}>
          <p className={css.par}>location - {location}</p>
          <p className={css.par}>description - {desc}</p>
          <p className={css.par}>likes - {likes}</p>
        </div>

        <button onClick={toClose} className={css.closeBtn}>
          x
        </button>
      </Modal>
    </>
  );
};

export default ImageModal;
