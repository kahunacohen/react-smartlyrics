import ChordSheetJS from "chordsheetjs";

export function parseChordProToHtml(chordPro: Array<string>) {
  console.log(new ChordSheetJS.ChordProParser().parse(chordPro.join("\n")));
  return new ChordSheetJS.HtmlTableFormatter().format(
    new ChordSheetJS.ChordProParser().parse(chordPro.join("\n"))
  );
}
