import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../person/[meter_serialNum].module.css'
import Sheet from '../../components/Sheet'
import Math from 'mathjs'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}
<>
<Sheet />
</>
export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.meter_serialNum && `/api/people/${query.meter_serialNum}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>meter_serialNum</th>
          <th className={styles.th}>Your Reading</th>
          <th className={styles.th}>(SUBTRACT) -</th>
          <th className={styles.th}>oct07_20</th>
          <th className={styles.th}>=</th>
          <th className={styles.th}>Current Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.trbg}>
          <td className={styles.td}>{data.meter_serialNum}</td>
          <td className={styles.td}><input type="number" label="your reading" name="uInput"></input></td>
          <td id="tdmin" className={styles.td}>-</td>
          <td className={styles.td}>{data.oct07_20}</td>
          <td className={styles.td}>=</td>
          <td className={styles.td}>Current Usage</td>
        </tr>
      </tbody>
    </table>
  )
}