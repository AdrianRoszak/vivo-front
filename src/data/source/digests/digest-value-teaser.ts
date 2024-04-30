//@ts-ignore
export function digestValueTeaser(source): ValueTeaser {
  return {
    title: source.title,
    icon: source.icon ? source.icon : "",
  }
}
