import { Avatar, Box, Button, Chip, Dialog, DialogActions, DialogTitle, IconButton, ListItemIcon, Paper, Typography } from "@mui/material";
import { BASIC_COLOR, USER_TYPE, User } from "./UserList";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC, useState } from "react";

type UserDetailProps = {
    data: User;
};

export const UserDetail: FC<UserDetailProps> = (props) => {
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false);

    const createLabel = (name: string, value: string) => {
        return (
            <Box sx={{ display: "flex" }}>
                <Box sx={{ width: 100 }}>{name}</Box>
                <Box>：</Box>
                <Box>{value}</Box>
            </Box>
        );
    };

    return (
        <>
            {props.data.id !== 0 ? (
                <>
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
                                        props.data.roles[0] === USER_TYPE.ADMIN_USER
                                            ? BASIC_COLOR.ADMIN
                                            : BASIC_COLOR.GENERAL,
                                }}
                            >
                                <Avatar
                                    alt={"paper"}
                                    src={props.data.icon_url}
                                    sx={{ width: 100, height: 100, border: 1 }}
                                />
                            </Paper>
                        </ListItemIcon>
                        <Chip
                            sx={{ mt: 1 }}
                            label={props.data.roles[0]}
                            color={
                                props.data.roles[0] === USER_TYPE.ADMIN_USER ? "primary" : "warning"
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
                        <Typography sx={{ mt: 2, fontSize: 25 }}>{props.data.name}</Typography>
                        <Box sx={{ mt: 2, color: "gray" }}>
                            {createLabel("ログインID", props.data.login_id)}
                            {createLabel("最終ログイン", props.data.last_login)}
                        </Box>
                        <Box sx={{ mt: 2, color: "gray" }}>
                            {createLabel("登録日時", props.data.created_at)}
                            {createLabel("更新日時", props.data.updated_at)}
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
                </>
            ) : (
                <></>
            )}
            <Dialog
                open={isOpenDeleteDialog}
                onClose={() => {
                    setIsOpenDeleteDialog(false);
                }}
            >
                <DialogTitle>Delete User?</DialogTitle>
                <DialogActions>
                    <Button
                        onClick={() => setIsOpenDeleteDialog(false)}
                        color="inherit"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => setIsOpenDeleteDialog(false)}
                        variant="contained"
                        color="primary"
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
