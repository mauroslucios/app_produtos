##  CRUD de produtos e categorias

Cadastro de produtos onde serão expostas as categorias.

### Tecnologias

- nodejs
- express
- handlebars
- body-parser
- connect-flash
- express-session
- fontawesome
- bootboxjs
- google fonts
- mongodb(dockerizado)
- docker
- K3d
- Kubernetes
### Comandos
- k3d cluster create devopscloud
- k3d cluster create devopscloud --servers 3 --agents 3
- k3d cluster list
- k3d cluster delete <nome>
- kubetcl get nodes
- kubectl get pod
- kubectl get pod -o wide
- kubectl describe pods
- kubectl apply -f pods.yml
- kubectl port-forward pod/devopscloud 3000:3000
- k3d cluster create devopscloud --servers 3 --agents 3 -p "3000:30000@lodabalancer" -p "8080:30001@loadbalancer"
- docker container ls
- docker login
- docker push mauroslucios/node-web-app:1.0
### Imagens
![Screenshot from 2023-06-29 02-14-38](https://github.com/mauroslucios/app_produtos/assets/671694/f572a464-3600-4285-bf1b-d100bf28b985)
![Screenshot from 2023-06-29 21-18-08](https://github.com/mauroslucios/app_produtos/assets/671694/da9d2cee-212b-4154-998e-fb5d5ef9fe31)
![Screenshot from 2023-06-29 02-02-09](https://github.com/mauroslucios/app_produtos/assets/671694/e90a00ce-4cbb-4b1d-946a-cdfd0b6dd3f2)
![Screenshot from 2023-06-29 02-00-22](https://github.com/mauroslucios/app_produtos/assets/671694/e9b4e158-ad46-44a1-985c-503b1a33211c)
![Screenshot from 2023-06-29 02-00-07](https://github.com/mauroslucios/app_produtos/assets/671694/77d3b0b4-5855-4422-af55-5a96032a7625)
![Screenshot from 2023-06-29 02-01-56](https://github.com/mauroslucios/app_produtos/assets/671694/0743afa7-00c4-44a4-8327-fbcbbb82e43f)
![Screenshot from 2023-06-29 02-01-48](https://github.com/mauroslucios/app_produtos/assets/671694/edbea4b7-de0d-4cf1-b509-2fe91f28c545)
![Screenshot from 2023-06-29 02-01-40](https://github.com/mauroslucios/app_produtos/assets/671694/134fc82f-5aea-4b83-af8e-5e64667d12a1)
![Screenshot from 2023-06-29 02-01-10](https://github.com/mauroslucios/app_produtos/assets/671694/752add5a-e286-489f-9cea-c11d05a693d8)



#### Citação

“A conquista vem quando você cancela as desculpas e transforma adversidade em ação. Todo dia faça algo que te deixe mais perto dos seus objetivos".
