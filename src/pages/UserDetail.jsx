import { React, useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Context } from '../utils/AppBarContext';
import { Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import axiosInstance from "../service/ApiServices";
import CustomNoRowsOverlay from "../components/styled/NoRows";
import CustomLoader from "../components/styled/Loader";
import UserCard from "./UserCard";
import CustomLink from "../components/styled/Link";


function UserDetail() {
  let { userName,pageNo } = useParams();
  const [title, setTitle] = useContext(Context);
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [showDataText, setNoDataText] = useState(true);
  const [showLoader, setLoader] = useState(false);



  useEffect(() => {
    let isMounted = true;
    setLoader(true);
    setTitle(`user - ${userName}`);
    const fetchData = async () => {
      try {
        const userResponse = await axiosInstance.get(`users/${userName}`);
        const repoResponse = await axiosInstance.get(`/users/${userName}/repos`);
        const orgResponse = await axiosInstance.get(`/users/${userName}/orgs`);

        if (isMounted) {
          if (userResponse.status === 200) {
            setRepoData(repoResponse.data);
            setUserData(userResponse.data);
            setOrgData(orgResponse.data);
            setLoader(false);
            setNoDataText(false);
          }
        }
      } catch (error) {
        console.error(error);
        setLoader(false);
        setNoDataText(false);
      }
    };

    fetchData();

    return () => {
       isMounted = false;
    };
  }, []);


  if (showLoader) return <CustomLoader />;
  return (
    <>
      <CustomLink to={`/users/${pageNo}`}><ArrowBack /><Typography>go back</Typography></CustomLink>
      {showDataText && <CustomNoRowsOverlay />}
      {userData && <UserCard user={userData} repo={repoData} org={orgData} />}
    </>
  );
}

export default UserDetail;