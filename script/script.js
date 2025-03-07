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


const concluirTarefa = (id) => {
    // Localiza a tarefa e altera o False das tarefas para True
    tarefas = tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );

    //Find para pegar titulo e id da tarefa e analisá-la
    const tarefaConcluida = tarefas.find(tarefa => tarefa.id === id);
    
    if (tarefaConcluida) {
        const { titulo, concluida } = tarefaConcluida;
        alert(`Tarefa concluída - Título: ${titulo}, Status: ${concluida}`);
    }

    //  Map para criar uma nova lista com títulos em maiúsculas
    const titulosMaiusculos = tarefas.map(tarefa => tarefa.titulo.toUpperCase());
    
    // Exibe lista de títulos em maiúsculas no console
    console.log("Títulos das Tarefas (Maiúsculas):", titulosMaiusculos);

    atualizarLista(tarefas);
};

//FILTROS

const filtrarPendentes = () => {
    //filtra as tarefas que nao foram alteradas para True ou seja tarefas que ainda nao foram concluidas
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
    atualizarLista(tarefasPendentes);
}

const filtrarConcluidas = () => {
    //filtra as tarefas concluidas para modifica-las na lista e ficar com mais facil vizualização
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
    atualizarLista(tarefasConcluidas);
};