import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';
import Spacer from 'components/shared/Spacer';

const Header = props => {
  const { data } = props;
  return (
    <Wrapper>
      <Name>Camden Bickel</Name>
      <Info>
        <InfoRow>
          {`${data.getIn(['location', 'city'])}, ${data.getIn([
            'location',
            'region',
          ])}`}
          <Spacer />
          {data.get('availability')}
        </InfoRow>
        <InfoRow>
          {data.get('phone')}
          <Spacer />
          {data.get('email')}
        </InfoRow>
        <InfoRow>
          {data.getIn(['profiles', 'github', 'username'])}
          <Spacer />
          {data.getIn(['profiles', 'website', 'username'])}
        </InfoRow>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 0.5em;
`;

const Name = styled.h2`
  font-size: ${styles.fontSize.xLarge};
  margin-top: 0;
`;

const Info = styled.div`
  flex: 1;
  text-align: right;
`;

const InfoRow = styled.div``;

export default Header;
