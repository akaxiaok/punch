/**
 * Created by Kimi on 2018/7/2.
 */
import _ from 'lodash';

_.today = function () {
  let date = new Date();
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

_.getPercent = function (numerator, denominator) {
  return _.round(numerator / denominator * 100)
};

export default _;