import { inputData } from '../../../interfaces';
import { FormItemContainer } from './style';

const Input = ({ _key, value }: inputData) => {
  return (
    <FormItemContainer>
      <h4>{_key}:</h4>
      <input defaultValue={value.toString() || ''} />
    </FormItemContainer>
  );
};

const TextArea = ({ _key, value }: inputData) => {
  return (
    <FormItemContainer>
      <h4>{_key}:</h4>
      <textarea defaultValue={value.toString() || ''} />
    </FormItemContainer>
  );
};

const Checkbox = ({ _key, value }: inputData) => {
  return (
    <FormItemContainer>
      <h4>{_key}:</h4>
      <input type="checkbox" defaultValue={value.toString() || ''} />
    </FormItemContainer>
  );
};

const DynamicInput = ({ _key, value }: inputData) => {
  if (typeof value === 'string') {
    return value.length > 30 ? <TextArea _key={_key} value={value} /> : <Input _key={_key} value={value} />;
  } else if (typeof value == 'boolean') {
    return <Checkbox _key={_key} value={value} />;
  } else {
    return (
      <FormItemContainer>
        <h4>{_key}:</h4>
        <input defaultValue={value.toString() || ''} />
      </FormItemContainer>
    );
  }
};

export default DynamicInput;
