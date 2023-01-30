import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RowOne from "../../components/RowOne";
import RowTwo from "../../components/RowTwo";
import RowThree from "../../components/RowThree";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid & Charts */}
      <Box
        m="0 20px"
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="120px"
        gap="20px"
      >
        <RowOne />
        <RowTwo />
        <RowThree />
      </Box>
      {/*End of Grid*/}
    </Box>
  );
};

export default Dashboard;
