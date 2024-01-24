import { Box, Dialog, DialogContent, styled } from "@mui/material";
import React from "react";
import CrossIcon from "../../assets/modalCrossIcon.svg";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  modalHandleClose:() => void;
  children: any;
  modalBoxShadow?: string;
}


const CustomModal: React.FC<ModalProps> = ({
  children,
  open,
  handleClose,
  modalBoxShadow,
  modalHandleClose
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      // onMouseLeave={modalHandleClose}
      fullWidth
      maxWidth={"sm"}
      disableScrollLock
      autoFocus={open}
      sx={{
        '& .MuiDialog-paper':{
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: modalBoxShadow,
        }
      }}
    >
      <Box >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "16px",
          paddingTop: "16px",
        }}
      >
        <Image
          src={CrossIcon}
          alt="Cross Icon"
          width={25}
          height={25}
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      </Box>

      <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  );
};

export default CustomModal;
