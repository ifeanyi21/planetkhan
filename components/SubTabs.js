import { Box, Button, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindowSize from "./UseWindowSize";
import Image from "next/image";
import ModalImage from "./ModalImage";

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

const SubTabs = ({ events, potraits, documentaries }) => {
  const size = useWindowSize();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const [imagesrc, setImagesrc] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = (item) => {
    console.log(item.default.src);
    setImagesrc(item.default.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Tabs
        value={value}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#BE9354",
          },
        }}
        variant={size.width > 768 ? "fullWidth" : "scrollable"}
        onChange={handleChange}
      >
        <Tab
          value={0}
          label="Events"
          className="!text-brand-gold md:!text-base"
        />
        <Tab
          value={1}
          label="Potraits"
          className="!text-brand-gold md:!text-base"
        />
        <Tab
          value={2}
          label="Documentaries"
          className="!text-brand-gold md:!text-base"
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <div className="row">
          {events.map((item) => {
            return (
              <div className="col-md-4 mb-8 cursor-pointer" key={item.id}>
                <Button
                  className="w-full"
                  onClick={(e) => handleClickOpen(item.image)}
                >
                  <Image
                    src={item.image}
                    className="rounded-sm w-full h-[300px] object-cover"
                    alt="Picture"
                    width={200}
                    height={200}
                  />
                </Button>
              </div>
            );
          })}
          <ModalImage image={imagesrc} handleClose={handleClose} open={open} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="row">
          {potraits.map((item) => {
            return (
              <div className="col-md-4 mb-8" key={item.id}>
                <Button
                  className="w-full"
                  onClick={(e) => handleClickOpen(item.image)}
                >
                  <Image
                    src={item.image}
                    className="rounded-sm w-full h-[300px] object-cover"
                    alt="Picture"
                    width={200}
                    height={200}
                  />
                </Button>
              </div>
            );
          })}
          <ModalImage image={imagesrc} handleClose={handleClose} open={open} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="row">
          {documentaries.map((item) => {
            return (
              <div className="col-md-4 mb-8" key={item.id}>
                <Button
                  className="w-full"
                  onClick={(e) => handleClickOpen(item.image)}
                >
                  <Image
                    src={item.image}
                    className="rounded-sm w-full h-[300px] object-cover"
                    alt="Picture"
                    width={200}
                    height={200}
                  />
                </Button>
              </div>
            );
          })}
          <ModalImage image={imagesrc} handleClose={handleClose} open={open} />
        </div>
      </CustomTabPanel>
    </Box>
  );
};

export default SubTabs;
