import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Header from "@/components/Headers";
import Footer from "@/components/Footer";
import SubTabs from "@/components/SubTabs";
import media from "@/components/mediaImages";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`bg-brand-black ${montserrat.className}`}>
      <Header />
      <main className="overflow-hidden bg-white">
        <div className="relative w-full mediaoverlay glow shadow-lg puff-in-hor">
          <h1 className="absolute md:text-5xl text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            Our Portfolio
          </h1>
        </div>
        <div className="mt-8 text-gray-300 font-medium text-lg md:text-center text-left">
          <div className="container">
            <Box sx={{ width: "100%", position: "relative" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#BE9354",
                    },
                  }}
                  variant={"fullWidth"}
                  textColor="inherit"
                >
                  <Tab
                    label="Photos"
                    className={`!text-brand-gold md:!text-xl ${montserrat.className}`}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label="Videos"
                    className={`!text-brand-gold md:!text-xl ${montserrat.className}`}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <SubTabs
                  events={media[0].events}
                  potraits={media[0].events}
                  documentaries={media[0].events}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Videos
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
