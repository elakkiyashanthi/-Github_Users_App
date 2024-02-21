import { Typography, Link, Stack, Avatar, Grid } from "@mui/material";
import { ORG_URL } from "../../utils/constants";

function SocialCard({ label, icon }) {
  if (label)
    return (
      <Typography component={Stack} direction="row" gap={1} alignItems="center">
        {icon}
        {label}
      </Typography>
    );
  return <></>;
}

export { SocialCard };

function SocialLink({ label, href }) {
  if (label)
    return (
      <Link
        sx={{ ml: 1 }}
        href={href}
        target="_blank"
        rel="noopener"
        underline="none"
      >
        {label}
      </Link>
    );
  return <></>;
}

export { SocialLink };

function OrgCard({ data }) {
  if (data.length)
    return (
      <>
        <Typography fontSize="xl" sx={{ mt: 1, mb: 1 }} fontWeight="bold">
          Organizations
        </Typography>
        {data.length > 0 && (
          <Grid container>
            {data.map((element) => (
              <Grid  md={1}  key={element.id} > 
                <Avatar
                  component={Link}
                  alt={element.login}
                  href={ORG_URL + element.login}
                  src={element.avatar_url}
                  variant="rounded"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  sx={{ width: 24, height: 24 }}
                >
                </Avatar>
              </Grid>
            ))}
          </Grid>
        )}
      </>
    );

  return <></>;
}

export { OrgCard };
