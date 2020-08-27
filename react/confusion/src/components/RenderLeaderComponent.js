
import React from 'react';
import { Media } from 'reactstrap';

const RenderLeader = (props) => {
    
    if (props.lead == null) return <div></div>

    return(
        <Media key={props.lead.id}>
            <Media left href="#">
                <Media className="mr-3" object src={props.lead.image}/>
            </Media>
            <Media body>
                <Media heading>
                    {props.lead.name}
                </Media>
                <p>{props.lead.designation}</p>
                <p>{props.lead.description}</p>
            </Media>    
        </Media>
    );

}

export default RenderLeader;