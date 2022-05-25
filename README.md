## React Native Code Input with Refs

React Native Code Input using Refs instead of a masked and hidden TextInput

#### Install

```
yarn add rn-code-input-refs
```

```
npm i rn-code-input-refs
```

#### Example

```ts
import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {CodeInput, ICodeInputProps} from 'rn-code-input-refs';

export const App = (): ReactElement => {
  const props: ICodeInputProps = {
    onEndCodeInput: (code) => console.log(code)
  };

  return (
    <SafeAreaView>
      <CodeInput {...props} />
    </SafeAreaView>
  );
};
```

### Props

```ts
onEndCodeInput: (code: string) => void
containerStyles?: ViewStyle
inputStyles?: TextStyle
```