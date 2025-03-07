// 1- Criação do Array vazio para a atualizar tarefas com 'id, titulo e concluida' utilizando Spread

//Array
let tarefas = []


//  Criação das tarefas
const tarefa = {
    id: 1,
    titulo:"titulo",
    concluida:false
};
const adicionarTarefa = (titulo) => {

    // adiciona a tarefa aumentando o id com base nas tarefas adicionadas e utiliza o spread para juntar e gerar o alerta, chamando a função atualizarLista para inseri-la na lista

    const novaTarefa = {
       id: tarefas.length + 1,
       titulo,
       concluida: false
    };

    tarefas = [...tarefas, novaTarefa];
    atualizarLista(tarefas);
    // reduce para calculo de tarefas concluidas que serao exibidas no alert
    const totalConcluidas = tarefas.reduce((total, tarefa) => {
        return tarefa.concluida ? total + 1 : total;
    }, 0);
    
    alert(`Tarefa adicionada com sucesso! Total de tarefas concluídas: ${totalConcluidas}`);
};