import { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Avatar,
  Grommet,
  Image,
  Layer,
  ResponsiveContext,
  Text,
} from "grommet";
import { grommet } from "grommet/themes";
import { FormClose, Menu } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    // justify="between"
    // background="brand"
    height="65px"
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={grommet} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill direction="row">
            {!showSidebar || size !== "small" ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  align="center"
                  justify="center"
                  elevation="medium"
                  style={{ zIndex: "2" }}
                >
                  sidebar
                </Box>
              </Collapsible>
            ) : (
              <Layer position="left" full="vertical">
                <Box
                  flex
                  background="light-2"
                  tag="header"
                  justify="end"
                  align="center"
                  direction="row"
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                  />
                </Box>
                <Box fill background="light-2" align="center" justify="center">
                  sidebar
                </Box>
              </Layer>
            )}

            <Box flex>
              <AppBar>
                <Button
                  icon={<Menu />}
                  onClick={() => setShowSidebar(!showSidebar)}
                />
                <Image src="images/logo.png" height="43px" width="256px" />

                <Avatar
                  background="#38A9E8"
                  size="small"
                  margin={{ left: "auto" }}
                >
                  <Text size="small" color="white">
                    F
                  </Text>
                </Avatar>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  app body
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
