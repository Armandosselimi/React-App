import React, { useEffect, useRef, useState } from "react";
import "./scroll.css";
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrolledPercentage, setSetscrolledPercentage] = useState(0);
  const progressRef = useRef(null);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data?.products?.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const handleScrollPercentage = () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    setSetscrolledPercentage(scrolled);
    console.log("fired");

    //     Alternative with Ref. I can remove the scrolled state this way
    //     if(progressRef.current){
    //       progressRef.current.style.width = `${scrolled}%`
    //     }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, [scrolledPercentage]);

  if (loading) return <p>Loading...</p>;
  if (errorMsg !== "") return <p>There was an error geting data. {errorMsg}</p>;

  return (
    <div style={{ width: "100%" }}>
      <div className='scroll-indicator'>
        <div
          ref={progressRef}
          className='progress'
          style={{ width: `${scrolledPercentage}%` }}
        ></div>
      </div>
      <h1>Custom Scroll Indicator</h1>
      <div className='data-container'>
        {data?.length > 0
          ? data.map((dataItem, i) => (
              <p
                key={i}
                className='data-item'
              >
                {dataItem.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
