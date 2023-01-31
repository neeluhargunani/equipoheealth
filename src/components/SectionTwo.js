import React, {useState, useEffect} from 'react'
import './sectiontwo.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
 
export default function SectionTwo() {
  const [list , setList] = useState(null)

  
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/neeluhargunani/admin-pannel-react/PatientDetails/").then( (response)=>{
          return response.json();
    }).then( list =>{
      setList(list);
      console.log(list);
    })
  }, [])
    return (
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0.5 }} className='container mt-3'>
    
        <div className='row'>
 <div className='col-md-6 col-lg-3 col-sm-12 col-xl-3 setwo'>
    <Item>
    <Card border="primary">
        <Card.Header className='bg-primary'></Card.Header>
        {
  list?.map((item,index)=> (
        <Card.Body className='p-0 cbdy-hgt'>
        
          <Card.Text>
          <ListGroup variant="flush" key={index} className="sec-two ">
          <ListGroup.Item><h5>Primary Physician:</h5>
          <p> <span>{item.PrimaryPhysician}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Primary Location:</h5>
          <p> <span>{item.PrimaryLocation}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Reffered by:</h5>
          <p> <span>{item.refred}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Last Visit:</h5>
          <p> <span>{item.lastv }</span></p></ListGroup.Item>
          <ListGroup.Item><h5>No of Visit:</h5>
          <p> <span>{item.nvst }</span></p></ListGroup.Item>
          <ListGroup.Item><h5>No of Hospitalizations:</h5>
          <p> <small>(in last 3 months) </small><span>{item.hospitizations }</span></p></ListGroup.Item>
          <ListGroup.Item><h5>No of Readmissions:</h5>
          <p> <span className='text-danger'>{item.Readmissions }</span></p></ListGroup.Item>
    </ListGroup>

          </Card.Text>
        </Card.Body>
        )
 


 )
}
      </Card>
    </Item>
</div>
 <div className='col-md-6 col-lg-3 col-sm-12 col-xl-3 setwo'>
    <Item className='md-6'>
    <Card border="success ">
        <Card.Header className='bg-success'></Card.Header>
        <Card.Body className='p-0 cbdy-hgt'>
        {
  list?.map((item,index)=> (
          <Card.Text>
          <ListGroup variant="flush" key= {index} className="sec-two">
          <ListGroup.Item><h5>Condition:</h5>
          <p> <span>{item.Condition}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Habits:</h5>
          <p> <span>{item.Habits}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Vitals:</h5>
          <p> <span>{item.Vitals}</span></p></ListGroup.Item>
          <ListGroup.Item><p>Bmi:<span>{item.Bmi}</span> <span>Systolic/Diastolic :</span><span>{item.SystolicDiastolic}</span> </p>
          <p> <span>Glucose :</span><span>{item.Glucose}</span> <span>O2 Saturation :</span><span>{item.O2Saturation}</span></p></ListGroup.Item>
          <ListGroup.Item><h5 >Lab:</h5>
          <Card > <p> <span>HDL :</span><span>{item.HDL}</span> <span>LDL :</span><span>{item.LDL}</span></p>
          <p><span>HBA1c :</span><span>{item.HBA1c}</span></p></Card>
          </ListGroup.Item>
    </ListGroup>
          </Card.Text>
          )
 


 )
}
        </Card.Body>
      </Card>
    </Item>
  </div>
  <div className='col-md-6 col-lg-3 col-sm-12 col-xl-3 setwo'>
    <Item>
    <Card border="warning" >
        <Card.Header className='bg-warning'></Card.Header>
        <Card.Body className='p-0 cbdy-hgt'>
        {
  list?.map((item,index)=> (
          <Card.Text>
          <ListGroup variant="flush" key={index} className="sec-two">
          <ListGroup.Item><h5>Allergy:</h5>
          <p> <span>{item.Allergy}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Medication:</h5>
          <p> <span>{item.Medication}</span></p></ListGroup.Item>
          <ListGroup.Item><h5>Imunization:</h5>
          <p> <span>{item.Imunization}</span></p></ListGroup.Item>
  
    </ListGroup>
          </Card.Text>
          )
 


 )
}
  
        </Card.Body>
      </Card>

    </Item>
  </div>
  <div className='col-md-6 col-lg-3 col-sm-12 col-xl-3 setwo'>
    <Item>

    <Card border="danger" >
        <Card.Header className='bg-danger'></Card.Header>
        <Card.Body className='p-0 cbdy-hgt'>
        {
  list?.map((item,index)=> (
          <Card.Text>
          <ListGroup variant="flush" key={index} className="sec-two">
          <ListGroup.Item><h5>Programs:</h5>
          <p> <span>{item.Programs}</span></p></ListGroup.Item>
   <ListGroup.Item><h5>Service Category:</h5>
   <p> <span>{item.ServiceCategory}</span></p></ListGroup.Item>

   <ListGroup.Item><h5>Measures:</h5>
   <p> <span>{item.Measures}</span></p></ListGroup.Item>
    
    </ListGroup>
          </Card.Text>
          )
 


 )
}
  
        </Card.Body>
      </Card>
    </Item>

  </div>

  </div>
      
</Grid>
        
        </>
    )
}
