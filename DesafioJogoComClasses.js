class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroiMago = new Heroi('Merlin', 300, 'mago');
  const heroiGuerreiro = new Heroi('Hercules', 35, 'guerreiro');
  const heroiMonge = new Heroi('Frei Deivid', 46, 'monge');
  const heroiNinja = new Heroi('Neji', 30, 'ninja');
  
  heroiMago.atacar();
  heroiGuerreiro.atacar();
  heroiMonge.atacar();
  heroiNinja.atacar();