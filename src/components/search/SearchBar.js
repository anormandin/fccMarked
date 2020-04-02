import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const renderResult = ({description, id}) => <div key={id}>{description}</div>

renderResult.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default class SearchBar extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    fetch(`https://api.github.com/users/${value}/repos`)
        .then(res => res.json())
        .then(data => {
           if (data.message) {
            this.setState({
                isLoading: false,
                results: null
            });
           } else {
                const repos = data.map(d => ({description: d.description, url: d.url, id: d.id, title:d.url}))
                this.setState({
                    isLoading: false,
                    results: repos
                });
           }
            
        });

    

//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.setState(initialState)

//       const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//       const isMatch = (result) => re.test(result.title)

//       this.setState({
//         isLoading: false,
//         results: _.filter(source, isMatch),
//       })
//     }, 300)
   }

    

   

  render() {
    const { isLoading, value, results } = this.state

    return (
        <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
            resultRenderer= {this.renderResult}
            placeholder = 'Github Username'
      />
    )
  }
}
