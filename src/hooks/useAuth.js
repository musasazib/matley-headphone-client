import { AuthContext } from "../context/AuthProvider/AuthProvider";
const { useContext } = require("react");

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth
}

export default useAuth;