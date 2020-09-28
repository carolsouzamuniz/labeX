import React from 'react';
import PageTitle from '../PageTitle';
import { FormContainer } from '../FormContainer'
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';
import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { useTripsList } from '../hooks/useTripsList';

const ApplicationPage = () => {
    const trips = useTripsList();
    
    const [form, onChangeInput] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: null
    })

    const onSubmitApplication = (event) => {
        event.preventDefault();
        
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolinamuniz/trips/${form.trip.id}/apply`, body)
    }

    return <div>
        <PageTitle title={'Aplicar para viagem'}/>

        <FormContainer onSubmit={onSubmitApplication}>
            <TextField 
                label={'Nome do candidato'}
                onChange={onChangeInput}
                name={'name'}
                value={form['name']}
            />
            <TextField 
                label={'Idade'} 
                type={'number'}
                onChange={onChangeInput}
                name={'age'}
                value={form['age']}

            />
            <TextField 
                label={'Texto de aplicação'} 
                helperText="Explique por que devemos escolher você"
                onChange={onChangeInput}
                name={'applicationText'}
                value={form['applicationText']}

            />
            <TextField 
                label={'Profissão'}
                onChange={onChangeInput}
                name={'profession'}
                value={form['profession']}
            />
            <FormControl>
                <InputLabel id="select-paises">Paises</InputLabel>
                <Select 
                    labelId='select-paises'
                    onChange={onChangeInput}
                    name={'country'}
                    value={form['country']}
                >
                    <MenuItem value={'brasil'}>Brasil</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="select-viagens">Viagens</InputLabel>
                <Select 
                    labelId="select-viagens"
                    onChange={onChangeInput}
                    name={'trip'}
                    value={form['trip']}
                    >
                    {trips.map((trip) => {
                        return <MenuItem value={trip}>{trip.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button variant={'contained'} color={'primary'} type={'submit'}>Inscrever-se</Button>
        </FormContainer>
    </div>
}

export default ApplicationPage;