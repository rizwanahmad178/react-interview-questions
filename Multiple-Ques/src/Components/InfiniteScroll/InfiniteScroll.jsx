import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function InfiniteScrollApp() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 2000);
    } else {
      setHasMore(false);
    }
  };
  const style = {
    border: "1px solid red",
    margin: 12,
    padding: 10,
    textAlign:"center"
  };
  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p style={{textAlign:"center"}}>Loading...</p>}
    >
      <h1>This is Infinte Scroll App</h1>
      {dataSource.map((item, index) => {
        return (
          <div style={style}>This is a DIV with the ID of : {index + 1}</div>
        );
      })}
    </InfiniteScroll>
  );
}

export default InfiniteScrollApp;
