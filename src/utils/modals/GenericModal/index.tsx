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
  padding: 5px;
  width: 26px;
  height: 26px;
 

  span {
    margin-right: 0px;
  }

  :focus {
    outline: none;
  }

  :hover {
    background: ${({ theme }) => theme.colors.separator};
    border-radius: 16px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

const BodySection = styled.div<{ withoutBodyPadding?: boolean }>`
  max-height: 280px;
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
    background: rgba(theme.colors.overlay.color, theme.colors.overlay.opacity)
  },

  paper: {
    position: 'relative',
    minWidth: '500px',
    backgroundColor: theme.colors.white,
    borderRadius: '8px',
    boxShadow: `0 0 ${theme.colors.shadow.opacity} 0 ${theme.colors.shadow.color}`,

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
          <Title size="xs" withoutMargin>
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
