import React, {useState, useEffect} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Select() {
    const [select , setSelect] = useState([])
    
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/neeluhargunani/admin-pannel-react/PatientDetails/").then( (response)=>{
              return response.json();
        }).then( select =>{
          setSelect(select);
          console.log(select);
        })
       
      }, [])
    return (
        <div >
             <FormControl>
          
      <FormLabel id="demo-row-radio-buttons-group-label">Screenings</FormLabel>
      {
        select?.map((item,index)=> (
      <RadioGroup row key={index}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value='{item.DM}' control={<Radio />} label="DM" >{item.DM}</FormControlLabel>
        <FormControlLabel value="{item.BP}" control={<Radio />} label="BP" >{item.BP}</FormControlLabel>
        <FormControlLabel value="{item.Depression}" control={<Radio />} label="Depression" >{item.Depression}</FormControlLabel>
        <FormControlLabel value="{item.Colorectal}" control={<Radio />} label="Colorectal" >{item.Colorectal}</FormControlLabel>
        <FormControlLabel value="{item.FallRisk}" control={<Radio />} label="Fall Risk" >{item.FallRisk}</FormControlLabel>
        <FormControlLabel value="{item.BreastCancer}" control={<Radio />} label="Breast Cancer" >{item.BreastCancer}</FormControlLabel>
        <FormControlLabel value="{item.Tobacco }" control={<Radio />} label="Tobacco" >{item.Tobacco }</FormControlLabel>
       
      </RadioGroup>
      )
 


 )
}
    </FormControl>
        </div>
    )
}
