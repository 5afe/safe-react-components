import React from "react";

import Text from "./index";

export default {
  title: "Data Display/Text",
  component: Text,
  parameters: {
    componentSubtitle: "The Text component"
  }
};

export const text = () => <Text size="sm">Some Text...</Text>;

export const bold = () => (
  <Text size="sm" strong>
    Some Text...
  </Text>
);

export const centered = () => (
  <Text size="sm" center>
    Some Text...
  </Text>
);

export const customSize = () => (
  <>    
    <Text size="sm">Some Text...</Text>
    <Text size="md">Some Text...</Text>
    <Text size="lg">Some Text...</Text>
    <Text size="xl">Some Text...</Text>
  </>
);
