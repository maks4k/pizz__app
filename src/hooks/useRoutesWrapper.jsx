import { useRoutes } from "react-router-dom"
import { routes } from "../utils/routes"


function useRoutesWrapper() {
return useRoutes(routes);
}

export default useRoutesWrapper