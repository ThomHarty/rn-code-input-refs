import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native'

interface ICode {
  0: string
  1: string
  2: string
  3: string
}

export interface ICodeInputProps {
  containerStyles: ViewStyle
  inputStyles: TextStyle
  onEndCodeInput: (code: string) => void
}

export const CodeInput = ({
  containerStyles,
  inputStyles,
  onEndCodeInput,
}: ICodeInputProps): ReactElement => {
  const inputRef1 = useRef<TextInput>(null)
  const inputRef2 = useRef<TextInput>(null)
  const inputRef3 = useRef<TextInput>(null)
  const inputRef4 = useRef<TextInput>(null)

  const [code, setCode] = useState<ICode>({ 0: '', 1: '', 2: '', 3: '' })

  useEffect(() => {
    if (code[3] !== '') {
      const fullCode = `${code[0]}${code[1]}${code[2]}${code[3]}`
      onEndCodeInput(fullCode)
    } else if (code[2] !== '') {
      inputRef4.current?.focus()
    } else if (code[1] !== '') {
      inputRef3.current?.focus()
    } else if (code[0] !== '') {
      inputRef2.current?.focus()
    } else {
      inputRef1.current?.focus()
    }
  }, [code, onEndCodeInput])

  const handleBack = (input: number) => {
    if (input === 4) {
      inputRef3.current?.focus()
    } else if (input === 3) {
      inputRef2.current?.focus()
    } else if (input === 2) {
      inputRef1.current?.focus()
    }
  }

  return (
    <View style={[styles.container, containerStyles]}>
      <TextInput
        maxLength={1}
        ref={inputRef1}
        onChangeText={(value) => setCode({ ...code, 0: value })}
        style={[styles.input, inputStyles]}
        keyboardType='numeric'
        editable={code[1] === '' && code[2] === '' && code[3] === ''}
      />
      <TextInput
        maxLength={1}
        ref={inputRef2}
        onChangeText={(value) => setCode({ ...code, 1: value })}
        style={[styles.input, inputStyles]}
        keyboardType='numeric'
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' && handleBack(2)
        }}
        editable={code[0] !== '' && code[2] === '' && code[3] === ''}
      />
      <TextInput
        maxLength={1}
        ref={inputRef3}
        onChangeText={(value) => setCode({ ...code, 2: value })}
        style={[styles.input, inputStyles]}
        keyboardType='numeric'
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' && handleBack(3)
        }}
        editable={code[0] !== '' && code[1] !== '' && code[3] === ''}
      />
      <TextInput
        maxLength={1}
        ref={inputRef4}
        onChangeText={(value) => setCode({ ...code, 3: value })}
        style={[styles.input, inputStyles]}
        keyboardType='numeric'
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' && handleBack(4)
        }}
        editable={code[0] !== '' && code[1] !== '' && code[2] !== ''}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 5,
    backgroundColor: '#ebebeb',
    width: 50,
    height: 50,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
})
