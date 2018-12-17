# react-typescript-docker-template

An example of using React with TypeScript, bundled using Docker / Docker-Compose.

[Based on my previous example](https://github.com/ashleydavis/react-typescript-template).

[With some input from my Node.js microservices example](https://github.com/ashleydavis/nodejs-microservices-example).

## Running with Docker-Compose in the Vagrant dev VM

Ensure you have VirtualBox and Vagrant installed.

Bring the VM up:

    vagrant up

This starts an Ubuntu development VM, installs Docker and Docker-Compose.

After the dev VM has started, you can shell in and boot the system using Docker-Compose:

    vagrant ssh

Change to the shared directory:

    cd /vagrant

Run Docker Compose:

    sudo docker-compose up --build

You can also add a -d parameter to start Docker-Compose in dettached mode.

Connect to the webpack dev server: http://localhost:4010

Connect to the prod web server and API: http://localhost:4000

To list running containers:

    sudo docker-compose ps

To kill the containers:

    sudo docker-compose kill

