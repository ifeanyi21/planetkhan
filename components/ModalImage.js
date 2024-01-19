import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalImage({ image, handleClose, open }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth={"xl"}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Image
        src={image}
        width={300}
        height={300}
        className="w-full h-auto"
        alt="Planet kan Samples"
      />
    </Dialog>
  );
}
