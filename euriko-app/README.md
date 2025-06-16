# Euriko App

Aplicativo desenvolvido com Expo e React Native.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (para testar no dispositivo móvel)

## Instalação

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd euriko-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Instale o Expo CLI globalmente (caso ainda não tenha):
   ```bash
   npm install -g expo-cli
   ```

## Executando o Projeto

1. Inicie o projeto:
   ```bash
   npx expo start
   ```

2. Após iniciar, você terá várias opções para executar o aplicativo:
   - Pressione `a` para abrir no emulador Android
   - Pressione `i` para abrir no simulador iOS
   - Escaneie o QR Code com o aplicativo Expo Go (Android) ou câmera (iOS)

## Estrutura do Projeto

```
euriko-app/
├── app/                 # Diretório principal do aplicativo
├── assets/             # Recursos estáticos (imagens, fontes, etc.)
├── components/         # Componentes reutilizáveis
├── constants/          # Constantes e configurações
└── ...
```

## Desenvolvimento

- O projeto utiliza [Expo Router](https://docs.expo.dev/router/introduction/) para navegação baseada em arquivos
- Os componentes principais estão localizados no diretório `app/`
- Estilos e temas podem ser encontrados em `constants/`

## Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Inicia o aplicativo no emulador Android
- `npm run ios` - Inicia o aplicativo no simulador iOS
- `npm run web` - Inicia o aplicativo na versão web

## Troubleshooting

Se você encontrar problemas durante a instalação ou execução:

1. Limpe o cache do npm:
   ```bash
   npm cache clean --force
   ```

2. Remova a pasta node_modules e reinstale as dependências:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. Certifique-se de que todas as dependências estão atualizadas:
   ```bash
   npx expo install
   ```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença [MIT](LICENSE).

## Contato

[Seu Nome] - [seu.email@exemplo.com]

Link do Projeto: [https://github.com/seu-usuario/euriko-app](https://github.com/seu-usuario/euriko-app)
