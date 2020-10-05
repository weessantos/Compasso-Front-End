import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Profile from "./Profile";
import Repo from "./Repo";
import Starred from "./Starred";

class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "Iv1.bdbea55c116f7d27",
        client_secret: "3946ce030300def37ac85aa6117b61563b499063",
      },
      visibleRepos: "none",
      visibleStarred: "none",
      user: [],
      repos: [],
      starreds: [],
    };
  }

  //Consome os dados da API com Axios
  getUser = (e) => {
      const user = e.target.value;

      const {url, client_id, client_secret} = this.state.github;
        axios
          .get(
            `${url}/${user}?client_id=${client_id}&cliente_secret=${client_secret}`
          )
          .then(({ data }) => this.setState({ user: data }));
        axios
            .get(
              `${url}/${user}/repos?client_id=${client_id}&cliente_secret=${client_secret}`
            )
            .then(({ data }) => this.setState({ repos: data }));   
        axios
          .get(
            `${url}/${user}/starred?client_id=${client_id}&cliente_secret=${client_secret}`
          )
          .then(({ data }) => this.setState({ starreds: data }));     
  };

  //Mostra os repositórios do usuário
  toggleRepos = () => {
    if((this.state.visibleRepos === "none")&&(this.state.visibleStarred === "none")){
      return(
        this.setState({visibleRepos: "block"})
      )
    }
    else if((this.state.visibleRepos === "none")&&(this.state.visibleStarred === "block")){
      return(
        this.setState({visibleStarred: "none"}),
        this.setState({visibleRepos: "block"})
      )
    }
    return(
      this.setState({visibleRepos: "none"})
    )
  }

  //Mostra os repositórios favoritados pelo usuário
  toggleStarred = () => {
    if((this.state.visibleStarred === "none")&&(this.state.visibleRepos === "none")){
      return(
        this.setState({visibleStarred: "block"})
      )
    }
    else if((this.state.visibleStarred === "none")&&(this.state.visibleRepos === "block")){
      return(
        this.setState({visibleRepos: "none"}),
        this.setState({visibleStarred: "block"})
      )
    }
    return(
      this.setState({visibleStarred: "none"})
    )
  }

  //Renderiza o perfil após a digitação
  renderProfile = () => {
    const { user, repos, starreds } = this.state;

    return (
          <div className="row">
            <div className="col-md-4">
            <Profile user = {user} />
            </div>
            <div className="col-md-8" style={{display: this.state.visibleRepos}}>
            {repos.map(repo => <Repo key={repo.name} repo={repo}/>)}
            </div>
            <div className="col-md-8" style={{display: this.state.visibleStarred}}>
            {starreds.map(starred => <Starred key={starred.login} starred={starred}/>)}
            </div>
            <button
                type="button"
                onClick={this.toggleRepos}
                className="btn btn-info btn-block">
                Repositórios
              </button>
              <button
                type="button"
                onClick={this.toggleStarred}
                className="btn btn-info btn-block mb-2">
                Repositórios favoritos
              </button>
          </div>
    )
  }
  
  //Renderiza a parte principal fora da API
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="card card-body mb-3">
            <h1>Pesquisar Usuários</h1>
            <p className="lead">
              Digite o nome desejado
            </p>
            <input 
              onChange={this.getUser}
              id="search" 
              type="text" 
              className="form-control" 
              required
            />
          </div> 
          { this.state.user.length !==0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}


export default App;
