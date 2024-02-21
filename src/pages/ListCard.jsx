import { useState, useEffect } from "react";
import { Avatar, ListItemText, Skeleton, ListItem, IconButton, ListItemAvatar } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/ApiServices";

function ListCard({ userName ,page}) {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const userResponse = await axiosInstance.get(`users/${userName}`);;

                if (isMounted) {
                    if (userResponse.status === 200) {
                        setUserData(userResponse.data);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        return () => {
            // Clean up on unmount
            isMounted = false;
        };
    }, [userName]);

    const routeChange = (id) => {
        let path = `../user/${id}/${page}`;
        navigate(path,{ replace: true });
    };

    if (userData)
        return (
            <>
                <ListItem
                    variant="outlined"
                    key={userData.id}
                    sx={{
                        backgroundColor: "#fff",
                        textAlign: "left",
                        color: 'secondary',
                        fontWeight: "bold",
                    }}
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => routeChange(userData.login)}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="Avatar"
                            sx={{ width: 50, height: 50 }}
                            src={userData.avatar_url}
                        >
                            {" "}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primaryTypographyProps={{
                            fontSize: 15,
                            fontWeight: "bold",
                            lineHeight: "20px",
                            mb: "2px",
                        }}
                        secondaryTypographyProps={{
                            noWrap: true,
                            fontSize: 12,
                            lineHeight: "16px",
                        }}
                        primary={userData.name}
                        secondary={userData.login}
                    />
                </ListItem>
            </>
        );
    return <Skeleton variant="rounded" width={'100%'} height={60} />
}

export default ListCard;