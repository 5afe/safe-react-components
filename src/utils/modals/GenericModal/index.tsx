import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import cn from 'classnames';
import { rgba } from 'polished';


import theme from '../../../theme';
import { Divider, Icon } from '../../../index';

const StyledButton = styled.button`
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 0px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;
const BodySection = styled.div`
  padding: 24px;
  max-height: 460px;
  overflow-y: auto;
`;
const FooterSection = styled.div`
  margin: 24px;
`;

type Props = {
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  onClose: () => any;
  classes?: any;
  paperClassName?: string;
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
  title
}: Props) => {
  const classes = useStyles()

  return (
    <Modal open className={classes.modal} title="GenericModal">
      <div className={cn(classes.paper)}>
        <TitleSection>
          {title}
          <StyledButton onClick={onClose}>
            <Icon size="sm" type="cross" />
          </StyledButton>
        </TitleSection>

        <StyledDivider />
        <BodySection>{body}</BodySection>

        {footer && (
          <>
            <StyledDivider />
            <FooterSection>{footer}</FooterSection>
          </>
        )}
      </div>
    </Modal>
  );
};

export default GenericModal;
