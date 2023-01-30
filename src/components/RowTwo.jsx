import { Box, useTheme, Typography, IconButton } from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "./LineChart";

const RowTwo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt={"25px"}
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.greenAccent[500]}
            >
              $59,342,32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box height="180px" ml="20px">
          <LineChart isDahboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        <Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RowTwo;
