import { useRef } from './deps.js'

export default function useConstant(fn) {
  const ref = useRef();
  if (!ref.current) {
    ref.current = { v: fn() };
  }

  return ref.current.v;
}