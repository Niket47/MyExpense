import { StyleSheet, Text, Dimensions, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { LineChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';

const Budget = () => {
  const ExpenseData = useSelector(state => state.app.expense);
  const dispatch = useDispatch();
  const { width } = Dimensions.get('window');
  const windowWidth = Dimensions.get('window').width;

  const amounts = ExpenseData.map(item => Number(item.amount));
  console.log(amounts, 'amounts');

  const months = ExpenseData.map(item => moment(item.date).format('MMM'));
  console.log(months, 'months');

  const total = amounts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(total, 'total');

  const inputValue = total;
  const minValue = 0;
  const maxValue = 10;

  // Calculate the mapped value
  const mappedValue = (inputValue - minValue) / (maxValue - minValue) / 10000;

  const progressbar = Number(mappedValue.toFixed(1));

  console.log(progressbar, mappedValue, 'mappedValue'); // The mapped value within the range [0, 10]

  return (
    <View>
      <View>
        <LineChart
          data={{
            labels: months,
            datasets: [
              {
                data: amounts,
              },
            ],
          }}
          width={Dimensions.get('window').width - 20} // from react-native
          height={250}
          yLabelsOffset={1}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginHorizontal: 10,
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          borderRadius: 16,
        }}>
        <Text>Amount{total.toFixed(2)}</Text>
        <Progress.Bar
          progress={progressbar}
          width={null}
          height={30}
          animated={true}
          indeterminateAnimationDuration={1000}
          style={{
            borderRadius: 10,
            color: 'rgba(26, 105, 0, 1)',
          }}
        />
      </View>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({});
