let loop = true,
  textAlert = "Valor Invalido, Digite Valores Validos",
  clientes = [],
  passagensIda = [],
  passagensVolta = [],
  voos = [],
  pacotes = [],
  total = 0;

class Cliente {
  #Nome;
  #Cpf;
  #DataNascimento;
  constructor(nome, cpf, dataNascimento) {
    this.setNome(nome);
    this.setCpf(cpf);
    this.setDataNascimento(dataNascimento);
  }
  setNome(nome) {
    this.#Nome = nome;
  }
  setCpf(cpf) {
    this.#Cpf = cpf;
  }
  setDataNascimento(dataNascimento) {
    this.#DataNascimento = dataNascimento;
  }
  getNome() {
    return this.#Nome;
  }
  getCpf() {
    return this.#Cpf;
  }
  getData() {
    return this.#DataNascimento;
  }
}
class PacoteViagem {
  #Titular;
  #PassagemIda;
  #PassagemVolta;
  #ValorTotal;
  constructor(titular, passagemIda, passagemVolta, valorTotal) {
    this.setTitular(titular);
    this.setPassagemIda(passagemIda);
    this.setPassagemVolta(passagemVolta);
    this.setValorTotal(valorTotal);
  }
  setTitular(titular) {
    this.#Titular = titular;
  }
  setPassagemIda(passagemIda) {
    this.#PassagemIda = passagemIda;
  }
  setPassagemVolta(passagemVolta) {
    this.#PassagemVolta = passagemVolta;
  }
  setValorTotal(valorTotal) {
    this.#ValorTotal = valorTotal;
  }
  getTitular() {
    return this.#Titular;
  }
  getPassagemIda() {
    return this.#PassagemIda;
  }
  getPassagemVolta() {
    return this.#PassagemVolta;
  }
  getValorTotal() {
    return this.#ValorTotal;
  }
}
class Voo {
  #Empresa;
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
    this.#Empresa = empresa;
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
  getEmpresa() {
    return this.#Empresa;
  }
  getNumero() {
    return this.#Numero;
  }
  getData() {
    return this.#Data;
  }
  getHorario() {
    return this.#Horario;
  }
  getPartida() {
    return this.#Partida;
  }
  getDestino() {
    return this.#Destino;
  }
}
class Passagem {
  #Assento;
  #PrimeiraClasse;
  #ValorTotal;
  #Passageiro;
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
  ExibirResumo() {
    alert(
      `Passagem em nome:${this.#Passageiro}\nAssento: ${
        this.#Assento
      } \nValor Total: ${this.#ValorTotal}`
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
    this.#Passageiro = passageiro;
  }
  setVoo(voo) {
    this.#Voo = voo;
  }
  getAssento() {
    return alert(this.#Assento);
  }
  getPrimeiraClasse() {
    return alert(this.#PrimeiraClasse);
  }
  getValorTotal() {
    return alert(this.#ValorTotal);
  }
  getPassageiro() {
    return alert(this.#Passageiro);
  }
  getVoo() {
    return alert(this.#Voo);
  }
}

while (loop) {
  let choice = Number(
    prompt(
      "1-Cadastrar Cliente \n2-Cadastrar Voo \n3-Cria Pacote \n4-Encerar Programa"
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
          registrandoPacoteDeViagem();
        } else {
          alert("Cadastre um VOO Primeiro!!");
        }
      } else {
        alert("Cadastre um Cliente Primeiro!!");
      }
      break;
    case 4:
      loop = false;
      break;
    default:
      alert("Opção Invalida !!");
      break;
  }
}
function registrarCliente() {
  let Nome = prompt("Qual o Nome do Cliente:"),
    Cpf = prompt("Cpf do Cliente:"),
    DataNascimento = prompt("Data de Nascimento do Cliente:");
  if (Nome == "" || Cpf == "" || Cpf.length < 11 || DataNascimento == "") {
    alert(textAlert);
  }
  if (Cpf.length > 11) {
    alert("Cpf Invalida, Passou de 11 Dígitos");
  }
  if (Nome.length > 50) {
    alert("Nome muito Grande, Digite um Nome com Menos de 50 Caracteres");
  }
  if (Nome.length <= 50 && Cpf.length == 11) {
    let novoCliente = new Cliente(Nome, Cpf, DataNascimento);
    clientes.push(novoCliente);
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
    console.log(voos);
    alert("Voo Cadastrado com Sucesso");
  }
}
function registrarPassagemIda() {
  for (let index = 0; index < voos.length; index++) {
    let escolherVoo = prompt(
      `Gostaria de ir Nesse Voo:\nEmpresa:${voos[
        index
      ].getEmpresa()}\nHorario:${voos[index].getHorario()}\nPartida:${voos[
        index
      ].getPartida()}\nDestino:${voos[index].getDestino()} 
      \n1-Sim 2-Não`
    );
    if (escolherVoo == "1") {
      index = voos.length;

      let voo = voos[index],
        assento = Number(prompt("Qual Assento:")),
        primeiraClasse = prompt("Primeira Classe: \n1-Sim \n2-Não"),
        valorTotal = Number(prompt("Valor da Passagem:")),
        passageiro = prompt("Nome do Passageiro:");

      clientes.forEach((item) => {
        if (item.getNome() == passageiro) {
          passageiro = item;
          if (primeiraClasse == 1) {
            primeiraClasse = true;
          } else {
            primeiraClasse = false;
          }
          if (
            assento == "" ||
            primeiraClasse == "" ||
            valorTotal == "" ||
            passageiro == ""
          ) {
            alert(textAlert);
          } else {
            let newPassaIda = new Passagem(
              assento,
              primeiraClasse,
              valorTotal,
              passageiro,
              voo
            );
            passagensIda.push(newPassaIda);
            alert("Passagem Criada com Sucesso");
            return newPassaIda;
          }
        }
      });
    }
  }
}
function registrarPassagemVolta() {
  for (let index = 0; index < voos.length; index++) {
    for (let index2 = 0; index2 < voos.length; index2++) {
      if (voos[index].getDestino() == voos[index2].getPartida()) {
        let escolherVoo = prompt(
          `Gostaria de ir Nesse Voo: \nEmpresa:${voos[
            index2
          ].getEmpresa()}\nHorario:${voos[index2].getHorario()}\nPartida:${voos[
            index2
          ].getPartida()}\nDestino:${voos[index2].getDestino()} 
        \n1-Sim 2-Não`
        );
        if (escolherVoo == "1") {
          index = voos.length;
          let voo = voos[index2],
            assento = Number(prompt("Qual Assento:")),
            primeiraClasse = prompt("Primeira Classe: \n1-Sim \n2-Não"),
            valorTotal = Number(prompt("Valor da Passagem:")),
            passageiro = prompt("Nome do Passageiro:");
          clientes.forEach((item) => {
            if (item.getNome() == passageiro) {
              if (primeiraClasse == 1) {
                primeiraClasse = true;
              } else {
                primeiraClasse = false;
              }
              if (
                assento == "" ||
                primeiraClasse == "" ||
                valorTotal == "" ||
                passageiro == ""
              ) {
                alert(textAlert);
              } else {
                let newPassaVolta = new Passagem(
                  assento,
                  primeiraClasse,
                  valorTotal,
                  passageiro,
                  voo
                );
                passagensVolta.push(newPassaVolta);
                alert("Passagem Criada com Sucesso");
                return newPassaVolta;
              }
            }
          });
        }
      }
    }
  }
}
function registrandoPacoteDeViagem() {
  var titular = prompt("Nome do Titular:");
  clientes.forEach((item) => {
    if (titular == item.getNome()) {
      titular = item;
      let loopPacoteDeViagem = true;
      while (loopPacoteDeViagem) {
        let choice = Number(
          prompt(
            "1-Cadastrar Passagem Ida\n2-Cadastrar Passagem Volta\n3-Finalizar Pacote"
          )
        );
        switch (choice) {
          case 1:
            var passagemI = registrarPassagemIda();
            break;
          case 2:
            if (passagensIda.length > 0) {
              var passagemV = registrarPassagemVolta();
            } else {
              alert("Cadastrar uma Passagem de Ida Primeiro");
            }
            break;
          case 3:
            if (passagensIda.length > 0) {
              if (passagensVolta.length > 0) {
                let newPacote = new PacoteViagem(
                  titular,
                  passagemI,
                  passagemV,
                  0
                );
                pacotes.push(newPacote);
                loopPacoteDeViagem = false;
              } else {
                alert("Cadastrar uma Passagem de Volta Primeiro");
              }
            } else {
              alert("Cadastrar uma Passagem de Ida Primeiro");
            }
            break;
          default:
            alert("Opção Invalida");
            break;
        }
      }
    }
  });
}
