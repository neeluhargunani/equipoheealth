import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
export default function Analyise() {
    const [report , setReport] = useState([])
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/neeluhargunani/admin-pannel-react/PatientDetails/").then( (response)=>{
              return response.json();
        }).then( report =>{
            setReport(report);
          console.log(report);
        })
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
          }, 800);
      
          return () => {
            clearInterval(timer);
          };
      }, [])
    return (
        <div>
              <Grid container rowSpacing={1}  md={12} lg ={7} className='sec-one-grd2 sec-nested pd-0'>
    <div className='col-md-6 col-sm-12 col-lg-3 col-xl-3 analysis '>
    <Item className='lnehght bx-shw pd-0'>
    <Card border="primary" className='pd '>
        <Card.Header className='bg-primary text-center text-white '>Risk</Card.Header>
        <Card.Body className='rsk'>
        {
            report?.map((item,index)=> (
     
          <ListGroup variant="flush" key={index}>
      <ListGroup.Item  variant="dark" className='text-center '> This Year: <span><b>{item.ThisYear}</b></span></ListGroup.Item>
      <ListGroup.Item  variant="dark" className='mt-1 mb-1 text-center '>Last Year <span><b>{item.LastYear}</b></span></ListGroup.Item>
    </ListGroup>
     
          )
 


 )
}
        </Card.Body>
      </Card>
    </Item>
    </div>
    <div className='col-md-6 col-sm-12 col-lg-3 col-xl-3 analysis'>
    <Item className='lnehght bx-shw pd-0'>
    <Card border="primary" className='pd'>
        <Card.Header className='bg-primary text-center text-white'>Care Gaps</Card.Header>
        <Card.Body >
        {
            report?.map((item,index)=> (
     
          <ListGroup variant="flush" key={index}>
      <ListGroup.Item  className='text-center p-2'><b>   <CircularProgress variant="determinate" value={progress} className='prt-data'/><span className='dta'>{item.CareGaps}</span></b></ListGroup.Item>

    </ListGroup>
     
          )
 


 )
}
        </Card.Body>
      </Card>
    </Item>
    </div>
    <div className='col-md-6 col-sm-12 col-lg-3 col-xl-3 analysis'>
    <Item className='lnehght bx-shw pd-0 '>
    <Card border="primary" className='pd'>
        <Card.Header className='bg-primary text-center text-white'>ASCVD</Card.Header>
        <Card.Body className='rsk'>
        {
            report?.map((item,index)=> (
     
          <ListGroup variant="flush" key={index}>
      <ListGroup.Item  variant="dark" className='p-2 fnt-sz'>CurrentRisk:<span> <b>{item.CurrentRisk}</b></span></ListGroup.Item>
      <ListGroup.Item  variant="dark" className='mt-1 mb-1   fnt-sz'>Lower Risk <span><b>{item.LowerRisk} </b></span></ListGroup.Item>
    </ListGroup>
     
          )
 


 )
}
        </Card.Body>
      </Card>
    </Item>
    </div>
    <div className='col-md-6 col-sm-12 col-lg-3 col-xl-3 analysis'>
    <Item className='lnehght bx-shw pd-0 '>
    <Card border="primary" className='pd'>
        <Card.Header className='bg-primary text-center text-white'>SDOH</Card.Header>
        <Card.Body className='rsk'>
        {
            report?.map((item,index)=> (
     
          <ListGroup variant="flush" key={index}>
      <ListGroup.Item  variant="dark" className='p-1'> This Year: <span><b>{item.thisyear}</b></span></ListGroup.Item>
      <ListGroup.Item  variant="dark" className='mt-1 mb-1 '>Last Year <span><b>{item.lastyear}</b></span></ListGroup.Item>
    </ListGroup>
     
          )
 


 )
}
        </Card.Body>
      </Card>
    </Item>
  
    </div>
    </Grid> 
        </div>
    )
}
