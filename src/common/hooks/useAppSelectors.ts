import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";

export const useAppSelectors = useSelector.withTypes<RootState>()