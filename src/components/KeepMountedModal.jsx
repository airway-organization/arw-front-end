import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "13.45px",
};

export default function KeepMountedModal({
  open,
  handleOutsideClick,
  handleSubmit,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        // onClose={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        id="modal1"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                ":hover": { background: "no#D9D9D9ne" },
                borderRadius: 10,
                backgroundColor: "#D9D9D9",
                p: 1,
                cursor: "pointer",
              }}
            >
              <ClearIcon
                sx={{
                  fontSize: 30,
                }}
                onClick={handleOutsideClick}
              />
            </Box>
          </Box>

          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, fontSize: "30px", color: "#000000" }}
          >
            Would you like to see the chart?
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: 2,
              marginTop: 10,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#838383",
                color: "#FFFFFF",
                fontSize: "18.83px",
                width: "90.63px",
                height: "49.97px",
                fontWeight: "700",
                borderRadius: "3.84px",
                ":hover": { backgroundColor: "#838383" },
              }}
              onClick={handleSubmit}
            >
              Yes
            </Button>

            <Button
              sx={{
                backgroundColor: "#838383",
                color: "#FFFFFF",
                fontSize: "18.83px",
                width: "90.63px",
                height: "49.97px",
                fontWeight: "700",
                borderRadius: "3.84px",
                ":hover": { backgroundColor: "#838383" },
              }}
              onClick={() => navigate("/home")}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
