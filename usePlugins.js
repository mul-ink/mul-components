import { useRef } from "./deps.js";

export default function usePlugins(props, ...customPlugins){
  const instanceRef = useRef({});
  const useGetLatest = (obj) => {
    const ref = useRef();
    ref.current = obj;
    return React.useCallback(() => ref.current, []);
  };
  const getInstance = useGetLatest(instanceRef.current);
  const defaultPlugins = [];
  const plugins = [...defaultPlugins, ...customPlugins];
  Object.assign(getInstance(), {
    ...props,
    plugins,
    hooks: {
      useInstance: [],
    },
  });
  plugins.forEach((plugin) => {
    plugin(getInstance().hooks);
  });
  const getHooks = useGetLatest(getInstance().hooks);
  getInstance().getHooks = getHooks;
  delete getInstance().hooks;
  getHooks().useInstance.forEach((hook) => {
    hook(getInstance());
  });
  return getInstance();
};
