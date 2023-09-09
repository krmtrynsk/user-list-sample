import { memo, FC } from "react";

import Avatar from "@mui/material/Avatar";
import { Paper } from "@mui/material";

type Props = {
    icon_url: string;
    color: string;
}

export const UserIcon: FC<Props> = memo((props) => {

    return (
        <>
            <Paper
                sx={{
                    padding: "3px",
                    margin: 1,
                    borderRadius: "100%",
                    bgcolor: props.color,
                    verticalAlign: 'top',
                }}
            >
                <Avatar
                    alt={'testUser'}
                    src={props.icon_url}
                    sx={{ width: 45, height: 45, border: 1 }}
                />
            </Paper>
        </>
    );
});