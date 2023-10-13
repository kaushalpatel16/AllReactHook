import { useDeferredValue } from "react";

const List = ({ input }) => {
  const deferredInput = useDeferredValue(input);

  const list = [];
  for (let i = 0; i < 2000; i++) {
    list.push(<div key={i}>{deferredInput}</div>);
  }

  return list;
};

export default List;
 