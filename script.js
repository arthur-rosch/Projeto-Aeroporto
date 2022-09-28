let loop = true,
  textAlert = "Valor Invalido, Digite Valores Validos",
  clientes = [],
  passagens = [],
  voos = [],
  pacote = [];

class Cliente {
  Nome;
  Cpf;
  DataNascimento;
  constructor(nome, cpf, dataNascimento) {
    this.Nome = nome;
    this.Cpf = cpf;
    this.DataNascimento = dataNascimento;
  }
}
class PacoteViagem {
  Titular;
  Passagem;
  ValorTotal;
  constructor(titular, passagem, valorTotal) {
    this.titular = titular;
    this.Passagem = passagem;
    this.ValorTotal = valorTotal;
  }
}
class Voo {
  Empresa;
  Numero;
  Data;
  Horario;
  Partida;
  Destino;
  constructor(empresa, numero, data, horario, partida, destino) {
    this.Empresa = empresa;
    this.Numero = numero;
    this.Data = data;
    this.Horario = horario;
    this.Partida = partida;
    this.Destino = destino;
  }
}
class Passagem {
  Assento;
  PrimeiraClasse;
  ValorTotal;
  Passageiro;
  Voo;
  constructor(assento, primeiraClasse, valorTotal, passageiro, voo) {
    this.Assento = assento;
    this.PrimeiraClasse = primeiraClasse;
    this.ValorTotal = valorTotal;
    this.Passageiro = passageiro;
    this.Voo = voo;
  }
  CalcularValor() {
    if (this.PrimeiraClasse == true) {
      return (this.ValorTotal *= 1.5);
    } else {
      return (this.ValorTotal = this.ValorTotal);
    }
  }
  ExibirResumo(valorTotal) {
    alert(
      `Passagem em nome:${this.Passageiro}\nAssento: ${this.Assento} \nValor Total: ${valorTotal}`
    );
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
  if (Nome == "" || Cpf == "" || DataNascimento == "") {
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
            console.log(novaPassagem);
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
          pacote.push(novoPacote);
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
