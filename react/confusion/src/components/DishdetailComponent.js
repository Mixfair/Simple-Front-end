import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem  } from 'reactstrap';

class Dishdetail extends Component{
    renderDish(dish){
        console.log(dish)
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        } else {
            return(
                <div></div>
            )
        }
    }
    
    readComments(dish){
         const comments = dish.comments.map((cmt) =>{
         const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
          
            var date = new Date(cmt.date)
            
            return(
                
                <li as="ul" key={cmt.id}>
                    <p>{cmt.comment}</p>
                    <p> -- {cmt.author}, {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()} </p>
                </li>
                

            )
        });

        return(
            <ul className="list-unstyled">
                {comments}
            </ul>
        )
        
    }

    render(){
        if (this.props.dish ==null) return <div></div>

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        
                        <h4>Comments</h4>
                        {this.readComments(this.props.dish)}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Dishdetail;