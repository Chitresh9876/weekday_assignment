import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Filter = ({role, setRole, numOfEmployees, setNumOfEmployees, experience, setExperience, remote, setRemote, minBasePay, setMinBasePay, companyName, setCompanyName, referral, setReferral}) => {
    const roleOptions = ['a','b','a','b','a','b','a','b','a','b'];
    const numOfEmployeesOptions = ['a','b','a','b','a','b','a','b','a','b'];
    const experienceOptions = ['a','b','a','b','a','b','a','b','a','b'];
    const remoteOptions = ['a','b','a','b','a','b','a','b','a','b'];
    const minBasePayOptions = ['a','b','a','b','a','b','a','b','a','b'];
    const companyNameOptions = ['a','b','a','b','a','b','a','b','a','b'];
  return (
    <>
          <Stack spacing={2} direction={'row'} useFlexGap flexWrap="wrap" marginBottom={2}>
              <Autocomplete
                  id='Role'
                  disablePortal
                  multiple
                  options={roleOptions}
                  value={role}
                  fullWidth
                  style={{maxWidth: "10rem"}}
                  onChange={(e) => {
                      setRole([...role, e.target.value]);
                  }}
      size='small'
      renderInput={(params) => <TextField {...params} label="Role" />}
              />
              <Autocomplete
                  id='Number_Of_Employee'
                  disablePortal
                  multiple
                  options={numOfEmployeesOptions}
                  value={numOfEmployees}
                  fullWidth
                  style={{maxWidth: "15rem"}}
                  onChange={(e) => {
                      setNumOfEmployees([...numOfEmployees, e.target.value]);
                  }}
      size='small'
      renderInput={(params) => <TextField {...params} label="Number Of Employees" />}
              />
              <Autocomplete
                  id='Experience'
                  disablePortal
                  multiple
                  options={experienceOptions}
                  value={experience}
                  fullWidth
                  style={{maxWidth: "10rem"}}
                  onChange={(e) => {
                      setExperience([...experience, e.target.value]);
                  }}
      size='small'
      renderInput={(params) => <TextField {...params} label="Experience" />}
    />
              <Autocomplete
                  id='Remote'
                  disablePortal
                  multiple
                  options={remoteOptions}
                  value={remote}
                  fullWidth
                  style={{maxWidth: "10rem"}}
                  onChange={(e) => {
                      setRemote([...remote, e.target.value]);
                  }}
      size='small'
      renderInput={(params) => <TextField {...params} label="Remote" />}
    />
              <Autocomplete
                  id='Minimum_base_pay'
                  disablePortal
                  multiple
                  options={minBasePayOptions}
                  value={minBasePay}
                  fullWidth
                  style={{maxWidth: "15rem"}}
                  onChange={(e) => {
                      setMinBasePay([...minBasePay, e.target.value]);
                  }}
      size='small'
      renderInput={(params) => <TextField {...params} label="Minimum Base Pay Salary" />}
    />
    <TextField id='company_name' label="Search Company Name" variant="outlined"
                  size='small'
                  value={companyName}
                  fullWidth
                  style={{maxWidth: "15rem"}}
                  onChange={(e) => {
                      setCompanyName([...companyName, e.target.value]);
                  }}
    />
          </Stack> 
          <FormGroup>
          <FormControlLabel control={<Checkbox />} onChange={()=>{setReferral(!referral)}} label="Show jobs with referrals available" />
          </FormGroup>
    </>
  )
}

export default Filter
