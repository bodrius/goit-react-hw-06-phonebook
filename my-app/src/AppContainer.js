import { connect } from "react-redux";
import { addContact, getNameFilter} from "./redux/contactActions";
import App from './App'


const mapStateToProps = state => ({
    return: {
      contacts: state.contacts
    }
  });
  
  export default connect(mapStateToProps, { addContact, getNameFilter })(App);