import { useContext } from "react";
import UserItemsCountContext from "../contexts/UserItemsCountContext";

const useUserItemsCount = () => useContext(UserItemsCountContext);

export default useUserItemsCount;