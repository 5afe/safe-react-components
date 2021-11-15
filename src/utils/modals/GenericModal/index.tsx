import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';
import styled from 'styled-components';
import Media from 'react-media';

import theme from '../../../theme';
import { Icon, Title } from '../../../index';

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  width: 26px;
  height: 26px;

  span {
    margin-right: 0;
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

const BodySection = styled.div<{
  withoutBodyPadding?: boolean;
  smallHeight: boolean;
}>`
  max-height: ${({ smallHeight }) => (smallHeight ? '280px' : '460px')};
  overflow-y: auto;
  padding: ${({ withoutBodyPadding }) =>
    withoutBodyPadding ? '0' : '16px 24px'};
`;

const FooterSection = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  padding: 16px 24px;
`;

export type GenericModalProps = {
  title: string | React.ReactNode;
  body: React.ReactNode;
  withoutBodyPadding?: boolean;
  footer?: React.ReactNode;
  onClose: () => void;
};

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'scroll',
    background: alpha(theme.colors.overlay.color, theme.colors.overlay.opacity),
  },

  paper: {
    position: (props: { smallHeight: boolean }) =>
      props.smallHeight ? 'relative' : 'absolute',
    top: (props: { smallHeight: boolean }) =>
      props.smallHeight ? 'unset' : '121px',
    minWidth: '500px',
    width: (props: { smallHeight: boolean }) =>
      props.smallHeight ? '500px' : 'inherit',
    backgroundColor: theme.colors.white,
    borderRadius: '8px',
    boxShadow: `0 0 ${theme.colors.shadow.opacity} 0 ${theme.colors.shadow.color}`,

    '&:focus': {
      outline: 'none',
    },
  },
});

const GenericModal = ({
  body,
  footer,
  onClose,
  title,
  withoutBodyPadding,
  smallHeight,
}: GenericModalProps & { smallHeight: boolean }) => {
  const classes = useStyles({ smallHeight });

  return (
    <Modal open className={classes.modal}>
      <div className={classes.paper}>
        <TitleSection>
          <Title size="xs" withoutMargin>
            {title}
          </Title>
          <StyledButton onClick={onClose}>
            <Icon size="sm" type="cross" />
          </StyledButton>
        </TitleSection>

        <BodySection
          withoutBodyPadding={withoutBodyPadding}
          smallHeight={smallHeight}>
          {body}
        </BodySection>

        {footer && <FooterSection>{footer}</FooterSection>}
      </div>
    </Modal>
  );
};

const MediaModal = (props: GenericModalProps): React.ReactElement => (
  <Media query={{ maxHeight: 500 }}>
    {(matches) => <GenericModal {...props} smallHeight={matches} />}
  </Media>
);

export default MediaModal;
