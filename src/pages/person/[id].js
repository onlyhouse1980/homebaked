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
    () => query.id && `/api/people/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Meter Serial #</th>
          <th>Oct 07 Reading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.Oct0720}</td>
        </tr>
      </tbody>
    </table>
  )
}
