export function serveFontSize(fontSize: string) {
  switch (fontSize) {
    case "long-primer":
      return "text-long-primer"
    case "canon":
      return "text-canon"
    case "double-pica":
      return "text-double-pica"
    case "great-primer":
      return "text-great-primer"
    case "body-copy":
      return "text-body-copy"
    case "pica":
      return "text-pica"
    case "brevier":
      return "text-brevier"
    case "minion":
      return "text-minion"
  }
}
