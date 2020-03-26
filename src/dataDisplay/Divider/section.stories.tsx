import React from "react";

import Divider from "./index";

export default {
  title: "Data Display/Divider",
  component: Divider,
  parameters: {
    componentSubtitle: "Handy status label"
  }
};

export const section = () => <Divider>some content</Divider>;
