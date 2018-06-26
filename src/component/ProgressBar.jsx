/**
 * Created by Kimi on 2018/6/19.
 */
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { observer } from 'mobx-react';

@observer
class ProgressBar extends React.Component {
  render() {
    return (
      <LinearProgress {...this.props} valueBuffer={100} variant="buffer" />
    );
  }
}

export default ProgressBar;