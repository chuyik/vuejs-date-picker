export function getFormatStr (type, {formatDate = 'YYYY-MM-DD', formatDatetime = 'YYYY-MM-DD HH:mm'}) {
  return type === 'datetime' ? formatDatetime : formatDate
}

export function dateFormat (value, format = 'YYYY-MM-DD') {
  if (!value) return ''
  return value.format(format)
}