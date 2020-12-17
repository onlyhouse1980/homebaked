import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../person/[meter_serialNum].module.css'
import Sheet from '../../components/Sheet'

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
    <Sheet />
  )
 }
 