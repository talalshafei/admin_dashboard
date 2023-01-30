import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import BarChart from "./BarChart";
import GeographyChart from "./GeographyChart";
import ProgressCircle from "./ProgressCircle";

const RowThree = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="100" />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "25px" }}
          >
            $48,352 revenue generated
          </Typography>
          <Typography>Includes Extra misc expenditures and costs</Typography>
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height="220px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
          Geography Based Traffic
        </Typography>
        <Box height="180px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
};

export default RowThree;
