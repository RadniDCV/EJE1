import React,{useState} from 'react'
import {Form, Button} from "react-bootstrap"


  const Home=()=>{
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handlePhoneNumberChange = (event) =>{
        const inputValue = event.target.value

        const phoneRegex =/^\+(?:[0-9] ?){6,14}[0-9]$/
        setIsValid(phoneRegex.test(inputValue))
        setPhoneNumber(inputValue)
    }

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(isValid){
        console.log("NUmero de telefono valido", phoneNumber)
    }else{
        console.log('Numero invalido')
    }
  }
    return (
    <div>
          <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Número de Teléfono</Form.Label>
        <Form.Control
          type="text"
          placeholder="Escribe tu número de teléfono"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {!isValid && (
          <Form.Text className="text-muted">
            Por favor, introduce un número de teléfono válido en formato internacional (por ejemplo, +1234567890).
          </Form.Text>
        )}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isValid}>
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Home