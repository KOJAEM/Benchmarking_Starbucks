type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  observerTarget: React.MutableRefObject<null>;
  replay?: boolean;
  threshold?: number;
};
export function observe({ setShow, observerTarget, replay, ...props }: Props) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
      } else {
        replay && setShow(false); // replay ? setShow(false) : "";
      }
    }, props.threshold ? {threshold : props.threshold} : {threshold: 0.5}
  );

  if (observerTarget.current) {
    observer.observe(observerTarget.current);
  }
  return () => {
    observer.disconnect();
  };
}