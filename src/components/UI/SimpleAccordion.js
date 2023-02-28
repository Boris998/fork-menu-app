import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BeefMenuItemsWrapper from "../Menu/BeefMenuItemsWrapper";
import classes from './SimpleAccordion.module.css';
import SaladMenuItemsWrapper from "../Menu/SaladMenuItemsWrapper";
import PizzaMenuItemsWrapper from "../Menu/PizzaMenuItemWrapper";
import {Box} from "@mui/material";


const SimpleAccordion = () => {
    return (
            <Box flex={1} sx={{marginTop: '500px'}}>
                <Accordion className={classes.accordionGradient}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Beef</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <BeefMenuItemsWrapper/>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionGradient}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Pizza</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PizzaMenuItemsWrapper/>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionGradient}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Salads</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SaladMenuItemsWrapper/>
                    </AccordionDetails>
                </Accordion>
            </Box>
    );
}

export default SimpleAccordion;