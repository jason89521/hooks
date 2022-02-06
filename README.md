# hooks

[![Npm package version](https://badgen.net/npm/v/@yuxuan-zheng/hooks)](https://npmjs.com/package/@yuxuan-zheng/hooks)

Some common used hooks.

## API Reference

All hooks will return either a value or an array. If the return value is an array, this document will list the values in order.

- [useDebounced](#usedebounced)
- [useIntersection](#useIntersection)

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
    console.log(debouncedValue);
  }, [debouncedValue]);

  return <input type="text" value={value} onChange={onChange} />;
};
```

### `useIntersection`

#### Description

Use this hook to determine whether the element is displayed in viewport.

#### Parameters

This hook doesn't need parameters.

#### Returns

| Name             | Type                            | Description                                                                           |
| :--------------- | :------------------------------ | :------------------------------------------------------------------------------------ |
| `isIntersecting` | `boolean`                       | Use this value to determine whether the target element is intersecting with viewport. |
| `callbackRef`    | `(element:HTMLElement) => void` | Pass this callback to the target element's ref.                                       |

#### Example

```js
const Example = () => {
  const [isIntersecting, callbackRef] = useIntersection();

  useEffect(() => {
    // Do whatever you want when the target is intersecting with viewport
  }, [isIntersecting])

  return <div ref={callbackRef}></div>
}
```
