import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="/#">
          <img
            src="https://avatars1.githubusercontent.com/u/2079263?s=460&u=8b81f496c0242cd7e8de7a7a0847277449288d42&v=4"
            alt="Jamessom Queiroz"
          />
          <div>
            <strong>jamessom/rawrails</strong>
            <p>Using docker and docker-compose to run rails app </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;