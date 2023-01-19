// Props

class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a {this.props.model}!</h2>;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car model="Mustang" />);
