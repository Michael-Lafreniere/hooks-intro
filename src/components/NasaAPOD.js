import React, { Component } from 'react';

class NasaAPOD extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  async fetchData() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.props.apiKey}`
    );
    const data = await response.json();
    this.setState({
      title: data.title,
      hdurl: data.hdurl,
      explanation: data.explanation,
      copyright: data.copyright,
      date: data.date,
      loaded: true
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loaded) {
      return (
        <>
          <main>
            <h2 className="nasa-title">{this.state.title} -- Without Hooks</h2>
            <img
              className="nasa-image"
              src={this.state.hdurl}
              alt={this.state.title}
            />
            <div className="nasa-explanation">{this.state.explanation}</div>
          </main>
          <footer>
            <h5 className="nasa-info">
              {this.state.copyright} | {this.state.date}
            </h5>
          </footer>
        </>
      );
    } else {
      return (
        <>
          <h1 className="loading">Loading...</h1>
        </>
      );
    }
  }
}

export default NasaAPOD;
