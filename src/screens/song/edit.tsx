import { Helmet } from "react-helmet";
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsFetchData, chordProChangedTxt } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

import "./edit.css";

const Detail = () => {
  // State vars.
  const { id } = useParams();
  const items = useSelector((state: any) => {
    return state.items;
  });
  const chordProChangedTxtState: string | null = useSelector(
    (state: any) => state.chordProChangedTxt
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      itemsFetchData(`${process.env.REACT_APP_API_BASE_URL}/songs/${id}`)
    );
  }, [dispatch, id]);

  const renderFromChordPro = (
    chordProOnLoad: string,
    newChordPro: string | null
  ) => {
    const chordProToRender = newChordPro || chordProOnLoad;
    return parseChordProToHtml(chordProToRender);
  };
  return (
    <Fragment>
      <Helmet>
        <title>{`Edit ${items.title}`}</title>
      </Helmet>
      {items.body && (
        <Fragment>
          <div className="col-6">
            <textarea
              className="form-control"
              rows={items.body.length}
              name="chordpro"
              id="chordpro"
              defaultValue={items.body.join("\n")}
              onChange={(evt: any) =>
                dispatch(chordProChangedTxt(evt.target.value))
              }
            ></textarea>
          </div>
          <div className="col-6">
            <div
              dangerouslySetInnerHTML={{
                __html: renderFromChordPro(
                  items.body.join("\n"),
                  chordProChangedTxtState
                )
              }}
            ></div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Detail;
