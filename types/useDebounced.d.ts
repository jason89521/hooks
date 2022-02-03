export default useDebounced;
/**
 * @template T
 * @param {T} initialValue
 * @param {number} interval
 * @param {() => void} callback
 *
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, T, React.Dispatch<React.SetStateAction<T>>]}
 */
declare function useDebounced<T>(initialValue: T, interval: number, callback: () => void): [T, React.Dispatch<React.SetStateAction<T>>, T, React.Dispatch<React.SetStateAction<T>>];
//# sourceMappingURL=useDebounced.d.ts.map