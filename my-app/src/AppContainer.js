import { connect } from "react-redux";
import { addContact } from "./redux/contactActions";
import App from './App'


const mapStateToProps = state => ({
    return: {
      contacts: state
    }
  });
  
  export default connect(mapStateToProps, { addContact })(App);