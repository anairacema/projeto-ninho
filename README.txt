NINHO — páginas HTML individuais

Páginas principais:
- index.html: Visão geral
- rotina.html: Rotina
- saude.html: Saúde
- nina.html: Nina
- avaliacao.html: Avaliação pediátrica
- vacinas.html: Vacinas
- farmacinha.html: Farmacinha
- calendario.html: Calendário

Fluxo de cadastro:
- cadastro-usuario.html: cadastro do responsável
- cadastro-crianca.html: cadastro da criança

Arquivos compartilhados:
- styles.css: estilos de todas as páginas
- app.js: interações compartilhadas
- assets/helena-perfil.jpg: imagem de referência

Abra index.html com Live Server no VS Code. Para testar o cadastro, abra cadastro-usuario.html.
Os cadastros usam sessionStorage apenas para demonstração. Ainda não existe autenticação,
backend ou banco de dados conectado. Não use dados reais até implementar a segurança.


MENU DA CONTA:
O círculo com a inicial no topo abre os dados do responsável cadastrados:
nome, e-mail, CPF, nascimento e telefone. O menu também oferece acesso à tela
de cadastro e o botão Sair da conta. Sair limpa os dados de cadastro desta sessão
e direciona para login.html. Login e cadastro continuam demonstrativos, sem backend.


LOGO:
A marca foi adicionada em assets/logo.png e aplicada na barra lateral,
no cabeçalho mobile e nas telas de cadastro/login. O tamanho é controlado
pela classe .logo-img no styles.css.
