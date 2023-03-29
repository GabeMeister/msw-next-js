import { useEffect, useState } from "react";

export default function GabeDashboard() {
  const [data, setData] = useState(null);

  function onBtnClick() {
    fetch("/api/gabe")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     fetch("/api/gabe")
  //       .then((res) => res.json())
  //       .then((d) => {
  //         setData(d);
  //       });
  //   }

  //   fetchData();
  // }, []);

  return (
    <div>
      <div>Yessir</div>
      <button data-testid="gabe-btn" onClick={onBtnClick}>
        Click Me
      </button>
      {!!data ? (
        <div data-testid="gabe-text">{JSON.stringify(data, null, 2)}</div>
      ) : null}
    </div>
  );
}
