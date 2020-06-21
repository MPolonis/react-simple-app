class Album extends React.Component {
    
    render() {
        return (
            <div>
                <img src={this.props.item.cdCover}></img>
                <h1>Name: {this.props.item.cdName}</h1>
                <h2>Year: {this.props.item.year}</h2>
                <h2>Label: {this.props.item.label}</h2>
                <h2>User rating: {this.props.item.rating}</h2>
            </div>
        )
    }
} 

