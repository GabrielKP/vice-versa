import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';

const Room = () => {
  return (
    <>
      <Card className='w-100 mt-3' style={{ maxWidth: '95vw' }}>
        <Card.Header>
          <Image src="/Room/profile3.png" rounded fluid style={{ width: "30px", marginRight: "1em" }}/>
          Frau Müller
        </Card.Header>
        <Card.Body>
          <Card.Title>Politikwissenschaften 2021 - Klasse 7B</Card.Title>
          <Card.Text>
            In diesem Raum werden aktuelle Themen betrachtet und Diskussionen geführt.
          </Card.Text>
          <Button className="float-right" variant="primary">eintreten</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">joined 2 days ago</Card.Footer> */}
      </Card>
    </>
  )
}

export default Room
