export function commentWordEnd(num: string ) {
  if (/[2-9]?[2-4]$/.test(num)) return 'комментария'

  if (/[^1]1$/.test(num) || num === '1') return 'комментарий'

  return 'комментариев'
}

export function hoursWordEnd(num: string) {
  if (num === '0') return 'только что';

  if (/[2-9]?[2-4]$/.test(num)) return `${num} часа назад`;

  if (/[^1]1$/.test(num) || num === '1') return `${num} час назад`;

  return `${num} часов назад`
}
