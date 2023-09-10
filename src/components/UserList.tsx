import { memo, FC, useState } from "react";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import { Box } from "@mui/material";
import { UserCard } from "./UserCard";
import { UserDetail } from "./UserDetail";

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

export const USER_TYPE = {
    ADMIN_USER: "Leader",
    GENERAL_USER: "Follower",
};

export const BASIC_COLOR = {
    ADMIN: "#1769aa",
    GENERAL: "#f57c00",
};

const dummyData: User[] = [
    {
        id: 1,
        name: "Alexander",
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

    const onClickUserCard = (userData: any) => {
        setData(userData);
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                {/* ユーザ一覧 */}
                <Paper
                    sx={{
                        width: `35%`,
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
                                    key={index}
                                    index={index}
                                    onClickUserCard={onClickUserCard}
                                    data={user}
                                    icon_color={
                                        user.roles[0] === USER_TYPE.ADMIN_USER
                                            ? BASIC_COLOR.ADMIN
                                            : BASIC_COLOR.GENERAL
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
                        width: `65%`,
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
                    <UserDetail data={data} />
                </Paper>
            </Box>
        </>
    );
});
