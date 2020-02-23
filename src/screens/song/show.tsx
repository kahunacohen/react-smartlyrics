import { Helmet } from "react-helmet";
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsFetchData } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

const Show = () => {
  let { id } = useParams();
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      itemsFetchData(`${process.env.REACT_APP_API_BASE_URL}/songs/${id}`)
    );
  }, [dispatch, id]);
  if (items.body) {
    console.log(parseChordProToHtml(items.body));
  }
  return (
    <div className="col-12">
      <Helmet>
        <title>{items.title}</title>
      </Helmet>

      {items.body && (
        <Fragment>
          <p>
            <a href={`/songs/${id}/edit`}>Edit</a>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: parseChordProToHtml(items.body.join("\n"))
            }}
          ></div>
        </Fragment>
      )}
    </div>
  );
};
export default Show;
