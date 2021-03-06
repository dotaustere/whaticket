import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { format, parseISO } from "date-fns";

import { i18n } from "../../translate/i18n";
import api from "../../services/api";

const SessionInfo = ({ session }) => {
	console.log(session);

	const handleDisconectSession = async () => {
		try {
			await api.delete("/whatsapp/session/1");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Typography variant="h6" color="primary">
				{`${i18n.t("sessionInfo.status")} ${session.status}`}
			</Typography>
			<Typography variant="body2" gutterBottom>
				{`${i18n.t("sessionInfo.updatedAt")}`}{" "}
				{session.updatedAt &&
					format(parseISO(session.updatedAt), "dd/mm/yy HH:mm")}
			</Typography>
			<Button
				color="primary"
				variant="contained"
				onClick={handleDisconectSession}
			>
				{`${i18n.t("sessionInfo.buttons.disconnect")}`}
			</Button>
			{/* <Typography component="p" variant="h6">
				{`${i18n.t("sessionInfo.battery")}${session.battery}%`}
			</Typography>
			<Typography color="textSecondary">
				{`${i18n.t("sessionInfo.charging")}${session.plugged} `}
			</Typography> */}
		</>
	);
};

export default SessionInfo;
