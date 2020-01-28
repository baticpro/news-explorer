import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  blackColor,
  borderGrayColor,
  grayColor,
  whiteColor,
} from 'src/config/colors';
import {ThemeContext} from 'src/library/context/theme-context';
import styled from 'styled-components';
import {withNavigation} from 'react-navigation';

const Root = styled.TouchableOpacity`
  border-bottom-color: ${borderGrayColor};
  border-bottom-width: 1px;
  flex-direction: row;
  padding: 15px;
`;

const NewsImage = styled.Image`
  height: 80px;
  margin-right: 10px;
  width: 80px;
  border-radius: 5px;
`;

const TitleWrapper = styled.View`
  flex: 1;
`;

const Date = styled.Text`
  padding-top: 3px;
  color: ${props => (props.theme === 'light' ? grayColor : whiteColor)};
`;

const Title = styled.Text`
  font-size: 16px;
  color: ${props => (props.theme === 'light' ? blackColor : whiteColor)};
`;

const NewsItem = ({item, navigation}) => {
  const theme = useContext(ThemeContext);
  const {image, title, date} = item;

  const goToDetail = () => navigation.navigate('Detail', {item});

  return (
    <Root onPress={goToDetail}>
      {image && <NewsImage source={{uri: image}} />}
      <TitleWrapper>
        <Title theme={theme}>{title}</Title>
        <Date theme={theme}>{date}</Date>
      </TitleWrapper>
    </Root>
  );
};

NewsItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(NewsItem);
