import ChordSheetJS from "chordsheetjs";

export function parseChordProToHtml(chordPro: string) {
  console.log('parsed')
  const song = new ChordSheetJS.ChordProParser().parse(chordPro);
  console.log(song);
  return new ChordSheetJS.HtmlTableFormatter().format(
    new ChordSheetJS.ChordProParser().parse(chordPro)
  );
}
