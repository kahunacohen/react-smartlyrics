import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import {
  itemsFetchData,
  chordProChanged,
  chordProChangedTxt
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { parseChordProToHtml } from "../../utils";

import "./edit.css";

const Detail = () => {
  // State vars.
  let { id } = useParams();
  const items = useSelector((state: any) => {
    return state.items;
  });
  const chordProChangedTxtState: string | null = useSelector(
    (state: any) => state.chordProChangedTxt
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsFetchData(`http://localhost:3000/songs/${id}`));
  }, [dispatch, id]);

  const handleChordProChange = (chordPro: string) => {
    dispatch(chordProChanged(true));
    dispatch(chordProChangedTxt(chordPro));
    setTimeout(() => dispatch(chordProChanged(false)), 500);
  };

  const renderFromChordPro = (
    chordProOnLoad: Array<string>,
    newChordPro: string | null
  ) => {
    const chordProToRender = newChordPro
      ? newChordPro.split("\n")
      : chordProOnLoad;
    return parseChordProToHtml(chordProToRender);
  };
  return (
    <div>
      <Helmet>
        <title>{items.title}</title>
      </Helmet>
      {items.body && (
        <div>
          <FormGroup>
            <Label for="chorpro">Chordpro</Label>
            <Input
              rows={items.body.length}
              size="500"
              type="textarea"
              name="chordpro"
              id="chorpro"
              defaultValue={items.body.join("\n")}
              onChange={(evt: any) => handleChordProChange(evt.target.value)}
            />
          </FormGroup>
          <div
            dangerouslySetInnerHTML={{
              __html: renderFromChordPro(items.body, chordProChangedTxtState)
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default Detail;
