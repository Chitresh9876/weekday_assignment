import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import './Jobcard.css'
import watchGlass from "../assets/watch_glass.png";
import lightning from "../assets/lightning.png";
import tick from "../assets/tick.png";


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  borderRadius: '0.5rem',
  lineHeight: 1.5,
  marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  gap: "0.5rem",
});

const Jobcard = ({role, location, minSalary, maxSalary, jobDetail, minExperiance, applyLink}) => {


    const subtitle = <ul style={{listStyle:"none"}}><li>{role}</li><li style={{fontSize:"0.7rem", fontWeight:"550"}}>{location}</li></ul>

    return (
        <>
      <Card sx={{ minWidth: 250, maxWidth: 400 }} style={{ borderRadius: "1rem"}} >
          <div className='job-posted'>
              <img src={watchGlass} alt='time-logo' height={"10rem"} />
              <p style={{fontWeight:"550"}}>Posted 6 days ago</p>
          </div>
          <CardHeader
      avatar={
          <img src='favicon.ico' alt='company_img' style={{ height : "2rem"}}/>
        }
              title="Company Name"
              titleTypographyProps={{color: 'text.secondary', fontWeight: '550'}}
              subheader={subtitle}
              subheaderTypographyProps={{color: 'text.primary'}}
          />
          <CardContent>
              <Typography variant="h6" fontSize={"0.8rem"} fontWeight={550} color="text.secondary">
                  Estimated Salary: ₹{minSalary}-{maxSalary} LPA <img src={tick} alt="tick" style={{height: "0.9rem", marginBottom:"-0.1rem"}}/>
              </Typography>
              <Typography variant="h6" marginTop={1.5} fontSize={"1rem"} fontWeight={550} color="text.primary">
                  About Company:
              </Typography>
              <Typography variant="h6" fontSize={"0.9rem"} fontWeight={600} color="text.primary">About us</Typography>
                    <Typography variant="h6" id="job-description">
                        { jobDetail}</Typography>
              <div>
                  
              <Typography color={"#0531E7"} style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
                  View job
              </Typography>
              </div>
              <Typography variant="h6" fontSize={"0.8rem"} fontWeight={550} color="text.secondary">Minimun Experience</Typography>
              <Typography variant="h6" fontSize={"0.8rem"} fontWeight={530} color="text.primary">{minExperiance} years</Typography>
                    <BootstrapButton variant="contained" style={{ backgroundColor: "#42F68B", color: '#000000', fontWeight: "550" }} fullWidth> <img src={lightning} alt='lightning' height={"20rem"} onClick={(e) => {
                        e.preventDefault();
                        window.location.href(applyLink);
}} /> Easy Apply</BootstrapButton>
              <BootstrapButton variant="contained" style={{ backgroundColor:"#0531E7"}} fullWidth>Unlock referral asks</BootstrapButton>
          </CardContent>
            </Card>
            </>
  )
}

export default Jobcard
