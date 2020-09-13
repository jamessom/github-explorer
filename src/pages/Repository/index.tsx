import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4" alt="Jamessom Queiroz" />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2020</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>202</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>20</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/`}>
          <div>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>adipisicing elit. Quia exercitationem asperiores officiis</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;