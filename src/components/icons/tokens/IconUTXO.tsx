import { SVGProps } from 'react'

export function IconUTXO (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={32} height={32} viewBox='0 0 32 32' {...props}>
      <circle cx={16} cy={16} r={16} fill='rgba(255, 0, 175, 0.2)' />
      <path
        fill='#FF00AF'
        d='M18.217 23.454V8.546c3.21.958 5.555 3.937 5.555 7.454s-2.346 6.496-5.555 7.454M15.994 6v8.428l-1.269-1.27-.162-3.167 1.324-3.985a9.952 9.952 0 00-2.454.338l-.64 1.926-1.816-.91a10.03 10.03 0 00-1.974 1.497l3.363 1.685.098 1.928-1.927-.099L8.85 9.01a10.035 10.035 0 00-1.497 1.973l.911 1.816-1.927.64A9.978 9.978 0 006 15.892l3.986-1.324 3.168.162 1.27 1.27-1.27 1.27-3.168.162L6 16.108c.009.849.13 1.669.338 2.454l1.927.64-.911 1.816c.418.719.92 1.383 1.497 1.973l1.686-3.362 1.927-.099-.098 1.928-3.363 1.685a10.04 10.04 0 001.974 1.498l1.815-.911.64 1.926a9.94 9.94 0 002.455.338l-1.324-3.985.162-3.168 1.27-1.27V26c5.522 0 10-4.477 10-10s-4.478-10-10-10'
      />
    </svg>
  )
}