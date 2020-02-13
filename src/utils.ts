import ChordSheetJS from "chordsheetjs";

export function parseChordProToHtml(chordPro: string) {
  return new ChordSheetJS.HtmlTableFormatter().format(
    new ChordSheetJS.ChordProParser().parse(chordPro)
  );
}
