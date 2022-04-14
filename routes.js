import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Recepcao from "./pages/recepcao1";
import Recepcao2 from "./pages/recepcao2";
import Recepcao3 from "./pages/recepcao3";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Recepcao,
      Recepcao2,
      Recepcao3,
    },
    {
      headerMode: "none",
      initialRouteName: "Recepcao",
    }
  )
);

export default Routes;
