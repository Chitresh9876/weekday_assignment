import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import Jobcard from './components/Jobcard';
import { useEffect, useState } from 'react';
import Loader from "./components/Loader";
import { Stack } from '@mui/system';
import Filter from './components/Filter';

function App() {
  const [role, setRole] = useState([]);
    const [numOfEmployees, setNumOfEmployees] = useState([]);
    const [experience, setExperience] = useState([]);
    const [remote, setRemote] = useState([]);
    const [minBasePay, setMinBasePay] = useState([]);
    const [companyName, setCompanyName] = useState([]);
  const [referral, setReferral] = useState(false);
  
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [totalDataLength, setTotalDataLength] = useState();
  const URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  
  
  const fetchData = async () => {
    const raw = JSON.stringify({
    "limit": 12,
    "offset": offset
    });
    
    const requestOptions = {
 method: "POST",
    headers: myHeaders,
 body: raw,
  };
      await fetch(URL, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          setData([...data, ...result?.jdList]);
          setTotalDataLength(result?.totalCount);
        })
        .catch((error) => console.error(error));
    }
  useEffect(() => {
    fetchData();
    },[offset])
  
  useEffect(() => {
        console.log(role);
    },[role, numOfEmployees, experience, remote, minBasePay, companyName, referral],[])

  const fetchMoreData = async () => {
    setOffset(offset + 12);
  }
  return (
    <div className='main-body'>
       <Filter role={role} setRole={setRole} numOfEmployees={numOfEmployees} setNumOfEmployees={setNumOfEmployees} experience={experience} setExperience={setExperience} remote={remote} setRemote={setRemote} minBasePay={minBasePay} setMinBasePay={setMinBasePay} companyName={companyName} setCompanyName={setCompanyName} referral={referral} setReferral={setReferral} />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data?.length < totalDataLength}
        loader={<Loader/>}
      >
        <Stack direction={"row"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
          {console.log(data)}
          {
            data.map((data,index) => {
              return <div key={index}> <Jobcard role={data?.jobRole} location={data?.location} minSalary={data?.minJdSalary | 0} maxSalary={data?.maxJdSalary | 0} jobDetail={data?.jobDetailsFromCompany} minExperiance={data?.minExp | 0} applyLink={data?.jdLink} /> </div>
            })
}
      
        </Stack>
      </InfiniteScroll>
    </div>
  );
}

export default App;
