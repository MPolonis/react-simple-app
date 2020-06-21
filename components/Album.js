class Album extends React.Component {
    
    render() {
        return (
            <div className={'albumBox'}>
                <img className={'imgStyle'} src={this.props.item.cdCover} alt={'album cover'}></img>
                <div className={'label'}>
                    <h2 className={'cdName'}>Album: {this.props.item.cdName}</h2>
                    <p>Year: {this.props.item.year}</p>
                    <p>Label: {this.props.item.label}</p>
                    <p>User rating: {this.props.item.rating}</p>
                </div>
            </div>
        )
    }
} 

