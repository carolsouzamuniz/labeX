import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { ListItem, IconButton } from '@material-ui/core';

const CandidateItem = (props) => {
    const approveCandidate = () => {
        console.log("aprovou")
        props.decideCandidate(true, props.candidate.id);
    }

    const rejectCandidate = () => {
        console.log("rejeitou")
        props.decideCandidate(false, props.candidate.id);
    }

    return <ListItem>
        <ListItemText
            primary={props.candidate.name}
        />
        <ListItemSecondaryAction>
            <IconButton onClick={approveCandidate}>
                <ThumbUpIcon />
            </IconButton>
            <IconButton onClick={rejectCandidate}>
                <ThumbDownIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export default CandidateItem;

