# App

GymPass style app.

## Requisitos Funcionais

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autinticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in de um usuário;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## Regras de Negócio

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estivar perto (100m) da academia;
- [ ] O check-in só pode ser validadado até 20 munitos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## Requisitos Não-Funcionais

- [ ] A senha do usuário precisa estar criptografada;
- [ ] O dados da aplicação precisam estar persistido em um banco de dados PostgreSQL;
- [ ] Todas as listas de dados pecisam estar paginaas com 20 itens por página;
- [ ] O usuáirio deve ser identificado por um JWT (JSON Web Token);
