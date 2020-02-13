import ChordSheetJS from "chordsheetjs";

export function parseChordProToHtml(chordPro: Array<string>) {
  return new ChordSheetJS.HtmlTableFormatter().format(
    new ChordSheetJS.ChordProParser().parse(chordPro.join("\n"))
  );
}
