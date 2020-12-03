import { useRouter } from 'next/router'
import useSWR from 'swr'
import UsageStepper from '../../components/UsageStepper'

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
          <th>Reading on Oct 7, 2020</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.Oct0720}</td>
        </tr>
      </tbody>
      <UsageStepper />
    </table>
  )
}
