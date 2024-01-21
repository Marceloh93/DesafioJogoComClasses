class hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attackOut() {
      let attack;
      switch (this.type) {
        case 'mago':
          attack = 'usou magia';
          break;
        case 'guerreiro':
          attack = 'usou espada';
          break;
        case 'monge':
          attack = 'usou artes marciais';
          break;
        case 'ninja':
          attack = 'usou shuriken';
          break;
        default:
          attack = 'usou um ataque genérico';
      }
  
      console.log(`O ${this.type} atacou usando ${attack}`);
    }
  }
  
  const heroMago = new hero('Merlin', 300, 'mago');
  const heroGuerreiro = new hero('Hercules', 35, 'guerreiro');
  const heroMonge = new hero('Frei Deivid', 46, 'monge');
  const heroNinja = new hero('Sasuke', 30, 'ninja');
  
  heroMago.attackOut();
  heroGuerreiro.attackOut();
  heroMonge.attackOut();
  heroNinja.attackOut();
