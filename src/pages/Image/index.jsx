import { Box, Typography } from "@mui/material";
import React from "react";

const ImagePage = () => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Chart
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:6
        }}
      >
        <Box  sx={{width:'60%'}} >
        <img
          src="https://s3-alpha-sig.figma.com/img/0c07/4ac1/0289a961ccca70595f2e0664a8c25cda?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AraEaVVmQTmi4um5gdSKugFzr7LsggKsd9I9KCrQD2aDYUI-zILn4T7RSwDqB9MEhtQU4YvRxG4u6HcaffkZhBaWw8S~PgBOz-BUlZme5u6vPmWMqoJq119-gZRRowJm7DtsJsdeMj~sJgHdxVmU3rqx2cZAXdLiEwPT4bzvi3RsEpo0hEql180Hvbj3WSS8nxoc9dEgNv2-2MKMIHKOUp5beXjEH1lwxDDILENvO9vYthzRgNbxOb9gCYe3wM~9Ur8WOS4xCiNbjQhIgUQyzEcX24IXY8EcDULsrGGYo3FhiE3yO3pwnLdM4vwwVIFM-qdIc42NHZsFYVEutH1Jow__"
          alt=""
          style={{margin:'0 auto',marginTop:10}}
         
        />
        </Box>
      </Box>
    </Box>
  );
};

export default ImagePage;
