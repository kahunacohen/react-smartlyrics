import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormGroup, Input } from "reactstrap";
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
    <div className="container">
      <Helmet>
        <title>{`Edit ${items.title}`}</title>
      </Helmet>
      {items.body && (
        <div className="row">
          <div className="col-lg">
            <FormGroup>
              <Input
                rows={items.body.length}
                size="500"
                type="textarea"
                name="chordpro"
                id="chorpro"
                defaultValue={items.body.join("\n")}
                onChange={(evt: any) =>
                  dispatch(chordProChangedTxt(evt.target.value))
                }
              />
            </FormGroup>
          </div>
          <div className="col-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: renderFromChordPro(
                  items.body.join("\n"),
                  chordProChangedTxtState
                )
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
