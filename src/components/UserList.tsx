import { memo, FC, useState } from "react";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material";
import { UserCard } from "./UserCard";

export type User = {
    id: number;
    name: string;
    login_id: string;
    roles: string[];
    icon_url: string;
    created_at: string;
    updated_at: string;
    last_login: string;
};

const USER_TYPE = {
    ADMIN_USER: "Supervisor",
    GENERAL_USER: "Operator",
};

const dummyData: User[] = [
    {
        id: 1,
        name: "Alexander Rassel",
        login_id: "login123456",
        roles: [USER_TYPE.ADMIN_USER],
        icon_url: "",
        created_at: "2023/09/08 12:00:00",
        updated_at: "2023/09/08 12:00:00",
        last_login: "2023/10/11 12:50:40",
    },
    {
        id: 2,
        name: "Mike",
        login_id: "login98765",
        roles: [USER_TYPE.GENERAL_USER],
        icon_url: "",
        created_at: "2023/09/08 12:00:10",
        updated_at: "2023/09/08 12:00:20",
        last_login: "2023/10/11 12:50:50",
    },
];

const BASIC_COLOR = {
    SV: "#1769aa",
    OP: "#f57c00",
};

const createLabel = (name: string, value: string) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ width: 100 }}>{name}</Box>
            <Box>：</Box>
            <Box>{value}</Box>
        </Box>
    );
};

export const UserList: FC = memo(() => {
    const [data, setData] = useState({
        id: 0,
        name: "",
        login_id: "",
        roles: [],
        icon_url: "",
        created_at: "",
        updated_at: "",
        last_login: "",
    });
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false);

    const onClickUserCard = (userData: any) => {
        setData(userData);
    };
    return (
        <>
            <Box sx={{ display: "flex" }}>
                {/* ユーザ一覧 */}
                <Paper
                    sx={{
                        width: `30%`,
                        height: "80vh",
                        overflow: "auto",
                        m: 2,
                        borderRadius: 5,
                        boxShadow: 10,
                    }}
                >
                    <Box sx={{ width: "100%", typography: "body1" }}>
                        <MenuList>
                            {dummyData.map((user, index) => (
                                <UserCard
                                    index={index}
                                    onClickUserCard={onClickUserCard}
                                    data={user}
                                    icon_color={
                                        user.roles[0] === USER_TYPE.ADMIN_USER
                                            ? BASIC_COLOR.SV
                                            : BASIC_COLOR.OP
                                    }
                                    chip_color={
                                        user.roles[0] === USER_TYPE.ADMIN_USER
                                            ? "primary"
                                            : "warning"
                                    }
                                />
                            ))}
                        </MenuList>
                    </Box>
                </Paper>
                {/* ユーザ詳細 */}
                <Paper
                    sx={{
                        width: `70%`,
                        height: "80vh",
                        overflow: "auto",
                        borderRadius: 5,
                        m: 2,
                        boxShadow: 10,
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexFlow: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ListItemIcon>
                            <Paper
                                sx={{
                                    padding: "3px",
                                    margin: 1,
                                    borderRadius: "100%",
                                    bgcolor:
                                        data.roles[0] === USER_TYPE.ADMIN_USER
                                            ? BASIC_COLOR.SV
                                            : BASIC_COLOR.OP,
                                }}
                            >
                                <Avatar
                                    alt={"paper"}
                                    src={data.icon_url}
                                    sx={{ width: 100, height: 100, border: 1 }}
                                />
                            </Paper>
                        </ListItemIcon>
                        <Chip
                            sx={{ mt: 1 }}
                            label={data.roles[0]}
                            color={
                                data.roles[0] === USER_TYPE.ADMIN_USER ? "primary" : "warning"
                            }
                            size="medium"
                        />
                        {/* <TextField
                        variant="standard"
                        value={data.name}
                        sx={{ mt: 2 }}
                    >
                        {data.name}
                    </TextField> */}
                        <Typography sx={{ mt: 2, fontSize: 25 }}>{data.name}</Typography>
                        <Box sx={{ mt: 2, color: "gray" }}>
                            {createLabel("ログインID", data.login_id)}
                            {createLabel("最終ログイン", data.last_login)}
                        </Box>
                        <Box sx={{ mt: 2, color: "gray" }}>
                            {createLabel("登録日時", data.created_at)}
                            {createLabel("更新日時", data.updated_at)}
                        </Box>
                    </Box>
                    <IconButton
                        onClick={() => {
                            setIsOpenDeleteDialog(true);
                        }}
                        aria-label="delete"
                        sx={{ mt: 2 }}
                    >
                        <DeleteIcon fontSize="medium" color="error" />
                    </IconButton>
                </Paper>
                <Dialog
                    open={isOpenDeleteDialog}
                    onClose={() => {
                        setIsOpenDeleteDialog(false);
                    }}
                >
                    <DialogTitle>Delete User?</DialogTitle>
                    <DialogActions>
                        <Button onClick={() => setIsOpenDeleteDialog(false)} color="inherit">Cancel</Button>
                        <Button onClick={() => setIsOpenDeleteDialog(false)} variant="contained" color="primary">OK</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
});
