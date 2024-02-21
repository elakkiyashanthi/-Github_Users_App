import { React } from "react";
import {
    Typography,
    Stack,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import {
    EmailOutlined,
    PeopleAltOutlined,
    BusinessOutlined,
    LocationOnOutlined,
    AttachFile,
} from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { SocialCard, SocialLink } from "./Organizations";

function ProfileCard({ profileData }) {
    return (
        <>
            <img
                width="260"
                height="260"
                style={{ borderRadius: "50%", height: "auto" }}
                src={profileData.avatar_url}
                alt={profileData.name}
            />
            <Typography variant="h6" fontWeight="bold">
                {profileData.name}
            </Typography>
            <Typography variant="body">{profileData.login}</Typography>
            <Typography fontWeight="bold" sx={{ mb: 1 }}>
                {profileData.bio}
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
                <PeopleAltOutlined />
                <span>
                    {profileData.followers + ' follower'}

                </span>
                <span>
                    {profileData.following + ' following'}
                </span>

            </Stack>
            <Divider sx={{ mt: 1, mb: 1 }} />

            <SocialCard label={profileData.company} icon={<BusinessOutlined />} />
            <SocialCard label={profileData.location} icon={<LocationOnOutlined />} />
            <SocialCard label={profileData.email} icon={<EmailOutlined />} />
            <SocialCard label={profileData.twitter_profileDataname} icon={<XIcon />} />

            <Stack direction="row" alignItems="center" >
                <AttachFile />
                <SocialLink label={profileData.blog} href={profileData.blog} />
            </Stack>
            <Stack direction="row" alignItems="center" >
                <GitHubIcon />
                <SocialLink label={profileData.html_url} href={profileData.html_url} />
            </Stack>
            <Divider sx={{ mt: 1, mb: 1 }} />
        </>
    );
}

export default ProfileCard;
