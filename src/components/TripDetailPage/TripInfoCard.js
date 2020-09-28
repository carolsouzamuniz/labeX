import React from 'react';
import { Card, Typography, CardContent} from '@material-ui/core';
import TripInfoItem from './TripInfoItem';

const TripInfoCard = (props) => {
    const {name, planet, description, date, durationInDays} = props.info
    return <div>
        <Card>
            <CardContent>
                <Typography  variant="h5" gutterBottom>
                    Informações da viagem
                </Typography>
                <TripInfoItem infoName={'Nome'} info={name}/>
                <TripInfoItem infoName={'Planeta'} info={planet}/>
                <TripInfoItem infoName={'Data'} info={date}/>
                <TripInfoItem infoName={"Descrição"} info={description}/>
                <TripInfoItem infoName={'Duração em dias'} info={durationInDays}/>

            </CardContent>
        </Card>
    </div>
}

export default TripInfoCard;