import s from './tables.module.scss'
const data = [{ img: 'Image', name: 'Name', rate: 3 }]

export const Table = () => {
  return (
    <table className={s.tables}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th_header}>name</th>
          <th className={s.th_header}>name</th>
          <th className={s.th_header}>name</th>
          <th className={s.th_header}>name</th>
          <th className={s.th_header}>rate</th>
          <th className={s.th_header}>name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className={s.td_body}>{row.img}</td>
            <td className={s.td_body}>{row.name}</td>
            <td className={s.td_body}>{row.name}</td>
            <td className={s.td_body}>{row.name}</td>
            <td className={s.td_body}>{row.rate}</td>
            <td className={s.td_body}>del</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
