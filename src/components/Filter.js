import { Autocomplete, Stack, TextField } from "@mui/material";
import React from "react";

const Filter = ({ role, setRole, numOfEmployees, setNumOfEmployees, experience, setExperience, remote, setRemote, minBasePay, setMinBasePay, companyName, setCompanyName }) => {

    // Declaration of the constants to use as a option field 
  const roleOptions = ["Backend","Frontend","Fullstack","IOS","Flutter","React Native","Android","Tech Lead","Dev-Ops","Data Engineer","Data Science","Computer-Vision","Nlp","Deep-Learning","Sre","Data-Infrastructure","Designer","Design Manager"];
  const numOfEmployeesOptions = [
    "1-10",
    "11-20",
    "21-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ];
  const experienceOptions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const remoteOptions = ["Remote", "Hybrid", "In-Office"];
  const minBasePayOptions = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  return (
    <>
      <Stack
        spacing={2}
        direction={"row"}
        useFlexGap
        flexWrap="wrap"
        justifyContent={{ sm: "flex-start", md: "center" }}
        marginBottom={4}
      >
        <Autocomplete
          id="Role"
          disablePortal
          multiple
          options={roleOptions}
          getOptionLabel={(role) => role}
          value={role}
          fullWidth
          style={{ maxWidth: "10rem" }}
          onChange={(e) => {
            e?.target?.innerText && setRole([...role, e?.target?.innerText]);
          }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Role" />}
        />
        <Autocomplete
          id="Number_Of_Employee"
          disablePortal
          multiple
          options={numOfEmployeesOptions}
          getOptionLabel={(option) => option}
          value={numOfEmployees}
          fullWidth
          style={{ maxWidth: "15rem" }}
          onChange={(e) => {
            console.log(e?.target?.innerText);
            e?.target?.innerText &&
              setNumOfEmployees([...numOfEmployees, e?.target?.innerText]);
          }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Number Of Employees" />
          )}
        />
        <Autocomplete
          id="Experience"
          disablePortal
          multiple
          options={experienceOptions}
          getOptionLabel={(option) => option}
          value={experience}
          fullWidth
          style={{ maxWidth: "10rem" }}
          onChange={(e) => {
            e?.target?.innerText &&
              setExperience([...experience, e?.target?.innerText]);
          }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Experience" />}
        />
        <Autocomplete
          id="Remote"
          disablePortal
          multiple
          options={remoteOptions}
          getOptionLabel={(option) => option}
          value={remote}
          fullWidth
          style={{ maxWidth: "10rem" }}
          onChange={(e) => {
            e?.target?.innerText &&
              setRemote([...remote, e?.target?.innerText]);
          }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />
        <Autocomplete
          id="Minimum_base_pay"
          disablePortal
          multiple
          options={minBasePayOptions}
          getOptionLabel={(option) => `${option}`}
          value={minBasePay}
          fullWidth
          style={{ maxWidth: "15rem" }}
          onChange={(e) => {
            e?.target?.innerText &&
              setMinBasePay([...minBasePay, e?.target?.innerText]);
          }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Minimum Base Pay Salary" />
          )}
        />
        <TextField
          id="company_name"
          label="Search Company Name"
          variant="outlined"
          size="small"
          value={companyName}
          fullWidth
          style={{ maxWidth: "15rem" }}
          onChange={(e) => {
            setCompanyName([...companyName, e.target.value]);
          }}
        />
      </Stack>
    </>
  );
};

export default Filter;
