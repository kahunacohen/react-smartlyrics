import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

const Show = () => {
  let { id } = useParams();
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsFetchData(`http://localhost:3000/songs/${id}`));
  }, [dispatch, id]);
  if (items.body) {
    console.log(parseChordProToHtml(items.body));
  }
  return (
    <div>
      <Helmet>
        <title>{items.title}</title>
      </Helmet>
      {items.body && (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: parseChordProToHtml(items.body)
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default Show;