import React from 'react';
import { Card, Typography, CardContent, List } from '@material-ui/core';
import CandidateItem from './CandidateItem';

const CandidatesList = (props) => {
    return <Card>
        <CardContent>
            <Typography  variant="h5" color="textSecondary" gutterBottom>
                Lista de candidatos
            </Typography>
            <List>
                {props.candidates.map((candidate) => {
                    return <CandidateItem 
                        candidate={candidate} 
                        decideCandidate={props.decideCandidate}
                    />
                })}
            </List>
        </CardContent>
    </Card>
    
}

export default CandidatesList;