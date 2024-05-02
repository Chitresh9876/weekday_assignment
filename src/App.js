import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Jobcard from "./components/Jobcard";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Stack } from "@mui/system";
import Filter from "./components/Filter";

function App() {
  const [role, setRole] = useState([]);
  const [numOfEmployees, setNumOfEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [remote, setRemote] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);
  const [companyName, setCompanyName] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [totalDataLength, setTotalDataLength] = useState();

  //API url going to use
  const URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";

  //Header for the api call
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  //Function to get data from API call
  const fetchData = async () => {
    const raw = JSON.stringify({
      limit: 12,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    await fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData([...data, ...result?.jdList]);
        setTotalDataLength(result?.totalCount);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, [offset]);

  // Filter logic Imlpimentation
  useEffect(() => {
    if (role.length > 0)
      filterItems({
        key: "jobRole",
        value: role,
      });
    // if(numOfEmployees.length > 0)  Filter can't be achive for this property because no such field is coming for backend
    // filterItems(numOfEmployees);
    if (experience.length > 0)
      filterItems({
        key: "minExp",
        value: experience,
      });
    if (remote.length > 0)
      filterItems({
        key: "location",
        value: remote,
      });
    if (minBasePay.length > 0)
      filterItems({
        key: "minJdSalary",
        value: minBasePay,
      });
    // if(companyName.length > 0)  Filter can't be achive for this property because no such field is coming for backend
    // filterItems(companyName);
  }, [role, numOfEmployees, experience, remote, minBasePay, companyName, data]);

  const filterItems = (items) => {
    console.log(items);
    setFilteredData([...data]);
    if (items?.value?.length > 0) {
      let tempItem = items?.value.map((item) => {
        let temp;
        if (items?.key === "jobRole")
          temp = data.filter(
            (dataItem) => dataItem?.jobRole === item.toLowerCase()
          );
        if (items?.key === "minExp")
          temp = data.filter(
            (dataItem) => dataItem?.minExp >= item.toLowerCase()
          );
        if (items?.key === "location")
          temp = data.filter(
            (dataItem) => dataItem?.location === item.toLowerCase()
          );
        if (items?.key === "minJdSalary")
          temp = data.filter(
            (dataItem) => dataItem?.minJdSalary >= item.toLowerCase()
          );
        return temp;
      });
      console.log(tempItem);
      tempItem.map((item) => {
        setFilteredData([...filterData, ...item]);
      });
    } else {
      setFilteredData([...data]);
    }
  };
  const fetchMoreData = async () => {
    setOffset(offset + 12);
    fetchData();
  };
  return (
    <div className="main-body">
      <Filter
        role={role}
        setRole={setRole}
        numOfEmployees={numOfEmployees}
        setNumOfEmployees={setNumOfEmployees}
        experience={experience}
        setExperience={setExperience}
        remote={remote}
        setRemote={setRemote}
        minBasePay={minBasePay}
        setMinBasePay={setMinBasePay}
        companyName={companyName}
        setCompanyName={setCompanyName}
      />
      <InfiniteScroll
        dataLength={filterData.length > 0 ? filterData.length : data.length}
        next={fetchMoreData}
        hasMore={
          (filterData.length > 0 ? filterData.length : data.length) <
          totalDataLength
        }
        loader={<Loader />}
      >
        <Stack
          direction={"row"}
          gap={2}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {/* Card Render to display Jobs */}
          {(filterData.length > 0 ? filterData : data).map((data, index) => {
            return (
              <div key={index}>
                {" "}
                <Jobcard
                  role={data?.jobRole}
                  location={data?.location}
                  minSalary={data?.minJdSalary | 0}
                  maxSalary={data?.maxJdSalary | 0}
                  jobDetail={data?.jobDetailsFromCompany}
                  minExperiance={data?.minExp | 0}
                  applyLink={data?.jdLink}
                />{" "}
              </div>
            );
          })}
        </Stack>
      </InfiniteScroll>
    </div>
  );
}

export default App;
