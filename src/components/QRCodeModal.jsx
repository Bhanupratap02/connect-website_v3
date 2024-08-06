import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { QRCodeSVG } from "qrcode.react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const QRCodeModal = ({ isOpen, onClose, qrCodeValue }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (isOpen) {
      gsap.to("body", { overflow: "hidden" });
    } else {
      gsap.to("body", { overflow: "auto" });
    }
    return () => {
      gsap.to("body", { overflow: "auto" });
    };
  }, [isOpen]);

  const handleClose = (e) => {
    if (e.target.id === "modal-container") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-container"
      className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-[200]"
      onClick={handleClose}
    >
      <div className="bg-white py-10 px-0 rounded-21xl relative max-w-md w-full mx-4 flex flex-col items-center">
        <div className="text-center my-4 text-6xl font-bold text-black">
          {t("scan-qr.scanQRModalTitle")}
        </div>
        <div className="relative">
          <QRCodeSVG value={qrCodeValue} size={220} />
          {/* Lime border in the four corners */}
          <div className="absolute border-limegreen border-4 w-6 h-6 top-0 left-0"></div>
          <div className="absolute border-limegreen border-4 w-6 h-6 top-0 right-0"></div>
          <div className="absolute border-limegreen border-4 w-6 h-6 bottom-0 left-0"></div>
          <div className="absolute border-limegreen border-4 w-6 h-6 bottom-0 right-0"></div>
        </div>
        <div className="text-center mt-4 text-[15px] font-medium text-gray-500">
          {t("scan-qr.scanQRModalDescription1")} <br /> {t("scan-qr.scanQRModalDescription2")}
        </div>
      </div>
    </div>
  );
};

QRCodeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  qrCodeValue: PropTypes.string.isRequired,
};

export default QRCodeModal;
