import React from 'react';

export class ExtendedCard extends React.Component {
    render(){
        return <div className="extendedcard">
                 <div className="close-button" onClick = {this.props.handleClose}><img src="./img/close_button.png" /></div>
                 <div className="info">
                   <div className="extendedname">{this.props.person.fullName}</div>
                   {
                     this.props.person.university &&        
                     <React.Fragment><div className="schoolLabel">Учится</div><div className="school">{this.props.person.university}</div> </React.Fragment>  
                   }
                 </div>
                 <img src={this.props.person.photoUrl} className="photo" />
               </div>
    }
}