import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import { useState, useEffect } from 'react';

export default function Home() {
  // const [imgURL, setImgURL] = useState(false);

  const [postData, setPostData] = useState(false);

  // useEffect(() => {
  //   fetch('https://source.unsplash.com/random/600x800').then((res) =>
  //     setImgURL(res.url)
  //   );
  // }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);

  return (
    <>
      <h1>React API Call</h1>
      {/* {imgURL && <img src={imgURL} />} */}
      {postData && <h2>{postData.title}</h2>}
    </>
  );
}
