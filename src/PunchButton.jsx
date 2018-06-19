/**
 * Created by Kimi on 2018/6/19.
 */
import React from 'react';
import Button from '@material-ui/core/Button';

function PunchButton(props) {
  return (
    <Button {...props} variant="raised" color="primary" >
      Punch!
    </Button >
  )
}

export default PunchButton;
