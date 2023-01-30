import {
  Box,
  Accordion,
  AccordionSummary,
  useTheme,
  Typography,
  AccordionDetails,
} from "@mui/material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            mollitia hic quia officia explicabo excepturi corrupti nobis
            veritatis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            mollitia hic quia officia explicabo excepturi corrupti nobis
            veritatis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Most Asked Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            mollitia hic quia officia explicabo excepturi corrupti nobis
            veritatis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            mollitia hic quia officia explicabo excepturi corrupti nobis
            veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est ipsa aut ut fuga dolorem blanditiis quod dolore quisquam
            voluptat
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
