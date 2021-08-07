import { useState, useEffect, useRef } from "./deps.js";

export default function useTextFolding(hooks){
  const useInstance = (instance) => {
    const { text, collapsed: isCollapsed = true, isFetching } = instance;
    const [collapsed, setCollapsed] = useState(isCollapsed);
    const [needToGrow, setNeedToGrow] = useState(false);
    const textWrapperRef = useRef();

    useEffect(() => {
      const { current } = textWrapperRef;
      const handleResize = () => {
        if (current && (current.clientWidth < current.scrollWidth || current.clientHeight < current.scrollHeight)) {
          setNeedToGrow(true);
        } else if (collapsed) {
          setNeedToGrow(false);
        }
      };

      if (current) {
        window.addEventListener('resize', handleResize);
        handleResize();
      }
      return () => {
        if (current) {
          window.removeEventListener('resize', handleResize);
        }
      };
    }, [textWrapperRef, text, isFetching, collapsed]);

    Object.assign(instance, {
      collapsed, setCollapsed, text, needToGrow, textWrapperRef,
    });
  };
  hooks.useInstance.push(useInstance);
};
