

class Albums extends React.Component {
    render() {
        var albums = this.props.items.map((album) => {
            return (
                <Album item={album} key={album.id} />
            )
        })
        return (
            <ul>
                {albums}
            </ul>
        )
    }
}
