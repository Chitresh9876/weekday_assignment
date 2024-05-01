import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import './Jobcard.css'
import watchGlass from "../assets/watch_glass.png";
import lightning from "../assets/lightning.png";
import tick from "../assets/tick.png";
import Filter from './Filter';


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

const Jobcard = () => {

    const [role, setRole] = useState([]);
    const [numOfEmployees, setNumOfEmployees] = useState([]);
    const [experience, setExperience] = useState([]);
    const [remote, setRemote] = useState([]);
    const [minBasePay, setMinBasePay] = useState([]);
    const [companyName, setCompanyName] = useState([]);
    const [referral, setReferral] = useState(false);

    useEffect(() => {
        console.log(role);
    },[role, numOfEmployees, experience, remote, minBasePay, companyName, referral])

    const subtitle = <ul style={{listStyle:"none"}}><li>Role</li><li style={{fontSize:"0.7rem", fontWeight:"550"}}>Location</li></ul>

    return (
        <>
            <Filter role={role} setRole={setRole} numOfEmployees={numOfEmployees} setNumOfEmployees={setNumOfEmployees} experience={experience} setExperience={setExperience} remote={remote} setRemote={setRemote} minBasePay={minBasePay} setMinBasePay={setMinBasePay} companyName={companyName} setCompanyName={setCompanyName} referral={referral} setReferral={setReferral} />
      <Card sx={{ maxWidth: 400 }} style={{ borderRadius: "1rem"}} >
          <div className='job-posted'>
              <img src={watchGlass} alt='time-logo' height={"10rem"} />
              <p style={{fontWeight:"550"}}>Posted 6 days ago</p>
          </div>
          <CardHeader
      avatar={
          <img src='favicon.ico' alt='company_img' style={{ height : "2rem"}}/>
        }
              title="Name"
              titleTypographyProps={{color: 'text.secondary', fontWeight: '550'}}
              subheader={subtitle}
              subheaderTypographyProps={{color: 'text.primary'}}
          />
          <CardContent>
              <Typography variant="h6" fontSize={"0.8rem"} fontWeight={550} color="text.secondary">
                  Estimated Salary: ₹ LPA <img src={tick} alt="image" style={{height: "0.9rem", marginBottom:"-0.1rem"}}/>
              </Typography>
              <Typography variant="h6" marginTop={1.5} fontSize={"1rem"} fontWeight={550} color="text.primary">
                  About Company:
              </Typography>
              <Typography variant="h6" fontSize={"0.9rem"} fontWeight={600} color="text.primary">About us</Typography>
              <Typography variant="h6" id="job-description">The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.
                  The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.
                  The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.</Typography>
              <div>
                  
              <Typography color={"#0531E7"} style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
                  View job
              </Typography>
              </div>
              <Typography variant="h6" fontSize={"0.8rem"} fontWeight={550} color="text.secondary">Minimun Experience</Typography>
              <Typography variant="h6" fontSize={"0.8rem"} fontWeight={530} color="text.primary">5 years</Typography>
              <BootstrapButton variant="contained" style={{ backgroundColor: "#42F68B", color: '#000000', fontWeight: "550" }} fullWidth> <img src={lightning} alt='lightning' height={"20rem"} /> Easy Apply</BootstrapButton>
              <BootstrapButton variant="contained" style={{ backgroundColor:"#0531E7"}} fullWidth>Unlock referral asks</BootstrapButton>
          </CardContent>
            </Card>
            </>
  )
}

export default Jobcard
