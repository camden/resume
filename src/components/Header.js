import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';
import Spacer from 'components/shared/Spacer';
import { Globe, Github, Mail, Phone, MapPin } from 'react-feather';

const Header = props => {
  const { data } = props;
  return (
    <Wrapper>
      <Name>Camden Bickel</Name>
      <Info>
        <InfoRow>
          <MapPin size={styles.fontSize.icon} />
          <InfoItem>
            {`${data.getIn(['location', 'city'])}, ${data.getIn([
              'location',
              'region',
            ])}`}
          </InfoItem>
          <Spacer />
          {data.get('availability')}
        </InfoRow>
        <InfoRow>
          <Mail size={styles.fontSize.icon} />
          <InfoItem>{data.get('email')}</InfoItem>
          <Spacer />
          <Phone size={styles.fontSize.icon} />
          <InfoItem>{data.get('phone')}</InfoItem>
        </InfoRow>
        <InfoRow>
          <Github size={styles.fontSize.icon} />
          <InfoItem>{data.getIn(['profiles', 'github', 'username'])}</InfoItem>
          <Spacer />
          <Globe size={styles.fontSize.icon} />
          <InfoItem>{data.getIn(['profiles', 'website', 'username'])}</InfoItem>
        </InfoRow>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5em;
`;

const Name = styled.h2`
  font-size: ${styles.fontSize.xLarge};
  margin-top: 0;
`;

const Info = styled.div`
  flex: 1;
`;

const InfoRow = styled.div`
  margin-top: 0.25em;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${styles.breakpoints.mobile}) {
    justify-content: flex-end;
  }
`;

const InfoItem = styled.span`
  margin-left: 0.5em;
`;

export default Header;
