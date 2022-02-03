# hooks

[![Npm package version](https://badgen.net/npm/v/@yuxuan-zheng/hooks)](https://npmjs.com/package/@yuxuan-zheng/hooks)

Some common used hooks.

## API Reference

### `useDebounced`

#### Description

Use this hook to get the debounced value.

#### Parameters

| Name       | Type     | Default value | Description                                 |
| :--------- | :------- | :------------ | :------------------------------------------ |
| `value`    | `T`      | `undefined`   | **Required** The value you want to debounce |
| `interval` | `number` | `1000`        | The debounce interval in milliseconds       |

#### Returns

| Name             | Type | Description         |
| :--------------- | :--- | :------------------ |
| `debouncedValue` | `T`  | The debounced value |

#### Example

```js
const Example = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounced(value);

  const onChange = e => setValue(e.target.value);

  useEffect(() => {
    // Do whatever you want upon the debounced value change
    consolge.log(debouncedValue);
  }, [debouncedValue]);

  return <input type="text" value={value} onChange={onChange} />;
};
```
