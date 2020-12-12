import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/person/[meter_serialNum]" as={`/person/${person.meter_serialNum}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  )
}
