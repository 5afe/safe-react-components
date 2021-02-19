import React from 'react';
import styled from 'styled-components';
import { getLuminance } from '@material-ui/core/styles/colorManipulator';

import { Text, theme } from './index';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px;
`;

const ColorDisplay = styled.div<{ color: string }>`
  margin: 8px auto;
  width: 100px;
  height: 100px;
  border: 1px solid #000000;
  background-color: ${({ color }) => color};
`;

export default {
  title: 'Utils/Colors',
};

export const ColorsSample = (): React.ReactElement => {
  const colors = Object.keys(theme.colors)
    .reduce((acc: { name: string; code: string }[], name: string) => {
      if (typeof (theme.colors as Record<string, unknown>)[name] === 'string') {
        acc.push({
          name,
          code: ((theme.colors as Record<string, unknown>)[
            name
          ] as string).toUpperCase(),
        });
      }
      return acc;
    }, [])
    .sort(
      ({ code: colorA }, { code: colorB }) =>
        getLuminance(colorA) - getLuminance(colorB)
    );

  return (
    <Grid>
      {colors?.map(({ name, code }) => (
        <ColorWrapper key={name}>
          <ColorDisplay color={code} />
          <Text size="md" center>
            {name}
          </Text>
          <Text size="md" center>
            {code}
          </Text>
        </ColorWrapper>
      ))}
    </Grid>
  );
};
