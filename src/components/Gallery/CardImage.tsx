import { Card, CardBody } from '@chakra-ui/react'
import Image from 'next/image'

interface props {
  id: number
}

export default function CardImage({ id }: props) {
  return (
    <Card>
      <CardBody>
        <Image
          src={`/img/${id}.jpg`}
          alt={`${id}.jpg`}
          width={0}
          height={0}
          sizes={'100vw'}
          style={{ width: '100%', height: 'auto' }}
        />
      </CardBody>
    </Card>
  )
}
