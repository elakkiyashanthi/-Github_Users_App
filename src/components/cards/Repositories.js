import { Typography, Link, Stack, Chip } from "@mui/material";
import {
  LanguageOutlined,
  ForkLeftOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import moment from "moment";
import BalanceIcon from "@mui/icons-material/Balance";

function RepoCard({ repoData }) {
  let currentDate = moment(repoData.updated_at).format("MMM  YYYY");

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ m: 1 }}
        spacing={1}
        gap={1}
      >
        <Link href={repoData.html_url} target="_blank" underline="none">
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            {repoData.name}
          </Typography>
        </Link>
        <Chip label={repoData.visibility} size="small" variant="outlined" />
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ m: 1 }} gap={1}>
        <Typography>{repoData.description}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ m: 1 }}>
        <LanguageOutlined fontSize="small" />
        <Typography sx={{ pr: 1 }}> {repoData.language}</Typography>
        <StarBorderOutlined fontSize="small" />
        <Typography
          component={Link}
          href={repoData.stargazers_url}
          color="black"
          underline="none"
          sx={{ pr: 1 }}
        >
          {repoData.stargazers_count}
        </Typography>

        <ForkLeftOutlined fontSize="small" />
        <Typography
          component={Link}
          href={repoData.forks_url}
          color="black"
          underline="none"
        >
          {repoData.forks}
        </Typography>

        {repoData.license && (
          <>
            <BalanceIcon sx={{ pl: 1 }} fontSize="large" />
            <Typography>{repoData.license.name}</Typography>
          </>
        )}

        <Typography sx={{ pl: 1 }}>updated on {currentDate}</Typography>
      </Stack>
      <Stack direction="row-reverse" alignItems="center" sx={{ m: 1 }}>
        <Link
          href={repoData.html_url}
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Typography>view</Typography>
        </Link>
      </Stack>
    </>
  );
}

export default RepoCard;
