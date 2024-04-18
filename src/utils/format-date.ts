type DateTimeFormatOptions = {
  year: "numeric" | "2-digit"
  month: "numeric" | "2-digit" | "long" | "short" | "narrow"
  day: "numeric" | "2-digit"
}

export function formatDateString(dateString: string) {
  const date = new Date(dateString)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("pl-PL", options as DateTimeFormatOptions)
}
