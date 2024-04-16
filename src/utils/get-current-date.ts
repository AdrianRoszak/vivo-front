export function getCurrentDate() {
  const currentDate = new Date().toISOString().split("T")[0]
  return currentDate
}
