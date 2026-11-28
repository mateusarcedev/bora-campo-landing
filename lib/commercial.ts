export const appUrl=(process.env.NEXT_PUBLIC_APP_URL||"https://bora-campo.vercel.app").replace(/\/$/,"");
export const links={marketplace:appUrl,demo:appUrl+"/demo",register:appUrl+"/cadastro",login:appUrl+"/entrar"};
export const plans=[
 {name:"Free",monthly:0,description:"Sua arena no mapa.",limits:"Perfil público",features:["Presença no marketplace","Modalidades, fotos e localização","Canais de contato","Divulgação de benefícios (prevista)"],cta:"Cadastrar arena"},
 {name:"Essencial",monthly:5990,description:"Organize a rotina da arena.",limits:"3 espaços · 30 alunos · 2 usuários",features:["Tudo do Free","Agenda, reservas e bloqueios","Controle manual de recebimentos","Serviços, turmas e mensalidades"],cta:"Conhecer o sistema"},
 {name:"Pro",monthly:9990,description:"Locação e ensino no mesmo negócio.",limits:"8 espaços · 150 alunos · 6 usuários",features:["Tudo do Essencial","Professores e frequência","Lista de espera e aulas experimentais (previstas)","Convênios manuais, relatórios e exportação (previstos)"],cta:"Conhecer o sistema"},
 {name:"Premium",monthly:14990,description:"Para operações em crescimento.",limits:"15 espaços · 500 alunos · 15 usuários",features:["Tudo do Pro","Portais de aluno e professor","Comissões e permissões avançadas","Relatórios avançados e suporte prioritário"],cta:"Ver funcionalidades"}
] as const;
export const brl=(cents:number)=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(cents/100);
export const annualTotal=(monthly:number)=>monthly*10;
export const comparison=[
 ["Perfil público",true,true,true,true],["Agenda e reservas",false,true,true,true],["Serviços, turmas e mensalidades",false,true,true,true],["Espaços","—","3","8","15"],["Alunos ativos","—","30","150","500"],["Usuários administrativos","—","2","6","15"],["Professores e frequência",false,false,true,true],["Convênios manuais (previstos)",false,false,true,true],["Relatórios e exportação (previstos)",false,false,true,true],["Portais e comissões (planejados)",false,false,false,true]
] as const;
export const faqs=[
 ["Preciso instalar algum programa?","Não. O Bora Campo funciona no navegador. A demonstração pode ser acessada sem cadastro."],
 ["O sistema já possui gestão de aulas?","O catálogo de serviços, professores, turmas recorrentes, alunos, frequência e mensalidades já têm implementação no painel. A operação está em validação; convênios, solicitações públicas e outros recursos ainda estão em evolução."],
 ["Como funcionam reservas e pagamentos?","A agenda permite registrar reservas e bloqueios manualmente. Os recebimentos são registrados pela arena, sem processamento de pagamentos pelo Bora Campo. Reservas online pelo jogador ainda não estão habilitadas."],
 ["Como funcionam TotalPass e Wellhub?","A demonstração simula configuração e conferência manual de benefícios. Ainda não há integração ativa com as plataformas dos parceiros."],
 ["Posso testar antes de contratar?","Sim. A demonstração gratuita usa dados fictícios e não exige cadastro. A oferta futura prevê 30 dias de teste no sistema; sua ativação e as condições de cobrança serão informadas antes da contratação."],
 ["Os planos já estão sendo cobrados?","Não. Os preços e limites apresentados são a proposta comercial de lançamento. A ativação de assinaturas, cobrança recorrente e limites ainda está em desenvolvimento. Não há cobrança automática pelo cadastro."]
] as const;
