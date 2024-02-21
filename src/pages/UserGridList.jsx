import React, { useEffect, useState, useContext } from "react";
import { Grid } from "@mui/material";
import axiosInstance from "../service/ApiServices";
import Pagination from "@mui/material/Pagination";
import usePagination from "../utils/Pagination";
import CustomNoRowsOverlay from "../components/styled/NoRows";
import CustomLoader from "../components/styled/Loader";
import ListCard from "./ListCard";
import { LIST_PER_PAGE, TITLE } from "../utils/constants";
import { useParams } from "react-router-dom";
import { Context } from "../utils/AppBarContext";
import { isNumber } from "@mui/x-data-grid/internals";
import InputFilter from "../components/cards/SearchBar";


function UserGridListPage() {
  const { pageNo } = useParams();
  const [title, setTitle] = useContext(Context);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(isNumber(parseInt(pageNo)) ? parseInt(pageNo) : 1);
  const [count, setCount] = useState(0);
  const [showDataText, setNoDataText] = useState(true);
  const [showLoader, setLoader] = useState(false);
  const [filterText, setFilterText] = useState('');

  const userData = usePagination(data, LIST_PER_PAGE, pageNo);
  setTitle(TITLE);

  const handleChange = (e, p) => {
    setPage(p);
    userData.jump(p);
  };

  useEffect(() => {
    let isMounted = true;
    setLoader(true);
    if (isMounted)
      fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  
  useEffect(() => {
    if (filterText === '')
      fetchData();
    return () => {
    };
  }, [filterText]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("users?per_page=30");
      if (response.status === 200) {
        setData(response.data);
        setCount(Math.ceil(response.data.length / LIST_PER_PAGE));
        setLoader(false);
        setNoDataText(false);
      } else {
        setNoDataText(true);
        setLoader(false);
      }
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    var filteredData = data.filter((ele) => ele.login.includes(filterText))
    setData(filteredData);
    setCount(Math.ceil(filteredData.length / LIST_PER_PAGE));
    if (filteredData.length === 0)
      setNoDataText(true);
  }

  if (showLoader) return <CustomLoader />;
  if (showDataText && filterText === '') return <CustomNoRowsOverlay />;
  if (filterText !== '' && data.length === 0)
    return (
      <>
        <InputFilter handleFilter={handleFilter} handleText={(value) => setFilterText(value)} text={filterText} />
        <CustomNoRowsOverlay />
      </>
    )
  if (data.length)
    return (
      <>
        <InputFilter handleFilter={handleFilter} handleText={(value) => setFilterText(value)} text={filterText} />
        <Grid container sx={{ p: 1, m: 1 }} spacing={{ xs: 2, md: 3, sm: 2 }}>
          {userData.currentData().map((elem) => (
            <Grid item xs={12} md={4} sm={6} key={elem.id}>
              <ListCard
                page={page}
                userName={elem.login}
              />
            </Grid>
          ))}
        </Grid>
        {(
          <Pagination
            count={count}
            size="small"
            page={page}
            onChange={handleChange}
          />
        )}
      </>
    );
}

export default UserGridListPage;
