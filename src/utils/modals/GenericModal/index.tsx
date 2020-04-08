import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import cn from 'classnames';
import { rgba } from 'polished';

import theme from '../../../theme';
import { Icon, Title } from '../../../index';

const StyledButton = styled.button`
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

const BodySection = styled.div<{ withoutBodyPadding?: boolean }>`
  max-height: 460px;
  overflow-y: auto;
  padding: ${({ withoutBodyPadding }) =>
    withoutBodyPadding ? '0' : '16px 24px'};
`;

const FooterSection = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  padding: 16px 24px;
`;

type Props = {
  title: string;
  body: React.ReactNode;
  withoutBodyPadding?: boolean;
  footer?: React.ReactNode;
  onClose: () => any;
};

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'scroll',
    background: rgba(theme.colors.overlay.color, 0.75)
  },

  paper: {
    position: 'absolute',
    top: '121px',
    minWidth: '500px',
    backgroundColor: theme.colors.white,
    borderRadius: '8px',
    boxShadow: `0 0 ${theme.colors.shadow.opacity}px 0 ${theme.colors.shadow.color}`,

    '&:focus': {
      outline: 'none'
    }
  }
});

const GenericModal = ({
  body,
  footer,
  onClose,
  title,
  withoutBodyPadding
}: Props) => {
  const classes = useStyles();

  return (
    <Modal open className={classes.modal} title="GenericModal">
      <div className={cn(classes.paper)}>
        <TitleSection>
          <Title size="sm" withoutMargin>
            {title}
          </Title>
          <StyledButton onClick={onClose}>
            <Icon size="sm" type="cross" />
          </StyledButton>
        </TitleSection>

        <BodySection withoutBodyPadding={withoutBodyPadding}>
          {body}
        </BodySection>

        {footer && <FooterSection>{footer}</FooterSection>}
      </div>
    </Modal>
  );
};

export default GenericModal;
