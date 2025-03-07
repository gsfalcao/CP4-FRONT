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

//ATUALIZANDO  LISTA DE TAREFAS
const atualizarLista = (listaTarefas = tarefas) => {
    // atualiza a lista e alterando o HTML para criar os itens da lista
    const lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";
    
    //forEach para criar tarefas em uma nova lista
    listaTarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.textContent = tarefa.titulo;

    //adição  do botao de concluir ao lado de cada tarefa adicionada

        if (!tarefa.concluida) {
            const botaoConcluir = document.createElement("button");
            botaoConcluir.textContent = "Concluir";
            botaoConcluir.addEventListener("click", () => concluirTarefa(tarefa.id));
            li.appendChild(botaoConcluir);
        } else { 
            li.style.textDecoration = "line-through";
        }
        
        lista.appendChild(li);
    }); 
};
document.getElementById("btnAdicionar").addEventListener("click", () => {
    // adiciona o evento de click no botao para adicionar a tarefa
    const input = document.getElementById("idTarefa");
    // if para remover espaços extras e verificar se algo foi digitado 
    if (input.value.trim()) {
        adicionarTarefa(input.value.trim());
        input.value = "";
    }

});

//Clique 

//clique para filtrar as pendentes
document.getElementById("filtrar-pendentes").addEventListener("click", filtrarPendentes);


//clique para mostrar todas
document.getElementById("mostrar-todas").addEventListener("click", () => atualizarLista());


//clique para filtrar as tarefas concluidas
document.getElementById("filtrar-concluidas").addEventListener("click", filtrarConcluidas);

//manipulação do DOM para ativar a função de atualizar a lista e criar ela
document.addEventListener("DOMContentLoaded", () => atualizarLista(tarefas));


//gsfalcao