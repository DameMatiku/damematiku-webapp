import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import RadioButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';

const UploadPage = ({ }) => (

  <div>
    <h2>Přidat nové výukové video</h2>

    <div>
      <RadioButtonGroup name={'thumbnail'} style={{ overflow: 'hidden' }}>
        <RadioButton value={'x'} label={<img src={'http://placehold.it/250x200'} width={170} />} style={{ float: 'left', width: '20%', marginRight: 15 }} />
        <RadioButton value={'y'} label={<img src={'http://placehold.it/250x200'} width={170} />} style={{ float: 'left', width: '20%', marginRight: 15 }} />
        <RadioButton value={'z'} label={<img src={'http://placehold.it/250x200'} width={170} />} style={{ float: 'left', width: '20%', marginRight: 15 }} />
      </RadioButtonGroup>
    </div>

    <div style={{ overflow: 'hidden' }}>    
      <TextField floatingLabelText="Název"  width={'100%'} />
    </div>
    <div>
      <TextField floatingLabelText="Shrnutí vašeho pojetí tématu." rows={6} fullWidth={true} />
    </div>
    <div style={{ marginTop: 20, textAlign: 'center', marginBottom: 100 }}>
      <RaisedButton label={'Přidat lekci'} primary={true} />
    </div>
  </div>

);

export default UploadPage;
