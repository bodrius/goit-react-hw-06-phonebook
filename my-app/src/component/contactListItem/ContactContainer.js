import { connect } from "react-redux";
import { deleteContact } from "../../redux/contactActions";

import ContactListItem from "./ContactListItem";

export default connect(null, { deleteContact })(ContactListItem);
