import { memo, FC } from "react";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box, Chip, Divider, MenuItem } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { User } from "./UserList";

type Props = {
    index: number;
    onClickUserCard: (userData: any) => void;
    data: User;
    icon_color: string;
    chip_color: any;
};

const createLabel = (name: string, value: string) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ width: 85 }}>{name}</Box>
            <Box>：</Box>
            <Box>{value}</Box>
        </Box>
    );
};

export const UserCard: FC<Props> = memo((props) => {

    return (
        <>
            <MenuItem
                sx={{ width: "100%" }}
                onClick={() => {
                    props.onClickUserCard(props.data);
                }}
            >
                <ListItemIcon>
                    <UserIcon icon_url={props.data.icon_url} color={props.icon_color} />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ overflow: "hidden", textOverflow: 'ellipsis' }}>{props.data.name}</Box>
                            <Chip
                                sx={{ mr: 2 }}
                                label={props.data.roles[0]}
                                size="small"
                                color={props.chip_color}
                            />
                        </Box>
                    }
                    primaryTypographyProps={{ fontSize: { xs: 20, md: 20 } }}
                    secondary={
                        <Box sx={{}}>
                            {createLabel("ログインID", props.data.login_id)}
                            {createLabel("最終ログイン", props.data.last_login)}
                        </Box>
                    }
                />
            </MenuItem>
            <Divider variant="inset" component="li" />
        </>
    );
});
