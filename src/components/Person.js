import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.id}</a>
      </Link>
    </li>
  )
}
