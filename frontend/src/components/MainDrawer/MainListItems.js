import React from "react";
import { Link as RouterLink } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

import { i18n } from "../../translate/i18n";

function ListItemLink(props) {
	const { icon, primary, to, className } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				<RouterLink to={to} ref={ref} {...itemProps} />
			)),
		[to]
	);

	return (
		<li>
			<ListItem button component={renderLink} className={className}>
				{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
				<ListItemText primary={primary} />
			</ListItem>
		</li>
	);
}

const MainListItems = () => {
	return (
		<div>
			<ListItemLink to="/" primary="Dashboard" icon={<DashboardIcon />} />
			<ListItemLink
				to="/whats-auth"
				primary={i18n.t("mainDrawer.listItems.connection")}
				icon={<SyncAltIcon />}
			/>
			<ListItemLink
				to="/chat"
				primary={i18n.t("mainDrawer.listItems.tickets")}
				icon={<WhatsAppIcon />}
			/>

			<ListItemLink
				to="/contacts"
				primary={i18n.t("mainDrawer.listItems.contacts")}
				icon={<ContactPhoneIcon />}
			/>
		</div>
	);
};

export default MainListItems;
