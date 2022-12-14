import { useState } from 'react';
import map from './assets/metromapmaker (2).png';
import './App.css';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';







function App() {
  const [count, setCount] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Typography variant="h2">HTA Official Website</Typography>
        <Card>
          <CardMedia
            component="img"
            sx={{aspectRatio: '1', maxHeight: '200px'}}
            image={map}
            alt="Map"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              HTA Highway Map
            </Typography>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => {setDialogOpen(true)}}>Open Full Map</Button>
            <Dialog open={dialogOpen} onClose={() => {setDialogOpen(false)}}>
              <DialogContent>
                <img src={map} style={{height: '487px'}}/>
                <Typography>
                  Blue = Class A Road <br/>
                  Red = Class B Road <br/>
                  Green = Class C Road <br/>
                  Yellow = Class D Road <br/>
                </Typography>
              </DialogContent>
            </Dialog>
          </CardActions>
        </Card>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Road Types
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Road Types</TableCell>
                    <TableCell>Iced?</TableCell>
                    <TableCell>Width</TableCell>
                    <TableCell>Maintenance</TableCell>
                    <TableCell>Tolled?</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5">Class S:</Typography>
                    </TableCell>
                    <TableCell>
                      <CheckIcon/>
                    </TableCell>
                    <TableCell>
                      <Typography>2 x 3 Blocks</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Very Good</Typography>
                    </TableCell>
                    <TableCell>
                      <CheckIcon/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5">Cls A+:</Typography>
                    </TableCell>
                    <TableCell>
                      <CheckIcon/>
                    </TableCell>
                    <TableCell>
                      <Typography>2 x 3 Blocks</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Good</Typography>
                    </TableCell>
                    <TableCell>
                      <CloseIcon/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5">Cls A:</Typography>
                    </TableCell>
                    <TableCell>
                      <CheckIcon/>
                    </TableCell>
                    <TableCell>
                      <Typography>3 Blocks</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Good</Typography>
                    </TableCell>
                    <TableCell>
                      <CloseIcon/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5">Cls B:</Typography>
                    </TableCell>
                    <TableCell>
                      <CloseIcon/>
                    </TableCell>
                    <TableCell>
                      <Typography>3 Blocks</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Partial</Typography>
                    </TableCell>
                    <TableCell>
                      <CloseIcon/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5">Cls C:</Typography>
                    </TableCell>
                    <TableCell>
                      <CloseIcon/>
                    </TableCell>
                    <TableCell>
                      <Typography>1 Block</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Poor</Typography>
                    </TableCell>
                    <TableCell>
                      <CloseIcon/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5">Cls D:</Typography>
                    </TableCell>
                    <TableCell>
                      <QuestionMarkIcon/>
                    </TableCell>
                    <TableCell>
                      <QuestionMarkIcon/>
                    </TableCell>
                    <TableCell>
                      <Typography>Planned</Typography>
                    </TableCell>
                    <TableCell>
                      <QuestionMarkIcon/>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Licence
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table>
                <TableHead />
                <TableBody>
                  <TableRow>
                    <TableCell>
                    Licences can be bought at the city of Stockholm. Cost for HTA Licence is 30 ???. Lifelong, but if lost the owner has to buy a new licence at a cost of 30 ???
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Traffic Infractions
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Type of Crime
                    </TableCell>
                    <TableCell>
                      Punishment
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                    Lack of Required Documentation (i.e. License)
                    </TableCell>
                    <TableCell>
                      75??? Fine OR Ban of HTA Transport (6 irl hrs)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                    Blockage of Transportation (i.e. illegal blockage of the highway)
                    </TableCell>
                    <TableCell>
                      Ban of HTA Transport (1 irl day)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Accidental Destruction of HTA Property (with proof that it was accidental)
                    </TableCell>
                    <TableCell>
                      100??? Fine OR Repair by the Defendant
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Intentional Destruction of HTA Property
                    </TableCell>
                    <TableCell>
                      3 hrs Prison Sentance (Stockholm Detention Centre) OR 1000??? Fine
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Vehicular Manslaughter
                    </TableCell>
                    <TableCell>
                      60??? Fine (66.6% of money goes to the victim)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Non-Payment of Toll
                    </TableCell>
                    <TableCell>
                      200??? Fine
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}

export default App;
