EDUCA+ — versão ampliada

Como executar:
1. Extraia o ZIP.
2. Abra a pasta no VS Code.
3. No terminal, execute: npx serve .
4. Abra o endereço local informado.

Recursos adicionados: tema claro/escuro, cadastro/login demonstrativos por navegador,
portal do professor com publicação local de atividades, ranking ilustrativo de 10
estudantes, central de quiz (usa o banco de questões existente), análise orientativa
de redação e assistente de dúvidas com respostas demonstrativas.

LIMITAÇÕES IMPORTANTES:
Esta é uma demonstração front-end. Cadastro e login não são seguros para produção,
não há autenticação real, envio de e-mail, banco de dados remoto ou sincronização.
A correção de redação usa critérios heurísticos locais e NÃO é uma IA nem nota oficial.
O assistente responde por regras simples e NÃO é uma IA generativa conectada.
Para produção, integrar backend com autenticação segura, banco de dados, serviço de
e-mail e API de IA protegida no servidor (nunca expor chave de API no navegador).
Os 10 alunos do ranking são fictícios.
