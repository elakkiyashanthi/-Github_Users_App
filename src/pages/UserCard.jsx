import { React, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import Divider from "@mui/material/Divider";
import RepoCard from "../components/cards/Repositories";
import { OrgCard } from "../components/cards/Organizations";
import ProfileCard from "../components/cards/Profile";
import { REPO_PER_PAGE } from "../utils/constants";
import usePagination from "../utils/Pagination";

export default function UserCard({ user = {}, repo = [], org = [] }) {


  const [page, setPage] = useState(1);
  const userData = usePagination(repo, REPO_PER_PAGE);
  const count = repo.length / 10;

  const handleChange = (e, p) => {
    setPage(p);
    userData.jump(p);
  };



  return (
    <>
      <Grid
        direction="row"
        justifyContent="center"
        container
        spacing={0}
        columns={{ xs: 8, md: 16 }}
      >
        <Grid item md={4} xs={8}>
          <ProfileCard profileData={user} />
          <OrgCard data={org} />
        </Grid>
        <Grid item md={8} xs={8}>
          <Divider />
          <Grid container columns={{ xs: 1, sm: 1, md: 1 }}>
            {userData.currentData().map((element) => (
              <Grid item key={element.id} xs={1} sm={1} md={1}>
                <RepoCard repoData={element} />
                <Divider />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={count}
            size="small"
            page={page}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}
