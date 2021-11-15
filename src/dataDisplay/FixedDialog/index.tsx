import React from 'react';
import styled from 'styled-components';
import { alpha } from '@material-ui/core/styles';

import { Title, ModalFooterConfirmation } from '../../index';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 1px 2px 10px 0
    ${({ theme }) => alpha(theme.colors.shadow.color, 0.18)};

  '&:focus': {
    outline: 'none';
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
  height: 74px;
  box-sizing: border-box;
`;

const BodySection = styled.div<{ withoutBodyPadding?: boolean }>`
  max-height: 460px;
  overflow-y: auto;
  padding: ${({ withoutBodyPadding }) =>
    withoutBodyPadding ? '0' : '16px 24px'};
`;

const FooterSection = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
`;

type Props = {
  title: string;
  body: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
};

const FixedDialog = ({
  body,
  title,
  onConfirm,
  onCancel,
}: Props): React.ReactElement => {
  return (
    <Container>
      <Wrapper>
        <TitleSection>
          <Title size="xs" withoutMargin>
            {title}
          </Title>
        </TitleSection>

        <BodySection>{body}</BodySection>

        <FooterSection>
          <ModalFooterConfirmation
            handleCancel={onCancel}
            handleOk={onConfirm}
            okText="Confirm"
          />
        </FooterSection>
      </Wrapper>
    </Container>
  );
};

export default FixedDialog;
