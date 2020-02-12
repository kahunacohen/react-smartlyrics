import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

import "./edit.css";

const Detail = () => {
  let { id } = useParams();
  const items = useSelector((state: any) => {
    console.log(state);
    return state.items;
  });
  const itemsIsLoading = useSelector((state: any) => state.itemsIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData(`http://localhost:3000/songs/${id}`));
  }, [dispatch, id, itemsIsLoading]);
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
          <div
            dangerouslySetInnerHTML={{
              __html: parseChordProToHtml(items.body)
            }}
          ></div>
        </div>
      )}
      {itemsIsLoading && <div>Loading data...</div>}
    </div>
  );
};
export default Detail;
