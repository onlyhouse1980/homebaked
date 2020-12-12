import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.meter_serialNum && `/api/people/${query.meter_serialNum}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>meter_serialNum</th>
          <th>Jun 10th</th>
          <th>August 10th</th>
          <th>October 7th</th>
          <th>Current</th>
          <th>Used</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{data.june10_2020}</td>
          <td>{data.aug10_2020}</td>
          <td>{data.oct07_2020}</td>
          <td><input></input></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
