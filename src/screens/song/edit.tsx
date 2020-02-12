import { Helmet } from "react-helmet";
import React, {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

import "./edit.css";




const Detail = () => {
  let { id } = useParams();
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData(`http://localhost:3000/songs/${id}`));
  }, [dispatch, id]);
  if (items.body)  {
  console.log(parseChordProToHtml(items.body))
  }
  return (
    <div>
      <Helmet>
        <title>{items.title}</title>
      </Helmet>
      <h2>{items.title}</h2>
      <h3>chordpro</h3>
      {items.body && (
        <div>
          <pre>{items.body.join("\n")}</pre>
          <h3>Parsed</h3>
          <div dangerouslySetInnerHTML={{__html: parseChordProToHtml(items.body)}}>
          </div>
          {/* <pre>
            {parseChordProToHtml(items.body)}
          </pre> */}
        </div>
      )}
    </div>
  );
};
export default Detail;
