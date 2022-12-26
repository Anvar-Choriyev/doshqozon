import { Modal as AntModal } from "antd";

const Modal = ({ children}) => {
  const setting = {
    visible: true,
    centered: true,
    closable: false,
    footer: null,
    mask: true,
  };
  return (
    <section>
      <AntModal {...setting}>
        {children}
      </AntModal>
    </section>
  );
};

export default Modal;
