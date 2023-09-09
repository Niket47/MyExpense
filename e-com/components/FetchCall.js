import axios from 'react-native-axios';

const url = '';

export const FetchData = async url => {
  try {
    const response = await axios.get(url);
    // console.log(response);
    data = [];
    response.data.map(items => {
      console.log(items);
      data.push(items);
    });
  } catch (error) {
    console.error(error);
  }
  return data;
};
