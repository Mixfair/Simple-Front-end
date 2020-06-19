import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){

        if (dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        } else {
            return(
                <div></div>
            )
        }
    }
    
    function RenderComments({cmts}){
         const comments = cmts.map((cmt) =>{
         const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
          
            var date = new Date(cmt.date)
            
            return(
                
                <li key={cmt.id}>
                    <p>{cmt.comment}</p>
                    <p> -- {cmt.author}, {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()} </p>
                </li>
                

            )
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>    
        )
        
    }

    const DishDetail = (props) => {
        if (props.dish == null) return <div></div>
        return(
            
            <div className="container">
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments cmts={props.dish.comments} />
                </div>
            </div>
                
        )
    }


export default DishDetail;