import React, {useState, useEffect} from 'react'
import './profile.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Carousel from 'react-bootstrap/Carousel';
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';
import Select from './Select';
import Analyise from './Analyise';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  
export default function Profile() {
  const [data , setData] = useState([])
 
  

 
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/neeluhargunani/admin-pannel-react/PatientDetails/").then( (response)=>{
          return response.json();
    }).then( data =>{
      setData(data);
      console.log(data);
    })
    
  }, [])
    return (
        <div>
         
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 , lg:1}} className='container' >
   <div className='row'>
  <div className='col-xs-12 col-md-12 col-lg-9 col-xl-9 col-sm-12 bxshd'>
  <Card className='nobrdr'>
  <div className='col-md-12 col-sm-12 prof-alg '>
  <Item  className='bx-shw'>
  <div className='col-md-1 col-sm-12'>
  <Avatar src="/broken-image.jpg" className='ico-wth'/>
    <Avatar sx={{ bgcolor: blue[500] }} className='ico-vde'>
        <VideocamOutlinedIcon />
      </Avatar>
      
  </div>
  
  </Item>
  <div className='col-md-12 col-sm-12 col-xl-6 col-lg-6'>
  {
  data?.map((item,index)=> (
    <Item className='bx-shw pd-mb'>
   

      <ListGroup variant="flush" key={index} className='sec-one '>
  <ListGroup.Item><h5 className='text-primary '>{item.P_nu} <span>{item.P_Par}</span>
       <span type= "button" className=' text-white ico-edt '><CreateOutlinedIcon /></span>
  <span type= "button" className=' text-white ico-edt'><MoreVertOutlinedIcon/></span><span type="button" className=' chart-ic'><AddOutlinedIcon/> chart</span> <span type="button" className=' chart-ic'><AddOutlinedIcon/> enroll</span></h5></ListGroup.Item>
  <ListGroup.Item><span className='pat-ic-wdth'><MaleOutlinedIcon/>{item.Gender}</span> <b><span>DOB:</span></b><span className='prf-ftsize'>{item.DOB}</span><span className='prf-ftsize'>{item.DOB}</span></ListGroup.Item>
<ListGroup.Item><b><span className='pat-ic-wdth'><PublicOutlinedIcon/>Ethnicity:</span></b> <span className='prf-ftsize'>{item.Ethnicity}</span></ListGroup.Item>
  <ListGroup.Item><b><span className='pat-ic-wdth'><BusinessCenterIcon/> Occupation:</span></b><span className='prf-ftsize'>{item.Occupation}</span></ListGroup.Item>
  <ListGroup.Item><b><span className='pat-ic-wdth'><MoneyOutlinedIcon />Account #:</span></b><span className='prf-ftsize'>{item.Account }</span> <b>|</b> <span><b>MRN:</b><span className='prf-ftsize'>{item.MRN }</span></span> </ListGroup.Item>
 
  </ListGroup>
    
  



 
    </Item>
    )
 


 )
}
    </div>
 
    <div className='col-md-12 col-sm-12 col-xl-4 col-lg-4 fr-lc'>
    {
  data?.map((item,index)=> (
    <Item className='bx-shw'>
  
  
   
   
 
   <ListGroup variant="flush" key={index} className='mg_l'>
  <ListGroup.Item><b><PlaceIcon/> <span>{item.Location}</span></b></ListGroup.Item>
  <ListGroup.Item className='ml'><b>Primary: <span>{item.Primary}</span><span className='ico-edt text-white pat-ic-wdth'><CallIcon/></span></b></ListGroup.Item>
  <ListGroup.Item className='ml'><b>Emergency: <span>{item.Emergency}</span></b></ListGroup.Item>
  <ListGroup.Item className='ml'><b>Policy number: <span>{item.Policynumber}</span></b></ListGroup.Item>
  <ListGroup.Item className='ml'><b>Insurer: <span>{item.Insurer}</span></b></ListGroup.Item>
  
</ListGroup>


 
    </Item>
    )
 


 )
}
<div class="row">
<div className='col-md-12 col-sm-12 col-lg-12 col-xl-12'><Card className=' col-2-bx-shw pd-s'><Select/></Card></div>


<div className='col-md-12 '>
  <Analyise/>
  </div>
 
  </div>

    </div>
    
   
  
    
</div>
  
</Card>
  </div>

  <div className= "col-xs-12 col-md-12 col-lg-3 col-xl-3 col-sm-12">
    <Item className='bx-shw'>
    <div className='col-md-12 col-sm-12 '>
    
    <Card className='col-2-bx-shw'>
        <Card.Header className='bg-primary'><b ><span className='text-white pat-ic-wdth'><BusinessCenterSharpIcon/></span></b> <span className='text-white ml-1'>Recent Activity</span><span className='text-white pat-ic-wdth-add'><AddCircleSharpIcon/></span></Card.Header>
        <Card.Body >
      
         
          <ListGroup variant="flush">
    <ListGroup.Item><h5 className='asde-crd'>Follow up</h5></ListGroup.Item>
      
    </ListGroup>
        </Card.Body>
      </Card>
    
    </div>
<div className='clearfix'></div>
    <div className='col-md-12 col-sm-12'>

    <Card  className='col-2-bx-shw mt '>
    <Card.Header className='bg-primary'><b ><span className='text-white pat-ic-wdth'><TextSnippetSharpIcon/></span></b> <span className='text-white ml-1'>Latest notes</span><span className='text-white pat-ic-wdth-add'><AddCircleSharpIcon/></span></Card.Header>
        <Card.Body >
       
          <Card.Text>
          <ListGroup variant="flush">
      <ListGroup.Item>
      <Carousel variant="dark">
      <Carousel.Item>
     
      <h5 className='asde-crd'>1.An annual wellness exam or visit is an important part of preventative care....   </h5>
        
      </Carousel.Item>
      <Carousel.Item>
     
      <h5 className='asde-crd'>2.An annual wellness exam or visit is an important part of preventative care.....   </h5>
        
      </Carousel.Item>
      <Carousel.Item>
     
      <h5 className='asde-crd'>3.An annual wellness exam or visit is an important part of preventative care....   </h5>
        
      </Carousel.Item>
      <Carousel.Item>
     
      <h5 className='asde-crd'>4.An annual wellness exam or visit is an important part of preventative care....   </h5>
        
      </Carousel.Item>
      <Carousel.Item>
     
      <h5 className='asde-crd'>5.An annual wellness exam or visit is an important part of preventative care....   </h5>
        
      </Carousel.Item>
    </Carousel>
      </ListGroup.Item>
      
    </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
  
    </div>
    </Item>
  </div>
  </div>
  
</Grid>
           
        </div>
        
    )
}
