import React from 'react'
import logo from './assets/logo.svg'
import './App.css'
import {Button, Form} from 'react-bulma-components'
import axios from 'axios'
import {API_KEY, City} from './types'

//TODO: usar react-hook-form

export const Dashboard: React.FC = () => {
    const [city, setCity] = React.useState<string>('')
    const [search, setSearch] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (search) {
            axios
                .get<City[]>(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`,
                )
                .then(r => {
                    console.log('response', r)
                    const cityFil = r.data.find(c => c.country === 'ES')
                    console.log('cityFil', cityFil)
                    if (cityFil) {
                        //Si hay redirigir con el router a otra pantalla donde se muestre la info de la ciudad buscada
                    }
                })
                .catch(err => {
                    console.log('Ha ocurrido un error', err)
                })
        }
    }, [search, city])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Form.Field>
                    <Form.Label>Introduzca una ciudad</Form.Label>
                    <Form.Control>
                        <Form.Input
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Ciudad"
                        />
                    </Form.Control>
                </Form.Field>
                <Button.Group>
                    <Button
                        rounded
                        color="primary"
                        onClick={() => setSearch(true)}>
                        Buscar
                    </Button>
                </Button.Group>
            </header>
        </div>
    )
}
