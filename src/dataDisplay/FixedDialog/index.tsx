import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Title, ModalFooterConfirmation } from '../../index';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => rgba(theme.colors.overlay.color, 0.8)};
`;

const Wrapper = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  '&:focus': {
    outline: 'none';
  }
`;

const TitleSection = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

const BodySection = styled.div<{ withoutBodyPadding?: boolean }>`
  max-height: 460px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  padding: ${({ withoutBodyPadding }) =>
    withoutBodyPadding ? '0' : '16px 24px'};
`;

const FooterSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  padding: 16px 24px;
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
