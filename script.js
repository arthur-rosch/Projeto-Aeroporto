let loop = true,
  textAlert = "Valor Invalido, Digite Valores Validos",
  clientes = [],
  passagens = [],
  voos = [],
  pacotes = [];

class Cliente {
  Nome;
  #Cpf;
  #DataNascimento;
  constructor(nome, cpf, dataNascimento) {
    this.setNome(nome);
    this.setCpf(cpf);
    this.setDataNascimento(dataNascimento);
  }
  setNome(nome) {
    if (nome.length > 50) {
      alert("Nome Muito Grande, Cadastre um Nome com Menos de 50 Caracteres");
    } else {
      this.Nome = nome;
    }
  }
  setCpf(cpf) {
    if (cpf.length > 11) {
      alert("Cpf invalidO");
    } else {
      this.#Cpf = cpf;
    }
  }
  setDataNascimento(dataNascimento) {
    this.#DataNascimento = dataNascimento;
  }
  exibirNome() {
    return alert(this.Nome);
  }
  exibirCpf() {
    return alert(this.#Cpf);
  }
  exibirData() {
    return alert(this.#DataNascimento);
  }
}
class PacoteViagem {
  #Titular;
  #Passagem;
  #ValorTotal;
  constructor(titular, passagem, valorTotal) {
    this.setTitular(titular);
    this.setPassagem(passagem);
    this.setValorTotal(valorTotal);
  }
  setTitular(titular) {
    this.#Titular = titular;
  }
  setPassagem(passagem) {
    this.#Passagem = passagem;
  }
  setValorTotal(valorTotal) {
    this.#ValorTotal = valorTotal;
  }
  exibirTitular() {
    return alert(this.#Titular);
  }
  exibirPassagem() {
    return alert(this.#Passagem);
  }
  exibirValorTotal() {
    return alert(this.#ValorTotal);
  }
}
class Voo {
  Empresa;
  #Numero;
  #Data;
  #Horario;
  #Partida;
  #Destino;
  constructor(empresa, numero, data, horario, partida, destino) {
    this.setEmpresa(empresa);
    this.setNumero(numero);
    this.setData(data);
    this.setHorario(horario);
    this.setPartida(partida);
    this.setDestino(destino);
  }
  setEmpresa(empresa) {
    this.Empresa = empresa;
  }
  setNumero(numero) {
    this.#Numero = numero;
  }
  setData(data) {
    this.#Data = data;
  }
  setHorario(horario) {
    this.#Horario = horario;
  }
  setPartida(partida) {
    this.#Partida = partida;
  }
  setDestino(destino) {
    this.#Destino = destino;
  }
  exibirEmpresa() {
    return alert(this.Empresa);
  }
  exibirNumero() {
    return alert(this.#Numero);
  }
  exibirData() {
    return alert(this.#Data);
  }
  exibirHorario() {
    return alert(this.#Horario);
  }
  exibirPartida() {
    return alert(this.#Partida);
  }
  exibirDestino() {
    return alert(this.#Destino);
  }
}
class Passagem {
  #Assento;
  #PrimeiraClasse;
  #ValorTotal;
  Passageiro;
  #Voo;
  constructor(assento, primeiraClasse, valorTotal, passageiro, voo) {
    this.setAssento(assento);
    this.setPrimeiraClasse(primeiraClasse);
    this.setValorTotal(valorTotal);
    this.setPassageiro(passageiro);
    this.setVoo(voo);
  }
  CalcularValor() {
    if (this.#PrimeiraClasse == true) {
      return (this.#ValorTotal *= 1.5);
    } else {
      return this.#ValorTotal;
    }
  }
  ExibirResumo(valorTotal) {
    alert(
      `Passagem em nome:${this.Passageiro}\nAssento: ${
        this.#Assento
      } \nValor Total: ${valorTotal}`
    );
  }
  setAssento(assento) {
    this.#Assento = assento;
  }
  setPrimeiraClasse(primeiraClasse) {
    if (primeiraClasse == true || primeiraClasse == false) {
      this.#PrimeiraClasse = primeiraClasse;
    } else {
      alert("Digite 1 ou 2 Para Escolher a primeiraClasse");
    }
  }
  setValorTotal(valorTotal) {
    if (valorTotal >= 0) {
      this.#ValorTotal = valorTotal;
    } else {
      alert("Digite um Valor maior que 0");
    }
  }
  setPassageiro(passageiro) {
    this.Passageiro = passageiro;
  }
  setVoo(voo) {
    this.#Voo = voo;
  }
  exibirAssento() {
    return alert(this.#Assento);
  }
  exibirPrimeiraClasse() {
    return alert(this.#PrimeiraClasse);
  }
  exibirValorTotal() {
    return alert(this.#ValorTotal);
  }
  exibirPassageiro() {
    return alert(this.Passageiro);
  }
  exibirVoo() {
    return alert(this.#Voo);
  }
}

while (loop) {
  let choice = Number(
    prompt(
      "1-Cadastrar Cliente \n2-Cadastrar Voo\n3-Criar Passagem \n4-Cria Pacote\n5-Encerar Programa"
    )
  );
  switch (choice) {
    case 1:
      registrarCliente();
      break;
    case 2:
      registrarVoo();
      break;
    case 3:
      if (clientes.length > 0) {
        if (voos.length > 0) {
          registrarPassagem();
        } else {
          alert("Cadastre um VOO Primeiro!!");
        }
      } else {
        alert("Cadastre um Cliente Primeiro!!");
      }
      break;
    case 4:
      if (clientes.length > 0) {
        if (voos.length > 0) {
          if (passagens.length > 0) {
            registrandoPacoteDeViagem();
          } else {
            alert("Crie uma Passagem Primeiro!!");
          }
        } else {
          alert("Cadastre um VOO Primeiro!!");
        }
      } else {
        alert("Cadastre um Cliente Primeiro!!");
      }
      break;
    case 5:
      loop = false;
      break;
    default:
      alert("Opção Invalida !!");
      break;
  }
}
function registrarCliente() {
  let Nome = prompt("Qual o Nome do Cliente:"),
    Cpf = Number(prompt("Cpf do Cliente:")),
    DataNascimento = prompt("Data de Nascimento do Cliente:");
  if (Nome == "" || Cpf == "" || Cpf.length < 11 || DataNascimento == "") {
    alert(textAlert);
  } else {
    let novoCliente = new Cliente(Nome, Cpf, DataNascimento);
    clientes.push(novoCliente);
    console.log(clientes);
    alert("Cliente Cadastrado com Sucesso");
  }
}
function registrarVoo() {
  let empresa = prompt("Nome da Empresa aérea:"),
    numero = prompt("Numero do Voo:"),
    data = prompt("Data do Voo:"),
    horario = prompt("Horario do Voo:"),
    partida = prompt("Partida do Voo:"),
    destino = prompt("Destino do Voo:");
  if (
    empresa == "" ||
    numero == "" ||
    data == "" ||
    horario == "" ||
    partida == "" ||
    destino == ""
  ) {
    alert(textAlert);
  } else {
    const novoVoo = new Voo(empresa, numero, data, horario, partida, destino);
    voos.push(novoVoo);
    alert("Voo Cadastrado com Sucesso");
  }
}
function registrarPassagem() {
  let assento = Number(prompt("Qual Assento:")),
    primeiraClasse = prompt("Primeira Classe: \n1-Sim \n2-Não"),
    valorTotal = Number(prompt("Valor da Passagem:")),
    passageiro = prompt("Nome do Passageiro:"),
    voo = prompt("Nome da Empresa do Voo:");

  if (primeiraClasse == 1) {
    primeiraClasse = true;
  } else {
    primeiraClasse = false;
  }
  if (
    assento == "" ||
    primeiraClasse == "" ||
    valorTotal == "" ||
    passageiro == "" ||
    voo == ""
  ) {
    alert(textAlert);
  } else {
    clientes.forEach((item) => {
      if (item.Nome == passageiro) {
        voos.forEach((item) => {
          if (item.Empresa == voo) {
            let novaPassagem = new Passagem(
              assento,
              primeiraClasse,
              valorTotal,
              passageiro,
              voo
            );
            passagens.push(novaPassagem);
            alert("Passagem Criada com Sucesso");
          } else {
            alert("Nome da Empresa invalida, Cadastre a Empresa Primeiro");
          }
        });
      } else {
        alert("Nome do Passageiro Invalido, Cadastre esse Passageiro Primeiro");
      }
    });
  }
}
function registrandoPacoteDeViagem() {
  let titular = prompt("Nome do Titular:");
  clientes.forEach((item) => {
    if (titular == item.Nome) {
      passagens.forEach((array) => {
        if (titular == array.Passageiro) {
          let passagem = array;
          valorTotal = array.CalcularValor();
          const novoPacote = new PacoteViagem(titular, passagem, valorTotal);
          pacotes.push(novoPacote);
          array.ExibirResumo(valorTotal);
        } else {
          alert("Titular não tem nenhuma passagem em seu Nome:");
        }
      });
    } else {
      alert("Nome do Titular Invalido");
    }
  });
}
