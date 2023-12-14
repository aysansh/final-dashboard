import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("Overview");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "0" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="Overview" label="Overview" sx={{ padding: "16px 12px" }} />
        <Tab value="Projects" label="Projects" sx={{ padding: "16px 12px" }} />
        <Tab value="Files" label="Files" sx={{ padding: "16px 12px" }} />
        <Tab value="Teams" label="Teams" sx={{ padding: "16px 12px" }} />
        <Tab
          value="Followers"
          label="Followers"
          sx={{ padding: "16px 12px" }}
        />
        <Tab value="Activity" label="Activity" sx={{ padding: "16px 12px" }} />
      </Tabs>
    </Box>
  );
}
