import React, { Component } from 'react'

export default class API extends Component {
    constructor(){
        super();
        this.state = {
            cigar_api: ''
        }
    }

    componentDidMount = async () => {
        const res = await fetch('https://sysrock.pythonanywhere.com/api/cigar_smdb')
        const data = await res.json()
        const string_data = JSON.stringify(data)
        console.log(string_data)
        this.setState({cigar_api: string_data})
    }

    render() {
        return (
        <div>
            {this.state.cigar_api}
        </div>
        )
    }
}
